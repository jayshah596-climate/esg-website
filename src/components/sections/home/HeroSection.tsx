'use client'

import Link from 'next/link'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-animated-bg grid-pattern">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-accent text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            ESG & Climate Advisory | Build The World AI
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Premium{' '}
            <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              ESG & Climate
            </span>{' '}
            Advisory
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Navigate the transition to net zero with confidence. Expert climate risk analysis, GHG accounting, CSRD compliance, and digital ESG tools — trusted by global organisations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-xl hover:shadow-primary/40 hover:scale-105 group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 text-accent">✓</span>
              CSRD · TCFD · GRI · ISSB · SFDR
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 text-accent">✓</span>
              9+ Years Experience
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 text-accent">✓</span>
              10+ Global Clients
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  )
}
