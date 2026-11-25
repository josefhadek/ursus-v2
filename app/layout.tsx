import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { site, siteUrl, noindex } from '@/lib/site'

const skautBold = localFont({
  src: '../public/fonts/SKAUT-Bold.woff2',
  variable: '--font-skaut-bold',
  weight: '700',
  display: 'swap',
})

const theMix = localFont({
  src: [
    { path: '../public/fonts/TheMixC5-4_SemiLight.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/TheMixC5-4iSemiLightIta.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/TheMixC5-7_Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/TheMixC5-7iBoldItalic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-themix',
  display: 'swap',
})

export const viewport: Viewport = { themeColor: '#f7f0e6' }

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: 'Tým VLK Ursus' }],
  alternates: { canonical: '/' },
  robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Vůdcovský lesní kurz Ursus 2027' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
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
      </body>
    </html>
  )
}
