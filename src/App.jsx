import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ExitPopup from './components/ExitPopup'

import Hero from './sections/Hero'
import TrustStrip from './sections/TrustStrip'
import Categories from './sections/Categories'
import ShopByLength from './sections/ShopByLength'
import Hairstylist from './sections/Hairstylist'
import Recommendations from './sections/Recommendations'
import AsSeenOn from './sections/AsSeenOn'
import Community from './sections/Community'
import FAQ from './sections/FAQ'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f9]">
      {/* Fixed header */}
      <Header />

      {/* Main content — offset for fixed header */}
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <ShopByLength />
        <Hairstylist />
        <Recommendations />
        <AsSeenOn />
        <Community />
        <FAQ />
      </main>

      <Footer />

      {/* Global floating elements */}
      <FloatingWhatsApp />
      <ExitPopup />
    </div>
  )
}
