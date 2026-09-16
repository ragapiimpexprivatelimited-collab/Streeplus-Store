import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'

const CURRENCY_SYMBOL = { INR: '\u20B9', USD: '$' }

export default function ProductCard({ product }) {
  const symbol = CURRENCY_SYMBOL[product.currency] ?? '$'
  const hasDiscount = product.mrp && product.mrp > product.price
  const gallery = product.images?.length ? product.images : [product.image]
  const primaryImage = gallery[0]
  const secondaryImage = gallery[1] // undefined if the product only has one image

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to={`/products/${product.id}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden bg-stone-100 p-3"
      >
        {product.badge && (
          <Badge className="absolute left-4 top-4 z-10 rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-700">
            {product.badge}
          </Badge>
        )}

        {/* primary image — fades out on hover */}
        <img
          src={primaryImage}
          alt={product.imageAlt ?? product.name}
          className={`h-full w-full object-contain transition-all duration-300 ${
            secondaryImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'
          }`}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />

        {/* secondary image — fades in on hover, only rendered if one exists */}
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt={product.imageAlt ?? product.name}
            className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-700">
          {product.category}
        </span>
        <h3 className="mt-2 line-clamp-2 text-[17px] font-semibold leading-snug text-stone-900">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-stone-500">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <strong className="text-[19px] font-bold text-stone-900">
              {symbol}
              {product.price.toLocaleString('en-IN')}
            </strong>
            {hasDiscount && (
              <span className="text-[13px] text-stone-400 line-through">
                {symbol}
                {product.mrp.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          {product.rating && (
            <span className="flex items-center gap-1 text-[13px] font-medium text-stone-600">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              {product.rating}
            </span>
          )}
        </div>

        {product.moq && (
          <p className="mt-1.5 text-[12px] text-stone-400">
            MOQ: {product.moq} {product.moqUnit ?? 'units'}
          </p>
        )}

        <Link
          to={`/products/${product.id}`}
          className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 py-3 text-[13.5px] font-semibold text-emerald-800 transition-colors duration-200 hover:bg-emerald-100"
        >
          View details <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  )
}