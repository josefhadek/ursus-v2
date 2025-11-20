import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

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
          <Button size="lg" className="bg-amber hover:bg-amber-dark text-forest-dark font-semibold">
            <Link href="#jaky-je-ursus">
            Aktuální ročník 
            </Link>
          </Button>
          
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 text-sand h-[32] py-0 my-5" />
        </div>
      </div>
    </section>
  )
}
