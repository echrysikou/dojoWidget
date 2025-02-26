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
        return (h(Host, { key: '57bb081c4968f99d01dfa89780b3f4961af213a3' }, h("div", { key: 'aaf7eb5f2dbe0077fdd15fe5fe5dc4233b6df260' }, "QR code")));
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

//# sourceMappingURL=p-173460cf.js.map