import { Link, useParams } from 'react-router-dom'
import Card from '../components/ui/Card'
import { frames, getFrameById } from '../data/frames'

export default function FrameView() {
  const { frameId } = useParams<{ frameId: string }>()
  const frame = frameId ? getFrameById(frameId) : undefined

  if (!frame) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-bold text-text">Frame not found</h1>
        <p className="mt-2 text-muted">
          <Link className="text-link underline underline-offset-4" to="/frames">
            Back to frames
          </Link>
        </p>
      </div>
    )
  }

  const currentIndex = frames.findIndex((f) => f.id === frame.id)
  const prev = currentIndex > 0 ? frames[currentIndex - 1] : undefined
  const next = currentIndex >= 0 && currentIndex < frames.length - 1 ? frames[currentIndex + 1] : undefined

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-sm text-muted">
            <Link className="text-link underline underline-offset-4" to="/frames">
              Frames
            </Link>{' '}
            / {frame.id}
          </div>
          <h1 className="mt-1 truncate text-2xl font-bold text-text md:text-3xl">{frame.name}</h1>
          <div className="mt-1 text-sm text-muted">Node {frame.nodeId}</div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to={prev ? `/frames/${prev.id}` : '#'}
            aria-disabled={!prev}
            className="rounded-button border border-border bg-white/5 px-3 py-2 text-sm font-semibold text-text hover:bg-white/8 aria-disabled:pointer-events-none aria-disabled:opacity-50"
          >
            Prev
          </Link>
          <Link
            to={next ? `/frames/${next.id}` : '#'}
            aria-disabled={!next}
            className="rounded-button border border-border bg-white/5 px-3 py-2 text-sm font-semibold text-text hover:bg-white/8 aria-disabled:pointer-events-none aria-disabled:opacity-50"
          >
            Next
          </Link>
        </div>
      </div>

      <Card className="mt-6 overflow-hidden bg-surface/40">
        <div className="w-full bg-black/30">
          <img src={frame.imagePath} alt={frame.name} className="h-auto w-full" />
        </div>
      </Card>
    </div>
  )
}

