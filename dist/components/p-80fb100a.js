import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { d as defineCustomElement$3 } from './p-132e8c46.js';
import { d as defineCustomElement$2 } from './p-bbe1b8d6.js';
import { d as defineCustomElement$1 } from './p-9c5a097d.js';

const selectAmountCss = ".amount-container{margin-top:-5px}";
const SelectAmountStyle0 = selectAmountCss;

const AmountButtons = /*@__PURE__*/ proxyCustomElement(class AmountButtons extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: 'c13ff04ceb9c9361bf6ad9d01c877058df34a5d6', class: "amount-container" }, h("amount-buttons", { key: '317d346b3d0a38c0868e7c22e6070e3f25b37b00' }), h("amount-input", { key: '73092d60780c04ca45ccd31676ef1a7c9686f992' })));
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

//# sourceMappingURL=p-80fb100a.js.map