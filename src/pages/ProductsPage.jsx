import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import useReveal from '../hooks/useReveal'

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

export default function ProductsPage() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)))
    return ['All', ...unique]
  }, [])

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="bg-stone-50">
      {/* w-[90%] mx-auto instead of a max-w-* cap — keeps content at 90% of
          the viewport on any screen size rather than plateauing at a fixed
          px value. Trimmed slightly on very large screens so lines don't
          get absurdly long on ultrawide monitors. */}
      <div className="mx-auto w-[90%] 2xl:w-[80%] py-14 sm:py-16">
        <Reveal className="text-center">
          <span className="font-mono text-[20px] font-medium uppercase tracking-widest text-emerald-700">
            Products
          </span>
          <h1 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
            Solutions for every stage of menstrual hygiene management.
          </h1>
        </Reveal>

        <Reveal delay={100} className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-[12.5px] font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'border-emerald-700 bg-emerald-700 text-white'
                  : 'border-stone-200 bg-white text-stone-600 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-16 text-center text-[14px] text-stone-500">
            No products in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}