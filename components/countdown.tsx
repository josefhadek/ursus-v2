'use client'

import { useEffect, useState } from 'react'
import { CalendarPlus } from 'lucide-react'
import { countdown as cd, links } from '@/lib/content'

type Phase = 'before' | 'running' | 'over'

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60]
}

const labels = ['dní', 'hodin', 'minut', 'sekund']
const pad = (n: number) => String(n).padStart(2, '0')

// Vrstevnice jako jemná dekorace – lesní kurz, mapa.
function Contours() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor">
      <g className="text-krem/10" strokeWidth="1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse key={`a${i}`} cx="960" cy="230" rx={60 + i * 55} ry={45 + i * 42} />
        ))}
        {[0, 1, 2].map((i) => (
          <ellipse key={`b${i}`} cx="330" cy="330" rx={70 + i * 60} ry={50 + i * 45} />
        ))}
        <path d="M0 70 C 250 40, 450 90, 650 55 S 1000 20, 1200 60" />
        <path d="M0 110 C 220 85, 480 130, 700 100 S 1020 70, 1200 105" />
      </g>
    </svg>
  )
}

export function Countdown() {
  const start = Date.parse(cd.start)
  const end = Date.parse(cd.end)
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const phase: Phase = now === null || now < start ? 'before' : now < end ? 'running' : 'over'
  const target = phase === 'before' ? start : end
  const values = now === null ? null : parts(target - now)
  const copy = cd[phase]

  return (
    <div
      data-countdown
      data-start={cd.start}
      data-end={cd.end}
      data-copy={JSON.stringify({ before: cd.before, running: cd.running, over: cd.over })}
      className="relative overflow-hidden rounded-3xl bg-kakao px-6 py-10 text-krem sm:px-10 md:px-14 md:py-14"
    >
      <Contours />
      <div className="relative">
        <h2 className="font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] text-maslova" data-countdown-title>
          {copy.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-krem/90" data-countdown-text>
          {copy.text}
        </p>
        <p className="mt-3 max-w-2xl text-krem/90">
          Aktuální informace ke kurzu najdeš na{' '}
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="font-bold text-krem underline underline-offset-4 hover:text-maslova">
            Facebooku
          </a>
          .
        </p>

        <dl className="mt-10 grid grid-cols-4 gap-y-6 sm:flex sm:flex-wrap" data-countdown-values hidden={phase === 'over'}>
          {labels.map((l, i) => (
            <div key={l} className={`pr-3 sm:pr-10 ${i > 0 ? 'border-l border-krem/25 pl-3 sm:pl-10' : ''}`}>
              <dd className="font-heading text-[clamp(2rem,8vw,4.5rem)] font-bold leading-none tabular-nums text-krem" data-countdown-value={i}>
                {values ? (i === 0 ? values[i] : pad(values[i])) : '–'}
              </dd>
              <dt className="mt-2 text-sm text-krem/75">{l}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={cd.google} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-krem/80 px-5 font-bold text-krem hover:bg-krem hover:text-kakao">
            <CalendarPlus className="h-5 w-5" /> Přidat do Google Kalendáře
          </a>
          <a href={cd.ics} download className="inline-flex h-12 items-center gap-2 rounded-xl px-3 font-bold text-krem/90 underline underline-offset-4 hover:text-maslova">
            Stáhnout .ics (Apple, Outlook)
          </a>
        </div>
      </div>
    </div>
  )
}
