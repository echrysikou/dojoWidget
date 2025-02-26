import { p as proxyCustomElement, H, h, c as Host, E as Env } from './p-2189282e.js';
import { s as state } from './p-14a59560.js';
import { d as defineCustomElement$5 } from './p-86d29b7a.js';
import { d as defineCustomElement$4 } from './p-d57f8c7a.js';
import { d as defineCustomElement$3 } from './p-95c91de4.js';
import { d as defineCustomElement$2 } from './p-0ad718ed.js';
import { d as defineCustomElement$1 } from './p-844aa459.js';

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
        return (h(Host, { key: '3d504166c10922a88fdf860ca47cee521ee1a936' }, h("div", { key: '337fccc77b9c45d392a0a2244b1feaae15e4488f', class: "widget-container", style: {
                backgroundColor: themeColor,
                color: state.widgetDetails.fontColor,
            } }, h("img", { key: 'a848775d4cfad86a2f39d12159d4f268db0a61e7', src: logo, class: "taktak-logo", alt: "Taktak logo" }), h("app-typography", { key: '62b2c66cbaf96a9af590e6a5ecf81e8a2ac85aa1', variant: "h3", fontFamily: font, styleProps: { marginTop: '10px', height: '20px' } }, label), h("select-amount", { key: '677879ef708db5d77029e6e8c850804fb03f921b' }), h("collaborators-list", { key: '70040f6f93c3ce66b6dde7817a20a58c1b116a44' }))));
    }
    static get style() { return FullWidgetStyle0; }
}, [0, "full-widget"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["full-widget", "amount-buttons", "amount-input", "app-typography", "collaborators-list", "select-amount"];
    components.forEach(tagName => { switch (tagName) {
        case "full-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FullWidget);
            }
            break;
        case "amount-buttons":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "amount-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "app-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "collaborators-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "select-amount":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { FullWidget as F, defineCustomElement as d };

//# sourceMappingURL=p-e5d1e7dc.js.map