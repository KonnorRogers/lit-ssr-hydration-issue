import { LitElement, html, css } from 'lit';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';
export class SimpleGreeter extends LitElement {
  static properties = {
    icon: { state: true, attribute: false },
  };

  constructor() {
    super();
    // this.icon = `<simple-icon></simple-icon>`;
  }

  render() {
    return html`
      Hello
    `;
  }
}

customElements.define('simple-greeter', SimpleGreeter);
