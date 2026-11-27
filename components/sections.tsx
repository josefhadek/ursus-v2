import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown, ExternalLink, MapPin } from 'lucide-react'
import { QuotesStrip } from '@/components/quotes-strip'
import { Hl } from '@/components/highlight'
import { Blob, CompassDecor, IconTile } from '@/components/decor'
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
// Nadpis se zvýrazněním potřebuje víc řádkování, aby se štítky na sebe nelepily.
const h2Hl = 'font-heading text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.3] text-kakao'
const lead = 'text-lg text-kakao-muted leading-relaxed'
const h3 = 'text-2xl font-bold text-kakao'

function Lily({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 185 200" className={className} aria-hidden>
      <path d="M158.333 127.5C159.444 124.167 159.722 121.111 159.722 118.889C159.722 110.556 153.889 103.611 145.555 103.611C130.277 103.611 117.5 116.945 117.5 133.056C117.5 144.445 126.944 150 137.5 150H141.111C143.611 150 144.166 152.222 144.166 154.445C144.166 161.667 139.722 171.111 126.666 171.111C111.389 171.111 108.333 157.5 105.555 157.5C103.055 157.5 104.444 161.945 108.611 170C109.444 171.667 110.555 172.778 110.555 175.556C110.555 185.833 96.1109 200 92.4998 200C88.8887 200 74.4443 185.833 74.4443 175.556C74.4443 172.778 75.5554 171.667 76.3888 170C80.5554 161.944 81.9442 157.5 79.4445 157.5C76.6668 157.5 73.6111 171.111 58.3334 171.111C45.2779 171.111 40.8334 161.667 40.8334 154.445C40.8334 152.222 41.389 150 43.889 150H47.5001C58.0556 150 67.5001 144.445 67.5001 133.056C67.5001 116.945 54.7223 103.611 39.4445 103.611C31.1112 103.611 25.2779 110.556 25.2779 118.889C25.2779 121.111 25.5556 124.167 26.6667 127.5C27.7776 131.111 24.9999 132.5 21.1111 130.556C9.72238 125.278 0 108.333 0 93.3336C0 71.1113 14.1666 58.6114 31.1112 58.6114C48.8889 58.6114 58.8888 70.2779 61.9445 73.8892C65.0001 76.9448 67.7778 83.0559 70.8334 83.0559C72.5002 83.0559 73.3334 81.3894 73.3334 78.8894C73.3334 66.3892 59.1668 44.4449 66.9446 27.5005C71.6664 17.4999 86.6664 0 92.4998 0C98.3331 0 113.333 17.5001 118.055 27.5C125.833 44.4444 111.667 65.0002 111.667 78.8889C111.667 81.3889 112.5 83.0555 114.167 83.0555C117.222 83.0555 120 76.9444 123.056 73.8887C126.111 70.2776 136.111 58.6109 153.889 58.6109C170.833 58.6109 185 71.1108 185 93.3331C185 110.555 173.611 126.111 163.889 130.555C160 132.5 157.222 131.111 158.333 127.5Z" fill="currentColor" />
    </svg>
  )
}

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className={`${wrap} grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]`}>
        <div>
          <h1 className="font-heading text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.98] text-kakao">
            {hero.titleStart} <span className="text-palena">{hero.titleAccent}</span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-3">
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
          <Blob name="b7" className="absolute -right-[10%] -top-[8%] w-[62%] text-okr" rotate={-12} />
          <Blob name="b16" className="absolute -left-[8%] bottom-[2%] w-[42%] text-serik" rotate={14} />
          <Blob name="b130" className="absolute right-[3%] -bottom-[1%] w-[17%] text-terakota" rotate={-8} />
          <div className="absolute inset-[9%] overflow-hidden rounded-[2rem]">
            <Image
              src="/carousel/7.webp"
              alt="Účastnice plánuje oddílový program na velkém papíře"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[2%] top-[4%] aspect-square w-[24%] overflow-hidden rounded-[18%] border-[5px] border-bila bg-krem">
            <Image src="/logo/ursus-zakladni.webp" alt="Logo kurzu Ursus" fill sizes="160px" className="object-cover" />
          </div>
          <IconTile name="lilie" className="absolute right-[1%] top-[30%] w-[15%]" rotate={9} />
          <IconTile name="kvet" className="absolute -left-[1%] top-[46%] w-[13%]" rotate={-11} />
          {/* Štítek přes fotku podle podkladů od Hadky (zvýraznění „na fotce“) */}
          <p className="absolute bottom-[13%] left-[13%] max-w-[72%] font-heading text-[clamp(1.05rem,2.3vw,1.6rem)] font-bold uppercase leading-[1.5] text-bila">
            <mark className="hl hl-heading bg-palena text-bila">
              <Lily className="mr-[0.25em] inline-block h-[0.85em] w-auto -translate-y-[0.06em]" />
              {hero.label}
            </mark>
          </p>
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
      <div className={wrap}>
        <div className="max-w-3xl">
          <h2 className={h2}>{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className={`mt-5 ${lead}`}>
              <Hl text={p} variant="text" />
            </p>
          ))}
          <a
            href={about.stezkaLink.href}
            className="group mt-10 block rounded-[28px] bg-okr-svetly p-6 text-kakao transition-transform hover:-translate-y-0.5 md:p-8"
          >
            <span className="block font-heading text-[clamp(1.25rem,2.3vw,1.75rem)] font-bold uppercase leading-[1.44]">
              <Hl text={about.stezkaLink.statement} variant="okr" />
            </span>
            <span className="mt-3 block">{about.stezkaLink.text}</span>
            <span className="mt-4 inline-flex items-center gap-2 font-bold text-palena underline decoration-2 underline-offset-4">
              {about.stezkaLink.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <PhotoStrip />
      </div>

      <div className={`${wrap} mt-20`}>
        <h3 className={h3}>Jaký je Ursus?</h3>
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
    <section id="stezka" className="bg-krem py-20 md:py-28">
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
// Číslo kroku jako Hadčina kostička: okr → kakao, šeřík → šeřík tmavý.
const stepTile = [
  { cls: 'bg-okr text-kakao', tilt: -6 },
  { cls: 'bg-serik text-serik-tmavy', tilt: 5 },
]

export function Registration() {
  return (
    <section id="prihlaska" className="relative overflow-hidden bg-bila py-20 md:py-28">
      <CompassDecor className="absolute right-[4%] top-10 hidden h-52 w-52 text-pisek md:block" rotate={14} />
      <div className={`${wrap} relative`}>
        <h2 className={h2Hl}>
          <Hl text={registration.title} variant="krem" />
        </h2>
        <p className={`mt-4 max-w-xl ${lead}`}>{registration.intro}</p>
        <ol className="mt-14 grid gap-12 md:grid-cols-2 md:gap-6">
          {registration.steps.map((st, i) => {
            const ext = st.href.startsWith('http')
            return (
              <li key={st.title} className="relative flex flex-col rounded-[28px] bg-krem px-7 pb-8 pt-14 md:px-9">
                <span
                  aria-hidden
                  className={`absolute -top-7 left-7 grid h-16 w-16 place-items-center rounded-[20%] font-heading text-3xl font-bold shadow-[0_4px_0_rgba(69,32,31,.16),0_10px_18px_rgba(69,32,31,.2)] md:left-9 ${stepTile[i].cls}`}
                  style={{ transform: `rotate(${stepTile[i].tilt}deg)` }}
                >
                  {i + 1}
                </span>
                <h3 className="max-w-[16ch] font-heading text-[clamp(1.4rem,2.3vw,1.8rem)] font-bold uppercase leading-[1.15] text-kakao">
                  <span className="sr-only">Krok {i + 1}: </span>
                  {st.title}
                </h3>
                <p className="mt-3 max-w-sm text-kakao">{st.text}</p>
                <a
                  href={st.href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="btn-primary mt-7 self-start shadow-[0_3px_0_rgba(69,32,31,.18)]"
                >
                  {st.cta}
                </a>
              </li>
            )
          })}
        </ol>

        <h3 className={`mt-16 ${h3}`}>{registration.after.title}</h3>
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
type ConditionItem = { title: string; text: string; link?: { href: string; label: string } }
const conditionItems: ConditionItem[] = [
  { title: 'Pozor na časovou náročnost', text: dates.warning },
  ...(otherConditions as ConditionItem[]),
]

export function Dates() {
  return (
    <section id="terminy" className="bg-krem py-20 md:py-28">
      <div className={wrap}>
        <h2 className={h2Hl}>
          <Hl text={dates.title} variant="krem" />
        </h2>

        <ol className="mt-8 divide-y divide-pisek border-y border-pisek">
          {dates.items.map((d, i) => (
            <li key={d.label} className="grid gap-x-8 gap-y-1 py-5 md:grid-cols-[200px_1fr_1fr] md:items-baseline">
              <span className="flex items-center gap-2 text-kakao-muted">
                <span className={`h-2.5 w-2.5 rounded-full ${dateDot[i % dateDot.length]}`} aria-hidden />
                {d.label}
              </span>
              <span className="font-heading text-3xl font-bold text-kakao">{d.date}</span>
              <a
                href={d.map}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${d.place} – zobrazit na mapě`}
                className="inline-flex items-center gap-1.5 self-start text-lg text-kakao underline decoration-pisek decoration-2 underline-offset-4 transition-colors hover:text-serik-tmavy hover:decoration-serik-tmavy md:self-auto"
              >
                <MapPin className="h-5 w-5 shrink-0 text-serik-tmavy" aria-hidden />
                {d.place}
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

        <div className="mt-14 divide-y divide-pisek border-y border-pisek">
          {conditionItems.map((c, i) => (
            <details key={c.title} className="group py-5" open={i === 0}>
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
        <h2 className={h2Hl}>
          <Hl text={team.title} variant="krem" />
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <TeamMemberCard key={m.nickname} {...m} />
          ))}
        </div>
        <h3 className={`mt-14 ${h3}`}>Kuchaři a MTZ</h3>
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
        <QuotesStrip title={'Co o nás říká **účastnictvo** z\u00a0minulých let'} quotes={quoteGraphics} />
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
                <ChevronDown className="h-5 w-5 shrink-0 text-palena transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 max-w-2xl text-kakao-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
