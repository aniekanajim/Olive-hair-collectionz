import React, { useRef, useState } from 'react'
import { RECOMMENDATIONS, waLink, WA_MESSAGES } from '../constants'

export default function Recommendations() {
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
    if (diff > 50) scrollTo(Math.min(activeIndex + 1, RECOMMENDATIONS.length - 1))
    if (diff < -50) scrollTo(Math.max(activeIndex - 1, 0))
    touchStartX.current = null
  }

  return (
    <section id="recommendations" className="py-20 md:py-28 bg-[#faf8f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-brand-accent text-xs tracking-[0.35em] uppercase font-body mb-3">
            Curated For You
          </p>
          <h2 className="font-display text-brand-dark text-4xl md:text-5xl font-light italic">
            Recommendations For You
          </h2>
          <div className="w-16 h-px bg-brand-primary mx-auto mt-5" />
        </div>

        {/* Slider */}
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {RECOMMENDATIONS.map((rec, i) => (
            <a
              key={i}
              href={waLink(WA_MESSAGES.product(rec.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-none w-72 md:w-80 snap-center"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-300" />
                {/* WhatsApp CTA overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.524 5.854L0 24l6.335-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.376l-.36-.215-3.73.885.935-3.63-.234-.373A9.818 9.818 0 112 12 9.818 9.818 0 0112 21.818z"/>
                  </svg>
                  <span className="text-white text-[10px] tracking-widest uppercase font-body">Order on WhatsApp</span>
                </div>
              </div>
              <h3 className="font-display text-brand-dark text-xl font-light italic mb-1 leading-tight group-hover:text-brand-accent transition-colors duration-300">
                {rec.name}
              </h3>
              <p className="text-brand-dark/55 font-body text-xs mb-2">{rec.desc}</p>
              <p className="text-brand-accent font-body text-sm font-medium tracking-wide">{rec.price}</p>
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {RECOMMENDATIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`transition-all duration-300 h-0.5 ${
                i === activeIndex ? 'w-8 bg-brand-accent' : 'w-2 bg-brand-neutral'
              }`}
              aria-label={`Go to recommendation ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
