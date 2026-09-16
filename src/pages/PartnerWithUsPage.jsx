import { Check, MessageCircle, Phone } from 'lucide-react'
import { PARTNER_CONTENT } from '../constants/constants'
import useReveal from '../hooks/useReveal'

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

function RichText({ segments, className = '' }) {
  return (
    <p className={className}>
      {segments.map((segment, index) =>
        segment.bold ? (
          <strong key={index} className="font-semibold text-stone-900">
            {segment.text}
          </strong>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </p>
  )
}

function ChecklistBox({ heading, items, tone = 'muted' }) {
  const isEmphasis = tone === 'emphasis'
  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 ${
        isEmphasis
          ? 'border-l-4 border-emerald-600 bg-emerald-50'
          : 'border border-stone-200 bg-white'
      }`}
    >
      {heading && (
        <h3 className="text-lg font-bold text-stone-900">{heading}</h3>
      )}
      <ul className={`space-y-3 ${heading ? 'mt-5' : ''}`}>
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 70} as="li" className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            <span className="text-[14.5px] leading-relaxed text-stone-700">{item}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}

export default function PartnerPage() {
  const whatsappUrl = `https://wa.me/${PARTNER_CONTENT.cta.whatsappNumber}?text=${encodeURIComponent(
    PARTNER_CONTENT.cta.whatsappMessage
  )}`

  return (
    <div className="bg-stone-50">
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50 py-20 text-center sm:py-24">
        <Reveal className="relative mx-auto max-w-2xl px-6">
          <div className="mx-auto inline-flex h-35 w-55 items-center justify-center rounded-2xl bg-white p-3 animate-streeplus-float animate-streeplus-glow">
            <img
              src="/images/streeplus_logo.avif"
              alt="Streeplus logo"
              className="h-32 w-50 object-contain"
            />
          </div>
          <h1 className="mt-6 pt-5 pb-1 text-3xl font-bold tracking-tight text-emerald-800 sm:text-4xl">
            {PARTNER_CONTENT.hero.heading}
          </h1>
          <p className="mt-4 font-mono text-[20px] text-emerald-700">
            {PARTNER_CONTENT.hero.tags.join('  \u2022  ')}
          </p>
        </Reveal>
      </section>

      {/* ---------------- Main card ---------------- */}
      <section className="mx-auto max-w-full px-4 py-14 sm:px-6 sm:py-16">
        <Reveal className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-12">
          <h2 className="text-2xl font-bold text-emerald-800 sm:text-3xl pb-5">
            {PARTNER_CONTENT.intro.heading}
          </h2>
          <RichText
            segments={PARTNER_CONTENT.intro.segments}
            className="mt-4 text-[14.5px] leading-relaxed text-stone-600"
          />

          <div className="mt-8">
            <ChecklistBox
              heading={PARTNER_CONTENT.whyPartner.heading}
              items={PARTNER_CONTENT.whyPartner.items}
              tone="emphasis"
            />
          </div>

          <h2 className="mt-12 text-2xl font-bold text-emerald-800 sm:text-3xl pt-20 pb-5">
            {PARTNER_CONTENT.collaboration.heading}
          </h2>
          <RichText
            segments={PARTNER_CONTENT.collaboration.segments}
            className="mt-4 text-[14.5px] leading-relaxed text-stone-600"
          />

          <div className="mt-6">
            <ChecklistBox items={PARTNER_CONTENT.collaboration.items} />
          </div>

          {/* CTA */}
          <Reveal className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 px-6 py-12 text-center sm:px-10">
            <h3 className="text-xl font-bold text-emerald-800 sm:text-2xl">
              {PARTNER_CONTENT.cta.heading}
            </h3>

            <div className="mt-5 text-[14px] text-stone-700">
              <span className="font-semibold text-stone-900">Email: </span>

              {PARTNER_CONTENT.cta.emails.map((email, index) => (
                <span
                  key={email}
                  className="inline-flex max-w-full items-center whitespace-nowrap"
                >
                  <a
                    href={`mailto:${email}`}
                    className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                  >
                    {email}
                  </a>

                  {index < PARTNER_CONTENT.cta.emails.length - 1 && (
                    <span className="mx-1.5 text-stone-400">|</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-2 text-[14px] text-stone-700">
              <span className="font-semibold text-stone-900">Mobile: </span>
              <a
                href={`tel:+${PARTNER_CONTENT.cta.whatsappNumber}`}
                className="inline-flex items-center gap-1 text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                <Phone size={13} />
                {PARTNER_CONTENT.cta.mobileDisplay}
              </a>
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-[14px] font-semibold text-white shadow-md shadow-emerald-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
          </Reveal>
        </Reveal>
      </section>
    </div>
  )
}