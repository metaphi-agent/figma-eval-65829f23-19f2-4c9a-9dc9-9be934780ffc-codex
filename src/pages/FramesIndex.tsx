import { Link, useSearchParams } from 'react-router-dom'
import Card from '../components/ui/Card'
import { frames } from '../data/frames'

export default function FramesIndex() {
  const [params, setParams] = useSearchParams()
  const query = (params.get('q') ?? '').trim().toLowerCase()
  const filtered = query ? frames.filter((f) => `${f.id} ${f.name} ${f.nodeId}`.toLowerCase().includes(query)) : frames

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-text md:text-4xl">Frames</h1>
          <p className="mt-2 text-sm text-muted">
            Pixel-accurate previews using the exported images in `public/ground_truth/frames/`.
          </p>
        </div>
        <div className="flex w-full max-w-md items-center gap-3">
          <input
            value={params.get('q') ?? ''}
            onChange={(e) => {
              const next = new URLSearchParams(params)
              if (e.target.value) next.set('q', e.target.value)
              else next.delete('q')
              setParams(next, { replace: true })
            }}
            placeholder="Search frames…"
            className="h-10 w-full rounded-button border border-border bg-white/5 px-3 text-sm text-text placeholder:text-muted/80 outline-none focus:ring-2 focus:ring-brand/60"
          />
          <div className="shrink-0 text-sm text-muted">{filtered.length}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((f) => (
          <Link key={f.id} to={`/frames/${f.id}`} className="group">
            <Card className="overflow-hidden bg-surface/60 transition-colors group-hover:bg-surface/80">
              <div className="aspect-[16/10] w-full bg-black/20">
                <img src={f.imagePath} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="px-4 py-3">
                <div className="truncate text-sm font-semibold text-text">{f.name}</div>
                <div className="mt-1 text-xs text-muted">/{`frames/${f.id}`}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

