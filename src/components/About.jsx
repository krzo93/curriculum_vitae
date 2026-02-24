import React from 'react'
import Particles from '@tsparticles/react'
import { useParticlesEngine } from '../hooks/useParticlesEngine'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const ABOUT_PARTICLES = {
  fpsLimit: 30,
  particles: {
    number: { value: 35, density: { enable: true, area: 800 } },
    color: { value: '#FF6B00' },
    opacity: { value: 0.18 },
    size: { value: { min: 1, max: 2 } },
    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.05,
      width: 1,
    },
    move: { enable: true, speed: 0.4, outModes: { default: 'out' } },
  },
  detectRetina: true,
}

export default function About() {
  const particlesReady = useParticlesEngine()
  const { lang } = useLanguage()
  const t = translations[lang].about

  return (
    <section id="about" className="section-pad bg-dark-alt relative overflow-hidden">
      {particlesReady && (
        <Particles
          id="about-particles"
          className="absolute inset-0 z-0"
          options={ABOUT_PARTICLES}
        />
      )}

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center mb-14 lg:mb-20 text-center" data-aos="fade-up">
          <h2 className="section-title">{t.title}</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Bio + stats */}
          <div className="space-y-5 text-white/65" data-aos="fade-right">
            <p className="text-base sm:text-lg leading-relaxed">{t.p1}</p>
            <p className="text-base sm:text-lg leading-relaxed font-light">{t.p2}</p>
            <p className="text-base sm:text-lg leading-relaxed font-light">{t.p3}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              {[
                { value: '10+', label: t.stats[0] },
                { value: '20+', label: t.stats[1] },
                { value: '4+', label: t.stats[2] },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-primary">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-white/30 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="relative" data-aos="fade-left">
            <div className="codebox">
              <div className="bg-[#1A1A1F] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[0.65rem] text-white/30 font-mono">matic_pdp.jpg</span>
              </div>
              <img
                src="/matic-krizaj.jpg"
                alt="Matic Križaj"
                className="w-full h-[320px] sm:h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Year badge */}
            <div className="absolute bottom-5 right-5 bg-dark/90 border border-white/10 px-4 py-3 rounded-xl shadow-2xl flex flex-col items-center backdrop-blur-sm">
              <span className="text-xl font-extrabold text-primary">2016</span>
              <span className="text-[8px] uppercase tracking-widest text-white/40 mt-0.5">
                {t.yearBadge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
