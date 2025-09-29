import { html, LitElement, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import "../components/map-viewport";

@customElement('map-editor')
export class MapEditor extends LitElement {
  
  @property({type: Number})
  vpHeight = 100;

  @property({type: Number})
  vpWidth = 100;

  protected render(): TemplateResult {
    return html`
      <map-viewport
        width=${this.vpWidth}
        height=${this.vpHeight}
      >
      </map-viewport>
      <br>
      <label for="height">Height</label>
      <input type="text" id="height" value=${this.vpHeight} @change=${(ev: InputEvent) => {this.vpHeight = parseInt(ev.data ?? '100'); console.log('height changed', ev, this.vpHeight);}}>
      <br>
      <label for="width">Width</label>
      <input type="text" id="width" value=${this.vpWidth} @change=${(ev: InputEvent) => {this.vpWidth = parseInt(ev.data ?? '100'); console.log('width changed', ev, this.vpWidth);}}>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-editor': MapEditor
  }
}