import React from 'react'
import { CATEGORIES } from '../constants'

export default function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28 px-4 md:px-8 bg-[#faf8f9]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 md:mb-20 text-center">
          <p className="text-brand-accent text-xs tracking-[0.35em] uppercase font-body mb-3">
            Our Collections
          </p>
          <h2 className="font-display text-brand-dark text-4xl md:text-5xl font-light italic">
            Shop By Category
          </h2>
          <div className="w-16 h-px bg-brand-primary mx-auto mt-5" />
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="group">
              {/* Image — NOT clickable */}
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Label badge */}
                <div className="absolute top-4 left-4 bg-brand-accent/90 px-3 py-1">
                  <span className="text-white text-[10px] tracking-widest uppercase font-body">
                    {cat.label}
                  </span>
                </div>
              </div>

              {/* Text — NOT clickable */}
              <h3 className="font-display text-brand-dark text-2xl md:text-3xl font-light italic mb-2">
                {cat.title}
              </h3>
              <p className="text-brand-dark/60 font-body text-sm leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Only the button is clickable */}
              <a
                href={cat.link}
                className="inline-block border border-brand-accent text-brand-accent text-xs tracking-[0.2em] uppercase font-body font-medium px-7 py-3 hover:bg-brand-accent hover:text-white transition-all duration-300"
              >
                {cat.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
