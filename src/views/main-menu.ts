import { css, html, LitElement, unsafeCSS, type CSSResultGroup, type HTMLTemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import basicCSS from "../index.css?inline";
import "../components/nav-bar";
import baseURL from "../utils/baseURL";
import icon from "../assets/Icons/Viewer.svg?url"

@customElement('main-menu')
export class MainMenu extends LitElement {
  protected render(): HTMLTemplateResult {
    return html`
    <nav-bar
      iconURL=${icon}
      title="Main Menu"
    ></nav-bar>
    <div class="content">
      <a href=${baseURL('/character')}><h2>Character</h2></a>
      <a href=${baseURL('/editor')}><h2>Editor</h2></a>
    </div>
    `;
  }

  static styles?: CSSResultGroup = [
    unsafeCSS(basicCSS),
    css`
    :host {
      display: flex;
      height: 100%;
      flex-direction: column;
    }
    
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 1em;
      padding: 1em 0;
    }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'main-menu': MainMenu
  }
}
