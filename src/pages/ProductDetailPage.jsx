import { Link, useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import { getProductById } from '../data/products'
import useCartStore from '../store/useCartStore'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const addToCart = useCartStore((state) => state.addToCart)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-stone-50 px-6 text-center">
        <h1 className="text-2xl font-bold text-stone-900">Product not found</h1>
        <p className="mt-2 max-w-sm text-[14px] text-stone-500">
          We couldn&rsquo;t find the product you&rsquo;re looking for. It may have been removed or the link is incorrect.
        </p>
        <Link
          to="/products"
          className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-[13.5px] font-semibold text-white hover:bg-emerald-800"
        >
          Back to products
        </Link>
      </div>
    )
  }

  return <ProductDetail product={product} addToCart={addToCart} />
}