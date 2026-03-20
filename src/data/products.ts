export interface Product {
  id: number
  title: string
  description: string
  features: string[]
  price: string
  badge?: string
  category: string
  format: string
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Climate Scenario Analysis Dashboard',
    description: 'A comprehensive Power BI dashboard that enables organisations to model and visualise physical and transition climate risks across IPCC SSP and NGFS scenarios. Instantly understand your exposure under 1.5°C, 2°C, and 4°C warming pathways.',
    features: [
      'Pre-loaded NGFS and SSP scenario data (1.5°C, 2°C, 3°C, 4°C)',
      'Physical risk heatmaps by asset location and risk type',
      'Transition risk financial impact modelling',
      'Interactive scenario comparison charts',
      'TCFD-aligned output reports ready for disclosure',
      'Customisable for any sector or geography',
    ],
    price: '£499',
    badge: 'Most Popular',
    category: 'Dashboard',
    format: 'Power BI + Excel',
  },
  {
    id: 2,
    title: 'GHG Emissions Calculator Tool',
    description: 'A fully automated Excel-based GHG accounting tool aligned with the GHG Protocol Corporate Standard. Calculate Scope 1, 2, and all 15 Scope 3 categories with built-in emission factors and automated consolidation.',
    features: [
      'Scope 1, 2, and 3 (all 15 categories) calculation sheets',
      'Built-in Defra, IPCC, and EPA emission factors (updated annually)',
      'Automated consolidation and year-on-year comparison',
      'Uncertainty and data quality scoring',
      'Generates audit-ready GHG inventory summary',
      'Includes worked example for quick onboarding',
    ],
    price: '£299',
    badge: 'Best Value',
    category: 'Calculator',
    format: 'Excel / Google Sheets',
  },
  {
    id: 3,
    title: 'ESG Reporting Toolkit (Excel + Power BI)',
    description: 'An all-in-one ESG reporting toolkit with pre-built templates for CSRD, GRI, TCFD, and SFDR disclosures. Includes data collection sheets, KPI tracking, and stakeholder-ready report templates.',
    features: [
      'CSRD / ESRS data collection templates',
      'GRI Standards disclosure mapping',
      'TCFD recommendation response templates',
      'SFDR Article 8/9 PAI indicator tracker',
      'Board ESG dashboard (Power BI)',
      'Annual ESG report Word template with guidance notes',
    ],
    price: '£399',
    badge: undefined,
    category: 'Toolkit',
    format: 'Excel + Power BI + Word',
  },
  {
    id: 4,
    title: 'Climate Risk Assessment Toolkit',
    description: 'A structured toolkit for conducting TCFD-aligned physical and transition climate risk assessments. Includes risk registers, scoring matrices, scenario narratives, and financial impact estimation frameworks.',
    features: [
      'Physical risk assessment template (10 hazard types)',
      'Transition risk register with 30+ pre-populated risks',
      'TCFD scenario narrative templates (3 scenarios)',
      'Financial impact estimation methodology',
      'Risk heat map and prioritisation matrix',
      'TCFD disclosure gap analysis checklist',
    ],
    price: '£349',
    badge: undefined,
    category: 'Toolkit',
    format: 'Excel + PowerPoint',
  },
  {
    id: 5,
    title: 'Scope 3 Estimation Tool',
    description: 'Purpose-built for Scope 3 category estimation using spend-based, activity-based, and supplier-specific methods. Covers all 15 Scope 3 categories with guidance notes and built-in emission factors.',
    features: [
      'All 15 Scope 3 categories with calculation methodology',
      'Spend-based and activity-based estimation options',
      'Supplier data collection questionnaire template',
      'Hotspot screening and category prioritisation',
      'Year-on-year tracking and reduction target setting',
      'GHG Protocol Scope 3 Standard compliant methodology',
    ],
    price: '£249',
    badge: undefined,
    category: 'Calculator',
    format: 'Excel',
  },
  {
    id: 6,
    title: 'ESG Data Automation Templates',
    description: 'A bundle of automation templates built in Make (Integromat) and Zapier to automate ESG data collection, reporting workflows, and stakeholder communications. Reduce manual ESG reporting effort by up to 60%.',
    features: [
      'Automated ESG data collection forms and flows',
      'Supplier questionnaire automation workflow',
      'Monthly emissions data aggregation pipeline',
      'ESG KPI notification and alerting setup',
      'Integration templates for common ESG tools',
      'Step-by-step setup guide and video walkthrough',
    ],
    price: '£199',
    badge: 'New',
    category: 'Automation',
    format: 'Make / Zapier Templates',
  },
]
