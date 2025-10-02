import { useTranslation } from 'react-i18next'

export const useTranslationService = () => {
  const { t: translate, i18n } = useTranslation()

  // resourcesMap key'lerini kullanarak çeviri yap
  // Örnek: t(resourcesMap.common.SAVE) → "common.SAVE" → i18next çevirisi
  const t = (resourceKey: { TR: string; EN: string; DE: string } | string) => {
    if (typeof resourceKey === 'string') {
      return translate(resourceKey)
    }
    
    // Eğer resource objesi gönderildiyse, key'i çıkar
    const currentLang = i18n.language.toUpperCase() as 'TR' | 'EN' | 'DE'
    return resourceKey[currentLang] || resourceKey.TR
  }

  const changeLanguage = (lang: 'TR' | 'EN' | 'DE') => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const currentLanguage = i18n.language as 'TR' | 'EN' | 'DE'

  return {
    t,
    changeLanguage,
    currentLanguage,
  }
}

