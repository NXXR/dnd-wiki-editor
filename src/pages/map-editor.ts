import { css, html, LitElement, type CSSResultGroup, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";

import "../components/map-viewport";

@customElement('map-editor')
export class MapEditor extends LitElement {
  
  @state()
  _width: number = window.innerWidth;

  @state()
  _height: number = window.innerHeight;


  static styles: CSSResultGroup = css`
    :host {
      display: grid;
      justify-items: stretch;
      align-items: stretch;
      grid-template-columns: 10% auto 10%;
      min-height: 100vh;
      min-width: 100vw;
    }

    map-viewport {
      grid-column: 1 / span 3;
    }
  `;

  private _handleResize = (_ev: Event) => {
    this._width = window.innerWidth;
    this._height = window.innerHeight;
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback(): void {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  protected render(): TemplateResult {
    return html`
      <map-viewport
        width="${this._width}"
        height="${this._height}"
        initialPOIX="100"
        initialPOIY="75"
      >
      </map-viewport>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-editor': MapEditor
  }
}