import { html, LitElement, type HTMLTemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import icon from "../assets/Icons/Viewer.svg?url";
import "../components/nav-bar"
import baseURL from "../utils/baseURL";


@customElement('character-view')
export class CharacterView extends LitElement {
  @property({type: String})
  name: string

  protected render(): HTMLTemplateResult {
    return html`
    <nav-bar
        iconURL=${icon}
        title=${this.name}
    >
    </nav-bar>
    `;
  };
}