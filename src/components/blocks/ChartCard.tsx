import type React from 'react'
import Card from '../ui/Card'
import { cn } from '../../lib/cn'

export type ChartCardProps = {
  title: string
  subtitle?: string
  right?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export default function ChartCard({ title, subtitle, right, children, className }: ChartCardProps) {
  return (
    <Card className={cn('p-4', className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-text">{title}</div>
          {subtitle ? <div className="mt-1 truncate text-xs text-muted">{subtitle}</div> : null}
        </div>
        {right ? <div className="shrink-0">{right}</div> : null}
      </div>
      <div className="mt-3">{children}</div>
    </Card>
  )
}

