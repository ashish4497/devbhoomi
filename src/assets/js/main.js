customElements.define(
  "header",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("header-home");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
