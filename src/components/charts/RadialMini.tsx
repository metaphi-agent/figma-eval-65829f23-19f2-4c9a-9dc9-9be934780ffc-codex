import { chartColors } from './chartColors'

export type RadialMiniProps = {
  value: number
  max?: number
  size?: number
  color?: string
}

export default function RadialMini({ value, max = 100, size = 180, color = chartColors.cyan }: RadialMiniProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 16
  const pct = Math.max(0, Math.min(1, value / max))
  const a0 = -90
  const a1 = a0 + pct * 360

  const polar = (angleDeg: number) => {
    const a = (angleDeg * Math.PI) / 180
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  }

  const s = polar(a0)
  const e = polar(a1)
  const largeArc = pct > 0.5 ? 1 : 0
  const d = `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`

  return (
    <svg width="100%" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Radial chart">
      <rect x={0} y={0} width={size} height={size} rx={10} fill="rgba(0,0,0,0.12)" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={chartColors.grid} strokeWidth={14} />
      <path d={d} fill="none" stroke={color} strokeWidth={14} strokeLinecap="round" opacity={0.95} />
      <text x={cx} y={cy + 6} textAnchor="middle" fontSize="22" fontWeight="700" fill={chartColors.text}>
        {Math.round(pct * 100)}%
      </text>
    </svg>
  )
}
