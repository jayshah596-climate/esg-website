'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: number
  role: 'bot' | 'user'
  text: string
}

const quickQuestions = [
  'What services do you offer?',
  'How can I book a consultation?',
  'What are your product prices?',
  'Tell me about Jay Shah',
]

const botResponses: Record<string, string> = {
  'what services do you offer': `We offer 8 core ESG & Climate services:\n\n• ESG Reporting & Compliance (CSRD, ISSB, TCFD, GRI)\n• Climate Risk & Scenario Analysis\n• GHG Emissions Accounting (Scope 1, 2, 3)\n• Net Zero Strategy & Decarbonisation\n• Sustainable Finance Advisory\n• Climate Data & Dashboard Solutions\n• Supply Chain (Scope 3) Analysis\n• Double Materiality Assessment\n\nVisit our Services page to learn more!`,
  'how can i book a consultation': `Booking is easy! You have 3 options:\n\n1. 📋 Fill our Contact Form at /contact\n2. 💬 WhatsApp us at +44 7435 996857\n3. 📅 Book a session on Topmate\n\nWe offer a FREE initial ESG consultation — click the green "Book Free Consultation" button at the top!`,
  'what are your product prices': `Our digital ESG products range from £199–£499:\n\n• Climate Scenario Dashboard — £499\n• ESG Reporting Toolkit — £399\n• Climate Risk Toolkit — £349\n• GHG Calculator Tool — £299\n• Scope 3 Estimation Tool — £249\n• ESG Automation Templates — £199\n\nVisit /marketplace for full details and to purchase!`,
  'tell me about jay shah': `Jay Shah is the founder of BTW AI Services and an ESG & Climate specialist with 9+ years of experience across:\n\n• Investment Management (PGIM, Darashaw)\n• International Consulting (PwC, NGOs)\n• Public Sector (Municipal Corporations, NIUA)\n\nHe specialises in Climate Risk, GHG Accounting, CSRD/TCFD compliance, and Net Zero Strategy.\n\nConnect with Jay on LinkedIn: linkedin.com/in/jay-shah-climate`,
  default: `Thanks for your message! For detailed enquiries, please:\n\n• Visit our Contact page at /contact\n• WhatsApp us: +44 7435 996857\n• Email: hello@btwai.com\n\nOur team typically responds within 24 hours. 🌱`,
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim()
  for (const key of Object.keys(botResponses)) {
    if (key !== 'default' && lower.includes(key)) {
      return botResponses[key]
    }
  }
  return botResponses.default
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      text: 'Hi! I\'m the BTW AI assistant 🌱\n\nHow can I help you with ESG & Climate consulting today?',
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMsg: Message = { id: Date.now(), role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'bot',
        text: getBotResponse(text),
      }
      setMessages((prev) => [...prev, botMsg])
    }, 600)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary-600 transition-all duration-200 hover:scale-110"
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
        </button>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-dark animate-pulse" />
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 right-6 z-50 w-80 sm:w-96 bg-surface border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">BTW AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-white/80 text-xs">Online — ESG Expert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'bot' ? 'bg-primary/20' : 'bg-secondary/20'
                }`}>
                  {msg.role === 'bot' ? (
                    <Bot className="w-4 h-4 text-accent" />
                  ) : (
                    <User className="w-4 h-4 text-secondary" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                    msg.role === 'bot'
                      ? 'bg-white/5 text-gray-200'
                      : 'bg-primary text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-2.5 py-1 bg-primary/20 text-accent border border-primary/30 rounded-full hover:bg-primary/30 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Type your question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors disabled:opacity-40"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
