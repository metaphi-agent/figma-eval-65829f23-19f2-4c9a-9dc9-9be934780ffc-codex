import { chartColors } from './chartColors'

export type PieSlice = { value: number; color: string }

export type PieMiniProps = {
  slices: PieSlice[]
  donut?: boolean
  size?: number
  thickness?: number
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} L ${cx} ${cy} Z`
}

export default function PieMini({ slices, donut = false, size = 160, thickness = 18 }: PieMiniProps) {
  const total = Math.max(1, slices.reduce((s, x) => s + x.value, 0))
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 10

  let angle = 0
  const paths = slices.map((s, idx) => {
    const a0 = angle
    angle += (s.value / total) * 360
    const a1 = angle
    return <path key={idx} d={arcPath(cx, cy, r, a0, a1)} fill={s.color} opacity={0.92} />
  })

  return (
    <svg width="100%" viewBox={`0 0 ${size} ${size}`} role="img" aria-label={donut ? 'Donut chart' : 'Pie chart'}>
      <rect x={0} y={0} width={size} height={size} rx={10} fill="rgba(0,0,0,0.12)" />
      <g>{paths}</g>
      {donut ? (
        <circle cx={cx} cy={cy} r={r - thickness} fill="rgba(15,20,32,0.9)" stroke={chartColors.grid} />
      ) : null}
    </svg>
  )
}

