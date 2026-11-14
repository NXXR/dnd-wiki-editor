import { css, html, LitElement, unsafeCSS, type CSSResultGroup, type HTMLTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import icon from "../assets/Icons/Editor.svg?url";
import basicCSS from "../index.css?inline";
import meme from "../assets/Img/orc1.png?url";

@customElement('wip-view')
export class WIPView extends LitElement {
  @property({type: String})
  title: string = "Work in Progress 🛠️";

  protected render(): HTMLTemplateResult {
    return html`
    <nav-bar
        iconURL=${icon}
        title=${this.title}
    ></nav-bar>
    <div class="content">
      <h1>This is still under construction (@__@)''</h1>
      <div class=".meme">
        <img src=${meme} />
        <h2>Work, work.</h2>
      </div>
    </div>
    `;
  };

  static styles?: CSSResultGroup = [
    unsafeCSS(basicCSS),
    css`
    .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'wip-view': WIPView
  }
}
