import { CalendarDays, Users, GraduationCap, CheckCircle, Info, Coins, MapPin, ArrowRight, FilePenLine } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const CARD_BASE = 'p-8 border border-forest/15 shadow-lg bg-white'
const CARD_ACCENT = `${CARD_BASE} bg-gradient-to-r from-amber/5 to-forest/5`
const CARD_SOFT = `${CARD_BASE} bg-gradient-to-br from-white to-sand/20`
const BODY_TEXT = 'text-base text-forest/80 leading-relaxed'

export function Ursus2026Section() {
  return (
    <section id="aktualni-rocnik" className="py-20 bg-gradient-to-b from-sand to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4 text-center">
            Ročník 2026
          </h2>
          <p className="text-lg text-forest/80 text-center mb-12 max-w-3xl mx-auto">
            Připravujeme nový ročník Ursus 2026. Zde najdeš všechny důležité informace.
          </p>

          {/* Registration */}
          <Card className={`${CARD_ACCENT} mt-8 mb-8`}>
            <div className="flex items-center gap-3 mb-6">
              <FilePenLine className="h-8 w-8 text-amber" />
              <h3 className="text-2xl font-bold text-forest">Přihlašování</h3>
            </div>
            <div className="bg-amber/10 p-6 rounded-[32px] border border-amber/20 mb-6 shadow-sm">
              <div className="text-center">
                <div className="text-sm font-semibold text-amber mb-2">PŘIHLAŠOVÁNÍ PROBÍHÁ</div>
                <div className="text-3xl font-bold text-forest">9. 1. - 16. 1. 2026</div>
                <div className="text-forest/70 mt-2">Začátek i konec v 18:00</div>
              </div>
            </div>
            <div className={`space-y-3 ${BODY_TEXT}`}>
              <div className="flex gap-3 items-center">
                <div className="h-6 w-6 rounded-full bg-amber text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <p>Na pořadí přihlášení <strong>nezáleží</strong></p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-6 w-6 rounded-full bg-amber text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <p>Přihlas se ve <strong>skautISu</strong></p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-6 w-6 rounded-full bg-amber text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <p>Vyplň <strong>dotazník Analýza oddílu</strong> (lze vyplnit už před začátkem přihlašování)</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-6 w-6 rounded-full bg-amber text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                <p>Po konci přihlašování se účastníci <strong>náhodně losují</strong></p>
              </div>
            </div>
          </Card>
          {/* Dates */}
          <Card className={`${CARD_BASE} mb-8`}>
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="h-8 w-8 text-amber" />
              <h3 className="text-2xl font-bold text-forest">Termíny běhů</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Spring Weekend */}
              <div className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <div className="text-md text-forest/70 font-bold">Jarní vikend</div>
                  <h4 className="text-lg font-bold text-forest">Lanškroun</h4>
                  <div className="text-md text-forest/70">27. - 29. 3. 2026</div>
                </div>

                {/* Map Embed */}
                <div className="relative w-full h-48 bg-stone-100 rounded-lg overflow-hidden mb-4 border border-stone-200">
                  <iframe
                    src="https://frame.mapy.cz/s/fesusalefe"
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="Mapa Víkendová část"
                  />
                </div>

                <Button className="w-full gap-2 bg-stone-100 text-forest hover:bg-amber/20 border-transparent shadow-none group" asChild>
                  <a href="https://mapy.cz/s/fesusalefe" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4" />
                    Zobrazit na mapě
                    <ArrowRight className="h-4 w-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>

              {/* Summer Run */}
              <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <div className="text-md text-forest/70 font-bold">Letní běh</div>
                  <h4 className="text-lg font-bold text-forest">Chválkov u Kamenice</h4>
                  <div className="text-md text-forest/70">14. - 23. 8. 2026</div>
                </div>

                {/* Map Embed */}
                <div className="relative w-full h-48 bg-stone-100 rounded-lg overflow-hidden mb-4 border border-stone-200">
                  <iframe
                    src="https://frame.mapy.cz/s/fesusalefe"
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="Mapa Letní běh"
                  />
                </div>

                <Button className="w-full gap-2 bg-stone-100 text-forest hover:bg-amber/20 border-transparent shadow-none group" asChild>
                  <a href="https://mapy.cz/s/fesusalefe" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4" />
                    Zobrazit na mapě
                    <ArrowRight className="h-4 w-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>

              {/* Autumn Weekend */}
              <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <div className="text-md text-forest/70 font-bold">Podzimní vikend</div>
                  <h4 className="text-lg font-bold text-forest">Lanškroun</h4>
                  <div className="text-md text-forest/70">18. - 20. 9. 2026</div>
                </div>

                {/* Map Embed */}
                <div className="relative w-full h-48 bg-stone-100 rounded-lg overflow-hidden mb-4 border border-stone-200">
                  <iframe
                    src="https://frame.mapy.cz/s/fesusalefe"
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="Mapa Podzimní víkend"
                  />
                </div>

                <Button className="w-full gap-2 bg-stone-100 text-forest hover:bg-amber/20 border-transparent shadow-none group" asChild>
                  <a href="https://mapy.cz/s/fesusalefe" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4" />
                    Zobrazit na mapě
                    <ArrowRight className="h-4 w-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Target Audience */}
          <Card className={`${CARD_BASE} mb-8`}>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-amber" />
              <h3 className="text-2xl font-bold text-forest">Pro koho je kurz určen</h3>
            </div>
            <div className={`space-y-4 ${BODY_TEXT}`}>
              <div className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-amber flex-shrink-0" />
                <div>
                  <p className="font-semibold text-forest mb-1">Věk a kvalifikace</p>
                  <p>Členové Junáka narození před <strong>19. 9. 2008</strong> se složenou čekatelskou zkouškou. Čekatelskou zkoušku nemusí mít členové starší 21 let.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-amber flex-shrink-0" />
                <div>
                  <p className="font-semibold text-forest mb-1">Kapacita</p>
                  <p>Přijímáme <strong>26 účastníků/účastnic</strong> se snahou o vyrovnaný počet kluků a holek (limit 16:10).</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-amber flex-shrink-0" />
                <div>
                  <p className="font-semibold text-forest mb-1">Zaměření</p>
                  <p>Zaměřujeme se na vedení světlušek, vlčat, skautek a skautů, ale jiné zaměření není limitující.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-amber flex-shrink-0" />
                <div>
                  <p className="font-semibold text-forest mb-1">Aktivní přístup</p>
                  <p>Nemusíš se bát neustálého sezení na přednáškách. Nabízíme různorodé formy předávání vědomostí i zkušeností, které však vyžadují aktivní přístup účastníků.</p>
                </div>
              </div>
              <div className="bg-amber/10 p-4 rounded-3xl border border-amber/30 shadow-sm">
                <div className="flex gap-2 items-start">
                  <Info className="h-5 w-5 text-amber flex-shrink-0" />
                  <p className="text-sm">
                    <strong>POZOR!</strong> Velká část samostatné práce se bude odehrávat <strong>mezi jarní a letní částí</strong> kurzu. Prosíme, zvážte své časové možnosti (např. maturity).
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Conditions */}
            <Card className={CARD_BASE}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-8 w-8 text-amber" />
                <h3 className="text-2xl font-bold text-forest">Podmínky absolvence</h3>
              </div>
              <p className={`${BODY_TEXT} mb-4`}>
                Podmínkou absolvence kurzu je dle Řádu pro vzdělávání činovnic a činovníků <strong>aktivní účast na všech částech kurzu</strong>.
              </p>
              <p className={BODY_TEXT}>Kvalifikace zdravotníka nebo první pomoci není podmínkou pro přihlášení, ale až pro úspěšné dokončení vůdcovské zkoušky.</p>
            </Card>

            {/* Price */}
            <Card className={CARD_SOFT}>
              <div className="flex items-center gap-3 mb-6">
                <Coins className="h-8 w-8 text-amber" />
                <h3 className="text-2xl font-bold text-forest">Cena kurzu</h3>
              </div>
              <div className="text-4xl font-bold text-amber mb-2">4 800 Kč</div>
              <p className="text-base text-forest/70">
                Účastnický poplatek je nevratný; v případě nemoci se řeší individuálně.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}