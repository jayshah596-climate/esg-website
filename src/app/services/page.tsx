import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/sections/services/ServiceCard'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'ESG & Climate Consulting Services',
  description:
    'Comprehensive ESG and climate consulting services: ESG reporting, climate risk analysis, GHG accounting, net zero strategy, sustainable finance, double materiality assessment, and more.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            End-to-End{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              ESG & Climate
            </span>{' '}
            Advisory
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            From mandatory ESG reporting and climate risk quantification through to net zero strategy and digital tools — we deliver practical, science-based solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105 group"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-surface border-b border-white/10 sticky top-[54px] z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="px-3 py-1.5 text-sm text-gray-400 hover:text-accent border border-transparent hover:border-primary/30 rounded-lg transition-all whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Not sure which service you need?
          </h2>
          <p className="text-gray-400 mb-6">
            Book a free 30-minute call and we&apos;ll help you identify the right approach for your organisation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105"
          >
            Get a Free ESG Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
