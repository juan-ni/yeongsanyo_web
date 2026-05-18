// app/layout.js

export const metadata = {
  title: '영산요 Yeongsanyo', //
  description: '전통, 가장 세련된 일상이 되다', //
  openGraph: {
    title: '영산요 Yeongsanyo',
    description: '전통, 가장 세련된 일상이 되다',
    url: 'https://yeongsanyo.com',
    siteName: '영산요 yeongsanyo',
    images: [
      {
        url: 'public/logo.svg', // public 폴더에 저장한 미리보기 이미지 경로
        width: 1200,
        height: 630,
        alt: '영산요 브랜드 로고와 작품 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};