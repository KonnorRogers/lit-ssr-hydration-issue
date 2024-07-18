import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import "./simple-icon.js"

export class SimpleGreeter extends LitElement {
  static properties = {
    icon: { state: true, attribute: false },
  };

  constructor() {
    super();
    this.icon = `<simple-icon></simple-icon>`;
  }

  render() {
    return html`
      Hello ${unsafeHTML(this.icon)}
    `;
  }
}

customElements.define('simple-greeter', SimpleGreeter);
