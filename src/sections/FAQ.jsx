import React, { useState } from 'react'
import { FAQS } from '../constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-20 md:py-28 bg-[#faf8f9]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-brand-accent text-xs tracking-[0.35em] uppercase font-body mb-3">
            Got Questions?
          </p>
          <h2 className="font-display text-brand-dark text-4xl md:text-5xl font-light italic">
            Frequently Asked
          </h2>
          <div className="w-16 h-px bg-brand-primary mx-auto mt-5" />
        </div>

        {/* Accordion */}
        <div className="divide-y divide-brand-neutral">
          {FAQS.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 text-left group"
              >
                <span className={`font-body text-sm md:text-base tracking-wide transition-colors duration-300 ${
                  openIndex === i ? 'text-brand-accent' : 'text-brand-dark group-hover:text-brand-accent'
                }`}>
                  {faq.q}
                </span>
                <span className={`flex-none w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                  openIndex === i
                    ? 'border-brand-accent bg-brand-accent text-white rotate-45'
                    : 'border-brand-neutral text-brand-dark/50'
                }`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-400 ${
                openIndex === i ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-brand-dark/60 font-body text-sm leading-relaxed pr-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
