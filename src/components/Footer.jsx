import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-white/10 bg-dark">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a href="#hero" className="text-xl font-extrabold tracking-tighter">
            MK<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-white/30">
            &copy; {year} Matic Križaj. {t.rights}
          </p>
        </div>

        <div className="flex gap-6 text-sm font-semibold text-white/30 uppercase tracking-widest">
          <Link to="/privacy" className="hover:text-primary transition-colors">{t.privacy}</Link>
          <Link to="/terms"   className="hover:text-primary transition-colors">{t.terms}</Link>
        </div>
      </div>
    </footer>
  )
}
