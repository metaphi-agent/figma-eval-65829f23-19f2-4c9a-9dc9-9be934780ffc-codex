import ChartCard from '../components/blocks/ChartCard'
import PromoBanner from '../components/blocks/PromoBanner'
import BarMini from '../components/charts/BarMini'
import LineMini from '../components/charts/LineMini'
import PieMini from '../components/charts/PieMini'
import RadarMini from '../components/charts/RadarMini'
import RadialMini from '../components/charts/RadialMini'
import ScatterMini from '../components/charts/ScatterMini'
import { chartColors } from '../components/charts/chartColors'

const sampleBars = [18, 30, 22, 38, 28, 40, 34, 46]
const sampleBars2 = [10, 16, 12, 20, 14, 18, 16, 24]
const sampleLine = [12, 24, 18, 28, 22, 30, 26, 36, 32, 42]
const pieSlices = [
  { value: 42, color: chartColors.blue },
  { value: 22, color: chartColors.green },
  { value: 18, color: chartColors.cyan },
  { value: 18, color: chartColors.orange },
]

function seededPoints(count: number, seed = 11) {
  let x = seed
  const next = () => {
    x = (x * 9301 + 49297) % 233280
    return x / 233280
  }
  return Array.from({ length: count }).map(() => {
    const a = next()
    const b = next()
    const r = next()
    const palette = [chartColors.blue, chartColors.green, chartColors.cyan, chartColors.orange]
    return { x: a * 100, y: b * 100, r: 3 + r * 8, color: palette[Math.floor(next() * palette.length)] }
  })
}

export default function LiveCharts() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-text md:text-4xl">Live components</h1>
          <p className="mt-2 text-sm text-muted md:text-base">
            Lightweight SVG charts styled to match the dark dashboard aesthetic.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <ChartCard title="Bar" subtitle="Single series">
          <BarMini values={sampleBars} />
        </ChartCard>
        <ChartCard title="Bar" subtitle="Stacked two series">
          <BarMini values={sampleBars} secondaryValues={sampleBars2} />
        </ChartCard>
        <ChartCard title="Line / Area" subtitle="Area fill + points">
          <LineMini values={sampleLine} fill />
        </ChartCard>
        <ChartCard title="Line" subtitle="No fill">
          <LineMini values={sampleLine} fill={false} color={chartColors.green} />
        </ChartCard>
        <ChartCard title="Pie" subtitle="4 slices">
          <div className="max-w-[240px]">
            <PieMini slices={pieSlices} />
          </div>
        </ChartCard>
        <ChartCard title="Donut" subtitle="Center cutout">
          <div className="max-w-[240px]">
            <PieMini slices={pieSlices} donut />
          </div>
        </ChartCard>
        <ChartCard title="Radar" subtitle="5 axes">
          <div className="max-w-[260px]">
            <RadarMini values={[0.7, 0.45, 0.82, 0.55, 0.65]} />
          </div>
        </ChartCard>
        <ChartCard title="Radial" subtitle="Progress ring">
          <div className="max-w-[260px]">
            <RadialMini value={76} />
          </div>
        </ChartCard>
        <ChartCard title="Scatter" subtitle="Points">
          <ScatterMini points={seededPoints(36)} />
        </ChartCard>
        <ChartCard title="Bubble" subtitle="Variable radius">
          <ScatterMini points={seededPoints(30, 22)} bubble />
        </ChartCard>
      </div>

      <div className="mt-10">
        <PromoBanner />
      </div>
    </div>
  )
}

