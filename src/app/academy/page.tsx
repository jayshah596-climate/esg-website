import type { Metadata } from 'next'
import { CheckCircle, Lock, Star, Zap, BookOpen, TrendingUp, Bot } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'BTW Academy – Learn ESG, Climate & AI',
  description: 'Practical, industry-ready courses to accelerate your ESG and climate career. GHG accounting, climate risk, and AI-powered ESG reporting.',
}

const COURSES = [
  {
    id: 1,
    title: 'GHG Emission Inventory Scope 1–2–3 (In Depth)',
    stripeUrl: 'https://buy.stripe.com/bJe28rdU9cUZ4Z03hhgYU0c',
    price: '£199',
    icon: TrendingUp,
    color: 'from-green-500/20 to-emerald-600/10',
    borderColor: 'border-green-500/30 hover:border-green-400/50',
    iconBg: 'bg-green-500/20 text-green-400',
    description:
      'Master end-to-end GHG accounting including Scope 1, 2, and 3 emissions using global standards (GHG Protocol, IPCC, DEFRA). Learn to build inventories, calculate emissions, and support ESG reporting.',
    features: [
      'Scope 1, 2, and 3 deep dive',
      'Real-world calculation examples',
      'Industry-standard methodologies',
      'Hands-on templates and tools',
      'ESG reporting alignment',
    ],
  },
  {
    id: 2,
    title: 'Climate Risk Masterclass (Assessment & Management)',
    stripeUrl: 'https://buy.stripe.com/9B63cvbM1dZ36344llgYU0d',
    price: '£249',
    icon: BookOpen,
    color: 'from-blue-500/20 to-cyan-600/10',
    borderColor: 'border-blue-500/30 hover:border-blue-400/50',
    iconBg: 'bg-blue-500/20 text-blue-400',
    description:
      'Learn how to assess and manage physical and transition climate risks using TCFD, ISSB, and scenario analysis frameworks. Ideal for consultants and corporate professionals.',
    features: [
      'Physical & transition risk analysis',
      'Scenario modelling (SSPs)',
      'Financial impact assessment',
      'Climate risk strategy development',
      'TCFD & ISSB alignment',
    ],
  },
  {
    id: 3,
    title: 'Claude Code for Climate Risk & ESG Reporting',
    stripeUrl: 'https://buy.stripe.com/cNi7sLaHX7AFezA3hhgYU0e',
    price: '£179',
    icon: Bot,
    color: 'from-purple-500/20 to-violet-600/10',
    borderColor: 'border-purple-500/30 hover:border-purple-400/50',
    iconBg: 'bg-purple-500/20 text-purple-400',
    description:
      'Learn how to use Claude Code to automate ESG reporting, climate risk analysis, and dashboard development. Build real AI-powered ESG solutions.',
    features: [
      'Build ESG tools using AI',
      'Automate reporting workflows',
      'Create dashboards and calculators',
      'Prompt engineering for ESG',
      'Real project-based learning',
    ],
  },
]

export default function AcademyPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-accent text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            Industry-Ready Courses
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 animate-slide-up">
            BTW Academy{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              – Learn ESG, Climate &amp; AI
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Practical, industry-ready courses to accelerate your ESG and climate career. Built by practitioners, for practitioners.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Expert-led content</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Real-world projects</span>
            <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-secondary" /> Secure Stripe checkout</span>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => {
              const Icon = course.icon
              return (
                <div
                  key={course.id}
                  className={`group relative bg-surface border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ${course.borderColor}`}
                >
                  {/* Premium badge */}
                  <div className="absolute -top-3 left-6">
                    <Badge variant="purple">Premium Course</Badge>
                  </div>

                  {/* Gradient accent */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${course.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-xl leading-snug mb-3 group-hover:text-accent transition-colors">
                      {course.title}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-accent">{course.price}</span>
                      <span className="text-gray-500 text-sm">one-time</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {course.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={course.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
                    >
                      Enroll Now
                    </a>

                    <p className="text-center text-gray-600 text-xs mt-3 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" />
                      Secure payment powered by Stripe
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why BTW Academy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Learn with <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">BTW Academy?</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Courses built by a senior ESG & climate consultant with 11+ years of real-world experience across finance, government, and corporate sectors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: 'Practitioner-Led', desc: 'Content created by Jay Shah — a working ESG consultant, not just an academic.' },
              { icon: Zap, title: 'Instantly Applicable', desc: 'Templates, tools, and frameworks you can use in your next project immediately.' },
              { icon: Star, title: 'Industry Recognised', desc: 'Aligned with GHG Protocol, TCFD, ISSB, CSRD and other global standards.' },
            ].map((item) => {
              const Ic = item.icon
              return (
                <div key={item.title} className="bg-dark border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Ic className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
