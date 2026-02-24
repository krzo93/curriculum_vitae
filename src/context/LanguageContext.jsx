import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const SUPPORTED_LANGS = ['sl', 'en']

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang')
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) return urlLang
    return localStorage.getItem('lang') || 'sl'
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const switchLang = (l) => {
    setLang(l)
    localStorage.setItem('lang', l)
    const params = new URLSearchParams(window.location.search)
    params.set('lang', l)
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  }

  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
