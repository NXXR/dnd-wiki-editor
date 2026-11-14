import { css, html, LitElement, unsafeCSS, type CSSResultGroup, type HTMLTemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import icon from "../assets/Icons/Viewer.svg?url";
import basicCSS from "../index.css?inline";
import baseURL from "../utils/baseURL";
import "../components/nav-bar"

@customElement('character-list')
export class CharacterList extends LitElement {
  protected render(): HTMLTemplateResult {
    return html`
    <nav-bar
        iconURL=${icon}
        title="Characters"
    ></nav-bar>
    <div class="list">
      <a href=${baseURL(`/character/${encodeURIComponent("Zyl' hana")}`)}><h2>Zyl</h2></a>
    </div>
    `;
  }

  static styles?: CSSResultGroup = [
    unsafeCSS(basicCSS),
    css`
    .list {
      padding: 1em;
      text-align: center;
    }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'character-list': CharacterList
  }
}
