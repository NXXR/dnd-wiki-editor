import { Router } from "@lit-labs/router";
import { html, LitElement, type HTMLTemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import baseURL from "./utils/baseURL";

// import Routes
import "./views/main-menu";
import "./views/character-view";


@customElement('main-app')
export class MainApp extends LitElement {
  private _routes = new Router(this, [
    {name: 'menu', path: baseURL('/'), render: () => html`<main-menu></main-menu>`},
    {name: 'character', path: baseURL('/character'), render: () => html`<character-view></character-view>`},
  ]);

  protected render(): HTMLTemplateResult {
    return html`
    ${this._routes.outlet()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp
  }
}
