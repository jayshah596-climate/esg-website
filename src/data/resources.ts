export interface Resource {
  id: number
  title: string
  description: string
  type: 'article' | 'guide' | 'video' | 'download'
  date: string
  readTime?: string
  link?: string
  tags: string[]
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Understanding CSRD Double Materiality: A Practical Guide',
    description: 'A comprehensive walkthrough of the CSRD double materiality assessment process, including how to identify, assess, and score your organisation\'s material impacts, risks, and opportunities under ESRS requirements.',
    type: 'guide',
    date: '2024-07-01',
    readTime: '12 min read',
    tags: ['CSRD', 'Double Materiality', 'ESRS', 'Reporting'],
  },
  {
    id: 2,
    title: 'NGFS Climate Scenarios Explained: What They Mean for Your Business',
    description: 'Breaking down the Network for Greening the Financial System scenarios and how to use them for TCFD climate risk assessment. Includes worked examples for physical and transition risk analysis.',
    type: 'article',
    date: '2024-06-15',
    readTime: '8 min read',
    tags: ['NGFS', 'Climate Risk', 'TCFD', 'Scenarios'],
  },
  {
    id: 3,
    title: 'Scope 3 Emissions: Where to Start When Data is Scarce',
    description: 'A pragmatic guide to beginning your Scope 3 emissions journey using spend-based methods and prioritisation frameworks, even when supplier data is limited.',
    type: 'article',
    date: '2024-05-20',
    readTime: '10 min read',
    tags: ['Scope 3', 'GHG', 'Supply Chain', 'Net Zero'],
  },
]
