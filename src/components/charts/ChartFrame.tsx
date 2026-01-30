import type React from 'react'
import { chartColors } from './chartColors'

export type ChartFrameProps = {
  width?: number
  height?: number
  children: React.ReactNode
  xTicks?: number
  yTicks?: number
}

export default function ChartFrame({ width = 260, height = 160, children, xTicks = 6, yTicks = 4 }: ChartFrameProps) {
  const pad = 14
  const innerW = width - pad * 2
  const innerH = height - pad * 2

  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Chart">
      <rect x={0} y={0} width={width} height={height} rx={10} fill="rgba(0,0,0,0.12)" />
      <g transform={`translate(${pad}, ${pad})`}>
        {Array.from({ length: yTicks + 1 }).map((_, i) => {
          const y = (innerH * i) / yTicks
          return <line key={`y-${i}`} x1={0} y1={y} x2={innerW} y2={y} stroke={chartColors.grid} strokeWidth={1} />
        })}
        {Array.from({ length: xTicks + 1 }).map((_, i) => {
          const x = (innerW * i) / xTicks
          return <line key={`x-${i}`} x1={x} y1={0} x2={x} y2={innerH} stroke={chartColors.grid} strokeWidth={1} />
        })}
        <line x1={0} y1={innerH} x2={innerW} y2={innerH} stroke={chartColors.axis} strokeWidth={1.2} />
        <line x1={0} y1={0} x2={0} y2={innerH} stroke={chartColors.axis} strokeWidth={1.2} />
        <g>{children}</g>
      </g>
    </svg>
  )
}

