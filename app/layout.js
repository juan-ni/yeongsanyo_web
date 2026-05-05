// app/layout.js

export const metadata = {
  title: '영산요 | 전통, 가장 세련된 일상이 되다', //
  description: '박주안 디렉터가 빚어낸 전통과 현대의 유기적 만남, 영산요 디지털 전시관', //
  openGraph: {
    title: '영산요 (Yeongsanyo)',
    description: '강과 산의 기운을 담은 무한의 미학',
    url: 'https://yeongsanyo.com',
    siteName: '영산요',
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