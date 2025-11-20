'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out px-4 sm:px-0 w-full',
        isScrolled ? 'top-2' : 'top-4',
      )}
        style={{
          width: isScrolled ? 'min(calc(100% - 100px), 1100px)' : 'min(90vw, 1100px)',
        }}
    >
      <div
        className={cn(
          'backdrop-blur-md shadow-xl border transition-all duration-300 ease-out',
          isScrolled
              ? 'bg-gradient-to-r from-forest/90 via-forest-dark/95 to-forest/90 border-forest-dark rounded-xl px-5 py-2'
              : 'bg-gradient-to-r from-forest/60 via-forest/70 to-forest/60 border-forest/50 rounded-2xl px-6 py-3',
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            
            <span className="font-bold text-sand text-lg">VLK Ursus </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#o-kurzu" className="text-sand hover:text-amber transition-colors font-medium">
              O kurzu
            </Link>
            <Link href="#aktualni-rocnik" className="text-sand hover:text-amber transition-colors font-medium">
              {"Ročník 2026"}
            </Link>
            <Link href="#tym" className="text-sand hover:text-amber transition-colors font-medium">
              Tým Ursu 
            </Link>
            <div className="flex items-center">
              <div className="flex items-center gap-2 group rounded-full px-3 py-1 transition-colors">
                <Link
                  href="#fotogalerie"
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
              <Link href="#kontakt">
                Kontakt
              </Link>
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-sand hover:bg-amber/20">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
