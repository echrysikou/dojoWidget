import i18next from "i18next";
import { state } from "../store/store";
import en from "../locales/en.json";
i18next.init({
    resources: {
        en: { translation: en },
    },
    lng: state.language, // Default language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});
export const setLanguage = (lang) => {
    i18next.changeLanguage(lang);
    state.language = lang; // Update the store
};
export default i18next;
//# sourceMappingURL=i18n.js.map
