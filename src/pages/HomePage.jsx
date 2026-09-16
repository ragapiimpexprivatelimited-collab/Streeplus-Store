import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Boxes,
  ChevronRight,
  Cpu,
  Leaf,
  Play,
  Target,
  Truck,
  Users,
  Wifi,
} from 'lucide-react'
import { HOME_CONTENT } from '../constants/constants'
import { products, getProductById } from '../data/products'
import HomeHeroArt from '../components/illustrations/HomeHeroArt'
import useReveal from '../hooks/useReveal'

const ICONS = { Leaf, Wifi, Users, Boxes, Truck, Cpu, Target }

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

export default function HomePage() {
  return (
    <div className="bg-stone-50">
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-full px-6 pb-16 pt-14 sm:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="font-mono text-[20px] font-medium uppercase tracking-widest text-emerald-700">
              {HOME_CONTENT.hero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.12] tracking-tight text-stone-900 sm:text-[3.5rem] lg:text-6xl">
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {HOME_CONTENT.hero.headingLine1}
              </span>
              <br />
              <span className="text-stone-700">{HOME_CONTENT.hero.headingLine2Prefix}</span>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {HOME_CONTENT.hero.headingLine2Accent}
              </span>
              <span className="text-stone-600">{HOME_CONTENT.hero.headingLine2Suffix}</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-stone-600 pt-5">
              {HOME_CONTENT.hero.subheading}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/store"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-[14px] font-semibold text-white shadow-md shadow-emerald-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
              >
                {HOME_CONTENT.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-[14px] font-semibold text-emerald-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                {HOME_CONTENT.hero.ctaSecondary}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[16px] text-stone-500">
              <span className="font-mono uppercase tracking-widest text-stone-400">
                {HOME_CONTENT.hero.trustLine}
              </span>
              {HOME_CONTENT.hero.trustTags.map((tag) => (
                <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            {/* <HomeHeroArt className="aspect-[6/5] w-full shadow-xl shadow-emerald-900/10" /> */}
            <img src="/images/hero-illustration.png" className="aspect-[6/5] w-full rounded-[2.5rem] shadow-xl shadow-emerald-900/10 object-cover" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Highlights band ---------------- */}
      <section className="border-y border-stone-200 bg-white py-8">
        <div className="mx-auto grid max-w-full grid-cols-2 gap-6 px-6 sm:grid-cols-4">
          {HOME_CONTENT.highlights.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Leaf
            return (
              <Reveal
                key={item.label}
                delay={index * 80}
                className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon size={18} />
                </span>
                <span className="text-[16px] font-semibold text-stone-800">{item.label}</span>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section className="mx-auto max-w-full px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {/* Swap this for real photography when available — placeholder keeps the layout ready */}
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-100 to-emerald-50 shadow-sm">
              <img
                src="images\happy_girl_with_RAGAPI_Female_Hygiene_Box_Kit_edited.avif"
                alt="A young girl holding a RAGAPI hygiene kit"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="font-mono text-[20px] font-medium uppercase tracking-widest text-emerald-700">
              {HOME_CONTENT.about.eyebrow}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-emerald-800">{HOME_CONTENT.about.heading}</h2>
            <div className="mt-5 space-y-4 text-[14.5px] italic leading-relaxed text-stone-600">
              {HOME_CONTENT.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              to={HOME_CONTENT.about.ctaPath}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-[13.5px] font-semibold text-white shadow-md shadow-emerald-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              {HOME_CONTENT.about.ctaLabel}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- What we offer ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-full px-6">
          <Reveal className="text-center">
            <span className="font-mono text-[20px] font-medium uppercase tracking-widest text-emerald-700">
              {HOME_CONTENT.offerings.eyebrow}
            </span>
            <h2 className="mx-auto mt-2 max-w-2xl text-5xl font-bold justify-self-center text-stone-900 sm:text-3xl">
              {HOME_CONTENT.offerings.heading} 
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {HOME_CONTENT.offerings.items.map((item, index) => {
              const product = getProductById(item.productId)
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="group h-full overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-stone-100 p-5">
                      {product?.image && (
                        <img
                          src={product.image}
                          alt={product.imageAlt ?? item.title}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-emerald-800">{item.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-stone-600">
                        {item.description}
                      </p>
                      <Link
                        to={item.linkPath}
                        className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-emerald-700 hover:text-emerald-800"
                      >
                        Explore More <ChevronRight size={15} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Why Ragapi ---------------- */}
      <section className="mx-auto max-w-full px-6 py-20">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            {HOME_CONTENT.whyRagapi.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-6">
          <div className="space-y-8">
            {HOME_CONTENT.whyRagapi.items.slice(0, 2).map((item, index) => {
              const Icon = ICONS[item.icon] ?? Target
              return (
                <Reveal key={item.title} delay={index * 100} className="mx-auto max-w-[240px] text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Icon size={18} className="text-emerald-700" />
                    <h3 className="text-[15px] font-bold text-emerald-800">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-stone-600">{item.text}</p>
                </Reveal>
              )
            })}
          </div>

          {/* ================================================================
              VIDEO PLACEHOLDER — no real video/poster wired up yet.
              Swap this whole block for one of the two options below once
              you have footage:

              OPTION A — self-hosted file:
              <video controls poster="/videos/why-ragapi-poster.jpg" className="h-full w-full rounded-xl object-cover">
                <source src="/videos/why-ragapi.mp4" type="video/mp4" />
              </video>

              OPTION B — YouTube/Vimeo embed:
              <iframe
                className="h-full w-full rounded-xl"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title={HOME_CONTENT.whyRagapi.videoLabel}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
             ================================================================ */}
          <Reveal delay={120}>
            {/* <div className="relative mx-auto w-full max-w-md rounded-[1.75rem] border-[10px] border-stone-900 bg-stone-900 shadow-xl">
              <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900">
                <button
                  type="button"
                  aria-label={`Play ${HOME_CONTENT.whyRagapi.videoLabel} video`}
                  className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-emerald-800 shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  <Play size={22} fill="currentColor" />
                </button>
              </div>
              <div className="absolute -bottom-3 left-1/2 h-3 w-24 -translate-x-1/2 rounded-b-lg bg-stone-900" />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-semibold text-amber-800">
                Placeholder — add real video
              </span>
            </div> */}
            <video playsInline muted  loop autoPlay poster="/videos/why-ragapi-poster.jpg" className="h-full w-full rounded-xl object-cover">
              <source src="home_video.mp4" type="video/mp4" />
            </video>
          </Reveal>

          <div className="space-y-8">
            {HOME_CONTENT.whyRagapi.items.slice(2, 4).map((item, index) => {
              const Icon = ICONS[item.icon] ?? Target
              return (
                <Reveal key={item.title} delay={index * 100} className="mx-auto max-w-[240px] text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Icon size={18} className="text-emerald-700" />
                    <h3 className="text-[15px] font-bold text-emerald-800">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-stone-600">{item.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-full px-6 pb-24">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-stone-900 px-8 py-14 text-center sm:flex-row sm:text-left sm:px-14">
          <div>
            <span className="font-mono text-[20px] font-medium uppercase tracking-widest text-emerald-300">
              {HOME_CONTENT.cta.eyebrow}
            </span>
            <h2 className="mt-2 max-w-md text-xl font-bold text-white sm:text-2xl">
              {HOME_CONTENT.cta.heading}
            </h2>
          </div>
          <Link
            to={HOME_CONTENT.cta.ctaPath}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500"
          >
            {HOME_CONTENT.cta.ctaLabel}
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}