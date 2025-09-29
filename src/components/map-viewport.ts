import { html, LitElement, type TemplateResult } from "lit";
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
}

declare global {
  interface HTMLElementTagNameMap {
    'map-viewport': MapViewport
  }
}
