'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { stezkaPreview } from '@/lib/content'

export function StezkaPreview() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [page, setPage] = useState(0)
  const pages = stezkaPreview.pages
  const go = (d: number) => setPage((p) => (p + d + pages.length) % pages.length)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (!el.open) return
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const open = () => {
    setPage(0)
    dialog.current?.showModal()
  }

  return (
    <>
      <button type="button" onClick={open} data-stezka-open className="group block w-full text-left">
        <div className="relative mx-auto aspect-[872/1239] w-full max-w-[220px] lg:max-w-[300px]">
          {/* další strany vykukují zpod obálky */}
          <div className="absolute inset-0 translate-x-4 translate-y-3 rotate-3 overflow-hidden rounded-lg border border-pisek bg-bila transition-transform duration-300 group-hover:translate-x-6">
            <Image src={pages[1].src} alt="" fill sizes="300px" className="object-cover" />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-lg border border-pisek">
            <Image src={pages[0].src} alt={pages[0].alt} fill sizes="300px" className="object-cover" />
          </div>
        </div>
        <span className="mt-6 block text-center font-bold text-serik-tmavy underline underline-offset-4 group-hover:text-kakao">
          {stezkaPreview.cta}
        </span>
        <span className="mt-1 block text-center text-sm text-kakao-muted">{stezkaPreview.note}</span>
      </button>

      <dialog
        ref={dialog}
        data-stezka-dialog
        aria-label="Ukázka stezky Cesta Ursu"
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto w-[min(560px,94vw)] max-h-[94vh] overflow-visible rounded-2xl bg-krem p-0 backdrop:bg-kakao/70"
      >
        <div className="relative p-3 sm:p-4">
          <div className="relative aspect-[872/1239] max-h-[78vh] w-full overflow-hidden rounded-lg bg-bila" style={{ maxWidth: 'calc(78vh * 872 / 1239)', marginInline: 'auto' }}>
            {pages.map((p, i) => (
              <Image
                key={p.src}
                src={p.src}
                alt={p.alt}
                fill
                sizes="560px"
                data-stezka-page={i}
                className={`object-contain transition-opacity duration-200 ${i === page ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={i !== page}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <button type="button" data-stezka-nav="-1" onClick={() => go(-1)} aria-label="Předchozí strana" className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-kakao text-kakao hover:bg-okr-svetly">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-kakao-muted" data-stezka-counter aria-live="polite">
              {page + 1} / {pages.length}
            </span>
            <button type="button" data-stezka-nav="1" onClick={() => go(1)} aria-label="Další strana" className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-kakao text-kakao hover:bg-okr-svetly">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <button type="button" data-stezka-close onClick={() => dialog.current?.close()} aria-label="Zavřít ukázku" className="absolute -right-3 -top-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-kakao text-krem">
            <X className="h-5 w-5" />
          </button>
        </div>
      </dialog>
    </>
  )
}
