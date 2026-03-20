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
    link: '/resources/article-1',
  },
  {
    id: 2,
    title: 'Scope 3 Emissions Explained: Where to Start When Data is Scarce',
    description: 'A pragmatic guide to beginning your Scope 3 emissions journey using spend-based methods and prioritisation frameworks, even when supplier data is limited.',
    type: 'article',
    date: '2024-05-20',
    readTime: '10 min read',
    tags: ['Scope 3', 'GHG', 'Supply Chain', 'Net Zero'],
    link: '/resources/article-2',
  },
  {
    id: 3,
    title: 'Climate Risk Basics: TCFD and Scenario Analysis Explained',
    description: 'An introduction to climate risk assessment — covering physical risks, transition risks, scenario analysis, and how to disclose climate risk aligned with the TCFD framework.',
    type: 'article',
    date: '2024-06-15',
    readTime: '9 min read',
    tags: ['Climate Risk', 'TCFD', 'Scenario Analysis', 'NGFS'],
    link: '/resources/article-3',
  },
]
