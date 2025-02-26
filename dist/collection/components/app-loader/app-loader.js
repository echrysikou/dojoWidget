import { h } from "@stencil/core";
export class AppLoader {
    constructor() {
        this.height = 60;
        this.color = 'var(--primary)';
    }
    render() {
        return (h("div", { key: '1cafa770da1b6701f934a8b4233271bfa828b0cb', class: "root" }, h("div", { key: '9b1a60ff7c0c002397c6e6738089d2b3d1dfead8', class: "circular-progress", style: {
                width: `${this.height}px`,
                height: `${this.height}px`,
                borderColor: `${this.color} ${this.color} ${this.color} transparent`,
            } })));
    }
    static get is() { return "app-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["app-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["app-loader.css"]
        };
    }
    static get properties() {
        return {
            "height": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "height",
                "reflect": false,
                "defaultValue": "60"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "color",
                "reflect": false,
                "defaultValue": "'var(--primary)'"
            }
        };
    }
}
//# sourceMappingURL=app-loader.js.map
