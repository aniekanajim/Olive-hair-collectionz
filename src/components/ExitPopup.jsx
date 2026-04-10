import React, { useState, useEffect, useRef } from 'react'
import { waLink, WA_MESSAGES, LOGO_URL } from '../constants'

export default function ExitPopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const timerRef = useRef(null)
  const shownRef = useRef(false)

  useEffect(() => {
    if (dismissed || shownRef.current) return

    // Show after 10 seconds of scrolling activity
    const onScroll = () => {
      if (shownRef.current || dismissed) return
      if (timerRef.current) return

      timerRef.current = setTimeout(() => {
        if (!shownRef.current && !dismissed) {
          shownRef.current = true
          setVisible(true)
        }
      }, 10000)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [dismissed])

  const close = () => {
    setVisible(false)
    setDismissed(true)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div className="relative bg-white max-w-md w-full overflow-hidden animate-fade-up shadow-2xl">

          {/* Top accent strip */}
          <div className="h-1 w-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent" />

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-brand-dark/40 hover:text-brand-dark transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Content */}
          <div className="px-8 pt-10 pb-8 text-center">
            {/* Logo */}
            <img
              src={LOGO_URL}
              alt="Olive Hair Collectionz"
              className="h-10 w-auto object-contain mx-auto mb-6"
            />

            {/* Offer badge */}
            <div className="inline-block bg-brand-accent text-white text-[10px] tracking-[0.25em] uppercase font-body px-4 py-1.5 mb-5">
              Exclusive Offer
            </div>

            <h2 className="font-display text-brand-dark text-3xl md:text-4xl font-light italic leading-tight mb-3">
              Get ₦10,000 Off<br />Your First Order
            </h2>

            <p className="text-brand-accent font-body text-xs tracking-widest uppercase font-medium mb-4">
              Above ₦100,000
            </p>

            <div className="w-10 h-px bg-brand-primary mx-auto mb-5" />

            <p className="text-brand-dark/60 font-body text-sm leading-relaxed mb-7">
              Join our community for exclusive offers &amp; more!
            </p>

            {/* CTA */}
            <a
              href={waLink(WA_MESSAGES.community)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-body text-xs tracking-[0.2em] uppercase font-medium py-4 px-6 hover:bg-[#20bb5a] transition-colors duration-300 mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.524 5.854L0 24l6.335-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.376l-.36-.215-3.73.885.935-3.63-.234-.373A9.818 9.818 0 112 12 9.818 9.818 0 0112 21.818z"/>
              </svg>
              Join The Community
            </a>

            {/* Dismiss */}
            <button
              onClick={close}
              className="text-brand-dark/35 hover:text-brand-dark/60 font-body text-xs transition-colors duration-200 underline underline-offset-2 mb-6 block mx-auto"
            >
              No thanks, I'll pay full price
            </button>

            {/* Legal fine print */}
            <p className="text-brand-dark/30 font-body text-[10px] leading-relaxed">
              By joining our community, you agree to receive exclusive offers, promotions, and other commercial messages from Olive Hair Collections and its Affiliated Entities. You are also agreeing to Olive Hair Collections' conditions of use, Privacy Policy, and Terms of Conditions. You can exit community at any time.
            </p>
            <p className="text-brand-dark/25 font-body text-[10px] leading-relaxed mt-2">
              *Offer only valid on orders of ₦100,000+ and can only be used as a member of our community. Offer cannot be combined with additional discount codes or clearance items.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
