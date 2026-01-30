import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNav from './components/blocks/TopNav'

const Home = lazy(() => import('./pages/Home'))
const LiveCharts = lazy(() => import('./pages/LiveCharts'))
const FramesIndex = lazy(() => import('./pages/FramesIndex'))
const FrameView = lazy(() => import('./pages/FrameView'))
const NotFound = lazy(() => import('./pages/NotFound'))

function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="text-sm text-muted">Loading…</div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<LiveCharts />} />
          <Route path="/frames" element={<FramesIndex />} />
          <Route path="/frames/:frameId" element={<FrameView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}
