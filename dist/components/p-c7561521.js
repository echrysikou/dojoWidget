import { p as proxyCustomElement, H, h, c as Host } from './p-7da10219.js';

const qrCodeWidgetCss = "";
const QrCodeWidgetStyle0 = qrCodeWidgetCss;

const QrCodeWidget = /*@__PURE__*/ proxyCustomElement(class QrCodeWidget extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.wId = undefined;
    }
    render() {
        return (h(Host, { key: '28af9931701527f1a00165efe226241586c8c4af' }, h("div", { key: '496fbc981ead997aa3e753b9fda4946daf1ecc17' }, "QR code")));
    }
    static get style() { return QrCodeWidgetStyle0; }
}, [1, "qr-code-widget", {
        "wId": [1, "w-id"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qr-code-widget"];
    components.forEach(tagName => { switch (tagName) {
        case "qr-code-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, QrCodeWidget);
            }
            break;
    } });
}
defineCustomElement();

export { QrCodeWidget as Q, defineCustomElement as d };

//# sourceMappingURL=p-c7561521.js.map