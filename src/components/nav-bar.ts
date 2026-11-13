import { css, html, LitElement, unsafeCSS, type CSSResultGroup, type HTMLTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import basicCSS from "../index.css?inline";

@customElement('nav-bar')
export class NavBar extends LitElement {
  @property({type: Boolean})
  hidden: boolean = false;
  
  @property({type: String})
  title: string;

  protected render(): HTMLTemplateResult {
    return html`
    <h1>${this.title}</h1>
    `
  }

  static styles?: CSSResultGroup = [
    unsafeCSS(basicCSS),
    css`
      :host {
        display: flex;
        flex-direction: row;
        border-bottom: solid 2px var(--color-divider);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'nav-bar': NavBar
  }
}
