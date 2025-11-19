import Image from 'next/image'
import { Compass, Lightbulb, Users, Smile } from 'lucide-react'

const features = [
  {
    icon: Compass,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stezka_web_rohy-768x768-T8yQvEMYuwxwgvAXmJwUx70Tt82XpR.png',
    title: 'Stezka místo zkoušky',
    description:
      'Na konci našeho kurzu nenajdeš zkouškový víkend. Vůdcovské kompetence ověřujeme průběžně pomocí vlastní přehledné stezky Cesta Ursu rozdělené do několika kapitol.',
  },
  {
    icon: Lightbulb,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/program_web_rohy-768x768-eaGCChmLaIDs45JOjQECZEhJeNInsP.png',
    title: 'Kreativní programy',
    description:
      'Na Ursu se snažíme předávat nejen obsah, ale také formu. Nenajdete u nás proto nudné přednášky, ale často si budete věci přímo zkoušet a osahávat reálně, nebo v rámci uměle vytvořeného prostředí.',
  },
  {
    icon: Users,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sdileni_web_rohy-768x768-ijkvp503nLbueBpwW7Yf161dyb3LG4.png',
    title: 'Sdílení',
    description:
      'Víme, že jsi dospělý/á a mnohdy již fungující vůdce, a proto dáváme na kurzu velký prostor i pro vzájemné sdílení vašich otázek, problémů a jejich možných řešení.',
  },
  {
    icon: Smile,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pohoda_web_rohy-768x768-yu2uSiR02O9bM8u7rclCs2c2hHhbp0.jpg',
    title: 'Pohoda',
    description:
      'Pohodu na kurzu vytváříme otevřeností, sdílením, ale také volným prostorem určeným pro to, co zrovna každý z účastníků potřebuje – např. zamyšlení, srovnání myšlenek, dohnání restů.',
  },
]

export function WhatIsUrsusSection() {
  return (
    <section id="jaky-je-ursus" className="py-20 px-4 bg-sand/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-16 text-center">
          Jaký je Ursus?
        </h2>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber/20 rounded-lg">
                      <Icon className="w-8 h-8 text-amber" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-forest-dark">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-forest leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        
      </div>
    </section>
  )
}
