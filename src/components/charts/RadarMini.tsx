import { chartColors } from './chartColors'

export type RadarMiniProps = {
  values: number[]
  color?: string
  size?: number
}

function polygonPoints(cx: number, cy: number, r: number, values: number[]) {
  const n = values.length
  return values
    .map((v, i) => {
      const a = (Math.PI * 2 * i) / n - Math.PI / 2
      const rr = r * Math.max(0, Math.min(1, v))
      const x = cx + rr * Math.cos(a)
      const y = cy + rr * Math.sin(a)
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')
}

export default function RadarMini({ values, color = chartColors.blue, size = 180 }: RadarMiniProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 14
  const rings = 4

  return (
    <svg width="100%" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Radar chart">
      <rect x={0} y={0} width={size} height={size} rx={10} fill="rgba(0,0,0,0.12)" />
      {Array.from({ length: rings }).map((_, i) => {
        const rr = (r * (i + 1)) / rings
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={rr}
            fill="none"
            stroke={chartColors.grid}
            strokeWidth={1}
            opacity={i === rings - 1 ? 0.9 : 0.6}
          />
        )
      })}
      {values.map((_, i) => {
        const a = (Math.PI * 2 * i) / values.length - Math.PI / 2
        const x = cx + r * Math.cos(a)
        const y = cy + r * Math.sin(a)
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={chartColors.grid} strokeWidth={1} />
      })}
      <polygon points={polygonPoints(cx, cy, r, values)} fill={color} opacity={0.25} />
      <polygon points={polygonPoints(cx, cy, r, values)} fill="none" stroke={color} strokeWidth={2.2} opacity={0.95} />
    </svg>
  )
}

