import { Link } from 'react-router-dom'
import PromoBanner from '../components/blocks/PromoBanner'
import Card from '../components/ui/Card'
import { frames } from '../data/frames'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-text md:text-5xl">Charts design pack</h1>
          <p className="mt-3 text-base text-muted md:text-lg">
            Routes include a frame-by-frame preview (from exported ground-truth images) plus reusable UI blocks you can
            wire into a real dashboard.
          </p>
        </div>
        <Link
          to="/frames"
          className="rounded-button border border-border bg-white/5 px-4 py-2 text-sm font-semibold text-text hover:bg-white/8"
        >
          Browse all frames
        </Link>
      </div>

      <div className="mt-10">
        <PromoBanner />
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-text">Highlights</h2>
          <div className="text-sm text-muted">{frames.length} frames</div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {frames.slice(0, 6).map((f) => (
            <Link key={f.id} to={`/frames/${f.id}`} className="group">
              <Card className="overflow-hidden bg-surface/60 transition-colors group-hover:bg-surface/80">
                <div className="aspect-[16/10] w-full bg-black/20">
                  <img src={f.imagePath} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="px-4 py-3">
                  <div className="text-sm font-semibold text-text">{f.name}</div>
                  <div className="mt-1 text-xs text-muted">Node {f.nodeId}</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

