import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Youtube, Download, ExternalLink, Play } from 'lucide-react'
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

const youtubeVideos = [
  {
    title: 'CSRD Explained: What Every Business Needs to Know',
    description: 'Breaking down the Corporate Sustainability Reporting Directive — scope, timelines, and what you need to do now.',
    topic: 'CSRD',
    color: 'from-green-900/60 to-green-800/30',
  },
  {
    title: 'How to Calculate GHG Emissions (Scope 1, 2 & 3)',
    description: 'Step-by-step walkthrough of the GHG Protocol methodology with practical examples for each scope.',
    topic: 'GHG Accounting',
    color: 'from-blue-900/60 to-blue-800/30',
  },
  {
    title: 'Climate Scenario Analysis for Beginners',
    description: 'An introduction to NGFS and IPCC scenarios and how to use them for TCFD climate risk disclosure.',
    topic: 'Climate Risk',
    color: 'from-orange-900/60 to-orange-800/30',
  },
  {
    title: 'Double Materiality: The Heart of CSRD',
    description: 'How to conduct a double materiality assessment — impact materiality, financial materiality, and the IRO register.',
    topic: 'Double Materiality',
    color: 'from-purple-900/60 to-purple-800/30',
  },
  {
    title: 'Net Zero vs Carbon Neutral: What Is the Difference?',
    description: 'Demystifying the terminology around net zero, carbon neutrality, carbon offsets, and science-based targets.',
    topic: 'Net Zero',
    color: 'from-teal-900/60 to-teal-800/30',
  },
  {
    title: 'ESG Ratings Explained: How Sustainalytics, MSCI and CDP Score Companies',
    description: 'How major ESG rating agencies work, what they measure, and why scores can diverge dramatically.',
    topic: 'ESG Ratings',
    color: 'from-indigo-900/60 to-indigo-800/30',
  },
]

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
                  className="group bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col"
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
                      href={resource.link || '/contact?subject=Resource+Enquiry'}
                      className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* YouTube section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#ff0000]/20 rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-[#ff4444]" />
                </div>
                <p className="text-accent font-semibold text-sm uppercase tracking-widest">YouTube Channel</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Build The World —{' '}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Video Content
                </span>
              </h2>
              <p className="text-gray-400 text-sm max-w-xl">
                ESG explainers, framework breakdowns, and practical tutorials on GHG accounting, CSRD, climate risk, and more.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@buildtheworld4138"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff0000]/20 border border-[#ff0000]/30 text-[#ff4444] font-semibold rounded-xl hover:bg-[#ff0000]/30 transition-all duration-200 whitespace-nowrap"
            >
              <Youtube className="w-5 h-5" />
              View Full Channel
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {youtubeVideos.map((video) => (
              <a
                key={video.title}
                href="https://www.youtube.com/@buildtheworld4138"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-dark border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff0000]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff0000]/10 hover:-translate-y-1"
              >
                {/* Thumbnail area */}
                <div className={`w-full h-40 bg-gradient-to-br ${video.color} border-b border-white/5 relative flex items-center justify-center`}>
                  <div className="w-14 h-14 bg-[#ff0000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs bg-black/50 text-white px-2 py-0.5 rounded font-medium">{video.topic}</span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1.5 group-hover:text-[#ff4444] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{video.description}</p>
                  <div className="flex items-center gap-1.5 mt-3 text-[#ff4444] text-xs font-medium">
                    <Youtube className="w-3.5 h-3.5" />
                    Watch on YouTube
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit download */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Download className="w-7 h-7 text-accent" />
          </div>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Free Download</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">ESG Starter Toolkit</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            Download our free practitioner-built guide covering ESG basics, CSRD checklist, GHG accounting template, and climate risk framework.
          </p>
          <a
            href="/esg-starter-toolkit.html"
            download="ESG-Starter-Toolkit.html"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Free Toolkit
          </a>
          <p className="text-gray-600 text-xs mt-3">No email required for direct download</p>
        </div>
      </section>

      {/* Topmate section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/10">
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
