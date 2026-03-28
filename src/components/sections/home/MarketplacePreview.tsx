'use client'

import Link from 'next/link'
import { BarChart3, ShoppingCart, ArrowRight, Star, LayoutDashboard, Calculator, Globe } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { CurrencyPrice } from '@/components/ui/CurrencyPrice'
import { products } from '@/data/products'
import { motion } from 'framer-motion'

function toGBP(price: string): number {
  if (price.toLowerCase() === 'free') return 0
  return parseFloat(price.replace(/[^0-9.]/g, '')) || 0
}

const productIcons = [LayoutDashboard, BarChart3, Globe, Calculator]

const cardGradients = [
  'from-green-500/20 via-emerald-600/10 to-transparent',
  'from-blue-500/20 via-cyan-600/10 to-transparent',
  'from-purple-500/20 via-violet-600/10 to-transparent',
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export function MarketplacePreview() {
  const featured = products.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Marketplace"
            title="Digital ESG"
            titleHighlight="Tools & Toolkits"
            subtitle="Instantly downloadable templates, dashboards, and calculators built by ESG practitioners for ESG practitioners."
          />
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm whitespace-nowrap group transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {featured.map((product, idx) => {
            const ProductIcon = productIcons[idx % productIcons.length]
            const gradient = cardGradients[idx % cardGradients.length]

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group relative bg-dark border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant={product.badge === 'Most Popular' ? 'green' : product.badge === 'Best Value' ? 'blue' : 'orange'}>
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Visual card header */}
                <div className={`relative w-full h-40 bg-gradient-to-br ${gradient} border-b border-white/5 flex items-center justify-center overflow-hidden`}>
                  {/* Background grid pattern */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Icon */}
                  <motion.div
                    className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ProductIcon className="w-8 h-8 text-accent" />
                  </motion.div>
                  {/* Format label */}
                  <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm text-gray-300 text-xs px-2 py-1 rounded-md border border-white/10">
                    {product.format}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-semibold text-base leading-snug group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <CurrencyPrice
                      gbp={toGBP(product.price)}
                      className="text-2xl font-bold text-accent whitespace-nowrap"
                      showGBPHint={false}
                    />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-gray-500 text-xs ml-1">5.0</span>
                  </div>

                  <Link
                    href="/marketplace"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
