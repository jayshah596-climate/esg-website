'use client'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs))
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-700 focus:ring-primary shadow-lg hover:shadow-primary/30 hover:scale-105',
      secondary: 'bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary shadow-lg hover:shadow-secondary/30 hover:scale-105',
      outline: 'bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary focus:ring-primary',
      ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
