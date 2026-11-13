import { html, LitElement, type HTMLTemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('character-view')
export class CharacterView extends LitElement {
  protected render(): HTMLTemplateResult {
    return html`
    <h1>Hello Zyl</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'character-view': CharacterView
  }
}
