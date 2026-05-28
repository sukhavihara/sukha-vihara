import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PhilosophySection from '@/components/PhilosophySection'
import ProductSection from '@/components/ProductSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ProductSection />
      <FooterSection />
    </main>
  )
}
