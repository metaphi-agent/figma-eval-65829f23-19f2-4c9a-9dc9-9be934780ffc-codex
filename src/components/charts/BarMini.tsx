import { chartColors } from './chartColors'
import ChartFrame from './ChartFrame'

export type BarMiniProps = {
  values: number[]
  color?: string
  secondaryValues?: number[]
  secondaryColor?: string
}

export default function BarMini({
  values,
  color = chartColors.blue,
  secondaryValues,
  secondaryColor = chartColors.green,
}: BarMiniProps) {
  const w = 260
  const h = 160
  const pad = 14
  const innerW = w - pad * 2
  const innerH = h - pad * 2
  const max = Math.max(1, ...(secondaryValues ? values.map((v, i) => v + (secondaryValues[i] ?? 0)) : values))
  const barCount = values.length
  const groupGap = 4
  const barW = Math.max(3, (innerW - groupGap * (barCount - 1)) / barCount)

  return (
    <ChartFrame width={w} height={h}>
      {values.map((v, i) => {
        const x = i * (barW + groupGap)
        const barH = (v / max) * (innerH - 6)
        const y = innerH - barH
        const sx = x + barW * 0.15
        const sw = barW * 0.7

        if (secondaryValues) {
          const v2 = secondaryValues[i] ?? 0
          const barH2 = (v2 / max) * (innerH - 6)
          const y2 = innerH - barH2
          return (
            <g key={i}>
              <rect x={sx} y={y2} width={sw} height={barH2} rx={3} fill={secondaryColor} opacity={0.9} />
              <rect x={sx} y={y} width={sw} height={barH} rx={3} fill={color} opacity={0.9} />
            </g>
          )
        }

        return <rect key={i} x={sx} y={y} width={sw} height={barH} rx={3} fill={color} opacity={0.9} />
      })}
    </ChartFrame>
  )
}

