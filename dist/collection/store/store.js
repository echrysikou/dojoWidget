import { createStore } from "@stencil/store";
const { state, onChange } = createStore({
    language: 'en',
    widgetDetails: {
        uuid: '',
        name: '',
        title: '',
        code: '',
        codeLink: '',
        font: '',
        fontColor: '',
        themeColor: '',
        label: '',
        borderColor: '',
        createdAt: '',
        type: 'BT',
        collaborators: [],
    },
    stripe: {
        paymentElementIntentAmount: 100,
        amountIsValid: false
    },
});
// Export state and onChange for use in components
export { state, onChange };
//# sourceMappingURL=store.js.map
