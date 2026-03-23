'use client'

import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'

const TOPMATE_URL = 'https://topmate.io/jay_shah_btw/1187577'

export function CTABar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-primary-700 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-3 text-center">
          <span className="text-sm">🌱</span>
          <span className="text-white text-sm font-medium">
            Book your <strong>Free ESG Consultation</strong> — Limited slots available
          </span>
          <a
            href={TOPMATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-white/90 hover:text-white text-sm font-semibold border-b border-white/40 hover:border-white transition-colors"
          >
            Book Now <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/70 hover:text-white transition-colors flex-shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
