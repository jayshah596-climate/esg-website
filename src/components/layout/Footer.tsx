import Link from 'next/link'
import { Leaf, Linkedin, Youtube, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const serviceLinks = [
  { href: '/services#esg-reporting', label: 'ESG Reporting & Compliance' },
  { href: '/services#climate-risk', label: 'Climate Risk Analysis' },
  { href: '/services#ghg-accounting', label: 'GHG Emissions Accounting' },
  { href: '/services#net-zero-strategy', label: 'Net Zero Strategy' },
  { href: '/services#sustainable-finance', label: 'Sustainable Finance' },
  { href: '/services#double-materiality', label: 'Double Materiality' },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/about', label: 'About Us' },
  { href: '/clients', label: 'Clients' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg">BTW AI</span>
                <span className="text-accent text-xs font-medium">Services</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium ESG, Climate & Sustainability consulting. Helping organisations navigate the transition to a net zero future.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/zeel-shah-ab338052/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5]/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@buildtheworld4138"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff0000] hover:border-[#ff0000]/40 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/447435996857?text=Hi%2C%20I%20want%20ESG%20consulting%20support"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#25d366] hover:border-[#25d366]/40 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/climateai_lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jayshah596@gmail.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-accent text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  jayshah596@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447435996857"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-accent text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +44 7435 996857
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  United Kingdom &amp; Global
                </span>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-gray-500 text-xs mb-3">Also on</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://topmate.io/dashboard/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-accent text-xs transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Topmate — Book 1:1 Sessions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BTW AI Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Build The World AI</span>
            <span>•</span>
            <span>ESG &amp; Climate Advisory</span>
            <span>•</span>
            <span>London, UK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
