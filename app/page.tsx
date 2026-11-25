import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero, About, Chapters, Registration, Dates, Team, Quotes, Faq } from '@/components/sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-krem">
      <Header />
      <main>
        <Hero />
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
