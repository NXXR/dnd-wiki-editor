import { html, LitElement, type TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('landing-page')
export class LandingPage extends LitElement {

  protected render(): TemplateResult {
    return html`
    <h1>Hello World!</h1>
    `;
  }
}


// Add element to Tag name Map for intellisense & type checks etc.
declare global {
  interface HTMLElementTagNameMap {
    'landing-page': LandingPage;
  }
}