import { h, Host } from "@stencil/core";
export class QrCodeWidget {
    constructor() {
        this.wId = undefined;
    }
    render() {
        return (h(Host, { key: '57bb081c4968f99d01dfa89780b3f4961af213a3' }, h("div", { key: 'aaf7eb5f2dbe0077fdd15fe5fe5dc4233b6df260' }, "QR code")));
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
