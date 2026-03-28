import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, BookOpen, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Climate Risk Basics: TCFD and Scenario Analysis | BTW AI Resources',
  description:
    'An introduction to climate risk assessment under the TCFD framework. Covers physical risks, transition risks, scenario analysis, and how to disclose climate risk in your annual report.',
}

const tags = ['Climate Risk', 'TCFD', 'Scenario Analysis', 'NGFS', 'Physical Risk', 'Transition Risk']

export default function Article3Page() {
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
              9 min read
            </span>
            <span className="text-gray-600 text-xs">Published June 2024</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Climate Risk Basics: TCFD and Scenario Analysis Explained
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Climate risk is now a core part of financial risk management. This guide explains the TCFD framework, the difference between physical and transition risks, and how to conduct scenario analysis.
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
              <h2 className="text-xl font-bold text-white mb-3">What is the TCFD?</h2>
              <p>The <strong className="text-white">Task Force on Climate-related Financial Disclosures (TCFD)</strong> was established by the Financial Stability Board in 2015 to develop voluntary, consistent disclosures for companies to communicate their climate risks and opportunities to investors and financial markets.</p>
              <p className="mt-3">Today, TCFD is no longer just voluntary. It has been adopted by regulators across the UK, EU, US, and globally — and its recommendations form the basis of the ISSB&apos;s IFRS S2 standard and CSRD&apos;s ESRS E1 requirements.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">The Four TCFD Pillars</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                {[
                  ['Governance', 'How does your board oversee climate-related risks and opportunities? What is management&apos;s role?'],
                  ['Strategy', 'What are the actual and potential impacts of climate risks and opportunities on your business, strategy, and financial planning?'],
                  ['Risk Management', 'How does your organisation identify, assess, and manage climate-related risks? How are these integrated into overall risk management?'],
                  ['Metrics & Targets', 'What metrics and targets does your organisation use to assess and manage climate risks? Report GHG emissions (Scope 1, 2, 3).'],
                ].map(([pillar, desc]) => (
                  <div key={pillar} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-2">{pillar}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Physical Climate Risks</h2>
              <p>Physical risks arise from the changing physical climate itself. They fall into two categories:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-2">Acute Risks</p>
                  <p className="text-gray-400 text-xs mb-3">Short-term, event-driven climate hazards that can cause immediate damage.</p>
                  <ul className="text-gray-400 text-xs space-y-1 list-disc list-inside">
                    <li>Extreme heat events and heatwaves</li>
                    <li>Flooding (coastal, pluvial, fluvial)</li>
                    <li>Tropical cyclones and storms</li>
                    <li>Wildfires</li>
                    <li>Droughts and water scarcity</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-2">Chronic Risks</p>
                  <p className="text-gray-400 text-xs mb-3">Longer-term, gradual shifts in climate conditions.</p>
                  <ul className="text-gray-400 text-xs space-y-1 list-disc list-inside">
                    <li>Rising mean temperatures</li>
                    <li>Sea level rise</li>
                    <li>Changing precipitation patterns</li>
                    <li>Ocean acidification</li>
                    <li>Permafrost thaw</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Transition Risks</h2>
              <p>Transition risks arise from the process of shifting to a lower-carbon economy. They include:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Risk Type</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="py-2.5 pr-4 text-white font-medium">Policy & Legal</td><td className="py-2.5 text-gray-400 text-xs">Carbon taxes, fuel standards, emissions trading, climate litigation</td></tr>
                    <tr><td className="py-2.5 pr-4 text-white font-medium">Technology</td><td className="py-2.5 text-gray-400 text-xs">Disruption from renewable energy, EVs, CCS; stranded fossil fuel assets</td></tr>
                    <tr><td className="py-2.5 pr-4 text-white font-medium">Market</td><td className="py-2.5 text-gray-400 text-xs">Shift in consumer preferences, commodity repricing, insurance cost increases</td></tr>
                    <tr><td className="py-2.5 pr-4 text-white font-medium">Reputational</td><td className="py-2.5 text-gray-400 text-xs">Greenwashing accusations, investor pressure, media and NGO scrutiny</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Climate Scenario Analysis: A Practical Primer</h2>
              <p>Scenario analysis is a key TCFD requirement. It involves assessing your company&apos;s resilience under different plausible futures — not forecasts, but coherent &ldquo;what if&rdquo; narratives.</p>

              <h3 className="text-lg font-bold text-white mt-5 mb-3">Recommended Scenarios</h3>
              <p>The <strong className="text-white">NGFS (Network for Greening the Financial System)</strong> provides the most widely used climate scenarios for financial institutions and corporates. The three main scenario archetypes are:</p>
              <div className="grid grid-cols-1 gap-3 mt-4">
                {[
                  ['Net Zero 2050 (Orderly)', '1.5°C warming', 'Ambitious, early, well-managed transition. High transition risk, low physical risk.', 'green'],
                  ['Delayed Transition (Disorderly)', '1.8–2°C warming', 'Delayed action leads to sudden, disruptive policy changes. Very high transition risk spike.', 'orange'],
                  ['Hot House World', '3–4°C warming', 'Insufficient action. Low transition risk, very high physical risk by 2050 and beyond.', 'red'],
                ].map(([scenario, temp, desc, color]) => (
                  <div key={scenario} className={`bg-white/5 border rounded-xl p-4 ${color === 'green' ? 'border-green-500/20' : color === 'orange' ? 'border-orange-500/20' : 'border-red-500/20'}`}>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <p className="text-white font-semibold text-sm">{scenario}</p>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color === 'green' ? 'bg-green-500/20 text-green-400' : color === 'orange' ? 'bg-orange-500/20 text-orange-400' : 'bg-red-500/20 text-red-400'}`}>{temp}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-white mt-6 mb-3">3-Step Scenario Analysis Process</h3>
              <ol className="space-y-4">
                {[
                  ['Identify exposures', 'Map which of your assets, operations, revenue streams, and supply chains are exposed to physical and transition risks under each scenario.'],
                  ['Assess financial impacts', 'For each exposure, estimate the potential financial impact on revenue, operating costs, capital expenditure, and asset values. Use qualitative or quantitative methods depending on your maturity.'],
                  ['Test resilience and set strategy', 'Determine whether your current strategy is resilient across scenarios. Identify adaptations, hedges, or opportunities to strengthen your position.'],
                ].map(([title, desc], i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary/30 border border-primary/40 text-accent font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-gray-400 text-sm mt-1">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Key Metrics to Report</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>GHG emissions: Scope 1, Scope 2 (location and market-based), and Scope 3</li>
                <li>GHG emissions intensity (per revenue, per employee, per unit of production)</li>
                <li>Reduction targets and progress against them</li>
                <li>Amount of assets or revenue exposed to climate risks by scenario</li>
                <li>Capital deployment towards climate transition opportunities</li>
              </ul>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary/20 rounded-2xl">
            <p className="text-white font-bold text-lg mb-2">Ready to conduct your climate scenario analysis?</p>
            <p className="text-gray-400 text-sm mb-4">Our Company-Level Climate Scenario Analysis Dashboard includes NGFS scenarios, physical risk heatmaps, and TCFD-aligned output reports — all for just £5.</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm"
              >
                <BookOpen className="w-4 h-4" />
                Get the Climate Risk Tool
              </Link>
              <Link
                href="/contact?subject=Climate+Risk+Assessment"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-primary transition-colors text-sm"
              >
                Book a Climate Risk Workshop
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link href="/resources/article-2" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Scope 3 Explained
            </Link>
            <Link href="/resources/article-4" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              Calculate Physical Climate Risk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
