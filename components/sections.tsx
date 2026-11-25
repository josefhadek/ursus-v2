import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ExternalLink, MapPin, Plus } from 'lucide-react'
import { QuotesStrip } from '@/components/quotes-strip'
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
import { Countdown } from '@/components/countdown'

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

/* ---------- ODPOČET ---------- */
export function CountdownSection() {
  return (
    <section aria-label="Odpočet do přihlašování" className="pb-16 md:pb-20">
      <div className={wrap}>
        <Countdown />
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
        <p className="rounded-2xl bg-maslova px-6 py-5 text-xl font-bold leading-snug text-kakao">
          {about.highlight}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <PhotoStrip />
      </div>

      <div className={`${wrap} mt-20`}>
        <h3 className="font-heading text-3xl font-bold text-kakao">Jaký je Ursus?</h3>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.title}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-pisek">
                <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <h4 className="mt-5 text-2xl font-bold text-kakao">{p.title}</h4>
              <p className="mt-2 text-kakao-muted leading-relaxed">{p.text}</p>
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
    <section id="kapitoly" className="bg-krem py-20 md:py-28">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start`}>
        <div className="min-w-0">
          <h2 className={h2}>{chapters.title}</h2>
          <p className={`mt-4 max-w-3xl ${lead}`}>{chapters.lead}</p>
          <div className="mt-10">
            <ChaptersExplorer />
          </div>
        </div>
        <StezkaPreview />
      </div>
    </section>
  )
}

/* ---------- PŘIHLÁŠKA ---------- */
export function Registration() {
  return (
    <section id="prihlaska" className="bg-bila py-20 md:py-28">
      <div className={wrap}>
        <h2 className={h2}>{registration.title}</h2>
        <p className={`mt-4 max-w-2xl ${lead}`}>{registration.intro}</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {registration.steps.map((st, i) => {
            const ext = st.href.startsWith('http')
            return (
              <li key={st.title} className="flex flex-col gap-4 rounded-2xl border border-pisek bg-krem p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kakao font-heading text-lg font-bold text-maslova">
                    {i + 1}
                  </span>
                  <h4 className="text-xl font-bold text-kakao">{st.title}</h4>
                </div>
                <p className="text-kakao-muted">{st.text}</p>
                <a
                  href={st.href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="btn-primary mt-auto self-start"
                >
                  {st.cta} {ext && <ExternalLink className="h-4 w-4" />}
                </a>
              </li>
            )
          })}
        </ol>

        <h3 className="mt-12 text-xl font-bold text-kakao">{registration.after.title}</h3>
        <dl className="mt-4 grid gap-6 border-t border-pisek pt-5 md:grid-cols-3">
          {registration.after.items.map((it) => (
            <div key={it.label}>
              <dt className="font-bold text-kakao">{it.label}</dt>
              <dd className="mt-1 text-kakao-muted">{it.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------- TERMÍNY + PODMÍNKY ---------- */
const dateDot = ['bg-okr', 'bg-serik-tmavy', 'bg-terakota']

const price = conditions.find((c) => 'big' in c && c.big) as { title: string; big: string; text: string } | undefined
const otherConditions = conditions.filter((c) => c !== price)

export function Dates() {
  return (
    <section id="terminy" className="bg-krem py-20 md:py-28">
      <div className={wrap}>
        <h2 className={h2}>{dates.title}</h2>

        <ol className="mt-8 divide-y divide-pisek border-y border-pisek">
          {dates.items.map((d, i) => (
            <li key={d.label} className="grid gap-x-8 gap-y-1 py-5 md:grid-cols-[200px_1fr_1fr_auto] md:items-baseline">
              <span className="flex items-center gap-2 text-kakao-muted">
                <span className={`h-2.5 w-2.5 rounded-full ${dateDot[i % dateDot.length]}`} aria-hidden />
                {d.label}
              </span>
              <span className="font-heading text-3xl font-bold text-kakao">{d.date}</span>
              <span className="text-lg text-kakao">{d.place}</span>
              <a
                href={d.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-serik-tmavy underline underline-offset-4 hover:text-kakao"
              >
                <MapPin className="h-4 w-4" /> Na mapě
              </a>
            </li>
          ))}
        </ol>

        {price && (
          <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-kakao">
            <span className="text-lg">Cena kurzu:</span>
            <strong className="text-2xl font-bold text-palena">{price.big}</strong>
            <span className="basis-full text-sm text-kakao-muted sm:basis-auto">{price.text}</span>
          </p>
        )}

        <p className="mt-6 max-w-3xl border-l-4 border-palena pl-5 text-kakao">
          <strong className="font-bold">Pozor: </strong>
          {dates.warning}
        </p>

        <div className="mt-14 divide-y divide-pisek border-y border-pisek">
          {otherConditions.map((c) => (
            <details key={c.title} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-bold text-kakao">
                {c.title}
                <ChevronDown className="h-5 w-5 shrink-0 text-palena transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 max-w-2xl text-kakao-muted leading-relaxed">{c.text}</p>
              {c.link && (
                <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-serik-tmavy underline underline-offset-4 hover:text-kakao">
                  {c.link.label}
                </a>
              )}
            </details>
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
        <h2 className={h2}>{team.title}</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <TeamMemberCard key={m.nickname} {...m} />
          ))}
        </div>
        <h3 className="mt-14 text-2xl font-bold text-kakao">Kuchaři a MTZ</h3>
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
  { src: '/images/citat-marda.webp', alt: '„Velice nadupaný kurz, při kterém jsem hltala každý jeden program a rozhodně jsem se u toho nenudila. Zažila jsem tu spoustu silných momentů, na které budu moc ráda vzpomínat.“ – Marda, účastnice Ursu 2025' },
  { src: '/images/citat-sara.webp', alt: '„Ursus mi dal nejen nespočet informací, motivace a inspirace, ale hlavně sebevědomí a odvahu nebát se přicházet do oddílu se změnami a zajímavými projekty.“ – Sára, účastnice Ursu 2025' },
  { src: '/images/ursus-maty.webp', alt: '„Hledal jsem kurz, našel jsem rodinku.“ – Maty, účastník Ursu 2024' },
  { src: '/images/citat2-web.webp', alt: '„Ursus mne naučil, jak být skvělou vedoucí nejen pro děti, ale především pro svůj tým vedoucích.“ – účastnice Ursu 2023' },
  { src: '/images/citat1-web.webp', alt: '„Inspirovalo mě zpracování a provedení toho, jak jde programy tvořit skutečně podle skautské výchovné metody.“ – účastník Ursu 2023' },
]

export function Quotes() {
  return (
    <section className="bg-serik py-20 md:py-28">
      <div className={wrap}>
        <QuotesStrip title="Co o nás říká účastnictvo z minulých let" quotes={quoteGraphics} />
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
