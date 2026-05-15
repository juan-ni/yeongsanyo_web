// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yeongsanyo.com'

  // 만약 동적 페이지(예: /products/1)가 있다면 여기서 fetch 후 추가
  // 지금은 메인 페이지를 기준으로 작성합니다.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}