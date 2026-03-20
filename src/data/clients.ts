export interface Client {
  id: number
  name: string
  sector: string
  description: string
  website?: string
}

export const clients: Client[] = [
  {
    id: 1,
    name: 'Purus',
    sector: 'Clean Energy',
    description: 'Climate strategy and ESG advisory for clean energy transition projects.',
    website: undefined,
  },
  {
    id: 2,
    name: 'PGIM',
    sector: 'Asset Management',
    description: 'Climate risk assessment and TCFD alignment for real estate investment portfolio.',
    website: undefined,
  },
  {
    id: 3,
    name: 'Darashaw',
    sector: 'Financial Services',
    description: 'ESG integration and sustainable finance advisory services.',
    website: undefined,
  },
  {
    id: 4,
    name: 'PwC',
    sector: 'Professional Services',
    description: 'GHG accounting and ESG reporting framework support for client engagements.',
    website: undefined,
  },
  {
    id: 5,
    name: 'ICLEI',
    sector: 'Local Government / NGO',
    description: 'Climate resilience strategy and emissions reduction programmes for local governments.',
    website: undefined,
  },
  {
    id: 6,
    name: 'Weather Trade Net',
    sector: 'Climate Data & Finance',
    description: 'Climate risk data analysis and scenario modelling support.',
    website: undefined,
  },
  {
    id: 7,
    name: 'Pinnacle Office',
    sector: 'Real Estate',
    description: 'Scope 3 supply chain analysis and net zero roadmap for commercial real estate.',
    website: undefined,
  },
  {
    id: 8,
    name: 'NIUA (c-Cube)',
    sector: 'Urban Development / Public Sector',
    description: 'Sustainable urban development and climate resilience planning for Indian cities.',
    website: undefined,
  },
  {
    id: 9,
    name: 'Vadodara Municipal Corporation',
    sector: 'Municipal Government',
    description: 'GHG inventory and climate action planning for a major Indian municipality.',
    website: undefined,
  },
  {
    id: 10,
    name: 'Accion Land',
    sector: 'Land Management',
    description: 'ESG strategy and sustainability reporting for land and natural capital projects.',
    website: 'https://accionland.com/',
  },
]
