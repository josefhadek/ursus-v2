import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const skautBold = localFont({
  src: '../public/fonts/SKAUT-Bold.ttf',
  variable: '--font-skaut-bold',
  display: 'swap',
})

const theMix = localFont({
  src: [
    {
      path: '../public/fonts/TheMixC5-4_SemiLight.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TheMixC5-4iSemiLightIta.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/TheMixC5-7_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/TheMixC5-7iBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-themix',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'URSUS - Vůdcovský lesní kurz',
  description: 'ČLK Ursus je čekatelský kurz složený z jarního víkendu a letního běhu, určený pro 15leté a starší skauty a skautky.',
  generator: 'v0.app',
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
