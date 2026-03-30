import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'

const articles = [
  {
    badge: 'Guide' as const,
    badgeColor: 'green' as const,
    readTime: '15 min read',
    title: 'How to Calculate Physical Climate Risk: Models, Methods & Excel',
    description: 'IPCC AR6, NGFS scenarios, CLIMADA, and a step-by-step Excel EAL model — a complete practitioner guide to quantifying physical climate risk for TCFD & ISSB S2.',
    tags: ['Physical Risk', 'TCFD', 'Excel', 'IPCC AR6'],
    href: '/resources/article-4',
  },
  {
    badge: 'Article' as const,
    badgeColor: 'blue' as const,
    readTime: '10 min read',
    title: 'Scope 3 Emissions Explained: Where to Start',
    description: 'Scope 3 emissions represent 70–90% of most companies\' carbon footprint. This practical guide shows you how to screen, prioritise, and measure them.',
    tags: ['Scope 3', 'GHG Protocol', 'Net Zero'],
    href: '/resources/article-2',
  },
  {
    badge: 'Article' as const,
    badgeColor: 'blue' as const,
    readTime: '9 min read',
    title: 'Climate Risk Basics: TCFD and Scenario Analysis',
    description: 'Physical risks, transition risks, and scenario analysis under the TCFD framework — explained for sustainability professionals and finance teams.',
    tags: ['TCFD', 'Climate Risk', 'Scenario Analysis'],
    href: '/resources/article-3',
  },
]

export function LatestInsights() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Latest Insights"
            title="ESG Articles"
            titleHighlight="& Guides"
            subtitle="Practical insights from ESG practitioners — free to read, written to help you do your job better."
          />
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm whitespace-nowrap group transition-colors"
          >
            All Resources
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block bg-dark border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={article.badgeColor} size="sm">{article.badge}</Badge>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="gray" size="sm">{tag}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                Read Article
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
