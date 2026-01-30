import type React from 'react'
import { cn } from '../../lib/cn'

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'surface' | 'surfaceAlt'
}

export default function Card({ className, variant = 'surface', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-border',
        variant === 'surface' ? 'bg-surface/80' : 'bg-surface-alt/80',
        className
      )}
      {...props}
    />
  )
}

