import { chartColors } from './chartColors'
import ChartFrame from './ChartFrame'

export type LineMiniProps = {
  values: number[]
  color?: string
  fill?: boolean
}

function pointsToPath(points: { x: number; y: number }[]) {
  if (points.length === 0) return ''
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ')
}

export default function LineMini({ values, color = chartColors.blue, fill = true }: LineMiniProps) {
  const w = 260
  const h = 160
  const pad = 14
  const innerW = w - pad * 2
  const innerH = h - pad * 2
  const max = Math.max(1, ...values)

  const pts = values.map((v, i) => {
    const x = (innerW * i) / Math.max(1, values.length - 1)
    const y = innerH - (v / max) * (innerH - 10)
    return { x, y }
  })

  const d = pointsToPath(pts)
  const fillPath = fill ? `${d} L ${pts.at(-1)?.x ?? 0} ${innerH} L 0 ${innerH} Z` : undefined

  return (
    <ChartFrame width={w} height={h}>
      {fill && fillPath ? <path d={fillPath} fill={color} opacity={0.22} /> : null}
      <path d={d} fill="none" stroke={color} strokeWidth={2.4} />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={2.5} fill={color} />
      ))}
    </ChartFrame>
  )
}

