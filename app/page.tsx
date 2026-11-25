import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { Hero, CountdownSection, About, Chapters, Registration, Dates, Team, Quotes, Faq } from '@/components/sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-krem">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <CountdownSection />
        <About />
        <Chapters />
        <Registration />
        <Dates />
        <Team />
        <Quotes />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
