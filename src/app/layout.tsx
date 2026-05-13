import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/widgets/WhatsAppButton'
import { ChatBot } from '@/components/widgets/ChatBot'
import { CTABar } from '@/components/widgets/CTABar'
import { CurrencyProvider } from '@/contexts/CurrencyContext'

export const metadata: Metadata = {
  title: {
    default: 'BTW AI Services | Premium ESG & Climate Consulting',
    template: '%s | BTW AI Services',
  },
  description:
    'Build The World AI — premium ESG, Climate & Sustainability consulting firm. Climate risk, GHG accounting, CSRD compliance, net zero strategy, and digital ESG tools.',
  keywords: [
    'ESG consulting', 'climate risk', 'net zero strategy', 'GHG accounting', 'CSRD compliance',
    'TCFD', 'sustainability consulting', 'carbon footprint', 'Scope 3 emissions',
    'double materiality', 'ESG reporting', 'BTW AI', 'climate consulting UK', 'Jay Shah',
  ],
  authors: [{ name: 'Jay Shah', url: 'https://www.linkedin.com/in/jay-shah-climate/' }],
  creator: 'BTW AI Services',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://btw-ai-services.pages.dev',
    siteName: 'BTW AI Services',
    title: 'BTW AI Services | Premium ESG & Climate Consulting',
    description: 'Premium ESG, Climate & Sustainability consulting. Climate risk, GHG accounting, CSRD, net zero strategy and digital ESG tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTW AI Services | Premium ESG & Climate Consulting',
    description: 'Premium ESG, Climate & Sustainability consulting by BTW AI Services.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">
        <CurrencyProvider>
          <CTABar />
          <div className="pt-[38px]">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <ChatBot />
        </CurrencyProvider>
      </body>
    </html>
  )
}
