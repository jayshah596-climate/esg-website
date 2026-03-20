import { ShoppingCart, Check, Star, Monitor, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const buyLink = `/contact?product=${encodeURIComponent(product.title)}&action=buy`
  const demoLink = `/contact?product=${encodeURIComponent(product.title)}&action=demo`

  const badgeVariant = product.badge === 'Most Popular' ? 'green' : product.badge === 'Best Value' ? 'blue' : 'orange'

  return (
    <div className="relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col">
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={badgeVariant as 'green' | 'blue' | 'orange'}>{product.badge}</Badge>
        </div>
      )}

      {/* Screenshot placeholder */}
      <div className="w-full h-44 bg-dark border-b border-white/5 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5" />
        <div className="relative text-center">
          <Monitor className="w-12 h-12 text-gray-600 mx-auto mb-2" />
          <p className="text-gray-500 text-sm font-medium">{product.category}</p>
          <p className="text-gray-600 text-xs">{product.format}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-white font-bold text-lg leading-snug">{product.title}</h3>
          <span className="text-3xl font-bold text-accent whitespace-nowrap">{product.price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-gray-500 text-xs ml-1">5.0 · Professional Grade</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{product.description}</p>

        {/* Features */}
        <div className="mb-5 flex-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">What&apos;s Included</p>
          <ul className="space-y-1.5">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <Link
            href={buyLink}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </Link>
          <Link
            href={demoLink}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-secondary hover:text-secondary transition-all duration-200 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Demo
          </Link>
        </div>
      </div>
    </div>
  )
}
