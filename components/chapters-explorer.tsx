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
    <div data-chapters data-chapters-json={JSON.stringify(chapters.items.map(({ title, bg, ink, questions }) => ({ title, bg, ink, questions })))}>
      <div
        role="tablist"
        aria-label="Kapitoly Cesty Ursu"
        className="no-scrollbar flex items-start gap-2 overflow-x-auto lg:grid lg:grid-cols-8 lg:overflow-visible"
      >
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
              className="flex h-16 w-16 shrink-0 items-start justify-center rounded-2xl pt-2 opacity-75 transition-[height,opacity] hover:opacity-100 aria-selected:h-[4.5rem] aria-selected:rounded-b-none aria-selected:opacity-100 lg:h-[5.5rem] lg:w-auto lg:aria-selected:h-24"
            >
              <Image
                src={`/medvedi/${c.slug}.webp`}
                alt=""
                width={120}
                height={120}
                className="h-12 w-12 object-contain lg:h-[4.5rem] lg:w-[4.5rem]"
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
        style={{
          backgroundColor: ch.bg,
          borderTopLeftRadius: active === 0 ? 0 : undefined,
          borderTopRightRadius: active === chapters.items.length - 1 ? 0 : undefined,
        }}
        className="min-h-[200px] rounded-2xl p-6 md:p-8"
      >
        <h3 className="text-2xl font-bold leading-tight" style={{ color: ch.ink }} data-chapter-title>
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
