import React, { useState, useEffect } from 'react'
import { LOGO_URL, waLink, WA_MESSAGES } from '../constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Extensions', href: '#categories' },
    { label: 'Help Me Choose', href: '#stylist' },
    { label: 'Community', href: '#community' },
    { label: 'New In', href: '#recommendations' },
    { label: 'Text Stylist', href: waLink(WA_MESSAGES.hairstylist), external: true },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>

          {/* Logo — centered */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={LOGO_URL}
              alt="Olive Hair Collectionz"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-body font-500 tracking-widest uppercase text-brand-accent border border-brand-accent px-4 py-1.5 hover:bg-brand-accent hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-body tracking-widest uppercase text-brand-dark hover:text-brand-accent transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </nav>

          {/* Spacer for mobile layout balance */}
          <div className="w-10 md:hidden" />
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-brand-neutral px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-widest uppercase font-medium text-brand-accent border border-brand-accent px-4 py-2 text-center"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-brand-dark py-2 border-b border-brand-neutral/50"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
