import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Youtube, Download, ExternalLink, Tag } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { LeadMagnetBanner } from '@/components/widgets/LeadMagnetBanner'
import { resources } from '@/data/resources'

export const metadata: Metadata = {
  title: 'Resources — ESG Guides, Tools & Insights',
  description:
    'Free ESG resources: guides on CSRD double materiality, climate scenario analysis, Scope 3 accounting. Plus free ESG toolkit download and video content.',
}

const typeConfig: Record<string, { color: 'green' | 'blue' | 'orange' | 'purple'; label: string }> = {
  article: { color: 'blue', label: 'Article' },
  guide: { color: 'green', label: 'Guide' },
  video: { color: 'orange', label: 'Video' },
  download: { color: 'purple', label: 'Download' },
}

export default function ResourcesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            ESG Knowledge{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Hub
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Free guides, articles, tools, and video content to help you navigate the world of ESG and climate sustainability.
          </p>
        </div>
      </section>

      {/* Lead magnet */}
      <LeadMagnetBanner />

      {/* Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Insights"
            title="Latest ESG"
            titleHighlight="Articles & Guides"
            subtitle="Practical insights from our ESG practitioners — written to help sustainability professionals do their jobs better."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const typeConf = typeConfig[resource.type] || typeConfig.article
              return (
                <div
                  key={resource.id}
                  className="group bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={typeConf.color} size="sm">{typeConf.label}</Badge>
                    {resource.readTime && (
                      <span className="flex items-center gap-1 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        {resource.readTime}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors flex-1">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="gray" size="sm">{tag}</Badge>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <Link
                      href="/contact?subject=Resource+Enquiry"
                      className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Read More
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* YouTube section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 bg-[#ff0000]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Youtube className="w-7 h-7 text-[#ff4444]" />
          </div>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">YouTube Channel</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Build The World — Video Content</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            ESG explainers, framework breakdowns, and practical tutorials on GHG accounting, CSRD, climate risk, and more.
          </p>
          <a
            href="https://www.youtube.com/@buildtheworld4138"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#ff0000]/20 border border-[#ff0000]/30 text-[#ff4444] font-semibold rounded-xl hover:bg-[#ff0000]/30 transition-all duration-200"
          >
            <Youtube className="w-5 h-5" />
            Watch on YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Topmate section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Courses & Sessions</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Book a 1:1 Session or Course on Topmate
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            Access paid 1:1 consulting sessions, ESG courses, resume reviews, and personalised advisory directly on Jay Shah&apos;s Topmate profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://topmate.io/dashboard/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-600 transition-all duration-200 hover:scale-105"
            >
              View on Topmate
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:border-primary hover:text-accent transition-all duration-200"
            >
              Browse Digital Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
