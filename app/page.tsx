import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { WhatIsUrsusSection } from '@/components/what-is-ursus-section'
import { Ursus2026Section } from '@/components/ursus-2026-section'
import { CountdownSection } from '@/components/countdown-section'
import { EventsSection } from '@/components/events-section'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-sand">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatIsUrsusSection />
        <Ursus2026Section />
        <CountdownSection />
        <EventsSection />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  )
}
