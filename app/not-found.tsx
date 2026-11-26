import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Stránka nenalezena',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-krem">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <h1 className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] text-kakao">
          Tady nic není
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-kakao-muted">
          Stránka, kterou hledáš, neexistuje nebo se přestěhovala. Všechno důležité o kurzu najdeš na úvodní stránce.
        </p>
        <a href="/" className="btn-primary mt-8 inline-flex h-12 items-center px-6">
          Na úvodní stránku
        </a>
      </main>
      <Footer />
    </div>
  )
}
