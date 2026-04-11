import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle, Calendar, Clock, Globe, Users, Star, Zap, Gift,
  Play, Share2, MessageCircle, Linkedin, Twitter, BookOpen, Bot,
  TrendingUp, Target, Lightbulb, Award, ChevronRight, AlertCircle, Lock
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { CurrencyPrice } from '@/components/ui/CurrencyPrice'
import { CurrencyBadge } from '@/components/widgets/CurrencyBadge'
import { WebinarFAQ } from '@/components/sections/webinar/WebinarFAQ'
import { StickyRegisterBar } from '@/components/sections/webinar/StickyRegisterBar'

export const metadata: Metadata = {
  title: 'AI Masterclass for Beginners – Learn ChatGPT, Claude, Gemini & Perplexity | BTW Academy',
  description: 'Join our live online AI Masterclass on Sunday 19 April 2026. Learn ChatGPT, Claude, Gemini & Perplexity in 2 hours. No tech background needed. Only £5 / ₹499.',
  keywords: ['AI Masterclass', 'Learn ChatGPT', 'AI for Beginners UK', 'AI Workshop 2026', 'ChatGPT training', 'Claude AI tutorial', 'Gemini AI', 'Perplexity AI', 'AI productivity'],
  openGraph: {
    title: 'AI Masterclass for Beginners – Learn ChatGPT, Claude & More',
    description: 'Live online webinar. Sunday 19 April 2026. No tech background needed. Only £5.',
    type: 'website',
  },
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'AI Masterclass for Beginners: Learn ChatGPT, Claude, Gemini & Perplexity in 60 Minutes',
  startDate: '2026-04-19T08:30:00+00:00',
  endDate: '2026-04-19T10:30:00+00:00',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://btw-ai.site/academy/webinars/ai-masterclass-beginners',
  },
  organizer: {
    '@type': 'Organization',
    name: 'BTW AI Services',
    url: 'https://btw-ai.site',
  },
  offers: {
    '@type': 'Offer',
    price: '5',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/LimitedAvailability',
    url: 'https://btw-ai.site/academy/webinars/ai-masterclass-beginners#register',
  },
}

