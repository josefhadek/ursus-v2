import { Button } from '@/components/ui/button'
import Link from 'next/link' // 1. Doplněn chybějící import

export function AboutSection() {
  return (
    <section id="o-kurzu" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Grid začíná zde */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* První sloupec (TEXT) */}
          <div>
            <h2 className="text-4xl font-bold text-forest-dark mb-6">O kurzu</h2>

            <p className="text-lg text-forest mb-6 leading-relaxed">
              Vůdcovský lesní kurz Ursus jsou pohodové vůdcovky plné kreativních programů,
              na kterých se snažíme předávat nejen obsah, ale také formu. Nenajdeš u nás
              nudné přednášky. Velký prostor dáváme pro vzájemné sdílení vašich otázek,
              problémů a jejich možných řešení.
            </p>
            <p className="text-lg text-forest mb-6 leading-relaxed font-semibold">
              Náš kurz nemá zkoušky, máme totiž svou stezku, po jejíž splnění máš zkoušku hotovou!
            </p>

            {/* U Shadcn UI Buttonu je lepší použít asChild, pokud je uvnitř Link, ale bude to fungovat i takto */}
            <Button size="lg" className="bg-amber hover:bg-amber-dark text-forest-dark font-semibold" asChild>
              <Link href="#jaky-je-ursus">
                Jaký je Ursus?
              </Link>
            </Button>
          </div>
          {/* Konec prvního sloupce */}

          {/* Druhý sloupec (OBRÁZEK) - Přesunul jsem ho DOVNITŘ gridu */}
          <div className="relative">
            <img
              src="/scouts-team-building-outdoor-activities.jpg"
              alt="Scout group activities"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          {/* Konec druhého sloupce */}

        </div>
        {/* Konec gridu */}

      </div>
      {/* Konec containeru */}
    </section>
  )
}