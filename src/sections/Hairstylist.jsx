import React from 'react'
import { waLink, WA_MESSAGES } from '../constants'

export default function Hairstylist() {
  return (
    <section
      id="stylist"
      className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center"
    >
      {/* Background image */}
      <img
        src="https://i.imgur.com/1XR8uxd.jpeg"
        alt="Hairstylist"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-20 max-w-2xl">
        <p className="text-brand-primary text-xs tracking-[0.35em] uppercase font-body mb-4">
          Personalised Advice
        </p>
        <h2 className="font-display text-white text-4xl md:text-6xl font-light italic leading-tight mb-5">
          Text a Hairstylist
        </h2>
        <div className="w-12 h-px bg-brand-primary mb-6" />
        <p className="text-white/75 font-body text-sm md:text-base leading-relaxed mb-8 max-w-md">
          Not sure what to pick…? We'll guide you based on your face, style, and budget… no guesswork.
        </p>
        <a
          href={waLink(WA_MESSAGES.hairstylist)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white text-xs tracking-[0.2em] uppercase font-body font-medium px-8 py-4 hover:bg-[#20bb5a] transition-colors duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.524 5.854L0 24l6.335-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.376l-.36-.215-3.73.885.935-3.63-.234-.373A9.818 9.818 0 112 12 9.818 9.818 0 0112 21.818z"/>
          </svg>
          Connect on WhatsApp
        </a>
      </div>
    </section>
  )
}
