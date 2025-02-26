import { p as proxyCustomElement, H, h, c as Host } from './p-2189282e.js';

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
        return (h(Host, { key: '8eec98840e3d4f6593533bcee8c4fed8a48c4c8d' }, h("div", { key: 'd318457ec198cebaa9daab3a2c53a354ac82b881' }, "QR code")));
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

//# sourceMappingURL=p-9a1c149e.js.map