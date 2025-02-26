import { h, Host } from "@stencil/core";
export class QrCodeWidget {
    constructor() {
        this.wId = undefined;
    }
    render() {
        return (h(Host, { key: '8eec98840e3d4f6593533bcee8c4fed8a48c4c8d' }, h("div", { key: 'd318457ec198cebaa9daab3a2c53a354ac82b881' }, "QR code")));
    }
    static get is() { return "qr-code-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./qr-code-widget.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["qr-code-widget.css"]
        };
    }
    static get properties() {
        return {
            "wId": {
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
                "attribute": "w-id",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=qr-code-widget.js.map
