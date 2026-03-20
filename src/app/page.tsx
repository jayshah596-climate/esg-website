import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { StatsBar } from '@/components/sections/home/StatsBar'
import { ServicesPreview } from '@/components/sections/home/ServicesPreview'
import { MarketplacePreview } from '@/components/sections/home/MarketplacePreview'
import { ClientsSection } from '@/components/sections/home/ClientsSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { TeamSnippet } from '@/components/sections/home/TeamSnippet'
import { CTABanner } from '@/components/sections/home/CTABanner'
import { LeadMagnetBanner } from '@/components/widgets/LeadMagnetBanner'
import { LatestInsights } from '@/components/sections/home/LatestInsights'

export const metadata: Metadata = {
  title: 'BTW AI Services | Premium ESG & Climate Consulting',
  description:
    'Build The World AI — premium ESG, Climate & Sustainability consulting. Climate risk, GHG accounting, CSRD compliance, net zero strategy, and digital ESG tools.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <MarketplacePreview />
      <ClientsSection />
      <TestimonialsSection />
      <TeamSnippet />
      <LatestInsights />
      <LeadMagnetBanner />
      <CTABanner />
    </>
  )
}
