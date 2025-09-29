import { html, LitElement, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement('map-viewport')
export class MapViewport extends LitElement {

  @property({type: Number})
  width = 0;

  @property({type: Number})
  height = 0;

  protected render(): TemplateResult {
    return html`
    <canvas id="canvas" height="${this.height}" width="${this.width}" style="background: lime;"></canvas>
    `
  }

  protected updated(_changedProperties: PropertyValues): void {
    console.log("Viewport updated:", _changedProperties);
    
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-viewport': MapViewport
  }
}
