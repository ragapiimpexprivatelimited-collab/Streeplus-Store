import { Link } from 'react-router-dom'
import { Home, LockKeyhole, PackageSearch } from 'lucide-react'
import useReveal from '../hooks/useReveal'

// Scroll-reveal animation used across the whole site (same theme/behaviour).
function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const { ref, revealed } = useReveal()
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: revealed ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-stone-50 px-6 py-20 sm:py-28">
      <Reveal className="mx-auto w-full max-w-xl rounded-[2rem] border border-stone-200 bg-white px-6 py-16 text-center shadow-sm sm:px-12">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-rose-100 text-rose-600">
          <LockKeyhole size={30} strokeWidth={2} className="size-[30px] shrink-0" />
        </span>

        <span className="mt-6 inline-block rounded-full bg-emerald-50 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-emerald-800">
          403 · Access denied
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          You do not have permission to view this page.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-stone-600">
          This area is restricted to authorized user roles. If you believe this is a mistake,
          please get in touch with our team.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-[13px] font-semibold text-white shadow-md shadow-emerald-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
          >
            <Home size={15} className="shrink-0" />
            Go to home
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-[13px] font-semibold text-emerald-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-100"
          >
            <PackageSearch size={15} className="shrink-0" />
            Explore products
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
