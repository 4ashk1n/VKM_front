import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationEN from './translations/en.json';
import translationRU from './translations/ru.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, 
    },

    resources: {
      en: {
        translation: translationEN
      },
      ru: {
        translation: translationRU
      }
    }
  });


export default i18n;