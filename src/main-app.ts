import { Router } from "@lit-labs/router";
import { css, html, LitElement, unsafeCSS, type CSSResultGroup, type HTMLTemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import baseURL from "./utils/baseURL";
import basicCSS from "./index.css?inline"

// import Routes
import "./views/main-menu";
import "./views/character-list";
import "./views/character-view";
import "./views/wip-view";


@customElement('main-app')
export class MainApp extends LitElement {
  private _routes = new Router(this, [
    {
      name: 'menu',
      path: baseURL('/'),
      render: () => html`<main-menu></main-menu>`
    },
    {
      name: 'character',
      path: baseURL('/character'),
      render: () => html`<character-list></character-list>`
    },
    {
      name: 'character-detail',
      path: baseURL('/character/:name'),
      render: ({ name }) => html`<character-view name=${decodeURIComponent(name)}></character-view>`
    },
    {
      name: 'editor',
      path: baseURL('/editor'),
      render: () => html`<wip-view></wip-view>`
    },
  ]);

  protected render(): HTMLTemplateResult {
    return html`
    ${this._routes.outlet()}
    `;
  }

  static styles?: CSSResultGroup = [
    unsafeCSS(basicCSS),
    css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp
  }
}
