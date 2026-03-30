import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, ArrowRight, BookOpen, AlertTriangle, CheckCircle, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'How to Calculate Physical Climate Risk: Models, Methods & Excel | BTW AI',
  description:
    'A complete practitioner guide to calculating physical climate risk — covering acute vs chronic hazards, IPCC AR6 / NGFS scenario models, CLIMADA, and a step-by-step Excel Expected Annual Loss methodology.',
}

const tags = ['Physical Climate Risk', 'TCFD', 'IPCC AR6', 'NGFS', 'Excel Modelling', 'Scenario Analysis', 'ISSB S2']

const TOPMATE_URL = 'https://topmate.io/jay_shah_btw/1187577'

export default function Article4Page() {
  return (
    <div className="pt-16">
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="green" size="sm">Guide</Badge>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              15 min read
            </span>
            <span className="text-gray-600 text-xs">Published March 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            How to Calculate Physical Climate Risk: Models, Methods & Excel
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Physical climate risk is now a mandatory disclosure requirement under TCFD, ISSB S2, and CSRD E1 — yet most organisations don't know where to start. This guide takes you from first principles through to a working Excel model, with pointers to the professional tools used by insurers, banks, and consultants.
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

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What is Physical Climate Risk?</h2>
              <p>
                Physical climate risk refers to the financial and operational impacts on assets, supply chains, and people arising from changes in the physical climate system. Under the TCFD framework — and now codified in <strong className="text-white">ISSB IFRS S2</strong> and <strong className="text-white">CSRD ESRS E1</strong> — companies must assess and disclose these risks across multiple time horizons and warming scenarios.
              </p>
              <p className="mt-4">Physical risks are divided into two categories:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <p className="text-orange-400 font-semibold text-sm">Acute Risks</p>
                  </div>
                  <p className="text-gray-400 text-sm">Driven by extreme weather events of increasing frequency and severity.</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-300">
                    <li>• Flooding (fluvial, pluvial, coastal)</li>
                    <li>• Tropical cyclones & extreme wind</li>
                    <li>• Wildfires</li>
                    <li>• Hailstorms & freezing rain</li>
                    <li>• Extreme heat events</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <p className="text-blue-400 font-semibold text-sm">Chronic Risks</p>
                  </div>
                  <p className="text-gray-400 text-sm">Driven by longer-term shifts in climate patterns.</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-300">
                    <li>• Sea level rise</li>
                    <li>• Chronic heat stress (WBGT)</li>
                    <li>• Permafrost thaw</li>
                    <li>• Changing precipitation patterns</li>
                    <li>• Water scarcity / drought</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. The Four-Step Assessment Framework</h2>
              <p>Regardless of which model or tool you use, all physical risk assessments follow this core logic:</p>

              <ol className="mt-5 space-y-5">
                {[
                  {
                    n: '01', title: 'Hazard', color: 'text-red-400 bg-red-500/10 border-red-500/20',
                    desc: 'What climate hazards are projected at a given location and time horizon? (e.g. 1-in-100-year flood probability at 2°C warming by 2050)',
                  },
                  {
                    n: '02', title: 'Exposure', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
                    desc: 'Are your assets, operations, or supply chain nodes located where those hazards occur? (e.g. factory on floodplain within 100m of river)',
                  },
                  {
                    n: '03', title: 'Vulnerability', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
                    desc: 'How sensitive is the asset to the hazard, and how adaptive is the organisation? (e.g. ground-floor electrical equipment vs elevated plant)',
                  },
                  {
                    n: '04', title: 'Financial Impact', color: 'text-accent bg-primary/10 border-primary/20',
                    desc: 'What is the expected financial loss — direct damage, business interruption, supply chain disruption, stranded assets? Expressed as Expected Annual Loss (EAL).',
                  },
                ].map((step) => (
                  <li key={step.n} className={`flex gap-4 p-4 rounded-xl border ${step.color.split(' ').slice(1).join(' ')}`}>
                    <span className={`text-2xl font-black ${step.color.split(' ')[0]} flex-shrink-0 w-10 text-center`}>{step.n}</span>
                    <div>
                      <p className="text-white font-bold text-base mb-1">{step.title}</p>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* 3 — Models */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Available Models & Data Sources</h2>
              <p className="mb-5">
                The quality of your physical risk assessment depends heavily on the climate data and models you use. Here is a structured overview from free/open-source to enterprise-grade:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Model / Source</th>
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Type</th>
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Best For</th>
                      <th className="text-left py-3 text-gray-400 font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      ['IPCC AR6 / SSP Scenarios', 'Global climate scenarios', 'Scenario selection, temperature & precipitation projections', 'Free'],
                      ['NGFS Physical Risk Scenarios', 'Finance-sector scenarios', 'TCFD / ISSB S2 financial risk translation', 'Free'],
                      ['CLIMADA (ETH Zurich)', 'Open-source risk platform', 'Multi-hazard EAL modelling for assets globally', 'Free (Python)'],
                      ['NASA NEX-GDDP-CMIP6', 'Downscaled climate data', 'Grid-level temperature & precipitation projections', 'Free'],
                      ['NOAA / Copernicus ERA5', 'Historical climate data', 'Baseline hazard calibration', 'Free'],
                      ['XDI Cross Dependency Index', 'Asset-level risk scores', 'Portfolio screening, bulk asset analysis', 'Commercial'],
                      ['Jupiter Intelligence', 'Asset-level risk scores', 'Real estate, infrastructure, financial services', 'Commercial'],
                      ['Four Twenty Seven (Moody\'s)', 'Asset-level risk scores', 'Investment-grade location risk data', 'Commercial'],
                      ['Munich Re / Swiss Re tools', 'Catastrophe models', 'Insurance underwriting, NatCat EAL', 'Commercial'],
                    ].map(([name, type, use, cost]) => (
                      <tr key={name}>
                        <td className="py-3 pr-4 text-white font-medium">{name}</td>
                        <td className="py-3 pr-4 text-gray-400">{type}</td>
                        <td className="py-3 pr-4 text-gray-400">{use}</td>
                        <td className={`py-3 font-semibold ${cost === 'Free' ? 'text-accent' : 'text-orange-400'}`}>{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-blue-300 text-sm font-semibold mb-1">💡 Which scenario should you use?</p>
                <p className="text-gray-400 text-sm">
                  For TCFD/ISSB S2 compliance, assess at minimum two contrasting scenarios: a <strong className="text-white">low warming scenario</strong> (SSP1-2.6 or NGFS "Net Zero 2050") and a <strong className="text-white">high warming scenario</strong> (SSP5-8.5 or NGFS "Current Policies"). This captures both transition and physical risk trade-offs.
                </p>
              </div>
            </section>

            {/* 4 — Excel */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-2">4. Can You Calculate Physical Climate Risk in Excel?</h2>
              <p className="text-accent font-semibold text-lg mb-4">Yes — and here's exactly how.</p>
              <p className="mb-6">
                For organisations without a dedicated risk platform budget, a well-structured Excel model can produce a credible, TCFD-aligned physical risk assessment. It won't match the resolution of CLIMADA or XDI, but it is sufficient for initial screening, board reporting, and regulatory disclosure narratives.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 'Step 1', title: 'Build Your Asset Register',
                    content: `Create a structured list of all assets (or business operations) to be assessed. For each asset include: Name, Location (lat/long or postcode), Asset type (building, plant, warehouse, data centre), Replacement value (£), Annual revenue contribution (£), Key dependencies (water, electricity, road access).`,
                    tip: 'Tip: Start with your top 10 highest-value or highest-revenue assets. Cover >80% of portfolio value.',
                  },
                  {
                    step: 'Step 2', title: 'Select Scenarios & Time Horizons',
                    content: `Define three rows per asset: Short-term (2030), Medium-term (2050), Long-term (2100). For each time horizon, apply two scenarios: SSP2-4.5 (intermediate, 2–3°C) and SSP5-8.5 (high-end, 4–5°C). Download scenario data from NASA NEX-GDDP-CMIP6 or use the IPCC AR6 Interactive Atlas.`,
                    tip: 'Tip: The IPCC AR6 WGI Interactive Atlas (interactive-atlas.ipcc.ch) lets you download gridded temperature and precipitation data by region at no cost.',
                  },
                  {
                    step: 'Step 3', title: 'Score Hazard Exposure (0–5 scale)',
                    content: `For each hazard type (flooding, heat, drought, sea level rise, wildfire, wind), assign an exposure score (0 = not exposed, 5 = very high exposure) using: Distance from flood zone or coastline, Historical event frequency from NOAA or EM-DAT, Projected change in hazard intensity from your chosen scenario. Multiply by a confidence weight (0.6–1.0) based on data quality.`,
                    tip: null,
                  },
                  {
                    step: 'Step 4', title: 'Assign Vulnerability Factors',
                    content: `Vulnerability reflects how much damage the hazard causes given exposure. Use a vulnerability factor (VF) from 0.0 to 1.0 based on: Asset construction type (e.g. steel frame = low VF vs. unreinforced masonry = high VF), Elevation above flood level, Existing adaptation measures (flood barriers, cooling systems), Business continuity planning maturity. Source: IPCC WGII AR6 Chapter 17 provides sector-level vulnerability multipliers.`,
                    tip: null,
                  },
                  {
                    step: 'Step 5', title: 'Calculate Expected Annual Loss (EAL)',
                    content: null,
                    formula: true,
                    tip: 'P = Annual exceedance probability of the hazard event (e.g. 1% for 1-in-100-year flood). Severity = physical damage ratio (e.g. 0.3 = 30% of asset value damaged). This can be summed across multiple hazard types.',
                  },
                  {
                    step: 'Step 6', title: 'Discount EAL to NPV Across Time Horizon',
                    content: `Apply a discount rate (typically 3–7% for infrastructure) to translate future EAL values to present value. This enables comparison with adaptation investment costs — a key TCFD requirement. Sum discounted EAL across your time horizon to get Total Physical Risk Exposure (£) per asset.`,
                    tip: null,
                  },
                  {
                    step: 'Step 7', title: 'Aggregate, Rank & Disclose',
                    content: `Rank assets by Total Physical Risk Exposure. Identify the top 3–5 "hotspot" assets and 1–2 "critical" hazard types. Produce a heat map matrix (hazard type vs. time horizon) for board-level reporting. This output directly feeds your TCFD Physical Risk disclosure (Strategy section) and ISSB S2 paragraph 25 requirements.`,
                    tip: null,
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-surface border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-accent bg-primary/20 border border-primary/30 px-2.5 py-1 rounded-full">{item.step}</span>
                      <h3 className="text-white font-bold text-base">{item.title}</h3>
                    </div>
                    {item.content && <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>}
                    {item.formula && (
                      <div className="bg-dark border border-white/10 rounded-lg p-4 mt-2 font-mono text-sm text-center">
                        <span className="text-accent font-bold">EAL = P × Severity × Asset Value</span>
                      </div>
                    )}
                    {item.tip && (
                      <div className="mt-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                        <p className="text-accent text-xs">{item.tip}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 5 — Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitations of the Excel Approach</h2>
              <p className="mb-4">An Excel model is a strong starting point but has real constraints. Know when to upgrade:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { limit: 'Large portfolios (100+ assets)', fix: 'Use CLIMADA (Python) or XDI for bulk processing' },
                  { limit: 'High spatial resolution needed', fix: 'Commercial tools offer 90m–1km grid resolution vs. regional Excel estimates' },
                  { limit: 'Multi-hazard compound events', fix: 'CLIMADA handles correlated hazards; Excel cannot easily' },
                  { limit: 'Regulatory audit trail required', fix: 'Enterprise platforms provide documented methodology and data provenance' },
                  { limit: 'Real-time updating', fix: 'Platforms auto-update with new CMIP6 runs; Excel requires manual refresh' },
                  { limit: 'Board-ready automated outputs', fix: 'Dedicated tools generate disclosure-ready reports automatically' },
                ].map((row) => (
                  <div key={row.limit} className="flex gap-3 p-4 bg-dark border border-white/10 rounded-xl">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm font-semibold">{row.limit}</p>
                      <p className="text-gray-500 text-xs mt-1">{row.fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6 — AI */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. The Next Level: Automating Physical Risk with AI</h2>
              <p>
                Beyond Excel, AI tools like <strong className="text-white">Claude Code</strong> can be used to automate the entire physical risk pipeline — from pulling NASA NEX-GDDP data via API, to running CLIMADA hazard modules in Python, to generating a formatted TCFD disclosure narrative. What took a consultant two weeks can run in hours.
              </p>
              <p className="mt-4">
                This is exactly what the <strong className="text-white">Claude Code for Climate Risk & ESG Reporting</strong> course covers — real, project-based workflows that automate GHG calculations, climate risk screening, and ESG dashboard generation using AI agents.
              </p>
            </section>

            {/* Inline CTA */}
            <div className="p-6 bg-gradient-to-r from-blue-900/40 to-primary/20 border border-blue-500/20 rounded-2xl">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-base mb-1">Want to go deeper with hands-on practice?</p>
                  <p className="text-gray-400 text-sm mb-4">
                    The <strong className="text-white">Climate Risk Masterclass</strong> on BTW Academy walks through physical and transition risk modelling end-to-end — including real Excel models, TCFD alignment, ISSB S2 mapping, and NGFS scenario narratives.
                  </p>
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    View Climate Risk Masterclass
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 7 — Key takeaways */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Key Takeaways</h2>
              <ul className="space-y-3">
                {[
                  'Physical climate risk = Hazard × Exposure × Vulnerability — always start with this equation.',
                  'Use IPCC AR6 SSP scenarios (at minimum SSP2-4.5 and SSP5-8.5) across 2030, 2050, and 2100 time horizons.',
                  'CLIMADA (free, Python) is the most powerful open-source tool for quantitative EAL modelling.',
                  'Excel modelling is credible for initial screening and regulatory disclosure narratives — use the 7-step EAL framework above.',
                  'ISSB S2 and CSRD E1 require quantitative scenario analysis with financial impact estimates — not just qualitative narrative.',
                  'AI tools like Claude Code can automate the entire pipeline from data ingestion to disclosure drafting.',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Course CTA Box */}
          <div className="mt-12 p-7 bg-gradient-to-br from-primary/20 via-surface to-secondary/10 border border-primary/30 rounded-2xl">
            <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-2">Ready to Master This?</p>
            <h3 className="text-white font-bold text-xl mb-3 leading-snug">
              Turn This Knowledge Into a Career-Defining Skill
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              BTW Academy offers two courses that take you from understanding to execution — with real models, real data, and real deliverables you can use immediately in client or employer contexts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-dark/60 border border-white/10 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-1">🌍 Climate Risk Masterclass</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">Physical & transition risk, NGFS scenarios, TCFD/ISSB S2 alignment, financial impact quantification — full Excel models included.</p>
                <Link href="/academy" className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold hover:text-accent/80 transition-colors">
                  Enroll Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="bg-dark/60 border border-white/10 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-1">🤖 Claude Code for Climate Risk & ESG</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">Automate physical risk pipelines, ESG reporting, and dashboard generation using AI agents. No prior coding experience required.</p>
                <Link href="/academy" className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold hover:text-accent/80 transition-colors">
                  Enroll Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/academy"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
              >
                Browse All BTW Academy Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={TOPMATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:border-primary/50 transition-all duration-200 text-sm"
              >
                Book a 1:1 Consultation
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link href="/resources" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Resources
            </Link>
            <Link href="/resources/article-3" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              Climate Risk Basics
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>
    </div>
  )
}
