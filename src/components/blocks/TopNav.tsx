import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/live', label: 'Live Charts' },
  { to: '/frames', label: 'Frames' },
]

export default function TopNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-app-bg/40 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-md bg-brand/25 text-text">
            <span className="text-sm font-bold">iC</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-text">Charts Gallery</div>
            <div className="text-xs text-muted">Figma → React</div>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'rounded-button px-3 py-2 text-sm font-semibold text-muted transition-colors hover:text-text hover:bg-white/5',
                  isActive && 'bg-white/6 text-text'
                )
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
