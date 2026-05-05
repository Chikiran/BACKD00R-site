import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TechnicalSection } from "@/components/technical-section"
import { ResourceSection } from "@/components/resource-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TechnicalSection />
      <ResourceSection />
      <Footer />
    </main>
  )
}
