import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'
import './globals.css'

const skautBold = localFont({
  src: '../public/fonts/SKAUT-Bold.ttf',
  variable: '--font-skaut-bold',
  weight: '700',
  display: 'swap',
})

const theMix = localFont({
  src: [
    { path: '../public/fonts/TheMixC5-4_SemiLight.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/TheMixC5-4iSemiLightIta.ttf', weight: '400', style: 'italic' },
    { path: '../public/fonts/TheMixC5-7_Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/TheMixC5-7iBoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-themix',
  display: 'swap',
})

export const viewport: Viewport = { themeColor: '#f7f0e6' }

export const metadata: Metadata = {
  title: 'VLK Ursus · Vůdcovský kurz 2027',
  description: 'Vůdcovský lesní kurz Ursus jsou pohodové vůdcovky plné kreativních programů, na kterých se snažíme předávat nejen obsah, ale také formu. Nenajdeš u nás nudné přednášky. Velký prostor dáváme pro vzájemné sdílení vašich otázek, problémů a jejich možných řešení.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`font-sans antialiased ${theMix.variable} ${skautBold.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
