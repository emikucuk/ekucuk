import { resourcesMap } from '../resources/translations'

type Language = 'TR' | 'EN' | 'DE'

// resourcesMap yapısını i18next formatına dönüştür
function transformToI18nextFormat(resources: typeof resourcesMap, lang: Language) {
  const result: Record<string, any> = {}

  Object.entries(resources).forEach(([namespace, keys]) => {
    result[namespace] = {}
    Object.entries(keys).forEach(([key, translations]) => {
      result[namespace][key] = (translations as any)[lang]
    })
  })
  return result
}

export const TR = transformToI18nextFormat(resourcesMap, 'TR')
export const EN = transformToI18nextFormat(resourcesMap, 'EN')
export const DE = transformToI18nextFormat(resourcesMap, 'DE')

