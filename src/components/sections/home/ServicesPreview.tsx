'use client'

import Link from 'next/link'
import { FileText, TrendingUp, BarChart3, Target, DollarSign, LayoutDashboard, ArrowRight, Bot, Cpu } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'

const previewServices = [
  {
    icon: Cpu,
    title: 'AI-Based ESG Consulting',
    description: 'Accelerate ESG reporting, climate analysis, and compliance using AI-powered workflows — reducing timelines from months to days.',
    badge: 'NEW',
    badgeVariant: 'green' as const,
    href: '/services#ai-esg-consulting',
    highlight: true,
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation for ESG',
    description: 'Deploy AI agents to automate GHG calculations, ESG reporting, climate risk analysis, and data extraction.',
    badge: 'NEW',
    badgeVariant: 'blue' as const,
    href: '/services#ai-agents-esg',
    highlight: true,
  },
  {
    icon: FileText,
    title: 'ESG Reporting & Compliance',
    description: 'CSRD, ISSB, TCFD, GRI & SFDR — audit-ready disclosures for regulators and investors.',
    badge: 'CSRD',
    badgeVariant: 'green' as const,
    href: '/services#esg-reporting',
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: 'Climate Risk & Scenario Analysis',
    description: 'Physical & transition risk assessment using NGFS and SSP climate scenarios.',
    badge: 'TCFD',
    badgeVariant: 'blue' as const,
    href: '/services#climate-risk',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'GHG Emissions Accounting',
    description: 'Full Scope 1, 2, and 3 GHG inventory — precise, methodology-sound, and verification-ready.',
    badge: 'GHG Protocol',
    badgeVariant: 'orange' as const,
    href: '/services#ghg-accounting',
    highlight: false,
  },
  {
    icon: Target,
    title: 'Net Zero Strategy',
    description: 'Science-based net zero roadmaps with interim milestones aligned to SBTi and 1.5°C.',
    badge: 'SBTi',
    badgeVariant: 'green' as const,
    href: '/services#net-zero-strategy',
    highlight: false,
  },
  {
    icon: DollarSign,
    title: 'Sustainable Finance Advisory',
    description: 'SFDR compliance, ESG integration, green bond frameworks for financial institutions.',
    badge: 'SFDR',
    badgeVariant: 'blue' as const,
    href: '/services#sustainable-finance',
    highlight: false,
  },
  {
    icon: LayoutDashboard,
    title: 'Climate Data & Dashboards',
    description: 'Custom ESG data infrastructure, Power BI dashboards, and reporting automation.',
    badge: 'Power BI',
    badgeVariant: 'purple' as const,
    href: '/services#climate-data-dashboards',
    highlight: false,
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function ServicesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Services"
            title="End-to-End"
            titleHighlight="ESG Advisory"
            subtitle="From reporting and compliance to strategy and digital tools — we cover the full spectrum of ESG and climate consulting."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm whitespace-nowrap group transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {previewServices.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.href} variants={cardVariants}>
                <Link
                  href={service.href}
                  className={`group flex flex-col h-full border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                    service.highlight
                      ? 'bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/40 hover:border-primary/60'
                      : 'bg-surface border-white/10 hover:border-primary/40'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${service.highlight ? 'bg-primary/30' : 'bg-primary/20 group-hover:bg-primary/30'}`}>
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  </div>
                  <h3 className={`font-semibold text-lg mb-2 group-hover:text-accent transition-colors ${service.highlight ? 'text-white' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
