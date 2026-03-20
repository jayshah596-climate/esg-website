import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, BookOpen, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Scope 3 Emissions Explained | BTW AI Resources',
  description:
    'A practical guide to understanding Scope 3 emissions: what they are, why they matter, which categories apply to you, and how to start measuring your value chain emissions.',
}

const tags = ['Scope 3', 'GHG Protocol', 'Supply Chain', 'Net Zero', 'Emissions']

export default function Article2Page() {
  return (
    <div className="pt-16">
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="blue" size="sm">Article</Badge>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              10 min read
            </span>
            <span className="text-gray-600 text-xs">Published May 2024</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Scope 3 Emissions Explained: Where to Start When Data is Scarce
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Scope 3 emissions typically represent 70–90% of a company&apos;s carbon footprint — yet they&apos;re the hardest to measure. This guide gives you a practical starting point.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-white/10">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3">What is Scope 3?</h2>
              <p>Under the <strong className="text-white">GHG Protocol Corporate Standard</strong>, greenhouse gas emissions are divided into three scopes:</p>
              <div className="grid grid-cols-1 gap-3 mt-4">
                {[
                  ['Scope 1', 'Direct emissions from sources owned or controlled by the company (e.g., company vehicles, boilers, process emissions).', 'Easy to measure'],
                  ['Scope 2', 'Indirect emissions from the generation of purchased energy (electricity, heat, steam).', 'Relatively straightforward'],
                  ['Scope 3', 'All other indirect emissions that occur in the value chain — upstream (suppliers) and downstream (customers and product use).', 'Complex but critical'],
                ].map(([scope, desc, note]) => (
                  <div key={scope} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-white font-semibold">{scope}</p>
                        <p className="text-gray-400 text-sm mt-1">{desc}</p>
                      </div>
                      <span className="text-xs text-accent bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 whitespace-nowrap flex-shrink-0">{note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">The 15 Scope 3 Categories</h2>
              <p>The GHG Protocol divides Scope 3 into 15 categories across upstream and downstream activities:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 pr-3 text-gray-400 font-medium w-8">Cat</th>
                      <th className="text-left py-2 pr-3 text-gray-400 font-medium">Category</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Typical % of Footprint</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      ['1', 'Purchased goods & services', 'High (often 40–70%)'],
                      ['2', 'Capital goods', 'Variable'],
                      ['3', 'Fuel & energy activities', 'Low–Medium'],
                      ['4', 'Upstream transport & distribution', 'Low–Medium'],
                      ['5', 'Waste generated in operations', 'Low'],
                      ['6', 'Business travel', 'Low–Medium'],
                      ['7', 'Employee commuting', 'Low'],
                      ['8', 'Upstream leased assets', 'Variable'],
                      ['9', 'Downstream transport & distribution', 'Medium'],
                      ['10', 'Processing of sold products', 'Variable'],
                      ['11', 'Use of sold products', 'High (for consumer goods, energy products)'],
                      ['12', 'End-of-life treatment', 'Low'],
                      ['13', 'Downstream leased assets', 'Variable'],
                      ['14', 'Franchises', 'Variable'],
                      ['15', 'Investments', 'High (for financial institutions)'],
                    ].map(([cat, name, pct]) => (
                      <tr key={cat}>
                        <td className="py-2 pr-3 text-accent font-semibold">{cat}</td>
                        <td className="py-2 pr-3 text-white">{name}</td>
                        <td className="py-2 text-gray-400 text-xs">{pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Step 1: Screen and Prioritise</h2>
              <p>Don&apos;t try to measure everything at once. Start with a <strong className="text-white">hotspot screening</strong> to identify which categories are likely to be most significant for your industry:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Use industry benchmarks or sector averages to estimate relative magnitude</li>
                <li>Focus on categories that are clearly material and where you have some data</li>
                <li>Categories 1 (purchased goods), 11 (product use), and 15 (investments) are often the largest</li>
                <li>GHG Protocol guidance lists which categories are likely most relevant for your sector</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Step 2: Choose Your Calculation Method</h2>
              <p>For each category, three main methods are available:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {[
                  ['Spend-based', 'Multiply spend (£) by spend-based emission factors. Best for early-stage estimates where supplier data is limited.', 'Easiest to implement'],
                  ['Activity-based', 'Use physical activity data (kg, kWh, km) with specific emission factors. More accurate than spend-based.', 'Preferred method'],
                  ['Supplier-specific', 'Use actual emissions data provided directly by suppliers. Most accurate but requires supplier engagement.', 'Gold standard'],
                ].map(([method, desc, note]) => (
                  <div key={method} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{method}</p>
                    <p className="text-gray-400 text-xs mb-2">{desc}</p>
                    <span className="text-xs text-gray-500 italic">{note}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Step 3: Collect Data and Calculate</h2>
              <p>For your first Scope 3 inventory, focus on getting estimates rather than perfect data. A spend-based approach for Category 1 can be done with your accounts payable data and publicly available emission factor databases:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-white">Defra GHG Conversion Factors</strong> — UK Government, updated annually (free)</li>
                <li><strong className="text-white">EPA Supply Chain Emission Factors</strong> — US spend-based factors (free)</li>
                <li><strong className="text-white">Exiobase / EEIO</strong> — academic-grade input-output emission factors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Common Mistakes to Avoid</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Omitting categories without justification — document why each category is or isn&apos;t included</li>
                <li>Using outdated emission factors — always use the most recent year&apos;s factors</li>
                <li>Double-counting — e.g., including both upstream transport and purchased goods emissions for the same activity</li>
                <li>Ignoring data quality — score your data quality and report uncertainty</li>
              </ul>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary/20 rounded-2xl">
            <p className="text-white font-bold text-lg mb-2">Ready to calculate your Scope 3 emissions?</p>
            <p className="text-gray-400 text-sm mb-4">Our Scope 3 Value Chain Emissions Calculator covers all 15 categories with built-in emission factors and methodology guidance.</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm"
              >
                <BookOpen className="w-4 h-4" />
                Browse Scope 3 Tools
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-primary transition-colors text-sm"
              >
                Get Expert Help
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link href="/resources/article-1" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              CSRD Simplified
            </Link>
            <Link href="/resources/article-3" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              Next: Climate Risk Basics
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