export default function WebinarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <div className="pt-16">
        {/* SECTION 1 — HERO */}
        <section
          id="hero"
          className="hero-animated-bg grid-pattern relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
        >
          {/* Animated blobs */}
          <div
            className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
            style={{ animationDelay: '2s' }}
          />

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              Live Online Webinar · 19 April 2026
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              AI Masterclass for Beginners
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Learn ChatGPT, Claude, Gemini &amp; Perplexity
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              No Tech Background Needed – Start Using AI in Your Daily Life Today
            </p>

            {/* Event meta row */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                Sunday, 19 April 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                2:00 PM IST / 8:30 AM UK · 2 Hrs + Q&amp;A
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary" />
                Live Online Webinar
              </span>
              <span className="flex items-center gap-2">
                <CurrencyPrice gbp={5} className="font-bold text-accent text-base" showGBPHint={true} />
                <span className="text-gray-400 text-sm">/ ₹499</span>
              </span>
            </div>

            {/* Urgency line */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-red-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
              ⚡ Limited Seats – First Come, First Serve
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://buy.stripe.com/fZuaEX5nDcUZ3UWeZZgYU0i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-secondary/30 text-base"
              >
                Reserve Your Spot Now
              </a>
              <a
                href="#learn"
                className="inline-flex items-center justify-center gap-2 border border-secondary/40 text-secondary hover:bg-secondary/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                See What You&apos;ll Learn
              </a>
            </div>
          </div>

          <StickyRegisterBar />
        </section>

        {/* SECTION 2 — PAIN POINTS */}
        <section
          id="why"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Still Doing Everything the{' '}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Hard Way?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300">
                <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Still doing tasks manually?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Writing emails, reports, and research the slow way takes hours you don&apos;t have.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-300">
                <Clock className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Spending hours on simple work?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tasks that should take 5 minutes are eating up your entire day.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all duration-300">
                <Target className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Confused about AI tools?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You&apos;ve heard of ChatGPT but don&apos;t know where to start or which tool to use.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-accent font-semibold text-lg">
                ✨ This 2-hour masterclass will simplify everything for you.
              </p>
              <p className="text-gray-400 text-sm mt-2">Real demos. Real use cases. Zero jargon.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT YOU'LL LEARN */}
        <section
          id="learn"
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-4">
                Value-Packed Curriculum
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What You Will Learn</h2>
              <p className="text-gray-400">6 practical skills you can apply immediately after the session</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <Bot className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white font-semibold mb-2">ChatGPT for Daily Tasks</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Master prompting techniques for emails, summaries, brainstorming, and more
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <BookOpen className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-white font-semibold mb-2">Claude for Deep Work</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Use Claude for long-form writing, analysis, research, and complex reasoning tasks
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <Globe className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Gemini for Google Workflows</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Integrate AI into your Gmail, Docs, and Google Workspace seamlessly
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <TrendingUp className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Perplexity for Research</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get fast, cited answers for any research task — better than traditional search
                </p>
              </div>
              {/* Card 5 */}
              <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Real-Life Use Cases</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Live demos: emails, reports, content, planning, code, analysis — all with AI
                </p>
              </div>
              {/* Card 6 */}
              <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <Clock className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Save 2–5 Hours Daily</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Build your personal AI toolkit to reclaim your time and boost productivity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — LIVE DEMO */}
        <section
          id="demo"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/10 to-accent/5 border-y border-secondary/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Play icon */}
            <div className="w-20 h-20 bg-secondary/20 border border-secondary/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-secondary fill-secondary" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Watch AI Solve Real Tasks{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Live on Screen
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              No slides, no theory. Just live AI tool demonstrations solving real problems: drafting a professional email in 30 seconds, researching a topic in 2 minutes, creating a weekly plan with one prompt.
            </p>

            {/* Demo highlight badges */}
            <div className="inline-flex flex-wrap gap-3 justify-center mt-8">
              <span className="bg-surface/80 border border-secondary/20 text-gray-300 text-sm px-4 py-2 rounded-full">
                ✍️ Email in 30 seconds
              </span>
              <span className="bg-surface/80 border border-secondary/20 text-gray-300 text-sm px-4 py-2 rounded-full">
                🔍 Research in 2 minutes
              </span>
              <span className="bg-surface/80 border border-secondary/20 text-gray-300 text-sm px-4 py-2 rounded-full">
                📅 Weekly plan in 1 prompt
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHO SHOULD ATTEND */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Who Should Attend?</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 text-center hover:border-secondary/30 transition-all duration-300">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-white font-semibold mb-2">Students</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Master AI tools that will give you an unfair advantage in academics and job hunting
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 text-center hover:border-secondary/30 transition-all duration-300">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-white font-semibold mb-2">Working Professionals</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automate repetitive tasks and focus on high-value strategic work
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 text-center hover:border-secondary/30 transition-all duration-300">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="text-white font-semibold mb-2">Business Owners</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Save money and time by building your own AI workflows and automation
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 text-center hover:border-secondary/30 transition-all duration-300">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="text-white font-semibold mb-2">Curious Beginners</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zero AI knowledge needed — we start from absolute basics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — BONUS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="orange" size="md" className="mb-4">BONUS</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <Gift className="w-7 h-7 text-accent" />
                You Also Get These Bonuses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bonus 1 */}
              <div className="relative bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                <div className="absolute -top-2 -right-2">
                  <Badge variant="green">Instant Download</Badge>
                </div>
                <Gift className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-white font-semibold mb-2">Free AI Prompt Guide PDF</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A curated collection of 50+ proven prompts for ChatGPT, Claude, Gemini, and Perplexity. Ready to use from Day 1.
                </p>
              </div>
              {/* Bonus 2 */}
              <div className="relative bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                <div className="absolute -top-2 -right-2">
                  <Badge variant="blue">Lifetime Access</Badge>
                </div>
                <Play className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-white font-semibold mb-2">Session Recording Access</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Missed something? Rewatch the full 2-hour session at your own pace. Available for 30 days post-event.
                </p>
              </div>
              {/* Bonus 3 */}
              <div className="relative bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                <div className="absolute -top-2 -right-2">
                  <Badge variant="purple">Exclusive List</Badge>
                </div>
                <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Exclusive AI Resources List</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Curated list of the best free AI tools, courses, communities and YouTube channels to continue your learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — SOCIAL PROOF */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
          <div className="max-w-5xl mx-auto">
            {/* Counter cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {/* Counter 1 */}
              <div className="bg-dark border border-white/10 rounded-2xl p-8 text-center">
                <Users className="w-6 h-6 text-secondary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  1,000+
                </p>
                <p className="text-gray-400 text-sm mt-1">Learners in BTW Academy</p>
              </div>
              {/* Counter 2 */}
              <div className="bg-dark border border-white/10 rounded-2xl p-8 text-center">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  4.9★
                </p>
                <p className="text-gray-400 text-sm mt-1">Average Rating</p>
              </div>
              {/* Counter 3 */}
              <div className="bg-dark border border-white/10 rounded-2xl p-8 text-center">
                <Award className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  11+
                </p>
                <p className="text-gray-400 text-sm mt-1">Years of Expert Experience</p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white">What Our Learners Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;Jay&apos;s session was eye-opening. I went from never using AI to automating my weekly reports in just one afternoon.&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">Priya S.</p>
                  <p className="text-gray-500 text-xs">Marketing Manager, Mumbai</p>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;The live demonstrations were incredible. Finally understood how Claude and ChatGPT are different and when to use which.&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">Daniel O.</p>
                  <p className="text-gray-500 text-xs">Graduate Student, London</p>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-dark border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;Worth every penny. Saved me at least 3 hours the very next day at work. Highly recommend to anyone curious about AI.&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">Ananya R.</p>
                  <p className="text-gray-500 text-xs">Business Owner, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — PRICING */}
        <section
          id="register"
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mx-auto">
            <CurrencyBadge />

            <div className="text-center mb-8 mt-4">
              <div className="inline-flex items-center mb-4">
                <Badge variant="green" size="md">Limited Time Offer</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Reserve Your Spot Today</h2>
            </div>

            {/* Pricing card */}
            <div className="bg-surface border-2 border-secondary/40 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-gray-400 text-sm mb-2">Only</p>
              <CurrencyPrice gbp={5} className="text-6xl font-bold text-white" showGBPHint={true} />
              <p className="text-gray-500 text-sm mt-2">≈ ₹499 / one-time payment</p>

              <hr className="border-white/10 my-8" />

              {/* Included items */}
              <ul className="space-y-4 mb-8 text-left max-w-sm mx-auto">
                {[
                  '2-Hour Live Session with Jay Shah',
                  'Free AI Prompt Guide PDF (50+ prompts)',
                  'Session Recording Access (30 days)',
                  'Live Q&A — Get Your Questions Answered',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="https://buy.stripe.com/fZuaEX5nDcUZ3UWeZZgYU0i"
                target="_blank"
                rel="noopener noreferrer"
                id="register-btn"
                className="flex items-center justify-center w-full bg-secondary hover:bg-secondary/80 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-secondary/30 text-base"
              >
                Reserve Your Spot Now →
              </a>

              {/* Note */}
              <p className="flex items-center justify-center gap-1.5 text-gray-500 text-xs mt-4">
                <Lock className="w-3 h-3" />
                Secure payment · Instant confirmation email · Full refund within 48 hrs
              </p>

              <p className="text-gray-500 text-sm mt-4">Affordable learning for everyone</p>
            </div>
          </div>
        </section>

        {/* SECTION 9 — SHARE */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Share2 className="w-6 h-6 text-secondary" />
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Invite a Friend &amp; Spread the Word
              </h2>
            </div>
            <p className="text-gray-400 mb-8">
              Know someone who&apos;d benefit? Share this masterclass — learning is better together!
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              {/* WhatsApp */}
              <a
                href="https://wa.me/?text=Join%20me%20at%20this%20AI%20Masterclass%20for%20Beginners%20by%20BTW%20Academy%21%20Learn%20ChatGPT%2C%20Claude%20%26%20more%20in%202%20hours%20for%20just%20%C2%A35.%20Sunday%2019%20April%202026%3A%20https%3A%2F%2Fbtw-ai.site%2Facademy%2Fwebinars%2Fai-masterclass-beginners"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1da850] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Share on WhatsApp
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fbtw-ai.site%2Facademy%2Fwebinars%2Fai-masterclass-beginners&title=AI%20Masterclass%20for%20Beginners&summary=Learn%20ChatGPT%2C%20Claude%2C%20Gemini%20%26%20Perplexity%20in%202%20hours%20for%20just%20%C2%A35"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#005f8e] text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                Share on LinkedIn
              </a>
              {/* Twitter/X */}
              <a
                href="https://twitter.com/intent/tweet?text=Just%20registered%20for%20this%20AI%20Masterclass%20by%20%40BTW_AI%20%E2%80%94%20learn%20ChatGPT%2C%20Claude%2C%20Gemini%20%26%20Perplexity%20in%202%20hours%20for%20%C2%A35%21%20Sat%2011%20Apr%202026&url=https%3A%2F%2Fbtw-ai.site%2Facademy%2Fwebinars%2Fai-masterclass-beginners"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-black border border-white/20 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                <Twitter className="w-4 h-4" />
                Share on X / Twitter
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-gray-400">Everything you need to know before registering</p>
            </div>

            <WebinarFAQ />

            <div className="text-center mt-10">
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm font-medium transition-colors"
              >
                ← Back to BTW Academy
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11 — FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/15 via-dark to-accent/10 border-t border-secondary/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4">
              <Badge variant="orange" size="md">Don&apos;t Miss Out</Badge>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Future-Proof Your Skills{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Starting This Sunday
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join 1,000+ learners who are already using AI to work smarter. This is your opportunity to start. Only £5 — less than a coffee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://buy.stripe.com/fZuaEX5nDcUZ3UWeZZgYU0i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-secondary/30 text-base"
              >
                Reserve Your Spot Now – Only £5 →
              </a>
              <a
                href="https://wa.me/447435996857"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-secondary/40 text-secondary hover:bg-secondary/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                💬 Ask a Question on WhatsApp
              </a>
            </div>

            {/* Urgency */}
            <div className="flex items-center justify-center gap-2 text-sm text-red-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
              Limited seats remaining — registration closes 10 April 2026
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
