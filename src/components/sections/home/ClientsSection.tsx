import { SectionHeader } from '@/components/ui/SectionHeader'
import { clients } from '@/data/clients'

export function ClientsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Trusted By"
          title="Clients We've"
          titleHighlight="Worked With"
          subtitle="Organisations across finance, government, NGOs, and the private sector trust BTW AI for their ESG and climate advisory needs."
          centered
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group bg-surface border border-white/10 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-10 h-10 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-sm">
                  {client.name.charAt(0)}
                </span>
              </div>
              <div className="text-white font-medium text-sm mb-1 group-hover:text-accent transition-colors">
                {client.name}
              </div>
              <div className="text-gray-500 text-xs">{client.sector}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Across <strong className="text-gray-300">Europe, Asia, and emerging markets</strong> — trusted for complex ESG and climate engagements
          </p>
        </div>
      </div>
    </section>
  )
}
