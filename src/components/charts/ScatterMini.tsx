import { chartColors } from './chartColors'
import ChartFrame from './ChartFrame'

export type ScatterPoint = { x: number; y: number; r?: number; color?: string }

export type ScatterMiniProps = {
  points: ScatterPoint[]
  bubble?: boolean
}

export default function ScatterMini({ points, bubble = false }: ScatterMiniProps) {
  const w = 260
  const h = 160
  const pad = 14
  const innerW = w - pad * 2
  const innerH = h - pad * 2

  const xs = points.map((p) => p.x)
  const ys = points.map((p) => p.y)
  const minX = Math.min(...xs, 0)
  const maxX = Math.max(...xs, 1)
  const minY = Math.min(...ys, 0)
  const maxY = Math.max(...ys, 1)

  const normX = (x: number) => ((x - minX) / Math.max(1e-9, maxX - minX)) * innerW
  const normY = (y: number) => innerH - ((y - minY) / Math.max(1e-9, maxY - minY)) * innerH

  return (
    <ChartFrame width={w} height={h}>
      {points.map((p, i) => (
        <circle
          key={i}
          cx={normX(p.x)}
          cy={normY(p.y)}
          r={bubble ? Math.max(2.5, (p.r ?? 3) * 1.2) : 3}
          fill={p.color ?? chartColors.blue}
          opacity={bubble ? 0.55 : 0.9}
          stroke="rgba(0,0,0,0.2)"
        />
      ))}
    </ChartFrame>
  )
}

