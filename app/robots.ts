import type { MetadataRoute } from 'next'
import { siteUrl, noindex } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: noindex ? { userAgent: '*', disallow: '/' } : { userAgent: '*', allow: '/' },
    sitemap: noindex ? undefined : `${siteUrl}/sitemap.xml`,
  }
}
