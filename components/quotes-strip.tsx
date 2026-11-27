'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Hl } from '@/components/highlight'

type Quote = { src: string; alt: string }

export function QuotesStrip({ title, quotes }: { title: string; quotes: Quote[] }) {
  const track = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    const el = track.current
    if (!el) return
    const item = el.querySelector('figure')
    const step = item ? item.getBoundingClientRect().width + 20 : el.clientWidth
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div data-quotes>
      <div className="flex items-end justify-between gap-6">
        <h2 className="font-heading text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.15] text-kakao">
          <Hl text={title} variant="serik" />
        </h2>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll(-1)}
            data-quotes-nav="-1"
            aria-label="Předchozí citace"
            className="grid h-11 w-11 place-items-center rounded-full bg-kakao text-bila transition-colors hover:bg-palena"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            data-quotes-nav="1"
            aria-label="Další citace"
            className="grid h-11 w-11 place-items-center rounded-full bg-kakao text-bila transition-colors hover:bg-palena"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
      <div
        ref={track}
        data-quotes-track
        className="quotes-track -mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0"
      >
        {quotes.map((q) => (
          <figure
            key={q.src}
            className="relative aspect-[4/5] w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <Image src={q.src} alt={q.alt} fill sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
          </figure>
        ))}
      </div>
    </div>
  )
}
