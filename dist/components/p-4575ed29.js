import { p as proxyCustomElement, H, h, c as Host, E as Env } from './p-2189282e.js';
import { s as state } from './p-703964f3.js';
import { d as defineCustomElement$7 } from './p-132e8c46.js';
import { d as defineCustomElement$6 } from './p-bbe1b8d6.js';
import { d as defineCustomElement$5 } from './p-00db486c.js';
import { d as defineCustomElement$4 } from './p-9c5a097d.js';
import { d as defineCustomElement$3 } from './p-44bbedf8.js';
import { d as defineCustomElement$2 } from './p-80fb100a.js';
import { d as defineCustomElement$1 } from './p-374f0895.js';

const fullWidgetCss = ".widget-container{padding:20px 24px;min-width:min-content;max-width:650px;filter:drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.05))}.taktak-logo{height:60px;width:118px;margin-top:-5px;margin-left:-8px}";
const FullWidgetStyle0 = fullWidgetCss;

const FullWidget = /*@__PURE__*/ proxyCustomElement(class FullWidget extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        const logo = Env.CDN_PATH + '/assets/TaktakLogo.png';
        const { font, label, themeColor } = state.widgetDetails;
        return (h(Host, { key: 'c613da87739cb15d8b11c0bbed86911007caec1e' }, h("div", { key: 'fad1cc489c839f0c0dbe8a33fae12edff2db9ee3', class: "widget-container", style: {
                backgroundColor: themeColor,
                color: state.widgetDetails.fontColor,
            } }, h("img", { key: '0134d789461a82b0a903ad4c5a05038bb52b43b1', src: logo, class: "taktak-logo", alt: "Taktak logo" }), h("app-typography", { key: 'fba63a72ea38df6fed63279eb701569aa41ad19c', variant: "h3", fontFamily: font, styleProps: { marginTop: '10px', height: '20px' } }, label), h("select-amount", { key: '3b6b19a3c6b931d87c9085ddf50d7e0e93b16d89' }), h("collaborators-list", { key: '8ff247dd26250034a6037a557b0ff0eec53448f7' }), h("stripe-payment", { key: '9f7c52cbeecaae36e1d09c6dff923151dd842eed' }))));
    }
    static get style() { return FullWidgetStyle0; }
}, [0, "full-widget"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["full-widget", "amount-buttons", "amount-input", "app-loader", "app-typography", "collaborators-list", "select-amount", "stripe-payment"];
    components.forEach(tagName => { switch (tagName) {
        case "full-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FullWidget);
            }
            break;
        case "amount-buttons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "amount-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "app-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "app-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "collaborators-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "select-amount":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "stripe-payment":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { FullWidget as F, defineCustomElement as d };

//# sourceMappingURL=p-4575ed29.js.map