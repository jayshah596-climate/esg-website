import Link from 'next/link'
import { ArrowRight, Linkedin, ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'

const teamPreview = [
  {
    name: 'Jay Shah',
    role: 'ESG & Climate Consultant',
    subRole: 'Founder',
    bio: 'Senior ESG consultant with 11+ years of experience in climate risk, GHG accounting, TCFD/ISSB disclosure, net zero strategy, and CSRD compliance.',
    tags: ['Climate Risk', 'GHG Accounting', 'TCFD', 'Net Zero'],
    linkedin: 'https://www.linkedin.com/in/jay-shah-climate/',
    initial: 'J',
  },
  {
    name: 'Zeel Shah',
    role: 'Automation Engineer',
    subRole: 'Co-Founder',
    bio: 'Specialist in AI tools, workflow automation, ESG data infrastructure, and digital product development. Builds the tech backbone of BTW AI.',
    tags: ['AI Tools', 'Power BI', 'Automation', 'SaaS'],
    linkedin: 'https://www.linkedin.com/in/zeel-shah-ab338052/',
    initial: 'Z',
  },
]

export function TeamSnippet() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="The Team"
            title="Expert Advisors,"
            titleHighlight="Real Impact"
            subtitle="BTW AI is led by specialists who combine deep ESG knowledge with modern automation technology."
          />
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm whitespace-nowrap group transition-colors"
          >
            Meet the Full Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {teamPreview.map((member) => (
            <div
              key={member.name}
              className="bg-surface border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-xl">{member.initial}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-accent text-sm">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.subRole}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {member.tags.map((tag) => (
                  <Badge key={tag} variant="gray" size="sm">{tag}</Badge>
                ))}
              </div>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#0077b5] text-xs transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
