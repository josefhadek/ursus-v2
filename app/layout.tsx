import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const skautBold = localFont({
  src: '../public/fonts/SKAUT-Bold.ttf',
  variable: '--font-skaut-bold',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

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
      <body className={`font-sans antialiased ${inter.variable} ${skautBold.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
