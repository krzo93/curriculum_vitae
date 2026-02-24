import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const STORAGE_KEY = 'mk-cookie-consent'

export default function CookieBanner() {
  const { lang } = useLanguage()
  const t = translations[lang].cookie

  const [shown,   setShown]   = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setShown(true)
      const timer = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = (choice) => {
    localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
    setTimeout(() => setShown(false), 400)
  }

  if (!shown) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[998] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div
        className="container mx-auto max-w-5xl pointer-events-auto"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(110%)',
          opacity:   visible ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease',
        }}
      >
        <div className="bg-dark-alt/95 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 sm:px-7 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-2xl">

          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1">
            <Cookie size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-white/60 leading-relaxed">
              {t.message}{' '}
              <Link to="/privacy" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                {t.learnMore}
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => dismiss('declined')}
              className="px-4 py-2 text-sm font-semibold rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-all"
            >
              {t.decline}
            </button>
            <button
              onClick={() => dismiss('accepted')}
              className="px-4 py-2 text-sm font-semibold rounded-full bg-primary text-white shadow-[0_4px_14px_rgba(255,107,0,0.35)] hover:shadow-[0_4px_20px_rgba(255,107,0,0.5)] hover:-translate-y-px transition-all"
            >
              {t.accept}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
