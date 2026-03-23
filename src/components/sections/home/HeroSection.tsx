'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const TOPMATE_URL = 'https://topmate.io/jay_shah_btw/1187577'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-animated-bg grid-pattern">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-2/3 left-1/6 w-56 h-56 bg-accent/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-accent text-sm font-medium px-4 py-2 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            ESG & Climate Advisory | Build The World AI
          </motion.div>

          {/* Brand name + tagline */}
          <motion.div
            className="mb-4"
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
          >
            <p className="text-lg font-semibold text-white tracking-wide">BTW AI Services</p>
            <p className="text-sm text-gray-400 font-light tracking-widest uppercase mt-0.5">Build The World</p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
          >
            Premium{' '}
            <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              ESG & Climate
            </span>{' '}
            Advisory
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="show"
            custom={0.35}
            variants={fadeUp}
          >
            Navigate the transition to net zero with confidence. Expert climate risk analysis, GHG accounting, CSRD compliance, and digital ESG tools — trusted by global organisations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
          >
            <a
              href={TOPMATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-xl hover:shadow-primary/40 hover:scale-105 group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500"
            initial="hidden"
            animate="show"
            custom={0.65}
            variants={fadeUp}
          >
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 text-accent">✓</span>
              CSRD · TCFD · GRI · ISSB · SFDR
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 text-accent">✓</span>
              11+ Years Experience
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 text-accent">✓</span>
              10+ Global Clients
            </span>
          </motion.div>
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
