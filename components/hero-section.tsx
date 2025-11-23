import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link' // 1. Tady chyběl import

export function HeroSection() {
  return (
    <section className="relative h-[800px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/group-of-scouts-in-forest-leadership-training.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-forest/70" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl font-bold text-sand mb-4 text-balance tracking-tight md:text-7xl">
          URSUS
        </h1>
        <p className="text-2xl md:text-3xl text-sand/90 mb-8 font-semibold tracking-wide">
          Vůdcovský lesní kurz
        </p>
        <p className="text-lg md:text-xl text-sand/80 mb-8 max-w-3xl mx-auto text-pretty">
          16 dní přípravy na vedení oddílu v pohodové atmosféře. Dáváme prostor k otevřeným rozhovorům a zamyšlením nad konkrétními problémy, potřebami a hodnotami. Dočkáš se u nás individuálního přístupu i příležitostí pro osobní rozvoj.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center py-2.5">
          {/* Použil jsem 'asChild', aby se z Buttonu stal odkaz (Link).
             Tím nevznikne nevalidní HTML (tlačítko uvnitř tlačítka).
          */}
          <Button size="lg" className="bg-amber hover:bg-amber-dark text-forest-dark font-semibold" asChild>
            <Link href="#jaky-je-ursus">
              Aktuální ročník
            </Link>
          </Button>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          {/* Opraveno h-[32] na h-8 (standardních 32px) */}
          <ChevronDown className="w-8 h-8 text-sand my-5" />
        </div>
      </div>
    </section>
  )
}