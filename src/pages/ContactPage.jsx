import { useState } from 'react'
import {
  Building2,
  Clock,
  Loader2,
  Mail,
  MessageCircle,
  PhoneCall,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CONTACT_DETAILS, WEB3FORMS_ACCESS_KEY } from '../constants/constants'
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

const INITIAL_FORM = { name: '', email: '', company: '', message: '', phone: '' }

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_DETAILS.whatsappMessage
  )}`

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      setErrorMessage('Please fill in your name, email, and a short message.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${form.name}`,
          from_name: 'Ragapi Impex website',
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          phone: form.phone
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Could not send your message. Please check your connection and try again.')
    }
  }

  return (
    <div className="bg-stone-50">
      {/* ---------------- Info band ---------------- */}
      <section className="mx-auto max-w-full px-6 pb-12 pt-16 sm:pt-20">
        <div className="flex w-full flex-wrap justify-around gap-12 text-center sm:gap-8">
          <Reveal>
            <div className="mx-auto inline-flex h-30 w-48 items-center justify-center rounded-2xl bg-white p-2.5 animate-streeplus-float animate-streeplus-glow">
              <img src="/images/streeplus_logo.avif" alt="Streeplus logo" className="h-25 w-40 object-contain" />
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-emerald-800 pt-3">
              STREEPLUS&trade;
            </h1>
            <p className="mt-3 font-mono text-[12.5px] leading-relaxed text-stone-600">
              {CONTACT_DETAILS.legalName ?? 'RAGAPI IMPEX PVT LTD'}
              <br />
              CIN: {CONTACT_DETAILS.cin}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-lg font-bold text-stone-900">Locations</h2>
            <div className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-stone-600">
              <p>
                <strong className="block text-stone-900">Corporate Office:</strong>
                {CONTACT_DETAILS.addressLine1}, {CONTACT_DETAILS.addressLine2}
              </p>
              <p>
                <strong className="block text-stone-900">Factory Unit:</strong>
                {CONTACT_DETAILS.factoryLine1}, {CONTACT_DETAILS.factoryLine2}
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <h2 className="text-lg font-bold text-stone-900">Office Hours</h2>
            <div className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-stone-600">
              <p>
                {CONTACT_DETAILS.officeHours.weekdays}
                <br />
                {CONTACT_DETAILS.officeHours.saturday}
              </p>
              <p>
                <strong className="block text-stone-900">For Business &amp; Collabs</strong>
                {CONTACT_DETAILS.businessContact.name}
                <br />
                {CONTACT_DETAILS.businessContact.phone}
              </p>
              <p>
                <strong className="block text-stone-900">Technical Support</strong>
                {CONTACT_DETAILS.technicalSupport.phone}
              </p>
              <p>
                <strong className="block text-stone-900">Email</strong>
                {CONTACT_DETAILS.emails.slice(0, 2).map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block hover:text-emerald-700">
                    {email}
                  </a>
                ))}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Map ---------------- */}
      <section className="mx-auto max-w-full px-4 pb-14 sm:px-6">
        <Reveal className="overflow-hidden rounded-[1.75rem] border border-stone-200 shadow-sm">
          <iframe
            title="Ragapi Office location"
            src={CONTACT_DETAILS.mapEmbedUrl}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="block w-full"
          />
        </Reveal>
        <div className="mt-3 flex justify-end">
          <a
            href={CONTACT_DETAILS.mapDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-medium text-emerald-700 hover:text-emerald-800"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* ---------------- Quick contact + form ---------------- */}
      <section className="mx-auto max-w-full px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* left: quick contact cards */}
          <Reveal>
            <span className="font-mono text-[20px] font-medium uppercase tracking-widest text-emerald-700">
              Contact
            </span>
            <h2 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
              Let&rsquo;s discuss your next business move.
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <PhoneCall size={18} />
                </span>
                <div className="text-[13.5px] text-stone-700">
                  <strong className="block text-stone-900">Call us</strong>
                  <span className="block">{CONTACT_DETAILS.businessContact.phone}</span>
                  <span className="block">{CONTACT_DETAILS.technicalSupport.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Building2 size={18} />
                </span>
                <div className="text-[13.5px] text-stone-700">
                  <strong className="block text-stone-900">Visit</strong>
                  <span className="block">{CONTACT_DETAILS.addressLine1}</span>
                  <span className="block">{CONTACT_DETAILS.addressLine2}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Mail size={18} />
                </span>
                <div className="text-[13.5px] text-stone-700">
                  <strong className="block text-stone-900">Email</strong>
                  {CONTACT_DETAILS.emails.slice(0, 2).map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block hover:text-emerald-700">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Clock size={18} />
                </span>
                <div className="text-[13.5px] text-stone-700">
                  <strong className="block text-stone-900">Office hours</strong>
                  <span className="block">{CONTACT_DETAILS.officeHours.weekdays}</span>
                  <span className="block">{CONTACT_DETAILS.officeHours.saturday}</span>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-[14px] font-semibold text-white shadow-md shadow-emerald-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
          </Reveal>

          {/* right: working contact form */}
          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
            >
              {/* honeypot field for basic spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-[13px] font-medium text-stone-700">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Your name"
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[13px] font-medium text-stone-700">
                    Business email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="you@company.com"
                    className="mt-1.5"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[13px] font-medium text-stone-700">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    placeholder="Your phone number"
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-[13px] font-medium text-stone-700">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={handleChange('company')}
                    placeholder="Company name"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[13px] font-medium text-stone-700">
                    Inquiry
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Tell us about the opportunity or inquiry you want to discuss."
                    className="mt-1.5"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-full bg-emerald-700 py-5 text-[14px] font-semibold hover:bg-emerald-800"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request a consultation'
                  )}
                </Button>

                {status === 'success' && (
                  <p className="rounded-lg bg-emerald-50 px-4 py-3 text-[13px] text-emerald-800">
                    Thanks — your message is on its way. We&rsquo;ll get back to you shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="rounded-lg bg-rose-50 px-4 py-3 text-[13px] text-rose-700">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}