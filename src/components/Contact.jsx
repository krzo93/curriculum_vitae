import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import translations from '../translations'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'
  const [honeypot, setHoneypot] = useState('')

  // Anti-spam refs — not state, no re-render needed
  const mountTime    = useRef(Date.now())
  const submitCount  = useRef(0)
  const MAX_SUBMITS  = 3
  const MIN_FILL_MS  = 3000

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1. Honeypot — bot filled the hidden field
    if (honeypot) return

    // 2. Timing — submitted faster than a human can read the form
    if (Date.now() - mountTime.current < MIN_FILL_MS) return

    // 3. Rate limit — too many submissions this session
    if (submitCount.current >= MAX_SUBMITS) return

    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
          to_name:    'Matic',
        },
        PUBLIC_KEY,
      )
      submitCount.current += 1
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const contactItems = [
    { icon: Mail,   value: 'matic.krizaj93@gmail.com', href: 'mailto:matic.krizaj93@gmail.com' },
    { icon: Phone,  value: '+386 41 403 844',           href: 'tel:+38641403844'                },
    { icon: MapPin, value: t.location,                  href: null, accent: true                },
  ]

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/matic-krizaj/', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="section-pad bg-dark">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col items-center mb-14 lg:mb-20 text-center" data-aos="fade-up">
          <h2 className="section-title">{t.title}</h2>
          <div className="section-divider" />
        </div>

        <div
          className="bg-dark-alt border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl"
          data-aos="zoom-in"
        >
          {/* ── Left — contact info ── */}
          <div className="p-7 sm:p-10 lg:p-14 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">{t.heading}</h3>
            <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">{t.description}</p>

            <div className="space-y-4 mb-8">
              {contactItems.map((item) => {
                const Icon = item.icon
                const inner = (
                  <>
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Icon size={17} className={item.accent ? 'text-primary' : ''} />
                    </div>
                    <span className="text-sm sm:text-base break-all">{item.value}</span>
                  </>
                )
                return item.href ? (
                  <a
                    key={item.value}
                    href={item.href}
                    className="flex items-center gap-4 text-white/60 hover:text-primary transition-all group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.value} className="flex items-center gap-4 text-white/60">
                    {inner}
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark transition-all"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* ── Right — form ── */}
          <form
            onSubmit={handleSubmit}
            className="p-7 sm:p-10 lg:p-14 bg-black/20 flex flex-col gap-4"
          >
            {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
            <div aria-hidden="true" style={{ position: 'absolute', opacity: 0, height: 0, width: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <input
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-dark border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-primary transition-colors text-white placeholder:text-white/30 text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder={t.emailPlaceholder}
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-dark border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-primary transition-colors text-white placeholder:text-white/30 text-sm sm:text-base"
            />
            <textarea
              name="message"
              rows={6}
              placeholder={t.messagePlaceholder}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-dark border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-primary transition-colors text-white placeholder:text-white/30 resize-none text-sm sm:text-base"
            />

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className={`btn w-full justify-center gap-2 transition-all duration-500 ${
                status === 'sent'
                  ? 'bg-green-600 text-white shadow-[0_10px_20px_rgba(22,163,74,0.3)] pointer-events-none'
                  : status === 'error'
                  ? 'bg-red-600/80 text-white pointer-events-none'
                  : status === 'sending'
                  ? 'btn-primary opacity-70 pointer-events-none'
                  : 'btn-primary'
              }`}
            >
              {status === 'sending' && <><Loader2 size={18} className="animate-spin" /> {t.sending}</>}
              {status === 'sent'    && <><CheckCircle size={18} /> {t.sent}</>}
              {status === 'error'   && <><AlertCircle size={18} /> {t.error}</>}
              {status === 'idle'    && <><Send size={18} /> {t.submit}</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
