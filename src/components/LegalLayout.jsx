import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Particles from '@tsparticles/react'
import { useParticlesEngine } from '../hooks/useParticlesEngine'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'
import Footer from './Footer'

const LEGAL_PARTICLES = {
  fpsLimit: 60,
  particles: {
    number: { value: 90, density: { enable: true, area: 800 } },
    color: { value: '#FF6B00' },
    opacity: { value: { min: 0.1, max: 0.5 } },
    size: { value: { min: 1, max: 3 } },
    links: {
      enable: true,
      distance: 150,
      color: '#FF6B00',
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: { min: 0.4, max: 1.5 },
      random: true,
      outModes: { default: 'out' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 200, links: { opacity: 0.5 } },
      push: { quantity: 3 },
    },
  },
  detectRetina: true,
}

export default function LegalLayout({ titleKey, children }) {
  const particlesReady = useParticlesEngine()
  const { lang } = useLanguage()
  const t = translations[lang].legal

  return (
    <>
      <div className="mesh-gradient" />

      {/* Particles */}
      {particlesReady && (
        <Particles
          id="legal-particles"
          className="fixed inset-0 z-0 pointer-events-none"
          options={LEGAL_PARTICLES}
        />
      )}

      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 w-full z-[1000] bg-dark/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter">
            MK<span className="text-primary">.</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-white/40 hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            {t.back}
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-36 pb-24 relative z-10">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="section-title">{t[titleKey]}</h1>
          <div className="section-divider mb-12" />
          <div className="text-white/60 leading-relaxed space-y-6 text-base">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
