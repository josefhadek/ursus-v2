'use client'

import { useEffect, useState } from 'react'
import { BellRing, ExternalLink } from 'lucide-react'
import { countdown as cd, links } from '@/lib/content'

type Phase = 'before' | 'running' | 'over'

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60]
}

const labels = ['dní', 'hodin', 'minut', 'sekund']
const pad = (n: number) => String(n).padStart(2, '0')

// Kruhy z Hadčiny palety, stejný motiv jako v úvodu.
function Circles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -right-24 -top-24 hidden h-80 w-80 rounded-full bg-okr md:block" />
      <div className="absolute -bottom-20 right-40 hidden h-56 w-56 rounded-full bg-serik md:block" />
      <div className="absolute bottom-10 right-16 hidden h-16 w-16 rounded-full bg-terakota md:block" />
      <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-okr md:hidden" />
      <div className="absolute -bottom-6 right-16 h-12 w-12 rounded-full bg-terakota md:hidden" />
    </div>
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
      <Circles />
      <div className="relative">
        <h2 className="font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] text-maslova" data-countdown-title>
          {copy.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-krem/90" data-countdown-text>
          {copy.text}
        </p>
        <p className="mt-3 max-w-xl text-krem/90">
          Aktuální informace ke kurzu najdeš na{' '}
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="font-bold text-krem underline underline-offset-4 hover:text-maslova">
            Instagramu
          </a>
          .
        </p>

        <dl className="mt-10 grid grid-cols-4 gap-y-6 sm:flex sm:flex-wrap" data-countdown-values hidden={phase === 'over'}>
          {labels.map((l, i) => (
            <div key={l} className={`pr-3 text-center sm:pr-10 ${i > 0 ? 'border-l border-krem/25 pl-3 sm:pl-10' : ''}`}>
              <dd className="font-heading text-[clamp(2rem,8vw,4.5rem)] font-bold leading-none tabular-nums text-krem" data-countdown-value={i}>
                {values ? (i === 0 ? values[i] : pad(values[i])) : '–'}
              </dd>
              <dt className="mt-2 text-sm text-krem/75">{l}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <a href={cd.reminder} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-krem/80 bg-kakao px-5 font-bold text-krem hover:bg-krem hover:text-kakao">
            <BellRing className="h-5 w-5 shrink-0" /> <span><span className="hidden sm:inline">Nastavit p</span><span className="sm:hidden">P</span>řipomenutí ve SkautISu</span> <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  )
}
