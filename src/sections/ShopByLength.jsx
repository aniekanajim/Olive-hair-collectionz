import React from 'react'
import { LENGTHS } from '../constants'

const LENGTH_IMAGES = [
  'https://img-1.kwcdn.com/product/fancy/7fd58192-f33e-4b1c-806a-8e8084ff6c89.jpg?imageView2/2/w/800/q/70/format/avif',
  'https://img-1.kwcdn.com/product/fancy/1b753f26-aab2-4595-991e-2d68f8973262.jpg?imageView2/2/w/800/q/70/format/avif',
  'https://img.kwcdn.com/product/fancy/6a8ad262-e91f-4d51-ac86-1d53f2ea8f34.jpg?imageView2/2/w/800/q/70/format/avif',
]

export default function ShopByLength() {
  return (
    <section className="py-20 md:py-28 bg-brand-neutral/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-14 md:mb-20 text-center">
          <p className="text-brand-accent text-xs tracking-[0.35em] uppercase font-body mb-3">
            Find Your Fit
          </p>
          <h2 className="font-display text-brand-dark text-4xl md:text-5xl font-light italic">
            Shop By Length
          </h2>
          <div className="w-16 h-px bg-brand-primary mx-auto mt-5" />
        </div>

        {/* Length options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {LENGTHS.map((len, i) => (
            <a
              key={i}
              href="/"
              className="group relative overflow-hidden block cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={LENGTH_IMAGES[i]}
                  alt={len.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="w-8 h-px bg-brand-primary mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-display text-white text-3xl md:text-4xl font-light italic mb-2">
                    {len.label}
                  </h3>
                  <p className="text-white/80 font-body text-xs tracking-wide mb-1">
                    {len.tagline}
                  </p>
                  <p className="text-brand-primary font-body text-xs tracking-widest uppercase">
                    {len.sub}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
