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
  metadataBase: new URL('https://www.yeongsanyo.com'),
  title: "Yeongsanyo",
  description: "Tradition meets the most sophisticated lifestyle.",
  openGraph: {
    title: '영산요 Yeongsanyo',
    description: '전통, 가장 세련된 일상이 되다.',
    url: 'https://www.yeongsanyo.com',
    siteName: '영산요',
    images: [
      {
        url: '/images/wall_flower1.png', // metadataBase 덕분에 상대경로 가능
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '영산요 Yeongsanyo',
    description: '전통, 가장 세련된 일상이 되다.',
    images: ['/images/wall_flower1.png'],
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
