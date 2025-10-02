import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { TR, EN, DE } from './transformResources'

i18n.use(initReactI18next).init({
  resources: {
    TR,
    EN,
    DE,
  },
  lng: localStorage.getItem('language') || 'TR',
  fallbackLng: 'TR',
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
})

export default i18n

