import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yeongsanyo.com'
  const currentDate = new Date()

  // 영산요의 주요 메뉴 주소들을 배열로 정의합니다.
  // 프로젝트 구조에 맞게 경로(about, products 등)를 수정해서 사용하세요.
  const routes = [
    { url: '/about', changeFrequency: 'daily', priority: 1.0 },          // 메인 페이지
    { url: '/master/park', changeFrequency: 'monthly', priority: 0.8 },     // 브랜드 소개
    { url: '/master/ha', changeFrequency: 'weekly', priority: 0.9 },   // 작품/상품 리스트
    { url: '/shop', changeFrequency: 'monthly', priority: 0.5 },   // 문의/오시는 길
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency as 'daily' | 'weekly' | 'monthly',
    priority: route.priority,
  }))
}