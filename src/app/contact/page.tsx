'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Mail, Phone, MapPin, Linkedin, Youtube, Calendar,
  CheckCircle, Send, Clock, MessageSquare, ExternalLink, ArrowRight
} from 'lucide-react'

// ─── Google Apps Script Webhook ──────────────────────────────────────────────
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1mhxZQHed0xQihSweHxqWqzJC66PBPUV3I94EfDlx5Ww
// 2. Go to Extensions > Apps Script and paste the code from /public/apps-script-contact.js
// 3. Deploy as Web App (Execute as: Me, Who has access: Anyone)
// 4. Copy the deployment URL and replace the placeholder below
const CONTACT_SHEET_WEBHOOK = 'https://script.google.com/macros/s/AKfycbwjXVOSdhUfw8o-W9tqlaiJeWWMx7YgTmFGWezeBECoRciLvgA3ISi0Jb8JLnEczMCr/exec'
// ─────────────────────────────────────────────────────────────────────────────

interface FormData {
  name: string
  company: string
  email: string
  service: string
  message: string
}

const initialForm: FormData = { name: '', company: '', email: '', service: '', message: '' }

const serviceOptions = [
  'ESG Reporting & Compliance',
  'Climate Risk & Scenario Analysis',
  'GHG Emissions Accounting',
  'Net Zero Strategy & Decarbonisation',
  'Sustainable Finance Advisory',
  'Climate Data & Dashboard Solutions',
  'Supply Chain (Scope 3) ESG Analysis',
  'Double Materiality Assessment',
  'Digital Product / Custom Tool',
  'Other / General Enquiry',
]

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email is required'
    if (!form.message.trim()) errs.message = 'Please describe your need'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setLoading(true)

    try {
      // Save to Google Sheet via Apps Script webhook (no-cors: fire and forget)
      await fetch(CONTACT_SHEET_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          name: form.name,
          company: form.company || '—',
          email: form.email,
          service: form.service || '—',
          message: form.message,
          date: new Date().toISOString(),
        }),
      })
    } catch {
      // Silently continue — show success regardless (webhook may not be configured yet)
    }

    setSubmitted(true)
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Your{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              ESG Strategy
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Book a free consultation, ask about our services, or enquire about our digital products. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Get In Touch</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:jayshah596@gmail.com"
                    className="flex items-center gap-3 p-4 bg-surface border border-white/10 rounded-xl hover:border-primary/30 transition-all group"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Email</p>
                      <p className="text-white font-medium text-sm group-hover:text-accent transition-colors">jayshah596@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/447435996857?text=Hi%2C%20I%20want%20ESG%20consulting%20support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-surface border border-white/10 rounded-xl hover:border-[#25d366]/30 transition-all group"
                  >
                    <div className="w-10 h-10 bg-[#25d366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#25d366]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">WhatsApp</p>
                      <p className="text-white font-medium text-sm group-hover:text-[#25d366] transition-colors">+44 7435 996857</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 bg-surface border border-white/10 rounded-xl">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Location</p>
                      <p className="text-white font-medium text-sm">United Kingdom &amp; Global</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-surface border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-gray-400 text-sm">We typically respond within <strong className="text-white">24 hours</strong> on business days.</p>
              </div>

              {/* Booking */}
              <div className="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 rounded-xl p-5">
                <Calendar className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-white font-bold text-sm mb-1">Prefer to Schedule a Call?</h3>
                <p className="text-gray-400 text-xs mb-3">Book a 30-minute free consultation directly via WhatsApp or Topmate.</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/447435996857?text=Hi%20Jay%2C%20I%27d%20like%20to%20book%20a%20free%20ESG%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 bg-[#25d366] text-white text-xs font-semibold rounded-lg hover:bg-[#20ba5a] transition-colors"
                  >
                    Book via WhatsApp
                  </a>
                  <a
                    href="https://topmate.io/dashboard/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 bg-secondary/20 border border-secondary/30 text-secondary text-xs font-semibold rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    Book via Topmate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/jay-shah-climate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] rounded-lg hover:bg-[#0077b5]/20 transition-colors text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@buildtheworld4138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#ff0000]/10 border border-[#ff0000]/30 text-[#ff4444] rounded-lg hover:bg-[#ff0000]/20 transition-colors text-xs font-medium"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface border border-white/10 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-sm mb-2">Thank you for reaching out. We&apos;ll be in touch within 24 hours.</p>
                    <p className="text-gray-500 text-xs mb-4">You can also email us directly:</p>
                    <a
                      href="mailto:jayshah596@gmail.com"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors mb-6"
                    >
                      <Mail className="w-4 h-4" />
                      jayshah596@gmail.com
                    </a>
                    <div className="flex gap-3 justify-center">
                      <Link href="/services" className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                        View Services
                      </Link>
                      <button
                        onClick={() => { setSubmitted(false); setForm(initialForm) }}
                        className="px-5 py-2.5 bg-transparent border border-white/20 text-white text-sm font-semibold rounded-lg hover:border-primary transition-colors"
                      >
                        Send Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <MessageSquare className="w-5 h-5 text-accent" />
                      <h2 className="text-white font-bold text-lg">Send Us a Message</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-xs font-medium mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={`w-full px-4 py-3 bg-dark border rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-primary text-sm transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-gray-400 text-xs font-medium mb-1.5">Company / Organisation</label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your organisation"
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-primary text-sm transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 bg-dark border rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-primary text-sm transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-1.5">Service of Interest</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary text-sm transition-colors appearance-none"
                        >
                          <option value="" className="bg-dark text-gray-400">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-dark">{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-400 text-xs font-medium mb-1.5">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your ESG needs, timeline, and any specific requirements..."
                          className={`w-full px-4 py-3 bg-dark border rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-primary text-sm transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-white/10'}`}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-gray-600 text-xs text-center">
                        By submitting, you agree to our privacy policy. We&apos;ll never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
