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
    <div className="[filter:drop-shadow(0_14px_28px_rgba(69,32,31,0.14))_drop-shadow(0_2px_4px_rgba(69,32,31,0.06))]" data-chapters data-chapters-json={JSON.stringify(chapters.items.map(({ title, bg, ink, questions }) => ({ title, bg, ink, questions })))}>
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
              className="flex h-14 w-14 shrink-0 items-start justify-center rounded-xl pt-2.5 opacity-75 transition-opacity hover:opacity-100 aria-selected:h-16 aria-selected:rounded-b-none aria-selected:opacity-100 lg:h-16 lg:w-auto lg:aria-selected:h-[4.5rem]"
            >
              <Image
                src={`/medvedi/${c.slug}.webp`}
                alt=""
                width={120}
                height={120}
                className="h-9 w-9 object-contain lg:h-11 lg:w-11"
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
        className="min-h-[200px] rounded-2xl p-6 transition-[background-color] duration-300 md:p-8"
      >
        <div key={active} className="chapter-in" data-chapter-body>
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
    </div>
  )
}
