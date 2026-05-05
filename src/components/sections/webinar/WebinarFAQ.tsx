'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Do I need any technical or AI background?',
    a: 'Absolutely not! This masterclass is designed for complete beginners. If you can use a smartphone or browse the internet, you have all the skills needed. We start from zero and build up step by step.',
  },
  {
    q: 'Will a recording be provided after the session?',
    a: 'Yes — all registered attendees will receive optional access to the session recording within 24 hours after the live event. This means you can rewatch any section at your own pace.',
  },
  {
    q: 'How will I join the webinar?',
    a: 'After completing your registration, you will receive a confirmation email with the secure webinar link. A reminder will also be sent 1 hour before the session starts on 19 April 2026.',
  },
  {
    q: 'Is this session truly live?',
    a: 'Yes, 100% live. The BTW Academy team will be presenting in real time, running live demonstrations, and answering your questions directly in the Q&A session at the end. No pre-recorded content.',
  },
  {
    q: 'Can I get a refund if I cannot attend?',
    a: 'Yes — if you request a refund at least 48 hours before the event (by 17 April 2026), you will receive a full refund. After that point, the session recording access will be provided as an alternative.',
  },
  {
    q: 'What tools will be covered?',
    a: 'We will cover ChatGPT, Claude, Google Gemini, and Perplexity AI — the four most widely used AI tools in 2026. You will see live demonstrations of each tool solving real everyday tasks.',
  },
]

export function WebinarFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="bg-surface border border-white/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-colors duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="text-white font-medium text-sm sm:text-base group-hover:text-secondary transition-colors">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180 text-secondary' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
