import Image from 'next/image'

const photos = [
  { src: '/carousel/2.webp', alt: 'Účastnice s úkolem ze stezky' },
  { src: '/carousel/3.webp', alt: 'Večerní program v lese pod světýlky' },
  { src: '/carousel/5.webp', alt: 'Sdílení v kruhu' },
  { src: '/carousel/1.webp', alt: 'Účastníci Ursu ve večerním slunci' },
  { src: '/carousel/4.webp', alt: 'Hra s bublinami' },
  { src: '/carousel/6.webp', alt: 'Práce na kurzových úkolech' },
  { src: '/carousel/8.webp', alt: 'Scénka v kostýmech' },
  { src: '/carousel/9.webp', alt: 'Účastnice u boží muky' },
  { src: '/carousel/10.webp', alt: 'Instruktoři a účastníci' },
]

// Pás fotek, který se plynule posouvá doprava. Fotky jsou v pásu dvakrát za sebou,
// animace posune o polovinu a navazuje bez skoku. Při najetí myší se zastaví,
// při „omezit pohyb“ v systému stojí a dá se posouvat ručně.
export function PhotoStrip() {
  const row = [...photos, ...photos]
  return (
    <div className="px-4 sm:px-6">
      <div className="overflow-hidden rounded-2xl motion-reduce:overflow-x-auto" aria-label="Fotky z minulých ročníků" role="region">
        <div className="photo-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <figure
              key={`${p.src}-${i}`}
              aria-hidden={i >= photos.length}
              className="relative h-[220px] w-[300px] shrink-0 overflow-hidden rounded-2xl bg-pisek sm:h-[260px] sm:w-[360px]"
            >
              <Image src={p.src} alt={i >= photos.length ? '' : p.alt} fill sizes="360px" className="object-cover" />
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <a href="https://ursusvlk.zonerama.com/" target="_blank" rel="noopener noreferrer" className="text-serik-tmavy underline underline-offset-4 hover:text-kakao">
          Celá fotogalerie na Zoneramě
        </a>
      </div>
    </div>
  )
}
