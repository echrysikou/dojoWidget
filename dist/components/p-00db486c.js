import { p as proxyCustomElement, H, h } from './p-2189282e.js';

const appLoaderCss = ".root{display:flex;justify-content:center;align-items:center;min-height:100%}.circular-progress{border:3px solid;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const AppLoaderStyle0 = appLoaderCss;

const AppLoader = /*@__PURE__*/ proxyCustomElement(class AppLoader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.height = 60;
        this.color = 'var(--primary)';
    }
    render() {
        return (h("div", { key: '1cafa770da1b6701f934a8b4233271bfa828b0cb', class: "root" }, h("div", { key: '9b1a60ff7c0c002397c6e6738089d2b3d1dfead8', class: "circular-progress", style: {
                width: `${this.height}px`,
                height: `${this.height}px`,
                borderColor: `${this.color} ${this.color} ${this.color} transparent`,
            } })));
    }
    static get style() { return AppLoaderStyle0; }
}, [1, "app-loader", {
        "height": [2],
        "color": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["app-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "app-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AppLoader);
            }
            break;
    } });
}
defineCustomElement();

export { AppLoader as A, defineCustomElement as d };

//# sourceMappingURL=p-00db486c.js.map