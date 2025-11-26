import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-[700px] flex items-center justify-center pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-forest/80" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20 md:w-28 md:h-28 animate-breathe group cursor-pointer">
            {/* Regular logo */}
            <img
              src="/ursus-logo.png"
              alt="URSUS Logo"
              className="absolute inset-0 w-full h-full drop-shadow-2xl transition-opacity duration-700 ease-in-out group-hover:opacity-0"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
            />
            {/* Colored logo */}
            <img
              src="/ursus-logo-barevne.png"
              alt="URSUS Logo Barevné"
              className="absolute inset-0 w-full h-full drop-shadow-2xl opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
            />
          </div>
        </div>
        <p className="text-2xl md:text-3xl text-sand/95 mb-10 font-semibold tracking-wide drop-shadow-lg">
          Vůdcovský lesní kurz
        </p>
        <p className="text-lg md:text-xl text-sand/90 mb-10 max-w-3xl mx-auto text-pretty drop-shadow-md leading-relaxed">
          16 dní přípravy na vedení oddílu v pohodové atmosféře. Dáváme prostor k otevřeným rozhovorům a zamyšlením nad konkrétními problémy, potřebami a hodnotami. Dočkáš se u nás individuálního přístupu i příležitostí pro osobní rozvoj.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center py-2.5">
          <Button size="lg" className="bg-amber hover:bg-amber-dark text-forest-dark font-semibold" asChild>
            <Link href="#jaky-je-ursus">
              Aktuální ročník
            </Link>
          </Button>

        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-sand my-5" />
        </div>
      </div>
    </section>
  )
}