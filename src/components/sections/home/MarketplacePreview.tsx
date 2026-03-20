import Link from 'next/link'
import { ShoppingCart, ArrowRight, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { products } from '@/data/products'

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group relative bg-dark border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {product.badge && (
                <div className="absolute -top-3 left-6">
                  <Badge variant={product.badge === 'Most Popular' ? 'green' : product.badge === 'Best Value' ? 'blue' : 'orange'}>
                    {product.badge}
                  </Badge>
                </div>
              )}

              {/* Screenshot placeholder */}
              <div className="w-full h-32 bg-white/5 border border-white/10 rounded-xl mb-4 flex items-center justify-center group-hover:border-primary/20 transition-colors">
                <div className="text-center">
                  <ShoppingCart className="w-8 h-8 text-gray-600 mx-auto mb-1" />
                  <span className="text-gray-600 text-xs">{product.format}</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-white font-semibold text-base leading-snug group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <span className="text-2xl font-bold text-accent whitespace-nowrap">{product.price}</span>
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
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
