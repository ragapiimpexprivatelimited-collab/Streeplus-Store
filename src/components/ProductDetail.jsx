import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Minus,
  Plus,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import useReveal from '../hooks/useReveal'

const CURRENCY_SYMBOL = { INR: '\u20B9', USD: '$' }

function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const { ref, revealed } = useReveal()
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: revealed ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

function Gallery({ product }) {
  const gallery = product.images?.length ? product.images : [product.image]
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-100 p-8">
        <img
          src={gallery[activeIndex]}
          alt={product.imageAlt ?? product.name}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      {gallery.length > 1 && (
        <div className="mt-4 flex gap-3">
          {gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 bg-stone-100 p-2 transition-colors ${
                activeIndex === index ? 'border-emerald-600' : 'border-transparent hover:border-stone-300'
              }`}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function SpecTable({ specifications }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200">
      {specifications.map((spec, index) => (
        <div
          key={spec.label}
          className={`flex justify-between gap-4 px-5 py-3 text-[13.5px] ${
            index % 2 === 0 ? 'bg-white' : 'bg-stone-50'
          }`}
        >
          <span className="text-stone-500">{spec.label}</span>
          <span className="text-right font-medium text-stone-900">{spec.value}</span>
        </div>
      ))}
    </div>
  )
}

function KitContents({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.item} className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
            <Check size={13} strokeWidth={3} />
          </span>
          <div>
            <p className="text-[13.5px] font-semibold text-stone-900">{item.item}</p>
            <p className="mt-0.5 text-[12.5px] leading-relaxed text-stone-500">{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function MachineSpecs({ specs }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {specs.indicators?.map((indicator) => (
          <Badge key={indicator} variant="outline" className="rounded-full border-emerald-200 bg-emerald-50 text-emerald-800">
            {indicator}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h4 className="text-[13.5px] font-bold text-stone-900">Vending steps</h4>
          <ol className="mt-3 space-y-2">
            {specs.vendingSteps?.map((step, index) => (
              <li key={step} className="flex gap-3 text-[13px] text-stone-600">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h4 className="text-[13.5px] font-bold text-stone-900">Incinerator steps</h4>
          <ol className="mt-3 space-y-2">
            {specs.incineratorSteps?.map((step, index) => (
              <li key={step} className="flex gap-3 text-[13px] text-stone-600">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {specs.maintenanceNote && (
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-[12.5px] text-amber-800">
          {specs.maintenanceNote}
        </p>
      )}
    </div>
  )
}

function ServiceSections({ sections, aboutCompany }) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="text-[14px] font-bold text-stone-900">{section.title}</h4>
          <ul className="mt-3 space-y-2">
            {section.items.map((item) => (
              <li key={item} className="flex gap-3 text-[13px] leading-relaxed text-stone-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {aboutCompany && (
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <h4 className="text-[13px] font-bold text-stone-900">About Ragapi Impex</h4>
          <p className="mt-2 text-[13px] leading-relaxed text-stone-600">{aboutCompany}</p>
        </div>
      )}
    </div>
  )
}

export default function ProductDetail({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1)
  const symbol = CURRENCY_SYMBOL[product.currency] ?? '$'
  const hasDiscount = product.mrp && product.mrp > product.price

  const related = products
    .filter((p) => p.id !== product.id && p.brand === product.brand)
    .slice(0, 3)

  useEffect(() => {
    document.title = product.title || 'RAGAPI IMPEX'
  }, [product.title])

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="bg-stone-50">
      <div className="mx-auto w-[80%] 2xl:w-[70%] py-10 sm:py-14">
        {/* breadcrumb */}
        <Reveal className="flex flex-wrap items-center gap-1.5 text-[12px] text-stone-500">
          <Link to="/" className="hover:text-emerald-700">Home</Link>
          <ChevronRight size={13} />
          <Link to="/products" className="hover:text-emerald-700">Products</Link>
          <ChevronRight size={13} />
          <span className="text-stone-700">{product.category}</span>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* gallery */}
          <Reveal>
            <Gallery product={product} />
          </Reveal>

          {/* copy + purchase */}
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-2">
              {product.badge && (
                <Badge className="rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-700">
                  {product.badge}
                </Badge>
              )}
              <span className="font-mono text-[20px] uppercase tracking-widest text-emerald-700">
                {product.category}
              </span>
            </div>

            <h1 className="mt-3 text-2xl font-bold leading-snug text-stone-900 sm:text-3xl">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-stone-500">
              {product.brand && <span>Brand: <strong className="text-stone-800">{product.brand}</strong></span>}
              {product.sku && <span>SKU: {product.sku}</span>}
              {product.rating && (
                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  {product.rating} / 5
                </span>
              )}
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <strong className="text-[28px] font-bold text-stone-900">
                {symbol}
                {product.price.toLocaleString('en-IN')}
              </strong>
              {hasDiscount && (
                <span className="text-[16px] text-stone-400 line-through">
                  {symbol}
                  {product.mrp.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.moq && (
              <p className="mt-1 text-[12.5px] text-stone-500">
                Minimum order quantity: {product.moq} {product.moqUnit ?? 'units'}
              </p>
            )}

            <p className="mt-5 text-[14px] leading-relaxed text-stone-600">
              {product.description}
            </p>

            {/* purchase box */}
            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4">
              <div className="flex items-center rounded-full border border-stone-200">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="grid h-10 w-10 place-items-center text-stone-600 hover:text-emerald-700"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="w-8 text-center text-[14px] font-semibold text-stone-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="grid h-10 w-10 place-items-center text-stone-600 hover:text-emerald-700"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-emerald-700 py-5 text-[14px] font-semibold hover:bg-emerald-800"
              >
                Add to cart <ArrowRight size={16} className="ml-1.5" />
              </Button>
            </div>

            {product.features?.length > 0 && (
              <div className="mt-6 space-y-2.5">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-[13.5px] text-stone-700">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-stone-700 hover:border-emerald-300 hover:text-emerald-700"
              >
                Back to products
              </Link>
              <Link
                to="/cart"
                className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-[13px] font-semibold text-emerald-800 hover:bg-emerald-100"
              >
                View cart
              </Link>
            </div>
          </Reveal>
        </div>

        {/* productType-specific detail block */}
        {(product.specifications || product.kitContents || product.machineSpecs || product.sections) && (
          <Reveal className="mt-16 rounded-[2rem] border border-stone-200 bg-white p-6 sm:p-10">
            {product.specifications && (
              <>
                <h2 className="text-xl font-bold text-stone-900">Specifications</h2>
                <div className="mt-5">
                  <SpecTable specifications={product.specifications} />
                </div>
              </>
            )}

            {product.kitContents && (
              <>
                <h2 className="text-xl font-bold text-stone-900">What the kit contains</h2>
                <div className="mt-5">
                  <KitContents items={product.kitContents} />
                </div>
              </>
            )}

            {product.machineSpecs && (
              <>
                <h2 className="text-xl font-bold text-stone-900">How it works</h2>
                <div className="mt-5">
                  <MachineSpecs specs={product.machineSpecs} />
                </div>
              </>
            )}

            {product.sections && (
              <>
                <h2 className="text-xl font-bold text-stone-900">Programme details</h2>
                <div className="mt-5">
                  <ServiceSections sections={product.sections} aboutCompany={product.aboutCompany} />
                </div>
              </>
            )}
          </Reveal>
        )}

        {/* additional details */}
        {product.details?.length > 0 && (
          <Reveal delay={80} className="mt-8">
            <h2 className="text-lg font-bold text-stone-900">Additional details</h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-2.5 text-[13px] text-stone-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  {detail}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <h2 className="text-xl font-bold text-stone-900">You may also like</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.id} delay={index * 80}>
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}