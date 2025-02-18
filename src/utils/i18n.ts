import i18next from 'i18next';
import { state } from '../store/store';
import en from '../locales/en.json';
import { SupportedLanguages } from '../interfaces/interfaces';

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

export const setLanguage = (lang: SupportedLanguages) => {
  i18next.changeLanguage(lang);
  state.language = lang; // Update the store
};
export default i18next;
