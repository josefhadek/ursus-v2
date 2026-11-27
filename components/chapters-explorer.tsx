'use client'

import { useState } from 'react'
import { chapters } from '@/lib/content'

// Medvídek kapitoly jako maska, takže má barvu textu kostičky (currentColor).
function Bear({ slug, className = '' }: { slug: string; className?: string }) {
  const url = `url(/medvedi/${slug}.webp)`
  return (
    <span
      aria-hidden
      className={`block bg-current ${className}`}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  )
}

// Kostičky jsou lehce natočené, každá jinak (Hadka: −12° až +12°).
const tilt = [-5, 4, -3, 6, -6, 3, -4, 5]
const tileShadow = 'shadow-[0_4px_0_rgba(69,32,31,.16),0_10px_18px_rgba(69,32,31,.20)]'

export function ChaptersExplorer() {
  const [active, setActive] = useState(0)
  const ch = chapters.items[active]
  const n = chapters.items.length

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = -1
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n
    if (next >= 0) {
      e.preventDefault()
      setActive(next)
      document.getElementById(`kapitola-tab-${next}`)?.focus()
    }
  }

  return (
    <div data-chapters data-chapters-json={JSON.stringify(chapters.items.map(({ slug, title, tile, questions }) => ({ slug, title, tile, questions })))}>
      <div role="tablist" aria-label="Kapitoly Cesty Ursu" className="grid grid-cols-4 gap-3 sm:gap-4 lg:grid-cols-8">
        {chapters.items.map((c, i) => {
          const selected = i === active
          return (
            <button
              key={c.slug}
              id={`kapitola-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="kapitola-panel"
              tabIndex={selected ? 0 : -1}
              data-chapter-tab={i}
              title={c.title}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              style={{ ['--tilt' as string]: `${tilt[i % tilt.length]}deg` }}
              className={`grid aspect-square place-items-center rounded-[20%] ring-1 ring-kakao/10 transition-[transform,box-shadow] duration-200 [transform:rotate(var(--tilt))] hover:[transform:rotate(0deg)_translateY(-3px)] aria-selected:[transform:rotate(0deg)_translateY(-6px)] aria-selected:ring-[3px] aria-selected:ring-kakao aria-selected:ring-offset-[3px] aria-selected:ring-offset-krem ${tileShadow} ${c.tile}`}
            >
              <Bear slug={c.slug} className="h-[64%] w-[64%]" />
              <span className="sr-only">{c.title}</span>
            </button>
          )
        })}
      </div>

      <div
        id="kapitola-panel"
        role="tabpanel"
        aria-labelledby={`kapitola-tab-${active}`}
        data-chapter-panel
        className="mt-8 min-h-[200px] rounded-[28px] bg-bila p-6 shadow-[0_14px_30px_rgba(69,32,31,.10),0_2px_4px_rgba(69,32,31,.05)] md:p-8"
      >
        <div key={active} className="chapter-in" data-chapter-body>
          <h3 className="text-2xl font-bold leading-tight text-kakao" data-chapter-title>
            {ch.title}
          </h3>
          <ul className="mt-5 space-y-3 text-kakao" data-chapter-questions>
            {ch.questions.map((q) => (
              <li key={q} className="flex gap-3 leading-snug">
                <span aria-hidden className="flex h-[1.375em] shrink-0 items-center">
                  <span className={`block h-2.5 w-2.5 rounded-full ring-1 ring-kakao/15 ${ch.tile}`} />
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
