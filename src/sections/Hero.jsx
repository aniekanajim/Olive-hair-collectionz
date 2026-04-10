import React, { useState, useEffect, useRef, useCallback } from 'react'
import { HERO_SLIDES } from '../constants'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(null)
  const intervalRef = useRef(null)

  const goTo = useCallback((index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  const next = useCallback(() => {
    goTo((current + 1) % HERO_SLIDES.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [current, goTo])

  // Auto-slide every 5s
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [next])

  // Touch/swipe support
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  const slide = HERO_SLIDES[current]

  return (
    <section
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.headline}
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-20 md:pb-24 px-6 md:px-16 max-w-3xl">
        <div key={current} className="animate-fade-up">
          <p className="text-brand-primary text-xs md:text-sm tracking-[0.3em] uppercase font-body mb-3 opacity-90">
            Olive Hair Collectionz
          </p>
          <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-shadow mb-4 font-light italic">
            {slide.headline}
          </h1>
          <p className="text-white/80 font-body text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            {slide.subtext}
          </p>

          {slide.isWhatsApp ? (
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary text-brand-dark text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-white transition-colors duration-300"
            >
              {slide.cta}
            </a>
          ) : (
            <a
              href={slide.link}
              className="inline-block bg-brand-primary text-brand-dark text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-white transition-colors duration-300"
            >
              {slide.cta}
            </a>
          )}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 md:right-16 z-20 flex gap-2 items-center">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-400 ${
              i === current
                ? 'w-8 h-0.5 bg-brand-primary'
                : 'w-2 h-0.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Nav arrows — desktop only */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center border border-white/40 text-white hover:bg-white/20 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center border border-white/40 text-white hover:bg-white/20 transition-colors duration-300"
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  )
}
