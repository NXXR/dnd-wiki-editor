import { css, html, LitElement, type CSSResultGroup, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";

import "../components/map-viewport";

@customElement('map-editor')
export class MapEditor extends LitElement {
  
  @state()
  vpHeight = 100;

  @state()
  vpWidth = 100;

  static styles: CSSResultGroup = css`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
      background-color: red;
    }
  `;

  private _handleResize = (ev: Event) => {
    console.log("Resize Event:", ev);
    this.vpHeight = this.clientHeight;
    this.vpWidth = this.clientWidth;
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback(): void {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.vpHeight = this.clientHeight;
    this.vpWidth = this.clientWidth;
  }

  protected render(): TemplateResult {
    return html`
      <map-viewport
        width=${this.vpWidth}
        height=${this.vpHeight}
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