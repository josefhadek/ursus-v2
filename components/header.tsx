'use client'

import Link from 'next/link'
import { ExternalLink, Menu, X, ArrowDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <header
      ref={headerRef}
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out px-4 sm:px-0 w-full top-4"
      style={{
        width: 'min(90vw, 1100px)',
      }}
    >
      <div
        className="backdrop-blur-sm shadow-xl border transition-all duration-300 ease-out bg-gradient-to-r from-forest/85 via-forest/90 to-forest/85 border-forest/60 rounded-2xl px-6 py-3"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img src="/fleur-de-lis.svg" alt="Fleur de lis" className="w-6 h-6 text-sand" style={{ filter: 'brightness(0) saturate(100%) invert(93%) sepia(8%) saturate(566%) hue-rotate(338deg) brightness(103%) contrast(92%)' }} />
            <span className="font-[family-name:var(--font-skaut-bold)] text-sand text-lg">VLK Ursus</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/#o-kurzu" className="text-sand hover:text-amber transition-colors font-medium">
              O kurzu
            </Link>
            <Link href="/#aktualni-rocnik" className="text-sand hover:text-amber transition-colors font-medium">
              Ročník 2026
            </Link>
            <Link href="/#jaky-je-ursus" className="text-sand hover:text-amber transition-colors font-medium">
              Jaky je Ursus?
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
            <Link href="/#kontakt" className="group relative overflow-hidden">
              <div className="bg-amber hover:bg-amber/90 text-forest-dark font-bold rounded-full px-6 h-10 flex items-center justify-center transition-all duration-300 group-hover:pl-10">
                <ArrowRight className="absolute left-2 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                <span>Kontakt</span>
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-sand hover:bg-amber/20"
            onClick={toggleMenu}
            aria-label="Přepnout menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-forest/50 mt-2">
            <nav className="flex flex-col gap-4">
              <Link
                href="/#o-kurzu"
                className="text-sand hover:text-amber transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                O kurzu
              </Link>
              <Link
                href="/#aktualni-rocnik"
                className="text-sand hover:text-amber transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Ročník 2026
              </Link>
              <Link
                href="/#jaky-je-ursus"
                className="text-sand hover:text-amber transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Jaky je Ursus?
              </Link>
              <Link
                href="/tym"
                className="text-sand hover:text-amber transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Tým Ursu
              </Link>
              <div className="flex items-center justify-center gap-2 group py-2">
                <Link
                  href="https://ursusvlk.zonerama.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand transition-colors font-medium group-hover:text-amber"
                  onClick={() => setIsOpen(false)}
                >
                  Fotogalerie
                </Link>
                <ExternalLink className="h-4 w-4 text-sand/70 group-hover:text-amber" />
              </div>
              <Link href="/#kontakt" onClick={() => setIsOpen(false)} className="group relative overflow-hidden inline-block mx-auto">
                <div className="bg-amber hover:bg-amber/90 text-forest-dark font-bold rounded-full px-6 h-10 flex items-center justify-center transition-all duration-300 group-hover:pl-10">
                  <ArrowRight className="absolute left-2 w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  <span>Kontakt</span>
                </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}