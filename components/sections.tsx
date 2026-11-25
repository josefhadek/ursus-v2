import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, MapPin, Plus } from 'lucide-react'
import {
  hero,
  about,
  pillars,
  chapters,
  registration,
  dates,
  conditions,
  team,
  faq,
} from '@/lib/content'
import { teamMembers, cooks } from '@/lib/team'
import { TeamMemberCard } from '@/components/team-member-card'
import { PhotoStrip } from '@/components/photo-strip'
import { ChaptersExplorer } from '@/components/chapters-explorer'
import { StezkaPreview } from '@/components/stezka-preview'

const wrap = 'mx-auto max-w-6xl px-4 sm:px-6'
const h2 = 'font-heading text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] text-kakao'
const lead = 'text-lg text-kakao-muted leading-relaxed'

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className={`${wrap} grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]`}>
        <div>
          <h1 className="font-heading text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.98] text-kakao">
            {hero.titleStart} <span className="text-palena">{hero.titleAccent}</span>
          </h1>
          <p className={`mt-6 max-w-xl ${lead}`}>{hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#prihlaska" className="btn-primary">
              Přihlas se
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
          <div className="absolute inset-[9%] overflow-hidden rounded-[2rem] border-[6px] border-bila">
            <Image
              src="/carousel/1.webp"
              alt="Účastníci Ursu ve večerním slunci"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[2%] top-[4%] h-[24%] w-[24%] overflow-hidden rounded-2xl border-[5px] border-bila">
            <Image src="/ursus-logo-kakao.webp" alt="Logo kurzu Ursus" fill sizes="140px" className="object-cover" />
          </div>
        </div>
      </div>

    </section>
  )
}

/* ---------- O KURZU + PILÍŘE ---------- */
const pillarBg = ['bg-okr', 'bg-serik', 'bg-maslova', 'bg-okr-svetly']
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
        <p className="rounded-2xl bg-maslova px-6 py-5 text-xl font-bold leading-snug text-kakao">
          {about.highlight}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <PhotoStrip />
      </div>

      <div className={`${wrap} mt-20`}>
        <h3 className="font-heading text-3xl font-bold text-kakao">Jaký je Ursus?</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <article key={p.title} className={`grid overflow-hidden rounded-2xl sm:grid-cols-[38%_1fr] ${pillarBg[i % pillarBg.length]}`}>
              <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[220px]">
                <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-kakao">{p.title}</h4>
                <p className="mt-2 text-kakao leading-relaxed">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- KAPITOLY / CESTA URSU ---------- */
export function Chapters() {
  return (
    <section id="kapitoly" className="bg-kakao py-20 md:py-28">
      <div className={wrap}>
        <div className="max-w-3xl">
          <h2 className="font-heading text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] text-maslova">{chapters.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-krem">{chapters.lead}</p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start">
          <ChaptersExplorer />
          <StezkaPreview />
        </div>
      </div>
    </section>
  )
}

/* ---------- PŘIHLÁŠKA ---------- */
export function Registration() {
  const w = registration.window
  return (
    <section id="prihlaska" className="bg-okr py-20 md:py-28">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[0.9fr_1.1fr]`}>
        <div>
          <h2 className={h2}>{registration.title}</h2>
          <p className="mt-6 text-sm font-bold text-kakao">Přihlašování</p>
          <p className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight text-kakao">
            {w.from} – {w.to}
          </p>
          <p className="text-kakao">{w.time}</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-kakao">{registration.intro}</p>
        </div>

        <ol className="grid gap-4">
          {registration.steps.map((st, i) => {
            const ext = st.href.startsWith('http')
            return (
              <li key={st.title} className="flex flex-col gap-4 rounded-2xl bg-bila p-6 sm:flex-row sm:items-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kakao font-heading text-xl font-bold text-maslova">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-kakao">{st.title}</h3>
                  <p className="mt-1 text-kakao-muted">{st.text}</p>
                </div>
                <a
                  href={st.href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="btn-primary shrink-0 self-start sm:self-center"
                >
                  {st.cta} {ext && <ExternalLink className="h-4 w-4" />}
                </a>
              </li>
            )
          })}
        </ol>
      </div>

      <div className={`${wrap} mt-12`}>
        <h3 className="text-xl font-bold text-kakao">{registration.after.title}</h3>
        <dl className="mt-4 grid gap-6 border-t border-kakao/30 pt-5 md:grid-cols-3">
          {registration.after.items.map((it) => (
            <div key={it.label}>
              <dt className="font-bold text-kakao">{it.label}</dt>
              <dd className="mt-1 text-kakao">{it.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------- TERMÍNY + PODMÍNKY ---------- */
const dateCard = ['border-okr', 'border-serik-tmavy', 'border-terakota']

export function Dates() {
  return (
    <section id="terminy" className="bg-krem py-20 md:py-28">
      <div className={wrap}>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className={h2}>{dates.title}</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dates.items.map((d, i) => (
            <div key={d.label} className={`rounded-2xl border-t-[6px] bg-bila p-6 ${dateCard[i % dateCard.length]}`}>
              <div className="text-sm text-kakao">{d.label}</div>
              <div className="mt-2 font-heading text-3xl font-bold text-kakao">{d.date}</div>
              <div className="mt-1 text-kakao">{d.place}</div>
              <a
                href={d.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-kakao underline underline-offset-4"
              >
                <MapPin className="h-4 w-4" /> Na mapě
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border-l-4 border-palena bg-bila p-5 text-kakao">
          <strong className="font-bold">Pozor: </strong>
          {dates.warning}
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {conditions.map((c) => (
            <div key={c.title} className="card p-6">
              <h3 className="text-xl font-bold text-kakao">{c.title}</h3>
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
  return (
    <section id="tym" className="bg-bila py-20 md:py-28">
      <div className={wrap}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className={h2}>{team.title}</h2>
            <p className={`mt-3 ${lead}`}>{team.lead}</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <TeamMemberCard key={m.nickname} {...m} />
          ))}
        </div>
        <h3 className="mt-14 text-2xl font-bold text-kakao">Kuchaři</h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {cooks.map((m) => (
            <TeamMemberCard key={m.nickname} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- CITACE ---------- */
const quoteGraphics = [
  { src: '/images/ursus-maty.webp', alt: '„Hledal jsem kurz, našel jsem rodinku.“ – Maty, účastník Ursu 2024' },
  { src: '/images/citat2-web.webp', alt: '„Ursus mne naučil, jak být skvělou vedoucí nejen pro děti, ale především pro svůj tým vedoucích.“ – účastnice Ursu 2023' },
  { src: '/images/citat1-web.webp', alt: '„Inspirovalo mě zpracování a provedení toho, jak jde programy tvořit skutečně podle skautské výchovné metody.“ – účastník Ursu 2023' },
]

export function Quotes() {
  return (
    <section className="bg-serik py-20 md:py-28">
      <div className={wrap}>
        <h2 className="font-heading text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] text-kakao">
          Co o nás říkají účastníci z minulých let
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {quoteGraphics.map((q) => (
            <figure key={q.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src={q.src} alt={q.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
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
    <section id="faq" className="bg-bila py-20 md:py-28">
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-bold text-kakao">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-palena transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 max-w-2xl text-kakao-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
