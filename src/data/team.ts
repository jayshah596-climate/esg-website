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
    role: 'ESG & Climate Specialist | Co-Founder',
    bio: 'Jay is a seasoned ESG and Climate specialist with over 9 years of experience spanning investment management, consulting, NGOs, and the public sector. He has advised corporates, municipalities, and financial institutions across Europe, Asia, and emerging markets on climate risk, net zero strategy, and sustainability reporting. Jay is passionate about bridging the gap between climate science and actionable business strategy.',
    credentials: [
      '9+ Years ESG & Climate Experience',
      'Consulting | Asset Management | NGO | Public Sector',
      'Climate Risk & Net Zero Specialist',
      'TCFD | CSRD | SBTi Expert',
    ],
    expertise: [
      'Climate Risk & Scenario Analysis',
      'GHG Accounting (Scope 1, 2, 3)',
      'CSRD, TCFD, ISSB, SFDR, EU Taxonomy',
      'ESG Reporting & Double Materiality',
      'Net Zero Strategy',
      'Sustainable Finance (SFDR, Green Bonds)',
      'SSP & NGFS Scenarios',
      'Supply Chain Decarbonisation',
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
