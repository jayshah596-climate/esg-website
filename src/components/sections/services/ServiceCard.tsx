import Link from 'next/link'
import {
  FileText, TrendingUp, BarChart3, Target, DollarSign,
  LayoutDashboard, Network, Layers, Calendar
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { Service } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  FileText, TrendingUp, BarChart3, Target, DollarSign,
  LayoutDashboard, Network, Layers,
}

const colorVariants: Record<string, { icon: string; badge: 'green' | 'blue' | 'orange' | 'purple' | 'pink' | 'teal' | 'gray' }> = {
  green: { icon: 'bg-primary/20 text-accent', badge: 'green' },
  blue: { icon: 'bg-secondary/20 text-secondary', badge: 'blue' },
  orange: { icon: 'bg-orange-500/20 text-orange-400', badge: 'orange' },
  purple: { icon: 'bg-purple-500/20 text-purple-400', badge: 'purple' },
  pink: { icon: 'bg-pink-500/20 text-pink-400', badge: 'pink' },
  teal: { icon: 'bg-teal-500/20 text-teal-400', badge: 'teal' },
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || FileText
  const colors = colorVariants[service.color] || colorVariants.green

  return (
    <div
      id={service.slug}
      className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 scroll-mt-24"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-white font-bold text-xl mb-1">{service.title}</h3>
          <p className="text-gray-400 text-sm">{service.shortDescription}</p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Problem */}
        <div className="bg-dark/60 rounded-xl p-4 border border-white/5">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">The Challenge</p>
          <p className="text-gray-300 text-sm leading-relaxed">{service.problem}</p>
        </div>

        {/* Solution */}
        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Our Solution</p>
          <p className="text-gray-300 text-sm leading-relaxed">{service.solution}</p>
        </div>

        {/* Frameworks */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Frameworks & Tools</p>
          <div className="flex flex-wrap gap-2">
            {service.frameworks.map((fw) => (
              <Badge key={fw} variant={colors.badge} size="sm">{fw}</Badge>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Deliverables</p>
          <ul className="space-y-1.5">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/10">
        <Link
          href={`/contact?service=${service.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
        >
          <Calendar className="w-4 h-4" />
          Book Consultation
        </Link>
      </div>
    </div>
  )
}
