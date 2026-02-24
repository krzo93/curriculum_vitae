import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const JOB_META = [
  { company: 'Dropsolid',  role: 'Full Stack Drupal Developer', location: 'Belgium',  period: { sl: '2020 – Danes', en: '2020 – Present' }, file: 'dropsolid.log',  delay: 0   },
  { company: 'Netmedia',   role: 'Full Stack Drupal Developer', location: 'Slovenia', period: { sl: '2020 – Danes', en: '2020 – Present' }, file: 'netmedia.log',   delay: 100 },
  { company: 'Apsis',      role: 'Full Stack Drupal Developer', location: 'Sweden',   period: { sl: '2021',         en: '2021'           }, file: 'apsis.log',      delay: 200 },
  { company: 'NDP Studio', role: 'Full Stack Drupal Developer', location: 'UK',       period: { sl: '2018 – 2021',  en: '2018 – 2021'    }, file: 'ndp_studio.log', delay: 300 },
  { company: 'Agiledrop',  role: 'Drupal Developer',           location: 'Slovenia', period: { sl: '2016 – 2018',  en: '2016 – 2018'    }, file: 'agiledrop.log',  delay: 400 },
  { company: { sl: 'Fakulteta za računalništvo in informatiko', en: 'Faculty of Computer and Information Science' }, role: 'Computer Science Student', location: 'Slovenia', period: { sl: '2012 – 2016', en: '2012 – 2016' }, file: 'fri.log', delay: 500 },
]

function ExperienceCard({ meta, description }) {
  return (
    <div className="relative group" data-aos="fade-left" data-aos-delay={meta.delay}>
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-4 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#FF6B00] group-hover:scale-125 transition-transform duration-300" />

      {/* Period */}
      <div className="text-sm font-bold text-primary mb-2 font-mono tracking-wider">
        {meta.period}
      </div>

      {/* Card */}
      <div className="codebox">
        <div className="bg-[#1A1A1F] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <span className="text-[0.65rem] text-white/30 font-mono">{meta.file}</span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <h3 className="text-lg sm:text-xl font-bold">{meta.company}</h3>
            <span className="text-xs text-white/40 font-mono bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
              {meta.location}
            </span>
          </div>
          <span className="block text-base text-primary/60 mb-3 font-mono italic">{meta.role}</span>
          <ul className="space-y-2">
            {description.map((item, i) => (
              <li key={i} className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
                {item.title ? (
                  <><span className="font-semibold text-white/80">{item.title}: </span>{item.text}</>
                ) : item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { lang } = useLanguage()
  const t = translations[lang].experience

  return (
    <section id="experience" className="section-pad bg-dark">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col mb-14 lg:mb-20" data-aos="fade-up">
          <h2 className="section-title">{t.title}</h2>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-primary/20 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10">
          {JOB_META.map((meta, i) => (
            <ExperienceCard
              key={typeof meta.company === 'object' ? meta.company[lang] : meta.company}
              meta={{ ...meta, company: typeof meta.company === 'object' ? meta.company[lang] : meta.company, period: meta.period[lang] }}
              description={t.jobs[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
