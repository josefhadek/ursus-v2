'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '@/lib/content'

export function Header({ base = '' }: { base?: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', esc)
    }
  }, [open])

  return (
    <header ref={ref} className="sticky top-0 z-50 border-t-4 border-okr bg-krem/95 backdrop-blur border-b border-b-pisek">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={base || '#'} className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-heading text-2xl font-extrabold tracking-[0.06em] text-palena">URSUS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Hlavní navigace">
          {nav.map((item) => (
            <Link key={item.href} href={`${base}${item.href}`} className="text-[15px] text-kakao hover:text-palena transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href={`${base}#prihlaska`} className="btn-primary h-10">
            Přihlas se
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl text-kakao hover:bg-okr-svetly"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          data-menu-toggle
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

        <nav id="mobile-nav" hidden={!open} className="lg:hidden border-t border-pisek bg-krem px-4 pb-5 pt-2" aria-label="Mobilní navigace">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={`${base}${item.href}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-pisek py-3 text-lg text-kakao"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`${base}#prihlaska`} onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Přihlas se
          </Link>
        </nav>
    </header>
  )
}
