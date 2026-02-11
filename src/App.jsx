import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import CTABanner from './components/pages/LandingPage/CtaBanner'
import HeroSection from './components/pages/LandingPage/HeroSection'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App