import { Leaf, ShieldCheck, Smartphone, Sparkles, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ABOUT_CONTENT, COMPANY_INFO, TEAM_MEMBERS } from '../constants/constants'
import AboutHeroArt from '../components/illustrations/AboutHeroArt'
import useReveal from '../hooks/useReveal'

const VALUE_ICONS = {
  Sparkles,
  Leaf,
  Smartphone,
  Users,
  ShieldCheck,
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

export default function AboutPage() {
  return (
    <div className="bg-stone-50">
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-full px-6 pb-16 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Badge className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-[20px] font-medium tracking-wide text-emerald-800 hover:bg-emerald-50 mb-5">
              {ABOUT_CONTENT.eyebrow}
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-emerald-700 sm:text-5xl">
              {ABOUT_CONTENT.hero.heading}
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-stone-600">
              {ABOUT_CONTENT.hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <AboutHeroArt className="aspect-[6/5] w-full shadow-xl shadow-emerald-900/10" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Story / Mission / Vision / Values ---------------- */}
      <section className="px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="relative mx-auto max-w-full overflow-hidden rounded-[2rem] bg-[#EDEAE2] px-6 py-14 sm:px-14 sm:py-16">
            {/* decorative corner motif, replaces the stock texture photo */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-rose-200/40 blur-0" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-emerald-200/50 blur-0" />

            <div className="relative space-y-14">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                  {ABOUT_CONTENT.story.heading}
                </h2>
                <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-stone-700">
                  {ABOUT_CONTENT.story.paragraphs.map((paragraph, index) => (
                    <p key={paragraph}>
                      {index === 0 ? (
                        <>
                          <strong className="font-semibold text-stone-900">
                            {COMPANY_INFO.name}
                          </strong>{' '}
                          {paragraph.replace(/^RAGAPI IMPEX PVT LTD\s*/i, '')}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    {ABOUT_CONTENT.mission.heading}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-stone-700">
                    {ABOUT_CONTENT.mission.text}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    {ABOUT_CONTENT.vision.heading}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-stone-700">
                    {ABOUT_CONTENT.vision.text}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  {ABOUT_CONTENT.values.heading}
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {ABOUT_CONTENT.values.items.map((value, index) => {
                    const Icon = VALUE_ICONS[value.icon] ?? Sparkles
                    return (
                      <Reveal key={value.label} delay={index * 80}>
                        <Card className="h-full border-stone-200/80 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                          <CardContent className="flex flex-col gap-3 p-5">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-700 text-white">
                              <Icon size={18} strokeWidth={2} />
                            </span>
                            <p className="text-[14px] font-semibold text-stone-900">
                              {value.label}
                            </p>
                            <p className="text-[13px] leading-relaxed text-stone-600">
                              {value.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- Leadership team ---------------- */}
      {TEAM_MEMBERS.length > 0 && (
      <section className="mx-auto max-w-full px-6 pb-24">
        <Reveal className="text-center">
          <Badge className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-[20px] font-medium tracking-wide text-emerald-800 hover:bg-emerald-50 mb-5">
            {ABOUT_CONTENT.team.eyebrow}
          </Badge>
          <h2 className="mt-4 text-2xl font-bold text-stone-900 sm:text-3xl">
            Meet the people driving {COMPANY_INFO.shortName}.
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.email} delay={index * 90} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <Card className="h-full overflow-hidden border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={member.image}
                    alt={`${member.name} portrait`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <p className="text-[15px] font-semibold text-stone-900">
                    {member.name}
                  </p>

                  <p className="mt-0.5 text-[13px] font-medium text-emerald-700">
                    {member.role}
                  </p>

                  <div className="mt-3 space-y-0.5 font-mono text-[12px] text-stone-500">
                    <a
                      href={`tel:${member.phone}`}
                      className="block text-emerald-600 hover:underline"
                    >
                      {member.phone}
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="block text-emerald-600 hover:underline"
                    >
                      {member.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
      )}
    </div>
  )
}
