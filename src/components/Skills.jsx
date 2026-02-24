import React from 'react'
import Particles from '@tsparticles/react'
import { useParticlesEngine } from '../hooks/useParticlesEngine'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const SKILLS_PARTICLES = {
  fpsLimit: 30,
  particles: {
    number: { value: 30, density: { enable: true, area: 900 } },
    color: { value: '#008DFF' },
    opacity: { value: 0.12 },
    size: { value: { min: 1, max: 2 } },
    links: { enable: true, distance: 160, color: '#008DFF', opacity: 0.06, width: 1 },
    move: { enable: true, speed: 0.3, outModes: { default: 'out' } },
  },
  detectRetina: true,
}

const SKILLS = [
  {
    title: 'DRUPAL',
    techs: 'site build · modules · theming · architecture · migrations · integrations · headless · decoupled · drush · custom modules · config management · layout builder · paragraphs · multilingual · api-first',
    index: 0,
  },
  {
    title: 'BACKEND',
    techs: 'php · mysql · symfony · solr · git · composer · mariadb · redis · memcached · rest apis · phpunit · oop · bash · shell · python · Java · C#',
    index: 1,
  },
  {
    title: 'FRONTEND',
    techs: 'react · javascript · tailwind · sass · wcag · twig · typescript · vite · webpack · html5 · css3 · storybook · responsive design · mobile-first · jquery',
    index: 2,
  },
  {
    title: 'DEVOPS',
    techs: 'linux · apache · nginx · docker · ddev · gulp · npm · ci/cd · github actions · gitlab ci · bitbucket pipelines · lando · varnish',
    index: 3,
  },
  {
    title: 'AI',
    techs: 'openai api · github copilot · chatgpt · prompt engineering · claude · gemini · notebooklm',
    index: 4,
  },
  {
    title: 'APIs & INTEGRATIONS',
    techs: 'rest · graphql · webhooks · openapi · oauth2 · jwt · hubspot · stripe · google analytics · search api · sendgrid',
    index: 5,
  },
  {
    title: 'PERFORMANCE',
    techs: 'core web vitals · lighthouse · cdn · varnish · redis caching · lazy loading · image optimisation · database indexing · xdebug',
    index: 6,
  },
  {
    title: 'PROJECT & TEAM',
    techs: 'agile · scrum · kanban · jira · confluence · git flow · code review · technical writing · mentoring · client communication · estimation · sprint planning',
    index: 7,
  },
]

function SkillCell({ skill, gridClass }) {
  const i = skill.index

  return (
    <div
      className={`${gridClass} group relative overflow-hidden cursor-default
        bg-[#0D0D11] border border-white/10 rounded-xl
        p-6 sm:p-7
        hover:border-primary/20 transition-colors duration-300`}
      data-aos="fade-up"
      data-aos-delay={i * 80}
    >
      {/* Watermark number — clipped by overflow-hidden */}
      <span
        className="absolute bottom-2 right-4
          text-[4.5rem] sm:text-[5.5rem]
          font-black leading-none font-mono select-none pointer-events-none
          text-white/[0.04]"
      >
        0{i + 1}
      </span>

      {/* Large category name */}
      <h3
        className="relative
          text-[2rem] sm:text-[2.4rem] lg:text-[2.2rem]
          font-black uppercase tracking-tighter leading-tight mb-4
          text-white/[0.13] group-hover:text-primary/50
          transition-colors duration-500"
      >
        {skill.title}
      </h3>

      {/* Separator — scaleX transition avoids layout reflow */}
      <div
        className="relative h-px w-full mb-4 bg-primary/[0.18] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-primary/70
            origin-left scale-x-0 group-hover:scale-x-100
            transition-transform duration-700 ease-out"
        />
      </div>

      {/* Tech list */}
      <p
        className="relative font-mono
          text-sm sm:text-base
          text-white/[0.38] leading-relaxed
          group-hover:text-white/60 transition-colors duration-500"
      >
        {skill.techs}
      </p>
    </div>
  )
}

export default function Skills() {
  const particlesReady = useParticlesEngine()
  const { lang } = useLanguage()
  const t = translations[lang].skills

  return (
    <section id="skills" className="section-pad bg-dark-alt relative overflow-hidden">
      {particlesReady && (
        <Particles
          id="skills-particles"
          className="absolute inset-0 z-0"
          options={SKILLS_PARTICLES}
        />
      )}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">

        {/* Section heading */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-2"
          data-aos="fade-up"
        >
          <div>
            <h2 className="section-title">{t.title}</h2>
            <div className="section-divider" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-white/30 sm:pb-1 italic">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {SKILLS.map((skill, i) => {
            const lastRowCount = SKILLS.length % 3 || 3
            const isLastRow = i >= SKILLS.length - lastRowCount
            const pos = i - (SKILLS.length - lastRowCount)
            const colStart =
              isLastRow && lastRowCount === 2
                ? pos === 0 ? 'lg:col-start-2' : 'lg:col-start-4'
                : isLastRow && lastRowCount === 1
                ? 'lg:col-start-3'
                : ''
            return (
              <SkillCell
                key={skill.title}
                skill={skill}
                gridClass={`lg:col-span-2 ${colStart}`}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}
