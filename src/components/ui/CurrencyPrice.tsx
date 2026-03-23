'use client'

import { useCurrency } from '@/contexts/CurrencyContext'

interface CurrencyPriceProps {
  /** Price in GBP */
  gbp: number
  className?: string
  /** Show the GBP equivalent in small text when a different currency is active */
  showGBPHint?: boolean
}

export function CurrencyPrice({ gbp, className, showGBPHint = true }: CurrencyPriceProps) {
  const { formatPrice, code, loading } = useCurrency()
  const isGBP = code === 'GBP'

  return (
    <span className={className}>
      <span className={loading ? 'opacity-50' : undefined}>
        {formatPrice(gbp)}
      </span>
      {showGBPHint && !loading && !isGBP && (
        <span className="text-xs text-gray-500 font-normal ml-1.5">
          (£{gbp})
        </span>
      )}
    </span>
  )
}
