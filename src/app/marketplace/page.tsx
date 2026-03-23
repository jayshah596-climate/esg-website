import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Download, Headphones, Zap } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductCard } from '@/components/sections/marketplace/ProductCard'
import { CurrencyBadge } from '@/components/widgets/CurrencyBadge'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'ESG Digital Marketplace — Tools, Dashboards & Templates',
  description:
    'Instantly downloadable ESG and climate tools: GHG calculator, climate scenario dashboard, ESG reporting toolkit, Scope 3 estimation tool and more. Built by ESG practitioners.',
}

const guarantees = [
  {
    icon: Shield,
    title: 'Practitioner-Built',
    desc: 'Created by ESG specialists with real-world consulting experience',
  },
  {
    icon: Download,
    title: 'Instant Download',
    desc: 'Access your tools immediately after purchase — no waiting',
  },
  {
    icon: Headphones,
    title: 'Support Included',
    desc: '30-day email support to help you get the most from your tool',
  },
]

export default function MarketplacePage() {
  return (
    <div className="pt-16">
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-primary via-accent to-secondary py-3 px-4">
        <p className="text-center text-white text-sm font-semibold tracking-wide">
          🔥 Launch Offer – Selected tools starting at £5 · Prices shown in your local currency
        </p>
      </div>
      {/* Live currency indicator */}
      <CurrencyBadge />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            ESG Marketplace
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              ESG Tools
            </span>{' '}
            Marketplace
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Instant access to professional ESG, climate, and sustainability tools — built by practitioners, ready to use today.
          </p>

          {/* Guarantee badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {guarantees.map((g) => {
              const Icon = g.icon
              return (
                <div key={g.title} className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon className="w-4 h-4 text-accent" />
                  <span><strong className="text-white">{g.title}</strong> — {g.desc}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="All Products"
            title="12 Professional"
            titleHighlight="ESG Tools"
            subtitle="From GHG calculators to climate scenario dashboards and CSRD mapping tools — developed and tested in real ESG engagements."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Instant Access</p>
                <p className="text-gray-500 text-xs">Download immediately after payment</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Secure Checkout</p>
                <p className="text-gray-500 text-xs">Powered by Stripe — trusted worldwide</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Professional Grade</p>
                <p className="text-gray-500 text-xs">Built by certified ESG consultants</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-white text-sm font-semibold">30-Day Support</p>
                <p className="text-gray-500 text-xs">Email support included with every tool</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topmate section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Also Available On</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">1:1 Consulting Sessions on Topmate</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            Book paid 1:1 consulting sessions, ESG course access, and personalised advisory directly through Jay&apos;s Topmate profile.
          </p>
          <a
            href="https://topmate.io/dashboard/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-600 transition-all duration-200 hover:scale-105"
          >
            View on Topmate
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Custom request CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Need a Custom Tool?</h2>
          <p className="text-gray-400 mb-6 text-sm">
            We build bespoke ESG dashboards, calculators, and automation solutions. Describe your needs and we&apos;ll scope it out.
          </p>
          <Link
            href="/contact?subject=Custom+Tool"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105"
          >
            Request Custom Solution
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
