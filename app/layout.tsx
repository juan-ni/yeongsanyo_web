import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. 기준 URL 설정 (이게 없으면 상대 경로 이미지를 인식 못 할 때가 많습니다)
  metadataBase: new URL('https://yeongsanyo.com'),
  
  title: "영산요 Yeongsanyo",
  description: "Tradition meets the most sophisticated lifestyle.",
  
  openGraph: {
    title: '영산요 Yeongsanyo',
    description: '전통, 가장 세련된 일상이 되다.',
    url: 'https://yeongsanyo.com',
    siteName: '영산요',
    images: [
      {
        url: '/images/ha_flower_main.jpg', // metadataBase 덕분에 자동으로 절대경로로 변환됩니다.
        width: 1200,
        height: 630,
        alt: '영산요 브랜드 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  
  // 2. 트위터/슬랙 등에서 사용되는 카드 설정
  twitter: {
    card: 'summary_large_image',
    title: '영산요 Yeongsanyo',
    description: '전통, 가장 세련된 일상이 되다.',
    images: ['/images/ha_flower_main.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
