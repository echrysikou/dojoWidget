import { p as proxyCustomElement, H, h } from './p-2189282e.js';
import { s as state } from './p-703964f3.js';
import { i as instance, c as getAvatarInitials, a as getContrastColor, d as capitalizeFirstCharOfEachWord } from './p-032d2676.js';
import { d as defineCustomElement$1 } from './p-9c5a097d.js';

const TRANSACTION_FEES_PERCENTAGE = "10%";

const collaboratorsListCss = ".collaborators-container{margin-top:60px}.collaborators{display:flex;flex-direction:row;width:100%;margin-top:10px}.collaborator-stack{display:flex;gap:8px;flex-direction:column;justify-content:space-between;align-items:center}.avatar-container{display:flex;justify-content:center;align-items:center;margin-top:3px;position:relative;flex-shrink:0;font-size:1.42857rem;line-height:1;border-radius:50%;overflow:hidden;user-select:none;width:65px;height:65px}.avatar-image{width:100%;height:100%;text-align:center;object-fit:cover;color:transparent;text-indent:10000px;overflow-clip-margin:content-box;overflow:clip;font-size:1.42857rem;line-height:1;user-select:none;text-size-adjust:100%}.avatar-initials{display:flex;justify-content:center;align-items:center;border-radius:50%;width:65px;height:65px}.fee-container{display:flex;justify-content:center;align-items:center;text-align:center;margin-top:10px}";
const CollaboratorsListStyle0 = collaboratorsListCss;

const CollaboratorsList = /*@__PURE__*/ proxyCustomElement(class CollaboratorsList extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        const { font, collaborators, borderColor: secondaryColor } = state.widgetDetails;
        return (h("div", { key: '3e3ed8118e69d074eab9b6f74d2cc37e30147aa9', class: "collaborators-container" }, h("app-typography", { key: 'dce38bd47771b720e420e7f96c493ab6276bd02c', variant: "secondaryP", fontFamily: font, styleProps: { fontWeight: '700' } }, "Collaborators"), h("div", { key: 'ec495d9c3a0de95c68671045e8b46e49c2cca48b', class: "collaborators", style: { justifyContent: collaborators.length === 1 ? 'center' : collaborators.length === 2 ? 'space-around' : 'space-between' } }, collaborators.map((collaborator) => {
            var _a;
            const { name, surname, headline } = collaborator.profile;
            const initials = getAvatarInitials(name, surname);
            return (h("div", { key: collaborator.id, class: "collaborator-stack" }, h("app-typography", { variant: "secondaryP", fontFamily: font, styleProps: {
                    textAlign: 'center',
                    marginLeft: '8px',
                } }, (collaborator === null || collaborator === void 0 ? void 0 : collaborator.share) ? collaborator.share * 100 : 0, " %"), h("div", { class: "avatar-container", style: { backgroundColor: secondaryColor } }, ((_a = collaborator === null || collaborator === void 0 ? void 0 : collaborator.profile) === null || _a === void 0 ? void 0 : _a.image) ? (h("img", { class: "avatar-image", src: collaborator.profile.image, alt: name + ' ' + surname })) : (h("div", { class: "avatar-initials" }, h("app-typography", { variant: "body1", fontFamily: 'var(--font-primary)', styleProps: { fontSize: '35px', marginBottom: '-5px', backgroundColor: secondaryColor, color: getContrastColor(secondaryColor).blackOrWhite } }, initials)))), h("app-typography", { variant: "secondaryCaption", fontFamily: font, styleProps: {
                    fontWeight: 500,
                    textAlign: 'center',
                    marginTop: '8px',
                } }, capitalizeFirstCharOfEachWord(name !== null && name !== void 0 ? name : ''), " ", capitalizeFirstCharOfEachWord(surname !== null && surname !== void 0 ? surname : '')), h("app-typography", { variant: "secondaryMessage", fontFamily: font, style: {
                    textAlign: 'center',
                    marginTop: '-10px',
                    // color: professionColor, TODO: define color
                } }, capitalizeFirstCharOfEachWord(headline !== null && headline !== void 0 ? headline : ''))));
        })), h("div", { key: '7b61968a747edcc59c0d1310b80f06b6714273df', class: "fee-container" }, h("app-typography", { key: 'c9016ef92ae948cf1525d62dc98fa7fb57bc35a3', variant: "secondaryMessage", fontFamily: font, styleProps: {
            // color: feesColor, TODO: define color
            } }, instance.t('transactionFeesPercentage', {
            percentage: TRANSACTION_FEES_PERCENTAGE,
        })))));
    }
    static get style() { return CollaboratorsListStyle0; }
}, [0, "collaborators-list"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["collaborators-list", "app-typography"];
    components.forEach(tagName => { switch (tagName) {
        case "collaborators-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CollaboratorsList);
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

export { CollaboratorsList as C, defineCustomElement as d };

//# sourceMappingURL=p-44bbedf8.js.map