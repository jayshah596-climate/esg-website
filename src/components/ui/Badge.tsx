import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs))
}

interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'blue' | 'orange' | 'purple' | 'pink' | 'teal' | 'gray' | 'white'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ children, variant = 'green', size = 'sm', className }: BadgeProps) {
  const variants = {
    green: 'bg-primary/20 text-accent border border-primary/30',
    blue: 'bg-secondary/20 text-secondary border border-secondary/30',
    orange: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    pink: 'bg-pink-500/20 text-pink-400 border border-pink-500/30',
    teal: 'bg-teal-500/20 text-teal-400 border border-teal-500/30',
    gray: 'bg-white/10 text-gray-300 border border-white/20',
    white: 'bg-white/10 text-white border border-white/20',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span className={cn('inline-flex items-center font-medium rounded-full', variants[variant], sizes[size], className)}>
      {children}
    </span>
  )
}
