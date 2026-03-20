export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  sector: string
  content: string
  rating: number
  source: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Head of Sustainable Investing',
    company: 'Institutional Asset Manager',
    sector: 'Asset Management',
    content: 'Jay\'s expertise in TCFD climate risk assessment is exceptional. He translated highly technical climate scenario data into clear, actionable insights for our investment team. The scenario analysis dashboard BTW AI built has become central to our ESG due diligence process. Genuinely one of the most knowledgeable climate advisors I\'ve worked with.',
    rating: 5,
    source: 'Topmate',
  },
  {
    id: 2,
    name: 'Rahul Desai',
    role: 'Director of Sustainability',
    company: 'Global Manufacturing Corporation',
    sector: 'Manufacturing',
    content: 'We engaged BTW AI for our first CSRD double materiality assessment and Scope 3 inventory. Jay guided us through the entire process with impressive rigour and patience. The deliverables were audit-ready from day one and we\'re now confidently moving forward with our CSRD disclosure. The GHG calculator tool has saved our team countless hours every quarter.',
    rating: 5,
    source: 'LinkedIn',
  },
  {
    id: 3,
    name: 'Dr. Priya Nair',
    role: 'Climate Policy Lead',
    company: 'Urban Development Authority',
    sector: 'Public Sector',
    content: 'BTW AI delivered a comprehensive climate risk and net zero strategy for our municipal programme. What impressed us most was the ability to combine deep technical climate knowledge with practical, locally relevant recommendations. The team went beyond the brief to deliver a genuinely world-class piece of work that has influenced our city\'s climate action plan.',
    rating: 5,
    source: 'Topmate',
  },
  {
    id: 4,
    name: 'James Thornton',
    role: 'ESG Analyst',
    company: 'Real Estate Investment Trust',
    sector: 'Real Estate',
    content: 'The ESG Reporting Toolkit we purchased from the marketplace has transformed how we approach our annual ESG report. Everything is structured, automated where possible, and the SFDR PAI tracker alone saved us weeks of work. Outstanding quality — highly recommend to any sustainability professional.',
    rating: 5,
    source: 'Marketplace Review',
  },
]
