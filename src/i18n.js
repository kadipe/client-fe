import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(LanguageDetector)
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    debug: false,
    react: {
      useSuspense: false
    }
  });

export default i18n;