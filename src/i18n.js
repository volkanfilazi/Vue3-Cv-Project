import { createI18n } from 'vue-i18n'
import eng from './locales/eng.json'
import ger from './locales/ger.json'
import { useStorage } from '@vueuse/core'

const saveLanguage = useStorage('language',String)

function loadLocaleMessage(){
  const locales = [{ eng: eng}, {ger: ger}]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })

  return messages
}

export default createI18n({
  locale: saveLanguage.value,
  fallbackLocale: saveLanguage.value,
  messages: loadLocaleMessage()
})