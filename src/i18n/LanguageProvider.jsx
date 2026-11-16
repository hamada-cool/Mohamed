import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext.js'
import { translations } from './translations.js'

function getSavedLanguage() {
  try {
    return window.localStorage.getItem('portfolio-language') === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getSavedLanguage)

  useEffect(() => {
    const isArabic = language === 'ar'
    const dictionary = translations[language]
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.title = dictionary.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', dictionary.meta.description)
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', dictionary.meta.keywords)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', dictionary.meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', dictionary.meta.socialDescription)
    document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', dictionary.meta.socialImageAlt)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', dictionary.meta.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', dictionary.meta.socialDescription)
    document.querySelector('meta[name="twitter:image:alt"]')?.setAttribute('content', dictionary.meta.socialImageAlt)
    try {
      window.localStorage.setItem('portfolio-language', language)
    } catch {
      // Language selection remains available for the current page view.
    }
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (path) => path.split('.').reduce((entry, key) => entry?.[key], translations[language]),
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
