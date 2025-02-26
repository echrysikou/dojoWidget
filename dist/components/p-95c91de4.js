import { p as proxyCustomElement, H, h } from './p-2189282e.js';

const appTypographyCss = ".typography{margin:0px}.typography.h0{font-size:72px;font-weight:600;line-height:normal}.typography.h1{font-size:48px;font-weight:600;line-height:normal}.typography.h2{font-size:32px;font-weight:600;line-height:normal}.typography.h3{font-size:24px;font-weight:600;line-height:normal}.typography.secondaryP{font-size:16px;line-height:normal;font-weight:400}.typography.secondaryCaption{font-family:var(--font-secondary);font-size:14px;line-height:20px;font-weight:600;letter-spacing:0.4px}.typography.secondaryMessage{font-family:var(--font-secondary);font-size:12px;line-height:20px;font-weight:400;letter-spacing:0.4px}.typography.body1{font-size:16px;line-height:normal;font-weight:400}";
const AppTypographyStyle0 = appTypographyCss;

const Typography = /*@__PURE__*/ proxyCustomElement(class Typography extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.variant = undefined;
        this.fontFamily = 'inherit';
        this.styleProps = {};
    }
    render() {
        const Tag = this.variant.startsWith('h') ? this.variant : 'p';
        const font = this.fontFamily === 'Baloo Bhaijaan 2, sans serif' ? 'var(--font-primary)' : this.fontFamily;
        return (h(Tag, { key: '22140afc88d5dd9d2cdcb81c22e7bfb58435997e', class: `typography ${this.variant}`, style: Object.assign({ fontFamily: font }, this.styleProps) }, h("slot", { key: '0340e003737daa1ba6f0aaa62fd5d450d3da4b35' })));
    }
    static get style() { return AppTypographyStyle0; }
}, [1, "app-typography", {
        "variant": [1],
        "fontFamily": [1, "font-family"],
        "styleProps": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["app-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "app-typography":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Typography);
            }
            break;
    } });
}
defineCustomElement();

export { Typography as T, defineCustomElement as d };

//# sourceMappingURL=p-95c91de4.js.map