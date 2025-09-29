import { Router } from '@vaadin/router';
import { LitElement, html, type PropertyValues, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

// import pages for routing
import './pages/landing-page'
import './pages/map-editor'

/**
 * The main app, setting up the routing.
 */
@customElement('main-app')
export class MainApp extends LitElement {
  
  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);

    const router = new Router(this.shadowRoot?.querySelector('#outlet'));
    
    /* Routes go in here */
    router.setRoutes([
      /* Root */
      {path: '/', component: 'landing-page'},
      /* Map Editor */
      {path: '/editor', component: 'map-editor'},
      /* Fallback redirect anything else back to root */
      {path: '(.*)', redirect: '/'}
    ])
  }

  protected render(): TemplateResult {
    return html`
      <main>
        <div id='outlet'></div>
      </main>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp
  }
}
