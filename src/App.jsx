import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import CTABanner from './components/pages/LandingPage/CtaBanner'
import HeroSection from './components/pages/LandingPage/HeroSection'
import StatsSection from './components/pages/LandingPage/StatusSection'
import TripsGallery from './components/pages/LandingPage/TripsGallery'
import WhatWeDo from './components/pages/LandingPage/WhatWeDo'
import WhyChoose from './components/pages/LandingPage/WhyChoose'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <TripsGallery />
      <WhyChoose/>
      {/* <StatsSection /> */}
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App