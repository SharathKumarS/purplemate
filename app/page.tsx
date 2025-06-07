import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import FeaturesGrid from "./components/FeaturesGrid"
import ScreenshotsSection from "./components/ScreenshotsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesGrid />
        <ScreenshotsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
