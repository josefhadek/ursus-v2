import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Plus } from 'lucide-react'
import {
  hero,
  facts,
  about,
  pillars,
  chapters,
  registration,
  dates,
  conditions,
  team,
  quotes,
  faq,
} from '@/lib/content'
import { teamMembers, externists, cooks } from '@/lib/team'
import { TeamMemberCard } from '@/components/team-member-card'
import { PhotoStrip } from '@/components/photo-strip'

const wrap = 'mx-auto max-w-6xl px-4 sm:px-6'
const h2 = 'font-heading text-[clamp(2rem,4.2vw,3rem)] font-extrabold leading-[1.05] text-kakao'
const lead = 'text-lg text-kakao-muted leading-relaxed'

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className={`${wrap} grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]`}>
        <div>
          <span className="eyebrow-pill bg-serik text-kakao">{hero.badge}</span>
          <h1 className="mt-5 font-heading text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.98] text-kakao">
            {hero.titleStart} <span className="text-palena">{hero.titleAccent}</span>
          </h1>
          <p className={`mt-6 max-w-xl ${lead}`}>{hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#prihlaska" className="btn-primary">
              Přihlas se <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#terminy" className="btn-outline">
              Termíny běhů 2027
            </Link>
          </div>
        </div>

        {/* Obraz: fotka v kruhové kompozici z palety */}
        <div className="relative mx-auto w-full max-w-[540px] aspect-square">
          <div className="absolute -right-[8%] -top-[6%] h-[58%] w-[58%] rounded-full bg-okr" aria-hidden />
          <div className="absolute -left-[4%] bottom-[4%] h-[34%] w-[34%] rounded-full bg-serik" aria-hidden />
          <div className="absolute right-[6%] bottom-[2%] h-[14%] w-[14%] rounded-full bg-terakota" aria-hidden />
          <div className="absolute inset-[9%] overflow-hidden rounded-[2rem] border-[6px] border-bila shadow-[0_24px_60px_-24px_rgba(69,32,31,0.45)]">
            <Image
              src="/carousel/1.webp"
              alt="Účastníci Ursu ve večerním slunci"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[1%] top-[3%] h-[26%] w-[26%] overflow-hidden rounded-[1.25rem] border-[5px] border-bila shadow-lg -rotate-6">
            <Image src="/ursus-logo-kakao.webp" alt="Logo kurzu Ursus" fill sizes="140px" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Fakta na jeden řádek */}
      <div className={`${wrap} pb-16`}>
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="card px-5 py-4">
              <dt className="text-sm text-kakao-muted">{f.label}</dt>
              <dd className="mt-1 font-heading text-lg font-bold leading-snug text-kakao">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------- O KURZU + PILÍŘE ---------- */
