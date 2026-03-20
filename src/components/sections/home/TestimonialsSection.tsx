import { Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our"
          titleHighlight="Clients Say"
          subtitle="Feedback from professionals who've experienced the BTW AI difference — rigorous, practical, and genuinely impactful."
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-dark border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-primary/40" />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  <p className="text-gray-600 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Read more on{' '}
            <a
              href="https://topmate.io/dashboard/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Topmate
            </a>
            {' '}and{' '}
            <a
              href="https://www.linkedin.com/in/jay-shah-climate/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
