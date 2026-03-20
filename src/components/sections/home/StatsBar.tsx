const stats = [
  { value: '9+', label: 'Years Experience', description: 'Across consulting, finance & public sector' },
  { value: '50+', label: 'Projects Delivered', description: 'ESG reports, climate strategies & tools' },
  { value: '10+', label: 'Global Clients', description: 'From asset managers to municipalities' },
  { value: '8', label: 'ESG Frameworks', description: 'CSRD, TCFD, GRI, ISSB, SFDR & more' },
]

export function StatsBar() {
  return (
    <section className="py-12 bg-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs leading-snug hidden sm:block">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
