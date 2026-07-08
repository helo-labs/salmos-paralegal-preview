import { useReveal } from './useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import GrowthBanner from './components/GrowthBanner'
import WhyUs from './components/WhyUs'
import Trust from './components/Trust'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <GrowthBanner />
        <WhyUs />
        <Trust />
        <Faq />
      </main>
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
