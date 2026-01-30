import { cn } from '../../lib/cn'
import type React from 'react'

type ButtonVariant = 'primary' | 'ghost'
type ButtonSize = 'md' | 'lg'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export default function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold outline-none transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none',
        size === 'lg' ? 'h-14 px-8 text-xl rounded-button' : 'h-10 px-4 text-sm rounded-button',
        variant === 'primary'
          ? 'bg-button-bg text-button-text hover:bg-white/95 active:bg-white/90'
          : 'bg-transparent text-text hover:bg-white/5 active:bg-white/8',
        className
      )}
      {...props}
    />
  )
}
