import Link from 'next/link'
import { Mail, Facebook, Images } from 'lucide-react'
import { footer, links, nav } from '@/lib/content'

export function Footer({ base = '' }: { base?: string }) {
  return (
    <footer id="kontakt" className="bg-kakao text-krem">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="font-heading text-3xl font-extrabold tracking-[0.06em] text-okr">URSUS</div>
          <p className="mt-2 text-krem/85">Vůdcovský kurz Junáka – českého skauta</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={`${base}${item.href}`} className="text-krem/85 hover:text-maslova">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-maslova">Pořadatel</h3>
          <div className="mt-3 space-y-0.5 text-krem/85">
            {footer.organizer.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-maslova">Kontakt</h3>
          <p className="mt-3 text-krem/85">{footer.contactPerson}</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 hover:text-maslova">
                <Mail className="h-4 w-4 text-okr" /> {links.email}
              </a>
            </li>
            <li>
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-maslova">
                <Facebook className="h-4 w-4 text-okr" /> VLK Ursus
              </a>
            </li>
            <li>
              <a href={links.zonerama} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-maslova">
                <Images className="h-4 w-4 text-okr" /> Fotogalerie
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-krem/15">
        <p className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-sm text-krem/70">© {new Date().getFullYear()} VLK Ursus</p>
      </div>
    </footer>
  )
}
