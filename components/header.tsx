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
        'fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out px-4 sm:px-0',
        isScrolled ? 'top-2 w-[min(1100px,calc(100%-100px))]' : 'top-4 w-[95%] max-w-7xl',
      )}
    >
      <div
        className={cn(
          'bg-forest/95 backdrop-blur-md shadow-xl border border-forest-dark/50 transition-all duration-300 ease-out',
          isScrolled
            ? 'rounded-xl px-5 py-2'
            : 'rounded-2xl px-6 py-3',
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
            <Link href="#terminy" className="text-sand hover:text-amber transition-colors font-medium">
              {"Ročník 2026"}
            </Link>
            <Link href="#tym" className="text-sand hover:text-amber transition-colors font-medium">
              Tým Ursu 
            </Link>
            <div className="flex items-center gap-2">
              <Link href="https://ursusvlk.zonerama.com/" className="text-sand hover:text-amber transition-colors font-medium">
                Fotogalerie
              </Link>
              <Link
                href="https://ursusvlk.zonerama.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fotogalerie na Zonerama"
                className="text-sand/80 hover:text-amber transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
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
