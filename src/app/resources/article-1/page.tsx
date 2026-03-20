import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, BookOpen, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'CSRD Simplified: A Practical Guide | BTW AI Resources',
  description:
    'A practical guide to understanding the Corporate Sustainability Reporting Directive (CSRD), who it applies to, what ESRS disclosures are required, and how to get started.',
}

const tags = ['CSRD', 'ESRS', 'Double Materiality', 'EU Reporting', 'Sustainability']

export default function Article1Page() {
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
            <Badge variant="green" size="sm">Guide</Badge>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              12 min read
            </span>
            <span className="text-gray-600 text-xs">Published July 2024</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            CSRD Simplified: A Practical Guide for Businesses
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            The Corporate Sustainability Reporting Directive is the most significant sustainability reporting regulation in EU history. This guide cuts through the complexity to explain what you actually need to do.
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
          <div className="prose-dark space-y-8 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3">What is the CSRD?</h2>
              <p>The Corporate Sustainability Reporting Directive (CSRD) entered into force in January 2023, replacing the Non-Financial Reporting Directive (NFRD). It dramatically expands the scope of mandatory sustainability reporting in the EU — from approximately 11,000 companies under NFRD to an estimated 50,000+ under CSRD.</p>
              <p className="mt-3">CSRD requires companies to report against the <strong className="text-white">European Sustainability Reporting Standards (ESRS)</strong> — a detailed set of standards covering environmental, social, and governance topics, developed by EFRAG.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Who is in scope — and when?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Company Type</th>
                      <th className="text-left py-2 pr-4 text-gray-400 font-medium">Reporting Start</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr><td className="py-2.5 pr-4 text-white">Large listed companies already under NFRD (&gt;500 employees)</td><td className="py-2.5 text-accent">2025 (FY 2024 data)</td></tr>
                    <tr><td className="py-2.5 pr-4 text-white">Large EU companies (&gt;250 employees or €40M revenue)</td><td className="py-2.5 text-accent">2026 (FY 2025 data)</td></tr>
                    <tr><td className="py-2.5 pr-4 text-white">Listed SMEs, small &amp; non-complex credit institutions</td><td className="py-2.5 text-accent">2027 (FY 2026 data)</td></tr>
                    <tr><td className="py-2.5 pr-4 text-white">Non-EU companies with significant EU revenue (&gt;€150M)</td><td className="py-2.5 text-accent">2029 (FY 2028 data)</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">The ESRS Standards — What You Need to Disclose</h2>
              <p>ESRS disclosures cover three layers:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-white">ESRS 1:</strong> General requirements (the framework for applying all other standards)</li>
                <li><strong className="text-white">ESRS 2:</strong> General disclosures — mandatory for all in-scope companies</li>
                <li><strong className="text-white">ESRS E1–E5:</strong> Environmental topics (Climate, Pollution, Water, Biodiversity, Resources)</li>
                <li><strong className="text-white">ESRS S1–S4:</strong> Social topics (Workforce, Value Chain Workers, Communities, Consumers)</li>
                <li><strong className="text-white">ESRS G1:</strong> Governance (Business Conduct)</li>
              </ul>
              <p className="mt-3">Disclosures for ESRS E1–S4 and G1 are subject to the <strong className="text-white">double materiality assessment</strong> — meaning you only disclose the topics that are material to your organisation.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Double Materiality: The Central Concept</h2>
              <p>CSRD&apos;s defining feature is the <strong className="text-white">double materiality</strong> approach. You must assess each topic from two perspectives:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-accent font-semibold text-sm mb-2">Impact Materiality</p>
                  <p className="text-gray-400 text-sm">Does your organisation have significant actual or potential impacts on people or the environment? (Inside-out perspective)</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-accent font-semibold text-sm mb-2">Financial Materiality</p>
                  <p className="text-gray-400 text-sm">Do sustainability risks or opportunities significantly affect your financial position or performance? (Outside-in perspective)</p>
                </div>
              </div>
              <p className="mt-4">A topic is material if it passes either test — or both. The process must be documented and auditable.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5 Steps to Get Started</h2>
              <ol className="space-y-4">
                {[
                  ['Confirm your scope', 'Check if and when your company is in scope. Large subsidiaries of in-scope groups may also need to report.'],
                  ['Conduct a gap analysis', 'Compare your current sustainability disclosures against ESRS requirements. Identify what is missing.'],
                  ['Run a double materiality assessment', 'This is the foundation of your CSRD report. It determines which ESRS topics and disclosures apply to you.'],
                  ['Build your data infrastructure', 'Identify what data you need for each material topic. Many companies need to redesign their data collection processes.'],
                  ['Draft and assure', 'Write your sustainability statement, integrate it into your management report, and engage an assurance provider.'],
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
              <h2 className="text-xl font-bold text-white mb-3">Key Risks of Non-Compliance</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Financial penalties imposed by member state regulators</li>
                <li>Reputational damage with investors, customers, and employees</li>
                <li>Exclusion from procurement and supply chain opportunities</li>
                <li>Investor divestment from non-compliant companies</li>
              </ul>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary/20 rounded-2xl">
            <p className="text-white font-bold text-lg mb-2">Need help with your CSRD journey?</p>
            <p className="text-gray-400 text-sm mb-4">BTW AI offers CSRD readiness assessments, double materiality workshops, and full ESRS reporting support.</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?subject=CSRD+Support"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-primary transition-colors text-sm"
              >
                <BookOpen className="w-4 h-4" />
                Browse CSRD Tools
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link href="/resources" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Resources
            </Link>
            <Link href="/resources/article-2" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors">
              Next: Scope 3 Explained
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
