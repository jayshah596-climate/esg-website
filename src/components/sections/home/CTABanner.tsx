import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary-800 to-secondary/80 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-3">
          Ready to Act on Sustainability?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Build a Sustainable Future — Starting Today
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Book a free 30-minute ESG consultation with Jay Shah and discover what's possible for your organisation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105 group text-lg"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 text-lg"
          >
            Browse ESG Tools
          </Link>
        </div>
        <p className="mt-5 text-white/60 text-sm">
          No commitment required. Free consultation for qualifying organisations.
        </p>
      </div>
    </section>
  )
}
