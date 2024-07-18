import { LitElement, html } from 'lit';

export class SimpleIcon extends LitElement {
  render() {
    return html`
    👋
    `;
  }
}

customElements.define('simple-icon', SimpleIcon);
