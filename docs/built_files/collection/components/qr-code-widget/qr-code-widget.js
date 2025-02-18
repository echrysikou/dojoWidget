import { h, Host } from "@stencil/core";
export class QrCodeWidget {
    constructor() {
        this.wId = undefined;
    }
    render() {
        return (h(Host, { key: '28af9931701527f1a00165efe226241586c8c4af' }, h("div", { key: '496fbc981ead997aa3e753b9fda4946daf1ecc17' }, "QR code")));
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
