import { css, html, LitElement, nothing, unsafeCSS, type CSSResultGroup, type HTMLTemplateResult, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import basicCSS from "../index.css?inline";
import baseURL from "../utils/baseURL";


@customElement('nav-bar')
export class NavBar extends LitElement {
  @property({type: Boolean})
  hidden: boolean = false;
  
  @property({type: String})
  title: string = "D&D Organizer";

  @property({type: String})
  iconURL: string = undefined;

  @state()
  _dropdownOpen: boolean = false;

  private closeMenuOnOutsideClick = (e: MouseEvent) => {
    const path = e.composedPath();
    if (
      !path.includes(this.renderRoot.querySelector('.dropdown')) &&
      !path.includes(this.renderRoot.querySelector('button'))
    ) {
      this._dropdownOpen = false;
    }
  };

  protected updated(_changedProperties: PropertyValues): void {
    if (this._dropdownOpen) {
      document.addEventListener('click', this.closeMenuOnOutsideClick);
    } else {
      document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }
  };

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this.closeMenuOnOutsideClick);
  }

  protected render(): HTMLTemplateResult {
    return html`
    ${when(
      this.iconURL,
      () => html`<a href=${baseURL('/')} aria-label="Back"><img src=${this.iconURL} aria-hidden="true"/></a>`,
    )}
    <h1>${this.title}</h1>
    <button
      aria-label="Toggle Menu"
      @click=${() => (this._dropdownOpen = !this._dropdownOpen)}
    >
      <span class="materialIcon" aria-hidden="true">menu</span>
    </button>
    ${this._dropdownOpen ?
      html`
      <div ?open=${this._dropdownOpen} class="dropdown">
        <slot></slot>
      </div>
      ` : nothing
    }
    `
  };

  static styles?: CSSResultGroup = [
    unsafeCSS(basicCSS),
    css`
      :host {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: solid 2px var(--color-divider);
        height: 50px;
        gap: 1em;
        padding: .2em .5em;
      }

      h1 {
        flex-grow: 1;
        text-align: left;
      }

      a:has(img) {
        display: inline-block;
        line-height: 0;
        border-radius: 9999px;
      }

      a > img {
        display: block;
        height: 2.5em
      }

      button {
        all: unset;
        cursor: pointer;
        border-radius: 9999px;
        height: 2.5em;
        width: 2.5em;
        display: flex;
        justify-content: center;
      }

      .dropdown {
        position: absolute;
        display: flex;
        visibility: visible;
        top: 48px;
        right: 0;
        min-height: 100px;
        min-width: 200px;
        background-color: var(--color-surface);
        border: 2px solid var(--color-divider);
        border-bottom-left-radius: .5em;
        border-bottom-right-radius: .5em;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'nav-bar': NavBar
  }
}
