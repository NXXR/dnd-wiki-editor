import { css, html, LitElement, unsafeCSS, type CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import basicCSS from "../index.css?inline";
import "../components/nav-bar";
import baseURL from "../utils/baseURL";

@customElement('main-menu')
export class MainMenu extends LitElement {
  protected render(): unknown {
    return html`
      <nav-bar
        title="Main Menu"
      ></nav-bar>
      <h2><a href=${baseURL('/character')}>Character</a></h2>
      <h2>Editor</h2>
    `;
  }

  static styles?: CSSResultGroup = [
    unsafeCSS(basicCSS),
    css`
      :host {
        text-align: center;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'main-menu': MainMenu
  }
}
