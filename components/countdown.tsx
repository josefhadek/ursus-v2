'use client'

import { useEffect, useState } from 'react'
import { BellRing, ExternalLink } from 'lucide-react'
import { countdown as cd, links } from '@/lib/content'
import { Hl } from '@/components/highlight'
import { Blob } from '@/components/decor'

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
      <Blob name="b7" className="absolute -right-24 -top-28 hidden w-80 text-okr md:block" rotate={-14} />
      <Blob name="b105" className="absolute -bottom-24 right-36 hidden w-64 text-serik md:block" rotate={10} />
      <Blob name="b130" className="absolute bottom-10 right-14 hidden w-20 text-terakota md:block" rotate={-6} />
      <Blob name="b32" className="absolute -bottom-12 -right-10 w-32 text-okr md:hidden" rotate={-10} />
      <Blob name="b130" className="absolute -bottom-6 right-16 w-14 text-terakota md:hidden" rotate={8} />
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
        <h2 className="font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.3] text-krem" data-countdown-title>
          <Hl text={copy.title} variant="kakao" />
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

        <p className="mt-10 font-bold text-maslova" data-countdown-counter hidden={!copy.counter}>
          {copy.counter}
        </p>
        <dl className="mt-3 grid grid-cols-4 gap-y-6 sm:flex sm:flex-wrap" data-countdown-values hidden={phase === 'over'}>
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
