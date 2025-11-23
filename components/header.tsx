'use client'

import Link from 'next/link'
import { ExternalLink, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  return (
    <header
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out px-4 sm:px-0 w-full top-4"
      style={{
        width: 'min(90vw, 1100px)',
      }}
    >
      <div
        className="backdrop-blur-sm shadow-xl border transition-all duration-300 ease-out bg-gradient-to-r from-forest/85 via-forest/90 to-forest/85 border-forest/60 rounded-2xl px-6 py-3"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/fleur-de-lis.svg" alt="Fleur de lis" className="w-6 h-6 text-sand" style={{ filter: 'brightness(0) saturate(100%) invert(93%) sepia(8%) saturate(566%) hue-rotate(338deg) brightness(103%) contrast(92%)' }} />
            <span className="font-[family-name:var(--font-skaut-bold)] text-sand text-lg">VLK Ursus</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#o-kurzu" className="text-sand hover:text-amber transition-colors font-medium">
              O kurzu
            </Link>
            <Link href="/#aktualni-rocnik" className="text-sand hover:text-amber transition-colors font-medium">
              Ročník 2026
            </Link>
            <Link href="/tym" className="text-sand hover:text-amber transition-colors font-medium">
              Tým Ursu
            </Link>
            <div className="flex items-center">
              <div className="flex items-center gap-2 group rounded-full px-3 py-1 transition-colors">
                <Link
                  href="https://ursusvlk.zonerama.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fotogalerie na Zonerama"
                  className="text-sand transition-colors font-medium group-hover:text-amber"
                >
                  Fotogalerie
                </Link>
                <Link
                  href="https://ursusvlk.zonerama.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fotogalerie na Zonerama"
                  className="text-sand/70 transition-colors group-hover:text-amber"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <Button asChild className="bg-amber hover:bg-amber/90 text-forest-dark font-bold rounded-full">
              <Link href="/#kontakt">
                Kontakt
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button - Pozor, zatím nic nedělá, jen se zobrazuje */}
          <Button variant="ghost" size="icon" className="md:hidden text-sand hover:bg-amber/20">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}