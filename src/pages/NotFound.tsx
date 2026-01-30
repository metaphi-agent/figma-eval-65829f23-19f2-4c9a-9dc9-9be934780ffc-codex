import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-text">Page not found</h1>
      <p className="mt-2 text-muted">
        <Link className="text-link underline underline-offset-4" to="/">
          Go home
        </Link>
      </p>
    </div>
  )
}

