import { p as proxyCustomElement, H, h, c as Host } from './p-2189282e.js';
import { d as defineCustomElement$2, f as fetchWidgetDetails } from './p-89ad94b4.js';
import { s as state } from './p-703964f3.js';
import { s as setLanguage, i as instance } from './p-3dc6e7af.js';
import { d as defineCustomElement$b } from './p-a425cb25.js';
import { d as defineCustomElement$a } from './p-220ea585.js';
import { d as defineCustomElement$9 } from './p-660b8487.js';
import { d as defineCustomElement$8 } from './p-1eb21f75.js';
import { d as defineCustomElement$7 } from './p-f146cf0a.js';
import { d as defineCustomElement$6 } from './p-fbf6f5e6.js';
import { d as defineCustomElement$5 } from './p-4130f774.js';
import { d as defineCustomElement$4 } from './p-9a1c149e.js';
import { d as defineCustomElement$3 } from './p-ae5504cf.js';

const widgetSelectorCss = "";
const TtWidgetStyle0 = widgetSelectorCss;

const WidgetSelector = /*@__PURE__*/ proxyCustomElement(class WidgetSelector extends H {
    constructor() {
        super();
        this.__registerHost();
        this.wId = undefined;
        this.language = 'en';
        this.error = undefined;
        this.loading = false;
        this.data = undefined;
        this.currentLanguage = 'en';
    }
    async getWidgetDetails() {
        // fetch widget details from the server and set the widget properties in the store state object
        this.loading = true;
        this.error = null;
        try {
            this.data = await fetchWidgetDetails(this.wId);
            state.widgetDetails = this.data;
        }
        catch (error) {
            console.error('Failed to fetch widget details:', error);
            this.error = error instanceof Error ? error.message : 'An unknown error occurred';
            state.widgetDetails = null;
        }
        finally {
            this.loading = false;
        }
    }
    componentWillLoad() {
        if (this.wId) {
            this.getWidgetDetails();
            this.error = null;
        }
        else {
            this.error = 'Widget ID missing';
        }
        if (this.language) {
            setLanguage(this.language); // Store the language in the global store
        }
    }
    setLanguage(newLang) {
        const supportedLanguages = ['en', 'fr'];
        if (!supportedLanguages.includes(newLang)) {
            newLang = 'en'; // Fallback
        }
        instance.changeLanguage(newLang);
        this.currentLanguage = newLang;
    }
    renderWidget() {
        var _a;
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.type) {
            switch (this.data.type) {
                case 'WG':
                    return h("full-widget", null);
                case 'BT':
                    return h("button-widget", null);
                case 'QR':
                    return h("qr-code-widget", { wId: this.wId });
                default:
                    return null; // handle unknown type
            }
        }
    }
    render() {
        return (h(Host, { key: 'bacdcf4c062febf3f6d17dab0a9ff683afa502c3' }, this.renderWidget()));
    }
    static get watchers() { return {
        "lang": ["setLanguage"]
    }; }
    static get style() { return TtWidgetStyle0; }
}, [0, "tt-widget", {
        "wId": [1537, "w-id"],
        "language": [1],
        "error": [32],
        "loading": [32],
        "data": [32],
        "currentLanguage": [32]
    }, undefined, {
        "lang": ["setLanguage"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tt-widget", "amount-buttons", "amount-input", "app-loader", "app-typography", "button-widget", "collaborators-list", "full-widget", "qr-code-widget", "select-amount", "stripe-payment"];
    components.forEach(tagName => { switch (tagName) {
        case "tt-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, WidgetSelector);
            }
            break;
        case "amount-buttons":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "amount-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "app-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "app-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "button-widget":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "collaborators-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "full-widget":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "qr-code-widget":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "select-amount":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "stripe-payment":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const TtWidget = WidgetSelector;
const defineCustomElement = defineCustomElement$1;

export { TtWidget, defineCustomElement };

//# sourceMappingURL=tt-widget.js.map