import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

export default function Navbar() {
  const { lang, switchLang } = useLanguage()
  const t = translations[lang].nav

  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.experience, href: '#experience' },
    { label: t.skills, href: '#skills' },
    { label: t.recommendations, href: '#recommendations' },
    { label: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 80)
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const LangToggle = ({ className = '' }) => (
    <div className={`flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full p-1 ${className}`}>
      {['sl', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => switchLang(l)}
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            lang === l
              ? 'bg-primary text-white shadow-[0_0_10px_rgba(255,107,0,0.4)]'
              : 'text-white/40 hover:text-white'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/10' : ''
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-150 rounded-full"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-extrabold tracking-tighter shrink-0">
          MK<span className="text-primary">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/60">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-3">
          <LangToggle />
          <a href="#contact" className="btn btn-primary py-2.5 px-5 text-sm">
            {t.cta}
          </a>
        </div>

        {/* Mobile right side */}
        <div className="lg:hidden flex items-center gap-3">
          <LangToggle />
          <button
            className="text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-alt/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-1 text-sm font-medium text-white/60">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors block py-3 border-b border-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                className="btn btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                {t.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
