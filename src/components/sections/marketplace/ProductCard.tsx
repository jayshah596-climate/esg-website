import { ShoppingCart, Check, Star, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const demoLink = `/contact?product=${encodeURIComponent(product.title)}&action=demo`

  const badgeVariant =
    product.badge === 'Most Popular'
      ? 'green'
      : product.badge === 'Best Value' ||
        product.badge?.startsWith('Starter') ||
        product.badge === 'Popular'
      ? 'blue'
      : 'orange'

  return (
    <div className="relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col">
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={badgeVariant as 'green' | 'blue' | 'orange'}>{product.badge}</Badge>
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-44 bg-dark border-b border-white/5 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/10">
            Digital Tool &middot; {product.format}
          </span>
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
          <span className="text-gray-500 text-xs ml-1">5.0 &middot; Professional Grade</span>
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
          {product.stripeLink ? (
            <a
              href={product.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              Get Instant Access
            </a>
          ) : (
            <button
              disabled
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 text-gray-500 font-semibold rounded-lg cursor-not-allowed text-sm border border-white/10"
            >
              <ShoppingCart className="w-4 h-4" />
              Coming Soon
            </button>
          )}
          <Link
            href={demoLink}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:border-secondary hover:text-secondary transition-all duration-200 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Demo
          </Link>
        </div>
        {product.stripeLink && (
          <p className="text-center text-xs text-gray-500 mt-2">Secure payment powered by Stripe</p>
        )}
        {product.limitedPricing && (
          <p className="text-center text-xs text-accent mt-1 font-medium">Limited-time pricing</p>
        )}
      </div>
    </div>
  )
}
