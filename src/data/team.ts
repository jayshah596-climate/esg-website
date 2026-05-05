export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  credentials: string[]
  expertise: string[]
  linkedIn: string
  image?: string
}

export const team: TeamMember[] = [
  {
    id: 2,
    name: 'Zeel Shah',
    role: 'Automation Engineer | Co-Founder',
    bio: 'Zeel is an experienced Automation Engineer specialising in AI-powered tools, workflow automation, and SaaS integrations. With a deep focus on ESG data infrastructure, she designs and builds the digital backbone that makes sustainability reporting faster, more accurate, and scalable. Zeel leads the development of BTW AI\'s suite of digital products and automation solutions.',
    credentials: [
      'Automation & AI Tools Specialist',
      'SaaS Integration & Workflow Design',
      'ESG Data Infrastructure',
      'Dashboard & Analytics Development',
    ],
    expertise: [
      'AI Tools & Automation',
      'Power BI & Data Dashboards',
      'Workflow Automation (Make, Zapier)',
      'SaaS Integration & APIs',
      'ESG Data Pipeline Design',
      'Excel / VBA Development',
      'Process Optimisation',
      'Digital Product Development',
    ],
    linkedIn: 'https://www.linkedin.com/in/zeel-shah-ab338052/',
    image: undefined,
  },
]
