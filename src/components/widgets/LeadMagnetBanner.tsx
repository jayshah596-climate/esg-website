'use client'

import { useState } from 'react'
import { Download, CheckCircle, Mail } from 'lucide-react'

// ─── Google Apps Script Webhook ──────────────────────────────────────────────
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1HdfvG-8nW73nN1iGCSh1NTJ2RvPtcATQY8cMOz3iVn0
// 2. Go to Extensions > Apps Script and paste the code from /public/apps-script-leads.js
// 3. Deploy as Web App (Execute as: Me, Who has access: Anyone)
// 4. Copy the deployment URL and replace the placeholder below
const LEADS_SHEET_WEBHOOK = 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_LEADS_SCRIPT_URL/exec'
// ─────────────────────────────────────────────────────────────────────────────

const TOOLKIT_DOWNLOAD_URL = '/esg-starter-toolkit.html'

export function LeadMagnetBanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)

    try {
      // Save email to Google Sheet via Apps Script webhook (no-cors: fire and forget)
      await fetch(LEADS_SHEET_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          email,
          date: new Date().toISOString(),
        }),
      })
    } catch {
      // Silently continue — webhook may not be configured yet
    }

    setSubmitted(true)
    setLoading(false)
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
          <p className="text-gray-400 mb-2 text-sm leading-relaxed">
            A practical guide covering ESG reporting basics, CSRD checklist, GHG accounting starter template, and climate risk framework.
          </p>
          <p className="text-accent font-semibold text-sm mb-6">Valued at £99 — yours free</p>

          {submitted ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 bg-primary/20 border border-primary/30 rounded-xl px-6 py-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Toolkit sent to your email!</p>
                  <p className="text-gray-400 text-xs">Or download it instantly below.</p>
                </div>
              </div>
              <a
                href={TOOLKIT_DOWNLOAD_URL}
                download="ESG-Starter-Toolkit.html"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
              >
                <Download className="w-4 h-4" />
                Download Toolkit Now
              </a>
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
