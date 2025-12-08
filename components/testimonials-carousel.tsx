'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const images = [
  '/images/ursus-maty.png',
  '/images/citat2-web.jpg',
  '/images/citat1-web.jpg',
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sand to-sage/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-3xl font-bold text-forest-dark mb-16 text-center">
          Co o nás říkají účastníci*ice z minulých let?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={image}
                alt={`Citát ${index + 1}`}
                width={768}
                height={768}
                className="w-full h-auto"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
