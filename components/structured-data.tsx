import { dates, conditions, faq, links, footer } from '@/lib/content'
import { site, siteUrl } from '@/lib/site'

// "12.–14. 3. 2027" → ['2027-03-12', '2027-03-14']
function parseRange(range: string): [string, string] {
  const m = range.replace(/\s/g, '').match(/^(\d{1,2})\.(?:(\d{1,2})\.)?[–-](\d{1,2})\.(\d{1,2})\.(\d{4})$/)
  if (!m) throw new Error(`Neznámý formát termínu: ${range}`)
  const [, d1, m1, d2, m2, y] = m
  const pad = (n: string) => n.padStart(2, '0')
  return [`${y}-${pad(m1 ?? m2)}-${pad(d1)}`, `${y}-${pad(m2)}-${pad(d2)}`]
}

const price = conditions.find((c) => 'big' in c && c.big)
const priceValue = price && 'big' in price ? Number(String(price.big).replace(/\D/g, '')) : undefined

export function StructuredData() {
  const organizer = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organizace`,
    name: 'VLK Ursus',
    alternateName: 'Vůdcovský lesní kurz Ursus',
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo/ursus-512.png`,
    email: links.email,
    sameAs: [links.facebook, links.instagram],
    parentOrganization: {
      '@type': 'Organization',
      name: footer.organizer[0],
      address: {
        '@type': 'PostalAddress',
        streetAddress: footer.organizer[1],
        postalCode: footer.organizer[2].slice(0, 6),
        addressLocality: footer.organizer[2].slice(7),
        addressCountry: 'CZ',
      },
    },
  }

  const events = dates.items.map((d) => {
    const [startDate, endDate] = parseRange(d.date)
    return {
      '@type': 'EducationEvent',
      name: `VLK Ursus 2027 – ${d.label}`,
      description: `${d.label} vůdcovského lesního kurzu Ursus pro budoucí vůdkyně a vůdce oddílů Junáka – českého skauta.`,
      startDate,
      endDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: d.place,
        address: { '@type': 'PostalAddress', addressLocality: d.place.replace(/\s*\(.*\)/, ''), addressCountry: 'CZ' },
      },
      image: [`${siteUrl}${site.ogImage}`],
      organizer: { '@id': organizer['@id'] },
      inLanguage: 'cs',
      url: `${siteUrl}/#terminy`,
    }
  })

  const course = {
    '@type': 'Course',
    name: 'Vůdcovský lesní kurz Ursus 2027',
    description: site.description,
    url: `${siteUrl}/`,
    inLanguage: 'cs',
    provider: { '@id': organizer['@id'] },
    educationalCredentialAwarded: 'Vůdcovská zkouška Junáka – českého skauta',
    ...(priceValue && {
      offers: {
        '@type': 'Offer',
        category: 'Paid',
        price: priceValue,
        priceCurrency: 'CZK',
        url: `${siteUrl}/#prihlaska`,
      },
    }),
    hasCourseInstance: events.map((e) => ({
      '@type': 'CourseInstance',
      name: e.name,
      courseMode: 'Onsite',
      startDate: e.startDate,
      endDate: e.endDate,
      location: e.location,
    })),
  }

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#web`,
    url: `${siteUrl}/`,
    name: site.name,
    inLanguage: 'cs',
    publisher: { '@id': organizer['@id'] },
  }

  const data = { '@context': 'https://schema.org', '@graph': [website, organizer, course, ...events, faqPage] }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
