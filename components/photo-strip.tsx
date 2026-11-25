'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  { src: '/carousel/2.webp', alt: 'Účastnice s úkolem ze stezky' },
  { src: '/carousel/3.webp', alt: 'Večerní program v lese pod světýlky' },
  { src: '/carousel/7.webp', alt: 'Plánování programu na velkém papíře' },
  { src: '/carousel/5.webp', alt: 'Sdílení v kruhu' },
  { src: '/carousel/4.webp', alt: 'Hra s bublinami' },
  { src: '/carousel/6.webp', alt: 'Práce na kurzových úkolech' },
  { src: '/carousel/8.webp', alt: 'Scénka v kostýmech' },
  { src: '/carousel/9.webp', alt: 'Účastnice u boží muky' },
  { src: '/carousel/10.webp', alt: 'Instruktoři a účastníci' },
]

export function PhotoStrip() {
  const track = useRef<HTMLDivElement>(null)

  const go = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const item = el.querySelector<HTMLElement>('[data-slide]')
    const step = item ? item.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={track}
        data-strip-track
        tabIndex={0}
        aria-label="Fotky z minulých ročníků"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
          if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
        }}
        className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-4 sm:px-6 pb-2 rounded-2xl"
      >
        {photos.map((p) => (
          <figure
            key={p.src}
            data-slide
            className="relative shrink-0 snap-start w-[78%] sm:w-[46%] lg:w-[31%] aspect-[4/3] overflow-hidden rounded-2xl bg-pisek"
          >
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 78vw, 31vw" className="object-cover" />
          </figure>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between px-4 sm:px-6">
        <a href="https://ursusvlk.zonerama.com/" target="_blank" rel="noopener noreferrer" className="text-serik-tmavy font-medium underline underline-offset-4 hover:text-kakao">
          Celá fotogalerie na Zoneramě
        </a>
        <div className="flex gap-2">
          <button type="button" data-strip="-1" onClick={() => go(-1)} aria-label="Předchozí fotky" className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-kakao text-kakao hover:bg-okr-svetly">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" data-strip="1" onClick={() => go(1)} aria-label="Další fotky" className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-kakao text-kakao hover:bg-okr-svetly">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
