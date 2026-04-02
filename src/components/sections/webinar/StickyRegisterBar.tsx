'use client'

import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'

const REGISTER_URL = 'https://buy.stripe.com/fZuaEX5nDcUZ3UWeZZgYU0i'

export function StickyRegisterBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-surface/95 backdrop-blur-md border-t border-secondary/30 shadow-2xl shadow-secondary/10 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">
              AI Masterclass for Beginners
            </p>
            <p className="text-gray-400 text-xs">
              Sat 11 Apr 2026 · 2:00 PM IST · <span className="text-secondary font-medium">£5 only</span>
            </p>
          </div>
          <a
            href={REGISTER_URL}
            className="flex-shrink-0 flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-secondary/30"
          >
            <Zap className="w-4 h-4" />
            Reserve Spot — £5
          </a>
        </div>
      </div>
    </div>
  )
}
