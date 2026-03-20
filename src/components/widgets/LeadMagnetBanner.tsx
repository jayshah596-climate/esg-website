'use client'

import { useState } from 'react'
import { Download, CheckCircle, Mail } from 'lucide-react'

export function LeadMagnetBanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1200)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary/20 via-surface to-secondary/10 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Download className="w-4 h-4" />
            Free Download
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get Your Free ESG Starter Toolkit
          </h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            A practical guide covering ESG reporting basics, CSRD checklist, GHG accounting starter template, and climate risk framework — valued at £99, yours free.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 bg-primary/20 border border-primary/30 rounded-xl px-6 py-4">
              <CheckCircle className="w-6 h-6 text-accent" />
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Toolkit on its way!</p>
                <p className="text-gray-400 text-xs">Check your inbox — we&apos;ll send it within minutes.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 disabled:opacity-60 text-sm whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Get Free Toolkit
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-gray-500 text-xs mt-3">No spam. Unsubscribe anytime. Your data is safe with us.</p>
        </div>
      </div>
    </section>
  )
}
