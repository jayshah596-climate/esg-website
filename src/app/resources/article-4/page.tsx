import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, BookOpen, ArrowRight, Bot } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'How to Calculate Physical Climate Risk: Models, Methods & Excel Modelling | BTW AI Resources',
  description:
    'A practical guide to quantifying physical climate risk using IPCC/NGFS scenarios, open-source models like CLIMADA, and step-by-step Excel modelling. Learn to translate hazard data into financial impact.',
}

const tags = ['Physical Climate Risk', 'Climate Modelling', 'RCP / SSP', 'NGFS', 'CLIMADA', 'Excel', 'TCFD', 'Scenario Analysis', 'Financial Impact']

export default function Article4Page() {
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
            <Badge variant="blue" size="sm">Guide</Badge>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              15 min read
            </span>
            <span className="text-gray-600 text-xs">Published March 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            How to Calculate Physical Climate Risk: Models, Methods &amp; Excel Modelling
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Physical climate risk is no longer a theoretical concern — regulators, lenders, and investors now require quantified assessments. This guide walks you through the available models, a step-by-step methodology, and how to build a working physical climate risk model in Excel — even without specialist software.
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
          <div className="space-y-10 text-gray-300 leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">What is Physical Climate Risk?</h2>
              <p>
                Physical climate risk refers to the financial and operational consequences of changes in the physical climate system — both sudden extreme events and long-term shifts in climate patterns. Under the <strong className="text-white">TCFD framework</strong> (now embedded in IFRS S2 and ESRS E1), companies must identify, assess, and disclose these risks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-2">Acute Physical Risks</p>
                  <p className="text-gray-400 text-xs mb-3">Sudden, event-driven hazards with immediate impact.</p>
                  <ul className="text-gray-400 text-xs space-y-1 list-disc list-inside">
                    <li>Flooding (coastal, pluvial, fluvial)</li>
                    <li>Extreme heat &amp; heatwaves</li>
                    <li>Tropical cyclones &amp; severe storms</li>
                    <li>Wildfires</li>
                    <li>Drought &amp; water scarcity events</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-2">Chronic Physical Risks</p>
                  <p className="text-gray-400 text-xs mb-3">Gradual, long-term shifts in baseline climate conditions.</p>
                  <ul className="text-gray-400 text-xs space-y-1 list-disc list-inside">
                    <li>Rising mean temperatures</li>
                    <li>Sea level rise</li>
                    <li>Changing precipitation patterns</li>
                    <li>Permafrost thaw</li>
                    <li>Ocean acidification</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                Why does this matter financially? Physical risks affect asset values, supply chains, insurance costs, revenue continuity, and capital expenditure requirements. Lenders and equity investors are increasingly pricing this into financing decisions.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">The Quantification Challenge</h2>
              <p>
                Calculating physical climate risk involves two linked steps:
              </p>
              <ol className="space-y-4 mt-4">
                {[
                  ['Hazard Assessment', 'What climate hazards are projected at each location where you have assets, operations, or supply chain exposure? At what intensity? Under which scenario and time horizon?'],
                  ['Vulnerability & Impact Assessment', 'How sensitive are your specific assets to those hazards? What is the resulting damage, disruption, or financial loss? This requires understanding asset type, construction, criticality, and adaptive capacity.'],
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
              <p className="mt-5">
                The key data inputs you need are: <strong className="text-white">asset location data</strong> (lat/long or postcode), <strong className="text-white">asset type &amp; characteristics</strong> (building type, age, elevation), and <strong className="text-white">climate projections</strong> at the relevant spatial scale and time horizon.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Climate Models &amp; Scenarios Available</h2>
              <p>
                You don&apos;t need to build climate physics from scratch. Several established scenario frameworks and open-source/commercial tools provide the hazard data layer.
              </p>

              <h3 className="text-lg font-bold text-white mt-6 mb-3">IPCC Scenarios: RCP and SSP</h3>
              <p className="mb-4 text-sm text-gray-400">
                The IPCC defines emissions pathways that drive climate projections. Older frameworks used <strong className="text-white">Representative Concentration Pathways (RCPs)</strong>; the current standard is <strong className="text-white">Shared Socioeconomic Pathways (SSPs)</strong> from CMIP6.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Scenario</th>
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Warming by 2100</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Narrative</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">SSP1-1.9 (RCP 2.6)</td>
                      <td className="py-2.5 pr-4 text-green-400 text-xs">~1.5°C</td>
                      <td className="py-2.5 text-gray-400 text-xs">Aggressive mitigation; sustainable development path</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">SSP2-4.5 (RCP 4.5)</td>
                      <td className="py-2.5 pr-4 text-orange-400 text-xs">~2.7°C</td>
                      <td className="py-2.5 text-gray-400 text-xs">Intermediate emissions; current policy trajectory</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">SSP5-8.5 (RCP 8.5)</td>
                      <td className="py-2.5 pr-4 text-red-400 text-xs">~4.4°C</td>
                      <td className="py-2.5 text-gray-400 text-xs">Fossil-fuel intensive; worst-case physical risk scenario</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-white mt-7 mb-3">NGFS Scenarios</h3>
              <p className="mb-4 text-sm text-gray-400">
                The <strong className="text-white">Network for Greening the Financial System (NGFS)</strong> provides scenarios specifically designed for financial risk assessment, combining IPCC climate pathways with macroeconomic models. They are the standard for TCFD/ISSB disclosure.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  ['Net Zero 2050', '~1.5°C', 'Low physical risk. Used as the &quot;best case&quot; baseline.', 'green'],
                  ['Delayed Transition', '~1.8–2°C', 'Moderate physical risk; useful to stress-test mid-range outcomes.', 'orange'],
                  ['Hot House World', '~3–4°C', 'Very high physical risk. The scenario that drives the most severe asset damage estimates.', 'red'],
                ].map(([name, temp, desc, color]) => (
                  <div key={name} className={`bg-white/5 border rounded-xl p-4 ${color === 'green' ? 'border-green-500/20' : color === 'orange' ? 'border-orange-500/20' : 'border-red-500/20'}`}>
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <p className="text-white font-semibold text-sm">{name}</p>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color === 'green' ? 'bg-green-500/20 text-green-400' : color === 'orange' ? 'bg-orange-500/20 text-orange-400' : 'bg-red-500/20 text-red-400'}`}>{temp}</span>
                    </div>
                    <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-white mt-7 mb-3">Available Models &amp; Tools</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Tool / Model</th>
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Type</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">CLIMADA (ETH Zürich)</td>
                      <td className="py-2.5 pr-4 text-green-400 text-xs">Open-source (Python)</td>
                      <td className="py-2.5 text-gray-400 text-xs">Probabilistic hazard + damage modelling; tropical cyclones, floods, heat</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">OS-Climate Platform</td>
                      <td className="py-2.5 pr-4 text-green-400 text-xs">Open-source</td>
                      <td className="py-2.5 text-gray-400 text-xs">Portfolio-level physical &amp; transition risk; PCAF-aligned methodology</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">CMIP6 / ERA5 Data</td>
                      <td className="py-2.5 pr-4 text-green-400 text-xs">Free datasets</td>
                      <td className="py-2.5 text-gray-400 text-xs">Raw climate projections &amp; historical reanalysis for custom modelling</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">Jupiter Intelligence</td>
                      <td className="py-2.5 pr-4 text-blue-400 text-xs">Commercial SaaS</td>
                      <td className="py-2.5 text-gray-400 text-xs">High-resolution asset-level risk scores; widely used by insurers &amp; banks</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">Four Twenty Seven (Moody&apos;s)</td>
                      <td className="py-2.5 pr-4 text-blue-400 text-xs">Commercial data</td>
                      <td className="py-2.5 text-gray-400 text-xs">Country &amp; facility risk scores integrated with financial data providers</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-white font-medium">Moody&apos;s ClimateOnDemand</td>
                      <td className="py-2.5 pr-4 text-blue-400 text-xs">Commercial API</td>
                      <td className="py-2.5 text-gray-400 text-xs">Integrates climate scores into credit &amp; investment workflows</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Step-by-Step Calculation Methodology</h2>
              <p>
                Whether you&apos;re using specialist software or building your own model, the core methodology follows the same six steps:
              </p>
              <ol className="space-y-5 mt-5">
                {[
                  ['Define your asset universe', 'List all assets, operations, or portfolio holdings you want to assess. For each, capture location (lat/long or postcode), asset type, approximate replacement value, and revenue/operational dependency.'],
                  ['Select relevant climate hazards', 'Not all hazards are relevant to all assets. Prioritise based on geography: coastal assets → sea level rise + storm surge; inland assets → fluvial flooding + heat; agricultural operations → drought + precipitation changes.'],
                  ['Choose scenarios and time horizons', 'Minimum: run SSP2-4.5 (intermediate) and SSP5-8.5 (worst case) at 2030, 2050, and 2080. This gives you a short, medium, and long-term view and satisfies TCFD/ISSB requirements for at least two scenarios.'],
                  ['Source hazard data', 'Use CMIP6/ERA5 for climate projections, national flood maps (e.g., UK Environment Agency, FEMA in the US), or commercial hazard datasets. For each asset-hazard pair, obtain projected hazard intensity (e.g., flood depth in metres, °C above baseline).'],
                  ['Apply vulnerability functions', 'Vulnerability (or damage) functions translate hazard intensity into a percentage of asset value damaged. Example: a 0.5m flood event may damage 15% of a ground-floor commercial building. HAZUS (US), JRC (EU), and CLIMADA each provide standardised damage curves by asset class.'],
                  ['Translate to financial impact', 'Multiply asset replacement value × damage fraction to estimate direct damage costs. Also model indirect impacts: revenue loss during recovery, increased insurance premiums, CapEx for adaptation measures, and supply chain disruption costs.'],
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

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Can You Do It in Excel? Yes — Here&apos;s How</h2>
              <p>
                Full probabilistic modelling requires Python or GIS software — but a <strong className="text-white">semi-quantitative Excel model</strong> is entirely achievable and acceptable for many disclosure contexts, particularly for first-time assessments or SMEs.
              </p>

              <h3 className="text-lg font-bold text-white mt-6 mb-3">Excel Model Structure</h3>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {[
                  ['Tab 1: Asset Register', 'List each asset with: Name, Location (country/region), Asset Type, Replacement Value (£), Annual Revenue Dependent (£)'],
                  ['Tab 2: Hazard Exposure Matrix', 'For each asset × hazard combination (e.g., Facility A × Flood), assign an exposure score (1–5) based on publicly available hazard maps or qualitative judgement. Repeat for each scenario (Current, 2030, 2050, 2080).'],
                  ['Tab 3: Vulnerability Scoring', 'Assign a vulnerability score (1–5) per asset × hazard based on building type, age, adaptive capacity (e.g., flood barriers, elevated foundations). This is your &quot;sensitivity&quot; layer.'],
                  ['Tab 4: Risk Score & Financial Proxy', 'Risk Score = Exposure × Vulnerability. Map risk scores to damage ranges (e.g., Low = 0–2% of asset value, Medium = 3–10%, High = 11–30%, Very High = >30%). Multiply by asset value to get an estimated financial impact range per scenario and time horizon.'],
                  ['Tab 5: Summary Dashboard', 'Aggregate risk scores by asset, business unit, scenario, and time horizon. Highlight highest-risk asset × hazard combinations. This becomes your TCFD disclosure table.'],
                ].map(([title, desc], i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">{title}</p>
                    <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-white mt-7 mb-3">Excel vs. Specialist Tools: When to Use Each</h3>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Situation</th>
                      <th className="text-left py-2 text-gray-400 font-medium">Recommended Approach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-2.5 pr-4 text-gray-300 text-xs">First-time TCFD/ISSB assessment, &lt;50 assets</td>
                      <td className="py-2.5 text-green-400 text-xs">Excel semi-quantitative model ✓</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-gray-300 text-xs">Regulatory submission (CSRD, UK SDR) requiring audit trail</td>
                      <td className="py-2.5 text-green-400 text-xs">Excel with referenced data sources ✓</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-gray-300 text-xs">Large portfolio (&gt;500 assets), high precision needed</td>
                      <td className="py-2.5 text-blue-400 text-xs">Python / CLIMADA / commercial platform</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-gray-300 text-xs">Financial institution with loan book or real estate portfolio</td>
                      <td className="py-2.5 text-blue-400 text-xs">Commercial data provider (Jupiter, Moody&apos;s)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 text-gray-300 text-xs">Need probabilistic loss exceedance curves</td>
                      <td className="py-2.5 text-blue-400 text-xs">CLIMADA or actuarial modelling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-white mb-3">From Excel to Advanced Modelling</h2>
              <p>
                Excel is a great starting point — but many organisations quickly hit its limits: manual data entry, lack of spatial resolution, no Monte Carlo simulation, and difficulty automating scenario updates. The natural progression is:
              </p>
              <div className="grid grid-cols-1 gap-3 mt-5">
                {[
                  ['Stage 1: Excel (Qualitative / Semi-Quantitative)', 'Manual hazard scoring, risk matrix, financial proxy ranges. Suitable for first assessments and narrative disclosures.'],
                  ['Stage 2: Python + Open Data (Quantitative)', 'Use CLIMADA or custom scripts with CMIP6/ERA5 data to generate asset-level hazard intensities and apply damage functions. Automate scenario comparison.'],
                  ['Stage 3: AI-Augmented Modelling', 'Use tools like Claude Code to automate data ingestion, generate scenario narratives, build interactive dashboards, and produce TCFD/ISSB-ready output reports from your model outputs — in a fraction of the time.'],
                  ['Stage 4: Commercial Platform Integration', 'For large portfolios or regulatory-grade outputs, integrate commercial hazard data APIs (Jupiter, Moody\'s) into automated reporting pipelines.'],
                ].map(([title, desc], i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary/30 border border-primary/40 text-accent font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex-1">
                      <p className="text-white font-semibold text-sm mb-1">{title}</p>
                      <p className="text-gray-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-gray-400 text-sm">
                The good news: you don&apos;t need to jump from Excel to a full GIS platform overnight. Each stage builds on the last, and <strong className="text-white">AI-assisted tooling makes Stage 3 accessible even without a data science background</strong> — which is exactly what our courses cover.
              </p>
            </section>

          </div>

          {/* CTA — Primary: Climate Risk Masterclass */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/10 border border-blue-500/20 rounded-2xl">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Climate Risk Masterclass</p>
                <p className="text-blue-400 text-sm font-medium">Assessment &amp; Management — £150</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              Want to go deeper than this article? Our <strong className="text-white">Climate Risk Masterclass</strong> teaches you the complete framework — from hazard identification and NGFS scenario modelling, to financial impact quantification, TCFD/ISSB alignment, and building your own Excel and Python-based risk models. Everything covered in this guide, and much more, taught with real-world examples.
            </p>
            <ul className="text-gray-400 text-sm space-y-1.5 mb-5 list-disc list-inside">
              <li>Physical &amp; transition risk deep-dive with worked examples</li>
              <li>Scenario modelling using NGFS and SSP pathways</li>
              <li>Step-by-step Excel physical risk model walkthrough</li>
              <li>Financial impact assessment (asset damage, revenue, CapEx)</li>
              <li>TCFD &amp; ISSB S2 aligned disclosure templates</li>
            </ul>
            <a
              href="https://buy.stripe.com/9B63cvbM1dZ36344llgYU0d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors text-sm"
            >
              <BookOpen className="w-4 h-4" />
              Enrol in the Climate Risk Masterclass — £150
            </a>
          </div>

          {/* CTA — Secondary: Claude Code for ESG */}
          <div className="mt-5 p-6 bg-gradient-to-r from-purple-600/20 to-violet-600/10 border border-purple-500/20 rounded-2xl">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Claude Code for Climate Risk &amp; ESG Reporting</p>
                <p className="text-purple-400 text-sm font-medium">AI-Powered Modelling — £100</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              Ready to move beyond Excel? This course shows you how to use <strong className="text-white">Claude Code</strong> to automate your physical climate risk model — ingesting hazard data, running scenario comparisons, building interactive dashboards, and generating TCFD-ready reports. No prior coding experience required.
            </p>
            <ul className="text-gray-400 text-sm space-y-1.5 mb-5 list-disc list-inside">
              <li>Automate the Excel model from this guide using AI</li>
              <li>Build a physical climate risk dashboard in hours</li>
              <li>Generate TCFD narrative outputs automatically</li>
              <li>Prompt engineering techniques for ESG &amp; climate data</li>
              <li>Real project-based learning with ESG deliverables</li>
            </ul>
            <a
              href="https://buy.stripe.com/cNi7sLaHX7AFezA3hhgYU0e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors text-sm"
            >
              <Bot className="w-4 h-4" />
              Enrol in Claude Code for ESG Reporting — £100
            </a>
          </div>

          {/* Closing nudge */}
          <div className="mt-5 p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-gray-400 text-sm text-center">
              Not sure which course to start with?{' '}
              <Link href="/contact" className="text-accent hover:underline">
                Book a free 15-minute chat
              </Link>{' '}
              and we&apos;ll recommend the right path for your role and goals.
            </p>
          </div>

          {/* Nav */}
          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link href="/resources/article-3" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Climate Risk Basics
            </Link>
            <Link href="/resources" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              All Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>
    </div>
  )
}
