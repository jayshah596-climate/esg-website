'use client'

import { useCurrency } from '@/contexts/CurrencyContext'

const FLAG_MAP: Record<string, string> = {
  IN: '🇮🇳', US: '🇺🇸', AU: '🇦🇺', CA: '🇨🇦', SG: '🇸🇬', AE: '🇦🇪',
  SA: '🇸🇦', JP: '🇯🇵', CN: '🇨🇳', HK: '🇭🇰', NZ: '🇳🇿', ZA: '🇿🇦',
  BR: '🇧🇷', MX: '🇲🇽', CH: '🇨🇭', NO: '🇳🇴', SE: '🇸🇪', DK: '🇩🇰',
  PL: '🇵🇱', DE: '🇩🇪', FR: '🇫🇷', IT: '🇮🇹', ES: '🇪🇸', NL: '🇳🇱',
  BE: '🇧🇪', PT: '🇵🇹', AT: '🇦🇹', IE: '🇮🇪', FI: '🇫🇮', GR: '🇬🇷',
  GB: '🇬🇧',
}

/**
 * A subtle banner shown when prices are displayed in a non-GBP currency.
 * Renders nothing for UK visitors or while loading.
 */
export function CurrencyBadge() {
  const { code, country, countryName, loading } = useCurrency()
  const isGBP = code === 'GBP'

  if (loading || isGBP) return null

  const flag = FLAG_MAP[country] ?? '🌍'

  return (
    <div className="flex items-center justify-center gap-2 py-2 px-4 bg-primary/10 border-b border-primary/20 text-xs text-gray-400">
      <span>{flag}</span>
      <span>
        Prices shown in <strong className="text-accent">{code}</strong>
        {' '}({countryName}) — converted from GBP at live rates
      </span>
    </div>
  )
}
