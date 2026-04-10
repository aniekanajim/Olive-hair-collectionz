import React, { useRef, useState } from 'react'
import { INFLUENCERS, waLink, WA_MESSAGES } from '../constants'

export default function AsSeenOn() {
  const trackRef = useRef(null)
  const touchStartX = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = (index) => {
    if (!trackRef.current) return
    const card = trackRef.current.children[index]
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      setActiveIndex(index)
    }
  }

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) scrollTo(Math.min(activeIndex + 1, INFLUENCERS.length - 1))
    if (diff < -50) scrollTo(Math.max(activeIndex - 1, 0))
    touchStartX.current = null
  }

  return (
    <section className="py-20 md:py-28 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-brand-primary text-xs tracking-[0.35em] uppercase font-body mb-3">
            Style Inspiration
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl font-light italic">
            As Seen On
          </h2>
          <div className="w-16 h-px bg-brand-primary mx-auto mt-5" />
        </div>

        {/* Slider */}
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {INFLUENCERS.map((inf, i) => (
            <div key={i} className="group flex-none w-72 md:w-96 snap-center">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <img
                  src={inf.image}
                  alt={inf.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Name badge */}
                <div className="absolute bottom-5 left-5">
                  <p className="font-display text-white text-2xl font-light italic">{inf.name}</p>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-white text-lg font-light italic mb-0.5">{inf.style}</p>
                  <p className="text-white/50 font-body text-xs tracking-wide">{inf.color}</p>
                </div>
                <a
                  href={waLink(WA_MESSAGES.style(`${inf.name} ${inf.style}`))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.2em] uppercase font-body font-medium border border-brand-primary text-brand-primary px-5 py-2.5 hover:bg-brand-primary hover:text-brand-dark transition-all duration-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {INFLUENCERS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-300 h-0.5 ${
                i === activeIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to influencer ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
