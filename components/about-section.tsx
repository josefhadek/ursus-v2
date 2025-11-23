"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const images = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/7.jpg",
  "/carousel/8.jpg",
  "/carousel/9.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
  "/carousel/5.jpg",
  "/carousel/6.jpg",
  "/carousel/10.jpg"
]

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="o-kurzu" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Grid začíná zde */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* První sloupec (TEXT) */}
          <div>
            <h2 className="text-4xl font-bold text-forest-dark mb-6">O kurzu</h2>

            <p className="text-lg text-forest mb-6 leading-relaxed text-justify">
              Vůdcovský lesní kurz Ursus jsou pohodové vůdcovky plné kreativních programů,
              na kterých se snažíme předávat nejen obsah, ale také formu. Nenajdeš u nás
              nudné přednášky. Velký prostor dáváme pro vzájemné sdílení vašich otázek,
              problémů a jejich možných řešení.
            </p>
            <p className="text-lg text-forest mb-6 leading-relaxed font-semibold text-justify">
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

          {/* Druhý sloupec (CAROUSEL) */}
          <div className="relative aspect-[4/3] w-full rounded-2xl shadow-2xl overflow-hidden group">
            {images.map((src, index) => (
              <div
                key={src}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
                  index === currentSlide ? "opacity-100" : "opacity-0"
                )}
              >
                <img
                  src={src}
                  alt={`Scout activity ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear scale-100 group-hover:scale-105"
                />
              </div>
            ))}

            {/* Logo Overlay */}
            <div className="absolute top-4 right-4 z-10">
              <img
                src="/ursus-logo.png"
                alt="Ursus Logo"
                className="w-16 h-16 drop-shadow-lg"
              />
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm",
                    index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Konec druhého sloupce */}

        </div>
        {/* Konec gridu */}

      </div>
      {/* Konec containeru */}
    </section>
  )
}