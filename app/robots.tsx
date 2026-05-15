// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/2', // 네이버가 자꾸 들어가는 경로라면 명시적으로 차단
    },
    sitemap: 'https://yeongsanyo.com/sitemap.xml',
  }
}