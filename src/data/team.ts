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
    id: 1,
    name: 'Jay Shah',
    role: 'ESG & Climate Consultant | Founder',
    bio: 'Jay is a senior ESG and Climate consultant with 11+ years of experience across investment management, corporate advisory, NGOs, and the public sector. He specialises in climate risk assessment, GHG accounting, TCFD/ISSB disclosure, net zero strategy, and CSRD compliance. Jay founded BTW AI to make world-class ESG advisory accessible to organisations of all sizes, combining deep technical expertise with modern AI and automation tools.',
    credentials: [
      'MSc Environmental Management',
      'GHG Protocol Certified',
      'TCFD & ISSB Disclosure Expert',
      'CSRD & Double Materiality Specialist',
    ],
    expertise: [
      'Climate Risk & Scenario Analysis',
      'GHG Accounting (Scope 1, 2, 3)',
      'TCFD / ISSB Reporting',
      'Net Zero Strategy',
      'CSRD & Double Materiality',
      'Sustainable Finance',
      'ESG Reporting Frameworks',
      'AI-Powered ESG Tools',
    ],
    linkedIn: 'https://www.linkedin.com/in/jay-shah-climate/',
    image: undefined,
  },
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
