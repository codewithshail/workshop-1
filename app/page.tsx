import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/AboutUs'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Pricing />
    </main>
  )
}