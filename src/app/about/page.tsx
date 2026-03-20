import type { Metadata } from 'next'
import Link from 'next/link'
import { Linkedin, Youtube, ExternalLink, ArrowRight, Globe, Award, Users } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { team } from '@/data/team'

export const metadata: Metadata = {
  title: 'About Us — BTW AI Services',
  description:
    'Meet the BTW AI team: Jay Shah (ESG & Climate Specialist, 9+ years) and Zeel Shah (Automation Engineer). Learn about our mission, expertise, and approach to sustainability consulting.',
}

const values = [
  {
    icon: Award,
    title: 'Scientific Rigour',
    desc: 'Every recommendation is grounded in internationally recognised frameworks and peer-reviewed climate science.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    desc: 'Experience across Europe, Asia, and emerging markets — we understand local regulations and global best practices.',
  },
  {
    icon: Users,
    title: 'Practical Impact',
    desc: 'We translate complex ESG requirements into clear, actionable plans that real organisations can implement.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Building a{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Sustainable World
            </span>
            <br />One Organisation at a Time
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            BTW AI Services was founded with a simple mission: make expert ESG and climate advisory accessible, practical, and impactful — for organisations of all sizes.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Mission"
                title="Why We"
                titleHighlight="Exist"
                subtitle="Climate change and regulatory pressure are forcing every organisation to confront sustainability — but most lack the specialist knowledge to do it well."
              />
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                BTW AI bridges this gap. Founded by Jay Shah — an ESG specialist with nearly a decade of experience across investment management, consulting, NGOs, and the public sector — and Zeel Shah, an automation engineer who builds the digital tools to make sustainability measurable and manageable.
              </p>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                We combine deep technical ESG knowledge with modern automation technology to deliver advisory services and digital tools that are genuinely world-class — without the Big 4 price tag.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:grid-cols-1">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="flex items-start gap-4 bg-dark border border-white/10 rounded-xl p-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{value.title}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="The Team"
            title="Meet the"
            titleHighlight="Founders"
            subtitle="Combining ESG expertise with automation engineering — the BTW AI team brings unique capabilities to every engagement."
            centered
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                {/* Avatar */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-0.5">{member.name}</h3>
                    <p className="text-accent text-sm font-medium">{member.role.split(' | ')[0]}</p>
                    <p className="text-gray-500 text-xs">{member.role.split(' | ')[1]}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Credentials */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Credentials</p>
                  <div className="flex flex-col gap-1.5">
                    {member.credentials.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="text-accent">✓</span>{c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Areas of Expertise</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((e) => (
                      <Badge key={e} variant="gray" size="sm">{e}</Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#0077b5] text-xs transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://jay-shah-portfolio.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-accent text-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Portfolio
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">Follow our work</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/jay-shah-climate/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] rounded-lg hover:bg-[#0077b5]/20 transition-colors text-sm font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@buildtheworld4138"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#ff0000]/10 border border-[#ff0000]/30 text-[#ff4444] rounded-lg hover:bg-[#ff0000]/20 transition-colors text-sm font-medium"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
            <a
              href="https://topmate.io/dashboard/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary/10 border border-secondary/30 text-secondary rounded-lg hover:bg-secondary/20 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Topmate
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Work With Us</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Whether you need a full ESG programme or a specific deliverable, we&apos;d love to discuss how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
