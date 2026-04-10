import React from 'react'
import { waLink, WA_MESSAGES } from '../constants'

export default function Community() {
  return (
    <section id="community" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-neutral" />
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #141697 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-brand-accent text-xs tracking-[0.35em] uppercase font-body mb-4">
          Exclusive Member Offer
        </p>
        <h2 className="font-display text-brand-dark text-4xl md:text-6xl font-light italic leading-tight mb-5">
          Get ₦10,000 Off<br />Your First Order
        </h2>
        <div className="w-16 h-px bg-brand-accent mx-auto mb-6" />
        <p className="text-brand-dark/70 font-body text-sm md:text-base leading-relaxed mb-4 max-w-md mx-auto">
          On orders above ₦50,000… Join our community for exclusive deals… early access… and insider drops.
        </p>

        <a
          href={waLink(WA_MESSAGES.community)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-accent text-white text-xs tracking-[0.2em] uppercase font-body font-medium px-10 py-4 hover:bg-brand-dark transition-colors duration-300 mt-4 mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.524 5.854L0 24l6.335-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.376l-.36-.215-3.73.885.935-3.63-.234-.373A9.818 9.818 0 112 12 9.818 9.818 0 0112 21.818z"/>
          </svg>
          Join The Community
        </a>

        {/* Fine print */}
        <p className="text-brand-dark/45 font-body text-[11px] leading-relaxed max-w-lg mx-auto">
          Offer valid on orders above ₦100,000 … Community members only … Cannot be combined with other discounts.
        </p>
      </div>
    </section>
  )
}
