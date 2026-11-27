// Základní údaje webu pro SEO (metadata, sitemap, strukturovaná data).
//
// NEXT_PUBLIC_SITE_URL nastavuje deploy workflow na doménu, kde web právě běží.
// Bez něj se počítá s ostrou doménou kurzu.
// NEXT_PUBLIC_NOINDEX=1 schová web před vyhledávači (náhledová doména,
// aby nekonkurovala ostrému webu ursus.skauting.cz).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ursus.skauting.cz').replace(/\/$/, '')
export const noindex = process.env.NEXT_PUBLIC_NOINDEX === '1'

export const site = {
  name: 'VLK Ursus',
  title: 'VLK Ursus 2027 – vůdcovský lesní kurz Junáka – českého skauta',
  description:
    'Vůdcovský lesní kurz Ursus 2027 pro budoucí vůdkyně a vůdce oddílů Junáka – českého skauta. Bez zkouškového víkendu, se stezkou Cesta Ursu. Přihlašování 4.–10. 1. 2027.',
  keywords: [
    'vůdcovský kurz',
    'vůdcovský kurz 2027',
    'vůdcovská zkouška',
    'VLK Ursus',
    'Ursus',
    'Junák – český skaut',
    'skautský kurz',
    'vzdělávání činovníků',
    'lesní kurz',
  ],
  ogImage: '/og.jpg',
}
