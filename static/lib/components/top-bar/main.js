export class Component {
  constructor(options) {
    this.options = options;
    this.document = options.shadowDom;
    this.user = this.document.getElementById("user");
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    switch (attribute) {
      case "user-color":
        this.user.setAttribute("color", newValue);
        break;
    }
  }
}
