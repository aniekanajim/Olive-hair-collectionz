import React from 'react'
import { LOGO_URL, waLink, WA_MESSAGES } from '../constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-1">
            <img
              src={LOGO_URL}
              alt="Olive Hair Collectionz"
              className="h-12 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-white/50 font-body text-xs leading-relaxed mb-6">
              Premium hair… fair pricing… no extra drama.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a href="/" className="text-white/40 hover:text-brand-primary transition-colors duration-300" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="/" className="text-white/40 hover:text-brand-primary transition-colors duration-300" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                </svg>
              </a>
              <a
                href={waLink(WA_MESSAGES.inquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#25D366] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.524 5.854L0 24l6.335-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.376l-.36-.215-3.73.885.935-3.63-.234-.373A9.818 9.818 0 112 12 9.818 9.818 0 0112 21.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Need Help */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-white/40 mb-5">Need Help?</h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact Us', href: waLink(WA_MESSAGES.inquiry), external: true },
                { label: 'Shipping Info', href: '/' },
                { label: 'Order Processing Time', href: '/' },
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/55 hover:text-brand-primary font-body text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="text-white/55 hover:text-brand-primary font-body text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <span className="text-white/30 font-body text-xs">5 Working Days Processing</span>
              </li>
            </ul>
          </div>

          {/* Why Olive */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-white/40 mb-5">Why Olive Hair</h4>
            <ul className="space-y-3">
              {[
                'Premium Quality Without Inflated Prices',
                'Trusted Sourcing Advantage',
                'Consistent Full Density Units',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-primary mt-1 text-xs">✦</span>
                  <span className="text-white/55 font-body text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location + Quick links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3 mb-6">
              {[
                { label: 'Extensions', href: '#categories' },
                { label: 'Shop by Length', href: '/' },
                { label: 'New In', href: '#recommendations' },
                { label: 'Community', href: '#community' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/55 hover:text-brand-primary font-body text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-brand-primary text-xs">📍</span>
              <span className="text-white/40 font-body text-xs">Nigeria (NGN ₦)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 font-body text-xs">
            © {year} Olive Hair Collectionz. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms & Conditions', 'Conditions of Use'].map((item) => (
              <a
                key={item}
                href="/"
                className="text-white/30 hover:text-white/60 font-body text-xs transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
