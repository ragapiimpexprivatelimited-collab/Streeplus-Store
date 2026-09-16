import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, CreditCard, Loader2, Lock, ShoppingBag } from 'lucide-react'
import useCartStore from '../store/useCartStore'
import { CHECKOUT_WEB3FORMS_ACCESS_KEY } from '../constants/constants'

const inputClass =
  'w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'

const INITIAL_FORM = { name: '', email: '', phone: '', address: '' }

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.cartItems)
  const subtotal = useCartStore((state) => state.getCartSubtotal())
  const clearCart = useCartStore((state) => state.clearCart)
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const orderLines = cartItems
      .map((item) => `• ${item.name} × ${item.quantity} — ₹${item.price * item.quantity}`)
      .join('\n')

    // Structured line items sent to Web3Forms as a custom field.
    const cartItemsPayload = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }))

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CHECKOUT_WEB3FORMS_ACCESS_KEY,
          subject: `New order from ${form.name} (₹${subtotal})`,
          from_name: 'Ragapi Impex website — Checkout',
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          cart_items: JSON.stringify(cartItemsPayload),
          message: `Order total: ₹${subtotal}\n\n${orderLines}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm(INITIAL_FORM)
        clearCart()
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Could not submit your order. Please check your connection and try again.')
    }
  }

  if (!cartItems.length && status !== 'success') {
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
            Add a product before continuing to checkout.
          </p>
          <Link
            to="/products"
            className="mt-7 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800"
          >
            Continue shopping
          </Link>
        </section>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-stone-50">
        <section className="mx-auto flex w-full max-w-xl flex-col items-center px-6 py-28 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
            <CheckCircle2 size={28} />
          </span>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Order placed successfully
          </h1>
          <p className="mt-3 text-[15px] text-stone-600">
            Thank you — your order has been received and a confirmation email is on its way. Our
            team will reach out shortly to arrange payment and delivery.
          </p>
          <Link
            to="/products"
            className="mt-7 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800"
          >
            Shop more products
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
              Checkout
            </span>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Complete your order
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start"
        >
<div className="space-y-6">
            {/* Personal details */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">Your details</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-[13px] font-semibold text-stone-700">Full name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={inputClass}
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[13px] font-semibold text-stone-700">Email address</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={inputClass}
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[13px] font-semibold text-stone-700">Mobile number</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                    required
                  />
                </label>
              </div>
            </div>

            {/* Delivery */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">Delivery address</h2>
              <label className="mt-5 grid gap-1.5">
                <span className="text-[13px] font-semibold text-stone-700">Shipping address</span>
                <textarea
                  value={form.address}
                  onChange={handleChange('address')}
                  className={inputClass}
                  rows="4"
                  placeholder="Street, city, state, postal code"
                  required
                />
              </label>
            </div>
{/* Payment */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">Payment</h2>

              <div className="mt-5 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-stone-400 text-white">
                    <CreditCard size={18} />
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-stone-800">Razorpay</p>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-stone-500">
                      Online card payments
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[13.5px] leading-relaxed text-stone-600">
                  Online card payments are currently disabled. You can confirm your order now and
                  our team will contact you to arrange payment and delivery.
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-4 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-400"
                >
                  <Lock size={15} />
                  Razorpay — disabled
                </button>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Placing order...
                  </>
                ) : (
                  'Confirm order'
                )}
              </button>

              {status === 'error' && (
                <p className="mt-3 rounded-lg bg-rose-50 px-4 py-3 text-[13px] text-rose-700">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>

          {/* Order summary */}
          <aside className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-stone-900">Order summary</h2>

            <div className="mt-5 space-y-3 text-sm">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <span className="text-stone-600">
                    {item.name} × {item.quantity}
                  </span>
                  <strong className="text-stone-900">{`₹${item.price * item.quantity}`}</strong>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-stone-200 pt-3 text-base">
                <span className="font-bold text-stone-900">Total</span>
                <strong className="font-bold text-stone-900">{`₹${subtotal}`}</strong>
              </div>
            </div>
          </aside>
        </form>
      </section>
    </div>
  )
}