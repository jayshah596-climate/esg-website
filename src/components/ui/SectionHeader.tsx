interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-gray-900' : 'text-white'}`}>
        {title}{' '}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-gray-600' : 'text-gray-400'} ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
