import React from 'react'
import { TRUST_ITEMS } from '../constants'

export default function TrustStrip() {
  // Duplicate for seamless loop
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS]

  return (
    <div className="bg-brand-accent py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-6">
            <span className="text-white text-xs tracking-widest uppercase font-body font-light">
              {item}
            </span>
            <span className="text-brand-primary text-base select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
