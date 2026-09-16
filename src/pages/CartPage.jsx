import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import CartItem from '../components/CartItem'
import useCartStore from '../store/useCartStore'

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const subtotal = useCartStore((state) => state.getCartSubtotal())

  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-stone-50">
        <section className="mx-auto flex w-full max-w-xl flex-col items-center px-6 py-28 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
            <ShoppingBag size={26} />
          </span>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Your cart is empty
          </h1>
          <p className="mt-3 text-[15px] text-stone-600">
            Browse our products and add something that fits your needs.
          </p>
          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800"
          >
            Explore products
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="mx-auto w-full max-w-full px-6 pb-24 pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-700">
              Your cart
            </span>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Review your selected items
            </h1>
          </div>
          <Link
            to="/products"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-emerald-700 transition hover:text-emerald-800 sm:inline-flex"
          >
            Continue shopping
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQtyChange={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <aside className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-stone-900">Order summary</h2>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-stone-500">Subtotal</dt>
                <dd className="font-semibold text-stone-900">{`₹${subtotal}`}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-stone-500">Shipping</dt>
                <dd className="font-semibold text-emerald-700">Free</dd>
              </div>
              <div className="flex items-center justify-between border-t border-stone-200 pt-3 text-base">
                <dt className="font-bold text-stone-900">Total</dt>
                <dd className="font-bold text-stone-900">{`₹${subtotal}`}</dd>
              </div>
            </dl>

            <Link
              to="/checkout"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800"
            >
              Proceed to checkout
              <ArrowRight size={16} />
            </Link>
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wide text-stone-400">
              Shipping & taxes calculated at checkout
            </p>
          </aside>
        </div>
      </section>
    </div>
  )
}