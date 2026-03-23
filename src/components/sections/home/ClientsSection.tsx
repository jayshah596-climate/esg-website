'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { motion } from 'framer-motion'

// Styled wordmark logos per client
const clientLogos = [
  {
    id: 1,
    name: 'Purus',
    sector: 'Clean Energy',
    wordmark: (
      <svg viewBox="0 0 100 32" className="w-full h-full" aria-label="Purus">
        <text x="50" y="23" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="currentColor" letterSpacing="1">PURUS</text>
      </svg>
    ),
    color: 'text-emerald-400 group-hover:text-emerald-300',
  },
  {
    id: 2,
    name: 'PGIM',
    sector: 'Asset Management',
    wordmark: (
      <svg viewBox="0 0 100 32" className="w-full h-full" aria-label="PGIM">
        <text x="50" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="800" fill="currentColor" letterSpacing="2">PGIM</text>
      </svg>
    ),
    color: 'text-blue-400 group-hover:text-blue-300',
  },
  {
    id: 3,
    name: 'Darashaw',
    sector: 'Financial Services',
    wordmark: (
      <svg viewBox="0 0 120 32" className="w-full h-full" aria-label="Darashaw">
        <text x="60" y="23" textAnchor="middle" fontFamily="Georgia, serif" fontSize="17" fontWeight="600" fill="currentColor" letterSpacing="0.5">Darashaw</text>
      </svg>
    ),
    color: 'text-amber-400 group-hover:text-amber-300',
  },
  {
    id: 4,
    name: 'PwC',
    sector: 'Professional Services',
    wordmark: (
      <svg viewBox="0 0 80 32" className="w-full h-full" aria-label="PwC">
        <text x="40" y="24" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="currentColor" letterSpacing="-1">PwC</text>
      </svg>
    ),
    color: 'text-red-400 group-hover:text-red-300',
  },
  {
    id: 5,
    name: 'ICLEI',
    sector: 'Local Government / NGO',
    wordmark: (
      <svg viewBox="0 0 100 32" className="w-full h-full" aria-label="ICLEI">
        <text x="50" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" fill="currentColor" letterSpacing="2">ICLEI</text>
      </svg>
    ),
    color: 'text-green-400 group-hover:text-green-300',
  },
  {
    id: 6,
    name: 'Weather Trade Net',
    sector: 'Climate Data & Finance',
    wordmark: (
      <svg viewBox="0 0 160 36" className="w-full h-full" aria-label="Weather Trade Net">
        <text x="80" y="14" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="currentColor" letterSpacing="0.5">WEATHER TRADE</text>
        <text x="80" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="400" fill="currentColor" opacity="0.7" letterSpacing="1">NETWORK</text>
      </svg>
    ),
    color: 'text-cyan-400 group-hover:text-cyan-300',
  },
  {
    id: 7,
    name: 'Pinnacle Office',
    sector: 'Real Estate',
    wordmark: (
      <svg viewBox="0 0 140 36" className="w-full h-full" aria-label="Pinnacle Office">
        <text x="70" y="14" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontWeight="700" fill="currentColor" letterSpacing="1">PINNACLE</text>
        <text x="70" y="30" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="400" fill="currentColor" opacity="0.7" letterSpacing="2">OFFICE</text>
      </svg>
    ),
    color: 'text-yellow-400 group-hover:text-yellow-300',
  },
  {
    id: 8,
    name: 'NIUA',
    sector: 'Urban Development',
    wordmark: (
      <svg viewBox="0 0 100 36" className="w-full h-full" aria-label="NIUA">
        <text x="50" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" fill="currentColor" letterSpacing="2">NIUA</text>
        <text x="50" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="400" fill="currentColor" opacity="0.6" letterSpacing="0.5">c-Cube</text>
      </svg>
    ),
    color: 'text-teal-400 group-hover:text-teal-300',
  },
  {
    id: 9,
    name: 'Vadodara Municipal',
    sector: 'Municipal Government',
    wordmark: (
      <svg viewBox="0 0 160 36" className="w-full h-full" aria-label="Vadodara Municipal">
        <text x="80" y="14" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="currentColor" letterSpacing="0.5">VADODARA</text>
        <text x="80" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="currentColor" opacity="0.7" letterSpacing="1">MUNICIPAL CORP.</text>
      </svg>
    ),
    color: 'text-orange-400 group-hover:text-orange-300',
  },
  {
    id: 10,
    name: 'Accion Land',
    sector: 'Land Management',
    wordmark: (
      <svg viewBox="0 0 140 36" className="w-full h-full" aria-label="Accion Land">
        <text x="70" y="14" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="1">ACCION</text>
        <text x="70" y="30" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontWeight="400" fill="currentColor" opacity="0.7" letterSpacing="2">LAND</text>
      </svg>
    ),
    color: 'text-lime-400 group-hover:text-lime-300',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function ClientsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Trusted By"
          title="Clients We've"
          titleHighlight="Worked With"
          subtitle="Organisations across finance, government, NGOs, and the private sector trust BTW AI for their ESG and climate advisory needs."
          centered
        />

        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {clientLogos.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              className="group bg-surface border border-white/10 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 cursor-default"
            >
              {/* Wordmark logo — grayscale by default, color on hover */}
              <div className={`w-full h-10 mx-auto mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 ${client.color}`}>
                {client.wordmark}
              </div>
              <div className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">{client.sector}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Across <strong className="text-gray-300">Europe, Asia, and emerging markets</strong> — trusted for complex ESG and climate engagements
          </p>
        </div>
      </div>
    </section>
  )
}
