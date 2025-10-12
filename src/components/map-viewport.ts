import { css, html, LitElement, type CSSResultGroup, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";


@customElement('map-viewport')
export class MapViewport extends LitElement {

  @property({type: Number})
  width = 0;

  @property({type: Number})
  height = 0;

  @property({type: Number})
  initialViewportX = 0;

  @property({type: Number})
  initialViewportY = 0;

  @property({type: Number})
  initialViewportScale = 1;

  @state()
  _viewportTransform: ViewportTransformation = {
    x: this.initialViewportX,
    y: this.initialViewportY,
    scale: this.initialViewportScale
  }

  @state()
  _prePanX: number = 0;
  
  @state()
  _prePanY: number = 0;

  @query('#canvas', true)
  $canvas!: HTMLCanvasElement;

  static styles: CSSResultGroup = css`
    :host {
      line-height: 0;
    }
  `;

  protected constructor() {
    super();
    this.addEventListener('mousedown', this.onMouseDown);
    this.addEventListener('mouseup', this.onMouseUp);
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this._viewportTransform = {
      x: (this.width / 2) - this.initialViewportX,
      y: (this.height / 2) - this.initialViewportY,
      scale: this.initialViewportScale
    };
  }

  protected render(): TemplateResult {
    return html`
      <canvas id="canvas" width="${this.width}" height="${this.height}" style="background-color: lime;"></canvas>
    `
  }

  protected updated(_changedProperties: PropertyValues<this>): void {
    console.debug("Viewport updated", [..._changedProperties.keys()].map((key) => {
      return [
        key,
        _changedProperties[key as keyof PropertyValues],
        this[key as keyof MapViewport],
      ]
    }));

    this.draw();
  }

  protected draw(): void {
    const ctx = this.$canvas.getContext('2d');
    // Skip drawing if context is not available yet
    if (!ctx) { return; }
    
    // Apply transformation
    ctx.resetTransform();
    ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    ctx.setTransform(
      this._viewportTransform.scale,
      0,
      0,
      this._viewportTransform.scale,
      this._viewportTransform.x,
      this._viewportTransform.y
    )

    // draw test rects
    this.drawRect(0, 0, 50, 50, 'red');
    this.drawRect(100, 100, 100, 50, 'blue');
  }

  protected drawRect(x: number, y:number, w:number, h: number, color: string): void {
    const ctx = this.$canvas.getContext('2d')!;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  protected onMouseDown(ev: MouseEvent): void {
    // Store starting position to calculate drag vector (start point)
    this._prePanX = ev.clientX;
    this._prePanY = ev.clientY;

    // Add listener for movement (end point)
    this.addEventListener('mousemove', this.onMouseMove);
  }

  protected onMouseUp(_ev: MouseEvent): void {
    this.removeEventListener('mousemove', this.onMouseMove);
  }

  protected onMouseMove(ev: MouseEvent): void {
    const posX = ev.clientX;
    const posY = ev.clientY;

    // Add pan vector to viewport transform
    this._viewportTransform.x += posX - this._prePanX;
    this._viewportTransform.y += posY - this._prePanY;

    // Update pan vector start for next pan to end of this pan vector
    this._prePanX = posX;
    this._prePanY = posY;
    }
}

export interface ViewportTransformation {
  /** X-Axis translation */
  x: number,
  /** Y-Axis translation */
  y: number,
  /**
   * Scale/Zoom-Level 
   * @defaultValue
   * Default Scale/Zoom-Level is 1
   */
  scale: number,
}

declare global {
  interface HTMLElementTagNameMap {
    'map-viewport': MapViewport
  }
}
