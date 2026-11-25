'use client'

import Image from 'next/image'
import { useState } from 'react'
import { chapters } from '@/lib/content'

export function ChaptersExplorer() {
  const [active, setActive] = useState(0)
  const ch = chapters.items[active]

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = chapters.items.length
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
    <div data-chapters>
      <div role="tablist" aria-label="Kapitoly Cesty Ursu" className="grid grid-cols-4 gap-2 sm:gap-3">
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
              style={{ backgroundColor: c.bg }}
              className={`group flex aspect-square lg:aspect-[5/4] flex-col items-center justify-center rounded-2xl p-2 transition-[box-shadow] ${
                selected ? 'ring-[3px] ring-kakao' : 'ring-0 hover:ring-2 hover:ring-kakao/30'
              }`}
            >
              <Image
                src={`/medvedi/${c.slug}.webp`}
                alt=""
                width={120}
                height={120}
                className="h-[62%] w-[62%] object-contain"
              />
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
        style={{ backgroundColor: ch.bg }}
        className="mt-3 rounded-2xl p-6 md:p-8 min-h-[220px]"
      >
        <div className="text-sm" style={{ color: ch.ink }} data-chapter-count>
          Kapitola {active + 1} z {chapters.items.length}
        </div>
        <h3 className="mt-1 text-2xl font-bold leading-tight" style={{ color: ch.ink }} data-chapter-title>
          {ch.title}
        </h3>
        <ul className="mt-4 space-y-2 text-kakao" data-chapter-questions>
          {ch.questions.map((q) => (
            <li key={q} className="italic leading-snug">
              {q}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
