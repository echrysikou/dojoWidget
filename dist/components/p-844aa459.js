import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { d as defineCustomElement$3 } from './p-86d29b7a.js';
import { d as defineCustomElement$2 } from './p-d57f8c7a.js';
import { d as defineCustomElement$1 } from './p-95c91de4.js';

const selectAmountCss = ".amount-container{margin-top:-5px}";
const SelectAmountStyle0 = selectAmountCss;

const AmountButtons = /*@__PURE__*/ proxyCustomElement(class AmountButtons extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: 'ae9e341755d5091a9ba660a8a217c0acd677658c', class: "amount-container" }, h("amount-buttons", { key: 'cbe6eb3e36ac8537664b99a3953a9d1eccd9ac17' }), h("amount-input", { key: '4c3698f9f3a71c4c8e02691f9a2200481950e544' })));
    }
    static get style() { return SelectAmountStyle0; }
}, [0, "select-amount"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["select-amount", "amount-buttons", "amount-input", "app-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "select-amount":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AmountButtons);
            }
            break;
        case "amount-buttons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "amount-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "app-typography":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { AmountButtons as A, defineCustomElement as d };

//# sourceMappingURL=p-844aa459.js.map