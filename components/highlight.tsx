import { Fragment } from 'react'

// Zvýraznění textu podle podkladů od Hadky: štítek za 1–3 slovy, která nesou hlavní sdělení.
// V textu se zvýrazňovaná část píše mezi dvě hvězdičky: 'Náš kurz **nemá zkoušky**'.
const variants = {
  krem: 'hl hl-heading bg-palena text-bila', // nadpis na krému nebo bílé
  okr: 'hl hl-heading bg-kakao text-maslova', // nadpis na okru
  kakao: 'hl hl-heading bg-maslova text-kakao', // nadpis na kakau
  serik: 'hl hl-heading bg-serik-tmavy text-bila', // nadpis na šeříku
  text: 'hl hl-text bg-maslova text-kakao', // v běžném textu
} as const

export type HlVariant = keyof typeof variants

export function Hl({ text, variant = 'krem' }: { text: string; variant?: HlVariant }) {
  const parts = text.split('**')
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className={variants[variant]}>
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