export function About() {
  return (
    <section id="o-kurzu" className="bg-bila py-20 md:py-28">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end`}>
        <div>
          <h2 className={h2}>{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className={`mt-5 ${lead}`}>{p}</p>
          ))}
        </div>
        <p className="rounded-2xl bg-maslova px-6 py-5 font-heading text-xl font-bold leading-snug text-kakao">
          {about.highlight}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <PhotoStrip />
      </div>

      <div className={`${wrap} mt-20`}>
        <h3 className="font-heading text-3xl font-extrabold text-kakao">Jaký je Ursus?</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <article key={p.title} className="card grid overflow-hidden sm:grid-cols-[38%_1fr] bg-krem">
              <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[220px]">
                <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover" />
              </div>
              <div className="p-6">
                <span
                  className={`inline-block h-3 w-3 rounded-full ${['bg-palena', 'bg-okr', 'bg-serik', 'bg-maslova'][i]}`}
                  aria-hidden
                />
                <h4 className="mt-3 font-heading text-2xl font-extrabold text-kakao">{p.title}</h4>
                <p className="mt-2 text-kakao-muted leading-relaxed">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- KAPITOLY ---------- */
const tile = {
  palena: 'bg-palena text-bila',
  okr: 'bg-okr text-kakao',
  serik: 'bg-serik text-kakao',
}
const tileTitle = {
  palena: 'text-palena',
  okr: 'text-kakao',
  serik: 'text-serik-tmavy',
}

export function Chapters() {
  return (
    <section id="kapitoly" className="py-20 md:py-28">
      <div className={`${wrap} grid gap-5 lg:grid-cols-[1fr_1.1fr]`}>
        <div className="relative overflow-hidden rounded-3xl bg-okr p-8 md:p-12 min-h-[320px] flex flex-col justify-end">
          <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-terakota" aria-hidden />
          <h2 className="relative font-heading text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[0.98] text-kakao">
            {chapters.title}
          </h2>
          <p className="relative mt-4 max-w-sm text-lg text-kakao">{chapters.lead}</p>
        </div>
        <ol className="grid gap-4">
          {chapters.items.map((c) => (
            <li key={c.n} className="card flex items-center gap-5 p-5 md:p-6">
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-heading text-2xl font-extrabold ${tile[c.tone]}`}>
                {c.n}
              </span>
              <div>
                <h3 className={`font-heading text-2xl font-extrabold ${tileTitle[c.tone]}`}>{c.title}</h3>
                <p className="mt-1 text-kakao-muted">{c.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- PŘIHLÁŠKA ---------- */
export function Registration() {
  return (
    <section id="prihlaska" className="pb-20 md:pb-28">
      <div className={wrap}>
        <div className="card p-7 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className={h2}>{registration.title}</h2>
              <p className="mt-4 text-[clamp(1.15rem,2vw,1.5rem)] leading-relaxed text-kakao-muted">
                {registration.textBefore}{' '}
                <mark className="rounded-md bg-maslova px-1.5 text-kakao">{registration.deadline}</mark>
                {registration.textAfter}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={registration.steps[0].href} className="btn-primary">{registration.steps[0].cta}</a>
              <a href={registration.steps[1].href} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {registration.steps[1].cta} <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            {registration.steps.map((s, i) => (
              <div key={s.title} className="contents">
                {i === 1 && (
                  <div className="hidden md:flex items-center justify-center" aria-hidden>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-serik text-kakao">
                      <Plus className="h-5 w-5" />
                    </span>
                  </div>
                )}
                <div className="rounded-2xl bg-okr-svetly p-6">
                  <h3 className="font-heading text-xl font-extrabold text-kakao">{s.title}</h3>
                  <p className="mt-2 text-kakao-muted">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-6 grid gap-2 text-kakao-muted md:grid-cols-3">
            {registration.notes.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terakota" aria-hidden />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- TERMÍNY + PODMÍNKY ---------- */
const dateCard = {
  okr: 'bg-okr border-okr',
  bila: 'bg-bila border-pisek',
}
const dateColor = ['text-kakao', 'text-palena', 'text-serik-tmavy']

export function Dates() {
  return (
    <section id="terminy" className="bg-bila py-20 md:py-28">
      <div className={wrap}>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className={h2}>{dates.title}</h2>
          <span className="eyebrow-pill bg-okr text-kakao">nově</span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dates.items.map((d, i) => (
            <div key={d.label} className={`rounded-2xl border p-6 ${dateCard[d.tone]}`}>
              <div className={`text-sm ${d.tone === 'okr' ? 'text-kakao' : 'text-kakao-muted'}`}>{d.label}</div>
              <div className={`mt-2 font-heading text-3xl font-extrabold ${dateColor[i]}`}>{d.date}</div>
              <div className={`mt-1 ${d.tone === 'okr' ? 'text-kakao' : 'text-kakao-muted'}`}>{d.place}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-okr-svetly p-5 text-kakao">
          <strong className="font-semibold">Pozor: </strong>
          {dates.warning}
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {conditions.map((c) => (
            <div key={c.title} className="card bg-krem p-6">
              <h3 className="font-heading text-xl font-extrabold text-kakao">{c.title}</h3>
              <p className="mt-2 text-kakao-muted leading-relaxed">{c.text}</p>
              {c.link && (
                <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-serik-tmavy underline underline-offset-4 hover:text-kakao">
                  {c.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- TÝM ---------- */
export function Team() {
  const support = [...externists, ...cooks]
  return (
    <section id="tym" className="py-20 md:py-28">
      <div className={wrap}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className={h2}>{team.title}</h2>
            <p className={`mt-3 ${lead}`}>{team.lead}</p>
          </div>
          <span className="eyebrow-pill border border-dashed border-palena text-palena bg-bila">{team.note}</span>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <TeamMemberCard key={m.nickname} {...m} />
          ))}
        </div>
        <h3 className="mt-14 font-heading text-2xl font-extrabold text-kakao">Externisté a kuchaři</h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {support.map((m) => (
            <TeamMemberCard key={m.nickname} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- CITACE ---------- */
export function Quotes() {
  return (
    <section className="bg-kakao py-20 md:py-28">
      <div className={wrap}>
        <h2 className="font-heading text-[clamp(2rem,4.2vw,3rem)] font-extrabold leading-[1.05] text-maslova">
          Co říkají absolventi
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {quotes.map((q, i) => (
            <figure key={q.who} className={`rounded-2xl p-7 ${i === 0 ? 'bg-okr' : 'bg-kakao border border-krem/20'}`}>
              <blockquote className={`font-heading text-xl font-bold leading-snug ${i === 0 ? 'text-kakao' : 'text-krem'}`}>
                „{q.text}“
              </blockquote>
              <figcaption className={`mt-4 text-sm ${i === 0 ? 'text-kakao' : 'text-serik'}`}>{q.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.6fr]`}>
        <div>
          <h2 className={h2}>Časté otázky</h2>
          <p className={`mt-4 ${lead}`}>
            Nenašel/a jsi odpověď? Napiš nám na{' '}
            <a href="mailto:ursus@skaut.cz" className="text-serik-tmavy underline underline-offset-4">ursus@skaut.cz</a>.
          </p>
        </div>
        <div className="divide-y divide-pisek border-y border-pisek">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-xl font-bold text-kakao">
                {f.q}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-okr-svetly text-palena transition-transform group-open:rotate-45" aria-hidden>
                  <Plus className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-kakao-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
