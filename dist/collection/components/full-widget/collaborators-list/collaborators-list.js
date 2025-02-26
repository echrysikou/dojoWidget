import { state } from "../../../store/store";
import { TRANSACTION_FEES_PERCENTAGE } from "../../../utils/constants";
import { capitalizeFirstCharOfEachWord, getAvatarInitials, getContrastColor } from "../../../utils/utils";
import { h } from "@stencil/core";
import i18n from "../../../utils/i18n";
export class CollaboratorsList {
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
            } }, i18n.t('transactionFeesPercentage', {
            percentage: TRANSACTION_FEES_PERCENTAGE,
        })))));
    }
    static get is() { return "collaborators-list"; }
    static get originalStyleUrls() {
        return {
            "$": ["collaborators-list.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["collaborators-list.css"]
        };
    }
}
//# sourceMappingURL=collaborators-list.js.map
