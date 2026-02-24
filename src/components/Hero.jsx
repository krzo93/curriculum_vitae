import React from 'react'
import Particles from '@tsparticles/react'
import { ArrowRight, Laptop, Database, Code2, Terminal } from 'lucide-react'
import { useParticlesEngine } from '../hooks/useParticlesEngine'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const PARTICLES_OPTIONS = {
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

// ── Shared chrome dots ───────────────────────────────────────────
function TrafficLights() {
  return (
    <div className="flex gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
    </div>
  )
}

// ── Variant 01: Terminal ─────────────────────────────────────────
function CodeboxTerminal() {
  return (
    <div className="codebox transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
      <div className="bg-[#1A1A1F] px-4 py-2.5 border-b border-white/10 flex items-center gap-3">
        <TrafficLights />
        <span className="text-[0.65rem] text-white/30 font-mono">bash — matic@drupal</span>
      </div>

      <div className="p-5 sm:p-6 font-mono text-sm leading-loose">
        <div>
          <span className="text-green-400">matic@drupal</span>
          <span className="text-white/30">:~$ </span>
          <span className="text-white/75">whoami</span>
        </div>
        <div className="text-white/45 mb-3">
          Matic Križaj · Senior Drupal Dev
        </div>

        <div>
          <span className="text-green-400">matic@drupal</span>
          <span className="text-white/30">:~$ </span>
          <span className="text-white/75">cat experience.log</span>
        </div>
        <div className="text-white/45 mb-3">
          {new Date().getFullYear() - 2016} years · Drupal 7–11 · 4+ countries
        </div>

        <div>
          <span className="text-green-400">matic@drupal</span>
          <span className="text-white/30">:~$ </span>
          <span className="text-white/75">ls skills/</span>
        </div>
        <div className="mb-3">
          <span className="text-blue-400">drupal/</span>
          {'  '}
          <span className="text-blue-400">php/</span>
          {'  '}
          <span className="text-blue-400">react/</span>
          {'  '}
          <span className="text-blue-400">devops/</span>
          {'  '}
          <span className="text-blue-400">html5/</span>
          {'  '}
          <span className="text-blue-400">sass/</span>
        </div>

        <div>
          <span className="text-green-400">matic@drupal</span>
          <span className="text-white/30">:~$ </span>
          <span
            className="inline-block w-[7px] h-[1.1em] bg-green-400 align-middle"
            style={{ animation: 'pulse 1s step-end infinite' }}
          />
        </div>
      </div>
    </div>
  )
}

// ── Main Hero ────────────────────────────────────────────────────
export default function Hero() {
  const particlesReady = useParticlesEngine()
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Particles */}
      {particlesReady && (
        <Particles
          id="hero-particles"
          className="absolute inset-0 z-0"
          options={PARTICLES_OPTIONS}
        />
      )}

      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-primary/15 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] bg-secondary/15 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 items-center">

          {/* ── Left column ── */}
          <div data-aos="fade-right">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-primary tracking-widest uppercase">
                {t.badge}
              </span>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-pulse" />
                {t.available}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-5 leading-[1.1] tracking-tight">
              Matic{' '}
              <span className="text-primary italic">Križaj</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/60 mb-9 max-w-xl font-light leading-relaxed">
              {t.description.split('10').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <React.Fragment key={i}>
                    {part}
                    <span className="text-white font-medium">{t.highlight}</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#experience" className="btn btn-primary group">
                {t.cta1}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn btn-outline">
                {t.cta2}
              </a>
            </div>

            <div className="flex gap-5 text-white/25">
              <Laptop size={20} />
              <Database size={20} />
              <Code2 size={20} />
              <Terminal size={20} />
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="relative mt-6 lg:mt-0" data-aos="zoom-in" data-aos-delay="200">

            <CodeboxTerminal />

            {/* Floating badges */}
            <div className="hidden sm:block absolute -top-5 -left-5 bg-dark-alt/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xl text-[10px] font-bold font-mono animate-float">
              DRUPAL 11
            </div>
            <div
              className="hidden sm:block absolute -bottom-5 -right-5 bg-dark-alt/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xl text-[10px] font-bold font-mono animate-float"
              style={{ animationDelay: '-2s' }}
            >
              PHP 8.3
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[10px] tracking-[0.25em] uppercase select-none">
        <span>{t.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
