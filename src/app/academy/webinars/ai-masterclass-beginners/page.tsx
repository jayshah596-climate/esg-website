import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Radio, Zap, CheckCircle, Users, BookOpen, MessageSquare, Star, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'AI Masterclass for Beginners: ChatGPT, Claude, Gemini & Perplexity | BTW Academy',
  description:
    'Join our live 2-hour AI masterclass for beginners. Learn how to use ChatGPT, Claude, Gemini and Perplexity in your work — no tech background needed. Sunday 19 Apr 2026 · 2:00 PM IST / 8:30 AM UK.',
  openGraph: {
    type: 'article',
    locale: 'en_GB',
    url: 'https://btw-ai-services.pages.dev/academy/webinars/ai-masterclass-beginners',
    siteName: 'BTW AI Services',
    title: 'AI Masterclass for Beginners: ChatGPT, Claude, Gemini & Perplexity',
    description:
      'Live 2-hour webinar for beginners. Learn ChatGPT, Claude, Gemini & Perplexity — no tech background needed. Sunday 19 Apr 2026 · 2:00 PM IST / 8:30 AM UK.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Masterclass for Beginners | BTW Academy',
    description: 'Live webinar: Learn ChatGPT, Claude, Gemini & Perplexity. Sunday 19 Apr 2026 · 2:00 PM IST / 8:30 AM UK.',
  },
}

const TOOLS = [
  {
    name: 'ChatGPT',
    color: 'border-green-500/30 bg-green-500/10',
    dot: 'bg-green-400',
    icon: '🤖',
    points: [
      'Prompting strategies that actually work',
      'Custom GPTs for your workflow',
      'Document analysis & summarisation',
      'Writing, editing, and content creation',
    ],
  },
  {
    name: 'Claude',
    color: 'border-orange-500/30 bg-orange-500/10',
    dot: 'bg-orange-400',
    icon: '⚡',
    points: [
      'Long-document understanding & analysis',
      'Research synthesis and reasoning tasks',
      'ESG & professional report drafting',
      'Claude Projects for ongoing work',
    ],
  },
  {
    name: 'Gemini',
    color: 'border-blue-500/30 bg-blue-500/10',
    dot: 'bg-blue-400',
    icon: '✨',
    points: [
      'Google Workspace integration (Docs, Sheets)',
      'Multimodal inputs (images, PDFs, audio)',
      'Deep Research for fast literature reviews',
      'Real-time web-connected answers',
    ],
  },
  {
    name: 'Perplexity',
    color: 'border-purple-500/30 bg-purple-500/10',
    dot: 'bg-purple-400',
    icon: '🔍',
    points: [
      'AI-powered search with cited sources',
      'Replacing traditional Google searches',
      'Quick market & competitor research',
      'Following news & regulatory updates',
    ],
  },
]

const AGENDA = [
  ['0:00 – 0:20', 'Welcome & AI Landscape Overview', 'Why AI matters now, the 4 tools you need, and how to choose the right one.'],
  ['0:20 – 0:50', 'ChatGPT Deep Dive', 'Prompting frameworks, Custom GPTs, and real workflow demos.'],
  ['0:50 – 1:20', 'Claude & Gemini in Practice', 'Long-document analysis, Google Workspace, and multimodal tasks.'],
  ['1:20 – 1:45', 'Perplexity for Research', 'Replace traditional search, stay on top of industry news with AI.'],
  ['1:45 – 2:00', 'Putting It Together', 'A simple AI workflow you can implement this week.'],
  ['2:00 +', 'Live Q&A', 'Open questions — ask anything about any of the tools covered.'],
]

const FOR_WHO = [
  ['Professionals & consultants', 'Want to work faster and deliver more with AI tools integrated into daily workflows.'],
  ['ESG & sustainability teams', 'Need to use AI for research, reporting, and stakeholder communication.'],
  ['Career switchers & graduates', 'Want to understand AI tools before entering the job market.'],
  ['Business owners & managers', 'Looking to understand where AI can save time and improve output quality.'],
]

export default function AIMasterclassBeginnersPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-animated-bg grid-pattern relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-4xl mx-auto">

          {/* Back */}
          <Link
            href="/academy"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-accent text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to BTW Academy
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Radio className="w-3 h-3" />
              Live Webinar
            </span>
            <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/30 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
              <Zap className="w-3 h-3" />
              NEW
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              2 Hrs + Q&A
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            AI Masterclass for Beginners:{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Learn ChatGPT, Claude, Gemini &amp; Perplexity
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
            A practical, hands-on session for complete beginners. Walk away knowing exactly how to use the four most powerful AI tools — in your own work, starting today. No tech background needed.
          </p>

          {/* Date / Time card */}
          <div className="inline-flex flex-col sm:flex-row sm:items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-white font-bold text-base">Sunday 19 Apr 2026</p>
                <p className="text-gray-400 text-sm">2:00 PM IST &nbsp;/&nbsp; 8:30 AM UK</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-base">No tech background needed</p>
                <p className="text-gray-400 text-sm">Suitable for complete beginners</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://topmate.io/jay_shah_btw/1187577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
            >
              <Radio className="w-4 h-4" />
              Register for the Webinar
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:border-primary transition-colors text-sm"
            >
              Ask a Question
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-3 flex items-center gap-1">
            <Lock className="w-3 h-3" />
            Secure registration via Topmate
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="blue" size="sm">Curriculum</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
              What You&apos;ll Learn
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              One session covering the four AI tools professionals actually use day-to-day — with live demos and practical examples throughout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TOOLS.map((tool) => (
              <div key={tool.name} className={`border rounded-2xl p-6 ${tool.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{tool.icon}</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${tool.dot}`} />
                    <p className="text-white font-bold text-lg">{tool.name}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {tool.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="green" size="sm">Who Is This For</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
              Perfect for Anyone Starting with AI
            </h2>
            <p className="text-gray-400">
              This session is designed specifically for people with little or no AI experience — professional context, real examples, zero jargon.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOR_WHO.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="purple" size="sm">Agenda</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
              Session Breakdown
            </h2>
            <p className="text-gray-400">2 hours of focused, practical learning — followed by a live Q&A.</p>
          </div>

          <div className="space-y-3">
            {AGENDA.map(([time, title, desc], i) => (
              <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-28 flex-shrink-0">
                  <p className="text-accent text-xs font-semibold font-mono">{time}</p>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">{title}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/40 to-secondary/30 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Your Host</p>
              <p className="text-white font-bold text-lg mb-1">Jay Shah</p>
              <p className="text-accent text-sm font-medium mb-2">ESG & Climate Consultant · BTW AI Services</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                11+ years of experience in ESG, climate risk, and sustainability strategy. Jay runs BTW Academy and regularly uses AI tools in live client engagements — so expect practical, real-world guidance, not theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary/20 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Radio className="w-3 h-3" />
                Live Webinar
              </span>
              <span className="text-gray-500 text-xs">·</span>
              <span className="text-gray-400 text-xs">Sunday 19 Apr 2026 · 2:00 PM IST / 8:30 AM UK</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Ready to learn AI from scratch?</h2>
            <p className="text-gray-400 text-sm mb-6">
              Register now to secure your spot. Spaces are limited to keep the session interactive and ensure time for your questions.
            </p>
            <a
              href="https://topmate.io/jay_shah_btw/1187577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:scale-105 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Register via Topmate
            </a>
            <p className="text-gray-600 text-xs mt-3 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Secure · No tech background needed · Live Q&A included
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
