import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const RECOMMENDATIONS = [
  {
    name: 'Niels Aers',
    title: 'CPO at Dropsolid AI',
    date: 'Feb 2026',
    text: `Matic is a standout Drupal Full-stack Developer who brings much more to a team than just technical expertise. During our time together at Dropsolid, I had the pleasure of working closely with him on his professional development.

What truly sets Matic apart is his proactive mindset toward growth. I watched him actively analyze his own working points and tackle self-improvement with impressive discipline. He is never one to shy away from a new challenge; instead, he meets it with a "can-do" attitude and a solution-oriented approach.

Beyond the code, Matic is a "crazy positive" presence. He always wears a smile that is genuinely infectious, lifting the energy of the entire team. Since moving into a different position, I haven't been able to work as closely with him, which is a genuine pity. He is a real added value to any team, and I wish him nothing but the best in his future ventures.`,
  },
  {
    name: 'Jessica Vetsuypers',
    title: 'Talent Unit Manager @ Dropsolid',
    date: 'Jan 2026',
    text: `I'm happy to recommend Matic, who has been part of the Dropsolid team for almost five years, working as a Drupal full-stack developer, primarily for our client Upgrade Estate.

During this long collaboration, Matic consistently proved to be a reliable, skilled and genuinely pleasant person to work with. He fit very well within Dropsolid's values and ways of working: helpful, flexible and always ready to step in when support was needed. His attitude is proactive and solution-oriented and he combines strong technical expertise with a calm and constructive collaboration style.

What stood out to me in particular was Matic's openness to feedback and his continuous willingness to learn and grow. He takes ownership, communicates clearly, and brings positive energy to both the team and the client relationship.

As his current assignment comes to an end, this feels very much like a temporary goodbye. We sincerely hope to work together again in the future and can confidently recommend Matic to any team looking for a capable Drupal full-stack developer.`,
  },
  {
    name: 'Anneleen Demasure',
    title: 'General Management Professional',
    date: 'Dec 2023',
    text: `I worked with Matic while I was CEO at Dropsolid. You have good developers and you have good commercial people. You seldom meet passionate developers with a customer-oriented commercial flair. Matic does that and ... he is fun to work with because a day not laughed is a day not lived.`,
  },
  {
    name: 'Sam Huyghe',
    title: 'Freelancer & Mentor',
    date: 'Jul 2023',
    text: `Matic is an incredible guy to work with. He's fast and professional and gets the job done. There's one skill that gives him an absolute edge over other developers: His ability to really understand a problem; He won't hesitate to find out what it is you really need and what really needs to be built. He's asking the right questions and thinks ahead.`,
  },
  {
    name: 'Simon Whittaker',
    title: 'Digital Strategy, Production & Products',
    date: 'Nov 2021',
    text: `Having worked with him for several years, Matic is the guy you want on your team. Highly capable, great learner, client-friendly and very reliable. Also, a great character and a lot of fun to work with. Highly recommended.`,
  },
  {
    name: 'Mario Zenha-Rela',
    title: 'Consultant, Software Process Improvement',
    date: 'Mar 2017',
    text: `I met Matic as his Professor during his undergraduate course in Software Engineering. He showed a strong work ethic, open-minded curiosity and the drive to go beyond the strictly requested. By these reasons he was a most valuable team member, and recognized as such by its peers.`,
  },
]

const COLLAPSED_HEIGHT = 220 // px — ~8-9 lines of text
const TRUNCATE_LENGTH = 260

function RecommendationCard({ rec, index }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = rec.text.length > TRUNCATE_LENGTH

  const initials = rec.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div
      className="flex flex-col bg-[#0D0D11] border border-white/10 rounded-xl p-6 sm:p-8 hover:border-primary/20 transition-colors duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* Decorative quote mark */}
      <span className="text-5xl font-black text-primary/25 leading-none mb-3 select-none font-mono">
        "
      </span>

      {/* Quote text — animates via max-height */}
      <div
        className="relative overflow-hidden flex-1"
        style={{
          maxHeight: expanded || !isLong ? '2000px' : `${COLLAPSED_HEIGHT}px`,
          transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p className="text-white/55 font-light leading-relaxed text-base whitespace-pre-line">
          {rec.text}
        </p>

        {/* Gradient fade — fades out when expanding */}
        {isLong && (
          <div
            className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0D0D11] to-transparent pointer-events-none"
            style={{
              opacity: expanded ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          />
        )}
      </div>

      {/* Read more / show less toggle */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-sm font-mono text-primary/60 hover:text-primary transition-colors self-start"
        >
          <span
            style={{
              display: 'inline-block',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            ↓
          </span>
          <span>{expanded ? 'show less' : 'read more'}</span>
        </button>
      )}

      {/* Author */}
      <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-[11px] font-bold font-mono shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-base">{rec.name}</p>
          <p className="text-sm text-white/60 font-mono leading-snug">{rec.title}</p>
        </div>
        <span className="ml-auto text-xs text-white/25 font-mono shrink-0">{rec.date}</span>
      </div>
    </div>
  )
}

export default function Recommendations() {
  const { lang } = useLanguage()
  const t = translations[lang].recommendations

  return (
    <section id="recommendations" className="section-pad bg-dark">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
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

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {RECOMMENDATIONS.map((rec, i) => (
            <RecommendationCard key={rec.name} rec={rec} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
