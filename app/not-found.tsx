import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-brand-muted">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-brand-muted mb-8">
            Sorry, the page you are looking for could not be found.
          </p>
        </div>
        <Link href="/">
          <button className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  )
}
