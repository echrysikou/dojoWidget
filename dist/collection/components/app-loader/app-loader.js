import { h } from "@stencil/core";
export class AppLoader {
    constructor() {
        this.height = 60;
        this.color = 'var(--primary)';
    }
    render() {
        return (h("div", { key: 'f70c9a25ed99c648327e56d867713428dd46b74b', class: "loader-root" }, h("div", { key: 'eaba45ad983825410ead89511084039e8a1f1caa', class: "circular-progress", style: {
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
