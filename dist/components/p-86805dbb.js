import { p as proxyCustomElement, H, h, c as Host } from './p-fcc1755e.js';

const fullWidgetCss = "";
const FullWidgetStyle0 = fullWidgetCss;

const FullWidget = /*@__PURE__*/ proxyCustomElement(class FullWidget extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '8dc3b6ab58212a4141f7eeeb69ee37d69084454f' }, h("div", { key: '64a1092f2992bf8708c4d8ea307a4c4d1b17d131' }, "Widget")));
    }
    static get style() { return FullWidgetStyle0; }
}, [1, "full-widget"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["full-widget"];
    components.forEach(tagName => { switch (tagName) {
        case "full-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FullWidget);
            }
            break;
    } });
}
defineCustomElement();

export { FullWidget as F, defineCustomElement as d };

//# sourceMappingURL=p-86805dbb.js.map