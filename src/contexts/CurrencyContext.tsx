'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
export interface CurrencyInfo {
  code: string       // ISO 4217, e.g. 'INR'
  locale: string     // Intl locale, e.g. 'en-IN'
  rate: number       // multiplier from GBP (e.g. 106.5 for INR)
  country: string    // ISO country code, e.g. 'IN'
  countryName: string
  loading: boolean
}

// ─── Country → currency mapping ───────────────────────────────────────────────
const COUNTRY_MAP: Record<string, { code: string; locale: string }> = {
  IN: { code: 'INR', locale: 'en-IN' },
  US: { code: 'USD', locale: 'en-US' },
  AU: { code: 'AUD', locale: 'en-AU' },
  CA: { code: 'CAD', locale: 'en-CA' },
  SG: { code: 'SGD', locale: 'en-SG' },
  AE: { code: 'AED', locale: 'ar-AE' },
  SA: { code: 'SAR', locale: 'ar-SA' },
  JP: { code: 'JPY', locale: 'ja-JP' },
  CN: { code: 'CNY', locale: 'zh-CN' },
  HK: { code: 'HKD', locale: 'en-HK' },
  NZ: { code: 'NZD', locale: 'en-NZ' },
  ZA: { code: 'ZAR', locale: 'en-ZA' },
  BR: { code: 'BRL', locale: 'pt-BR' },
  MX: { code: 'MXN', locale: 'es-MX' },
  CH: { code: 'CHF', locale: 'de-CH' },
  NO: { code: 'NOK', locale: 'nb-NO' },
  SE: { code: 'SEK', locale: 'sv-SE' },
  DK: { code: 'DKK', locale: 'da-DK' },
  PL: { code: 'PLN', locale: 'pl-PL' },
  // Eurozone
  DE: { code: 'EUR', locale: 'de-DE' },
  FR: { code: 'EUR', locale: 'fr-FR' },
  IT: { code: 'EUR', locale: 'it-IT' },
  ES: { code: 'EUR', locale: 'es-ES' },
  NL: { code: 'EUR', locale: 'nl-NL' },
  BE: { code: 'EUR', locale: 'fr-BE' },
  PT: { code: 'EUR', locale: 'pt-PT' },
  AT: { code: 'EUR', locale: 'de-AT' },
  IE: { code: 'EUR', locale: 'en-IE' },
  FI: { code: 'EUR', locale: 'fi-FI' },
  GR: { code: 'EUR', locale: 'el-GR' },
  // Default
  GB: { code: 'GBP', locale: 'en-GB' },
}

const DEFAULT: CurrencyInfo = {
  code: 'GBP', locale: 'en-GB', rate: 1, country: 'GB',
  countryName: 'United Kingdom', loading: true,
}

const CACHE_KEY = 'btw_ai_currency_v1'
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours

// ─── Context ──────────────────────────────────────────────────────────────────
interface CurrencyCtx extends CurrencyInfo {
  formatPrice: (gbp: number) => string
}

const CurrencyContext = createContext<CurrencyCtx>({
  ...DEFAULT,
  loading: false,
  formatPrice: (gbp) => `£${gbp}`,
})

// ─── Provider ─────────────────────────────────────────────────────────────────
export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [info, setInfo] = useState<CurrencyInfo>(DEFAULT)

  useEffect(() => {
    // Try localStorage cache first
    try {
      const raw = localStorage.getItem(CACHE_KEY)
      if (raw) {
        const { data, ts } = JSON.parse(raw) as { data: CurrencyInfo; ts: number }
        if (Date.now() - ts < CACHE_TTL) {
          setInfo({ ...data, loading: false })
          return
        }
      }
    } catch { /* ignore cache errors */ }

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 7000)

    async function detect() {
      try {
        // Step 1: detect country via IP
        const geoRes = await fetch('https://ipapi.co/json/', { signal: controller.signal })
        const geo = await geoRes.json() as { country_code?: string; country_name?: string; currency?: string }

        const countryCode = geo.country_code ?? 'GB'
        const countryName = geo.country_name ?? 'United Kingdom'
        const curr = COUNTRY_MAP[countryCode] ?? { code: 'GBP', locale: 'en-GB' }

        // Step 2: fetch live GBP exchange rates
        const ratesRes = await fetch('https://open.er-api.com/v6/latest/GBP', { signal: controller.signal })
        const ratesData = await ratesRes.json() as { rates?: Record<string, number> }
        const rate = ratesData.rates?.[curr.code] ?? 1

        const data: CurrencyInfo = {
          code: curr.code,
          locale: curr.locale,
          rate,
          country: countryCode,
          countryName,
          loading: false,
        }

        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() })) } catch { /* ignore */ }
        setInfo(data)
      } catch {
        // Network error or abort — fall back to GBP silently
        setInfo(s => ({ ...s, loading: false }))
      } finally {
        clearTimeout(timer)
      }
    }

    detect()
    return () => controller.abort()
  }, [])

  function formatPrice(gbp: number): string {
    if (info.loading) return `£${gbp}`
    const converted = gbp * info.rate
    try {
      return new Intl.NumberFormat(info.locale, {
        style: 'currency',
        currency: info.code,
        maximumFractionDigits: ['JPY', 'INR', 'KRW', 'IDR'].includes(info.code) ? 0 : 2,
      }).format(converted)
    } catch {
      return `${info.code} ${converted.toFixed(0)}`
    }
  }

  return (
    <CurrencyContext.Provider value={{ ...info, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useCurrency() {
  return useContext(CurrencyContext)
}
