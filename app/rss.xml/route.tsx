// app/rss.xml/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://yeongsanyo.com'
  
  // RSS 피드 내용 구성
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>영산요 (Yeongsanyo)</title>
    <link>${baseUrl}</link>
    <description>36년 전통 무안 분청사기 명장의 도자기</description>
    <language>ko</language>
    <item>
      <title>영산요 메인</title>
      <link>${baseUrl}</link>
      <description>영산요의 현대적인 전통 미학을 만나보세요.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}