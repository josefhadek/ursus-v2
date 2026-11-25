import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Team } from '@/components/sections'

// Tým je nově přímo na úvodní stránce; /tym zůstává kvůli starým odkazům.
export default function TeamPage() {
  return (
    <div className="min-h-screen bg-krem flex flex-col">
      <Header base="/" />
      <main className="flex-grow">
        <Team />
      </main>
      <Footer base="/" />
    </div>
  )
}
