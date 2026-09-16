import { Link } from 'react-router-dom'
import { ArrowLeft, CalendarDays, FileText, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { POLICIES } from '../constants/policies'
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

// Renders a single policy. Blocks are defined in src/constants/policies.js.
function PolicyBody({ policy }) {
  return (
    <div className="space-y-5">
      {policy.intro && (
        <p className="text-[15px] leading-relaxed text-stone-700">{policy.intro}</p>
      )}

      {policy.sections.map((block, index) => {
        if (typeof block === 'string') {
          return (
            <p key={index} className="text-[14.5px] leading-relaxed text-stone-600">
              {block}
            </p>
          )
        }
        if (block.h) {
          return (
            <h2
              key={index}
              className="pt-2 text-[17px] font-semibold tracking-tight text-stone-900"
            >
              {block.h}
            </h2>
          )
        }
        if (block.ul) {
          return (
            <ul
              key={index}
              className="list-disc space-y-2.5 pl-5 text-[14.5px] leading-relaxed text-stone-600 marker:text-emerald-600"
            >
              {block.ul.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )
        }
        return null
      })}
    </div>
  )
}

export default function PolicyPage({ policyId }) {
  const policy = POLICIES.find((item) => item.id === policyId)
  const otherPolicies = POLICIES.filter((item) => item.id !== policyId)

  if (!policy) {
    return (
      <div className="policy-page min-h-screen bg-stone-50">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <ShieldCheck className="mx-auto h-12 w-12 text-emerald-700" />
            <h1 className="mt-4 text-2xl font-bold text-stone-900">
              Policy not found
            </h1>
            <p className="mt-3 text-stone-600">
              The policy you are looking for does not exist.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Reveal>
        </div>
      </div>
    )
  }

  return (
    <div className="policy-page min-h-screen bg-stone-50">
      {/* Header */}
      <section className="mx-auto w-full max-w-[80%] px-6 pt-16 sm:pt-20">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-stone-500 transition hover:text-emerald-700"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge className="gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 font-mono text-[13px] font-semibold tracking-wide text-emerald-800 hover:bg-emerald-50">
              <FileText size={14} />
              Legal
            </Badge>
            <span className="inline-flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-widest text-stone-400">
              <CalendarDays size={15} className="text-emerald-700" />
              Last updated: {policy.lastUpdated}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {policy.title}
          </h1>
        </Reveal>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-[80%] px-6 pb-24">
        <Reveal delay={120}>
          <article className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-12">
            <PolicyBody policy={policy} />
          </article>
        </Reveal>

        {/* Related policies */}
        <Reveal delay={150}>
          <div className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-stone-400">
              Other policies
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {otherPolicies.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="cursor-pointer rounded-full border border-emerald-200 bg-white px-4 py-2 text-[13px] font-medium text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}