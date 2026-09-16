import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IMPACT_CONTENT } from '../constants/constants'
import { ChallengeArt, SolutionArt, VisionArt } from '../components/illustrations/ImpactStageArt'
import AnimatedCounter from '../components/AnimatedCounter'
import useReveal from '../hooks/useReveal'

const STAGE_ART = {
  challenge: ChallengeArt,
  solution: SolutionArt,
  vision: VisionArt,
}

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

// Vertical rail that fills in as the visitor scrolls through the three
// stages — visualises the "journey" the copy describes.
function ProgressRail({ stageCount }) {
  const containerRef = useRef(null)
  const [fillPercent, setFillPercent] = useState(0)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return undefined

    const onScroll = () => {
      const rect = node.getBoundingClientRect()
      const viewportH = window.innerHeight
      const total = rect.height
      const scrolled = Math.min(Math.max(viewportH * 0.5 - rect.top, 0), total)
      setFillPercent(total > 0 ? (scrolled / total) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute left-4 top-0 hidden h-full w-px bg-stone-200 lg:block"
      aria-hidden="true"
    >
      <div
        className="w-px bg-emerald-600 transition-[height] duration-150 ease-out"
        style={{ height: `${fillPercent}%` }}
      />
      {Array.from({ length: stageCount }).map((_, i) => (
        <span
          key={i}
          className="absolute -left-[5px] h-[11px] w-[11px] rounded-full border-2 border-emerald-600 bg-stone-50 transition-colors duration-300"
          style={{
            top: `${(i / (stageCount - 1)) * 100}%`,
            backgroundColor: fillPercent >= (i / (stageCount - 1)) * 100 ? '#2F6B4F' : undefined,
          }}
        />
      ))}
    </div>
  )
}

export default function ImpactPage() {
  return (
    <div className="bg-stone-50">
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 py-28 sm:py-32">
        <svg
          className="absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M ${-40 + i * 100} 320 C ${60 + i * 100} 200, ${20 + i * 100} 100, ${120 + i * 100} -20`}
              stroke="#F3EDE0"
              strokeWidth="1.4"
              fill="none"
            />
          ))}
        </svg>

        <Reveal className="relative mx-auto max-w-full px-6 text-center">
          <h1 className="font-serif text-3xl italic font-bold text-stone-50 sm:text-5xl">
            {IMPACT_CONTENT.hero.heading}
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-full px-6 py-14 sm:py-16">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-stone-600">
          {IMPACT_CONTENT.hero.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      {/* ---------------- Stages ---------------- */}
      <section className="relative mx-auto max-w-full px-6 pb-8 lg:pl-16">
        <ProgressRail stageCount={IMPACT_CONTENT.stages.length} />

        <div className="space-y-24 sm:space-y-32">
          {IMPACT_CONTENT.stages.map((stage, index) => {
            const Art = STAGE_ART[stage.id]
            const reversed = index % 2 === 1

            return (
              <div
                key={stage.id}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <Reveal>
                  <span className="font-mono text-[20px] font-medium uppercase tracking-widest text-emerald-700">
                    {stage.label}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
                    {stage.title}
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-stone-600">
                    {stage.body}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6">
                    {stage.stats.map((stat) => (
                      <div key={stat.label} className="min-w-[130px]">
                        <p className="text-3xl font-bold text-emerald-700 sm:text-4xl">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                        </p>
                        <p className="mt-1 text-[12px] leading-snug text-stone-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <Art className="aspect-[5/4] w-full shadow-lg shadow-emerald-900/10" />
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
        <section className="mx-auto max-w-full px-6 py-24">
        <Reveal className="flex flex-col items-center rounded-[2rem] bg-stone-900 px-8 py-14 text-center sm:px-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {IMPACT_CONTENT.cta.heading}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[14.5px] text-stone-300">
            {IMPACT_CONTENT.cta.body}
            </p>

            <Button
            asChild
            className="mt-8 inline-flex items-center whitespace-nowrap rounded-full bg-emerald-600 px-6 text-[13px] font-semibold hover:bg-emerald-500"
            >
            <Link
                to={IMPACT_CONTENT.cta.buttonPath}
                className="inline-flex items-center whitespace-nowrap"
            >
                <span>{IMPACT_CONTENT.cta.buttonLabel}</span>
                <ArrowUpRight
                size={15}
                className="ml-1.5 shrink-0"
                />
            </Link>
            </Button>
        </Reveal>
        </section>
    </div>
  )
}