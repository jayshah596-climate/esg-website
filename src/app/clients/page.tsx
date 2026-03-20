import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, ArrowRight, Building2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { clients } from '@/data/clients'

export const metadata: Metadata = {
  title: 'Clients & Partners — BTW AI Services',
  description:
    'BTW AI Services has worked with organisations including PGIM, PwC, ICLEI, NIUA, Vadodara Municipal Corporation, and more across ESG and climate advisory.',
}

const sectorColors: Record<string, 'green' | 'blue' | 'orange' | 'purple' | 'teal' | 'gray'> = {
  'Clean Energy': 'green',
  'Asset Management': 'blue',
  'Financial Services': 'blue',
  'Professional Services': 'orange',
  'Local Government / NGO': 'teal',
  'Climate Data & Finance': 'purple',
  'Real Estate': 'orange',
  'Urban Development / Public Sector': 'teal',
  'Municipal Government': 'teal',
  'Land Management': 'green',
}

export default function ClientsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Clients</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Trusted Across{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Sectors & Geographies
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From global asset managers and multinational corporations to NGOs and municipal governments — BTW AI has delivered ESG and climate advisory across the full spectrum.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-surface border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '10+', label: 'Organisations Served' },
              { value: '5', label: 'Sectors Covered' },
              { value: '3', label: 'Continents' },
              { value: '50+', label: 'Projects Delivered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="All Clients"
            title="Our Client"
            titleHighlight="Portfolio"
            subtitle="A diverse range of organisations across finance, government, NGOs, and the private sector."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((client) => {
              const badgeVariant = sectorColors[client.sector] || 'gray'
              return (
                <div
                  key={client.id}
                  className="group bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="text-accent font-bold text-lg">{client.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base group-hover:text-accent transition-colors">
                        {client.name}
                      </h3>
                      <Badge variant={badgeVariant} size="sm" className="mt-1">{client.sector}</Badge>
                    </div>
                    {client.website && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-accent transition-colors"
                        aria-label={`Visit ${client.name} website`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{client.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/10">
        <div className="max-w-xl mx-auto text-center">
          <Building2 className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Join Our Client Portfolio</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Ready to build a credible ESG programme? Let&apos;s talk about what you need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
