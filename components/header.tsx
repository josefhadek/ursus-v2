import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-forest/95 backdrop-blur-md rounded-2xl shadow-xl border border-forest-dark/50 px-6 py-3">
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
            <Link href="#instructori" className="text-sand hover:text-amber transition-colors font-medium">
              Tým Ursu 
            </Link>
            <Link href="#fotogalerie" className="text-sand hover:text-amber transition-colors font-medium">
              Fotogalerie
            </Link>
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
