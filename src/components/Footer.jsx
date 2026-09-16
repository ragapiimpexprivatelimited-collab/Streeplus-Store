import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import {
  COMPANY_INFO,
  CONTACT_DETAILS,
  FOOTER_CONFIG,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
} from '../constants/constants'

export default function Footer() {
  const { pathname } = useLocation()
  const isContactUsPage = pathname === '/contact'

  return (
    <footer className="border-t border-stone-200 bg-[#ECEEE2]">
      <div className="mx-auto max-w-full px-6 py-14">

        {/* Contact + Map section — hidden on Contact page */}
        {!isContactUsPage && (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left: contact block */}
              <div className="flex w-full flex-col items-center justify-center text-center lg:items-center lg:text-left">
                <h2 className="font-display text-2xl font-bold text-stone-900">
                {FOOTER_CONFIG.heading}
              </h2>

              <div className="mt-6 w-full space-y-1 font-mono text-center text-[13px] text-stone-700">
                <p className="font-semibold text-stone-900">
                  {FOOTER_CONFIG.corpOfficeLabel}
                </p>
                <p>{CONTACT_DETAILS.addressLine1}</p>
                <p>{CONTACT_DETAILS.addressLine2}</p>
              </div>

              <div className="mt-4 w-full space-y-1 font-mono text-center text-[13px] text-stone-700">
                <p className="font-semibold text-stone-900">
                  {FOOTER_CONFIG.factoryUnitLabel}
                </p>
                <p>{CONTACT_DETAILS.factoryLine1}</p>
                <p>{CONTACT_DETAILS.factoryLine2}</p>
              </div>

              <div className="mt-6 space-y-2 font-mono text-[13px] text-stone-700">
                <p className="flex items-center justify-center gap-2">
                  <Phone
                    size={13}
                    className="shrink-0 text-emerald-700"
                  />

                  <span>
                    <strong className="text-stone-900">(M):</strong>{' '}
                    {CONTACT_DETAILS.primaryPhone}
                  </span>
                </p>

                <p className="text-stone-500">
                  ({CONTACT_DETAILS.primaryPhoneLabel})
                </p>

                <p className="flex items-center justify-center gap-2 pt-1">
                  <Phone
                    size={13}
                    className="shrink-0 text-emerald-700"
                  />

                  <span>
                    <strong className="text-stone-900">(S):</strong>{' '}
                    {CONTACT_DETAILS.secondaryPhone}
                  </span>
                </p>

                <p className="text-stone-500">
                  ({CONTACT_DETAILS.secondaryPhoneLabel})
                </p>
              </div>

              <div className="mt-6 space-y-1 font-mono text-[13px] text-stone-700">
                {CONTACT_DETAILS.emails.map((email, index) => (
                  <p
                    key={email}
                    className="flex items-center justify-center gap-2"
                  >
                    {index === 0 && (
                      <Mail
                        size={13}
                        className="shrink-0 text-emerald-700"
                      />
                    )}

                    {index !== 0 && (
                      <span className="inline-block w-[13px]" />
                    )}

                    <a
                      href={`mailto:${email}`}
                      className="hover:text-emerald-700"
                    >
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Right: map */}
            <div className="flex items-center justify-center overflow-hidden rounded-2xl border  shadow-sm lg:-translate-x-[20%]">
              <iframe
                title={FOOTER_CONFIG.mapTitle}
                src={CONTACT_DETAILS.mapEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="block h-[280px] w-full lg:h-[340px]"
              />
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <div
          className={`${
            isContactUsPage ? '' : 'mt-12'
          } border-t border-stone-300/70 pt-6`}
        >
          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] text-stone-600">
            {FOOTER_LEGAL_LINKS.map((item, index) => (
              <span
                key={item.path}
                className="flex items-center gap-2"
              >
                <Link
                  to={item.path}
                  className="hover:text-emerald-700"
                >
                  {item.label}
                </Link>

                {index < FOOTER_LEGAL_LINKS.length - 1 && (
                  <span className="text-stone-400">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Social links + copyright */}
          <div className="mt-3 flex flex-col-reverse items-center justify-between gap-3 sm:flex-row">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] text-stone-600">
              {FOOTER_SOCIAL_LINKS.map((item, index) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-700"
                  >
                    {item.label}
                  </a>

                  {index < FOOTER_SOCIAL_LINKS.length - 1 && (
                    <span className="text-stone-400">|</span>
                  )}
                </span>
              ))}
            </div>

            <p className="font-mono text-[12px] text-stone-600">
              © {COMPANY_INFO.year} by {COMPANY_INFO.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}