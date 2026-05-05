"use client";

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// 20개의 데이터 (메인과 동일한 ID)
const exhibitionItems = [
  { 
    id: '1', 
    title: '영산요: 흙의 기록', 
    category: 'Ceramics', 
    story: '무안의 흙이 1300도 고온을 견디며 비로소 숨을 쉬기 시작합니다. 이 달항아리는 단순한 그릇이 아닌 장인의 30년 시간을 담은 결정체입니다.', 
    image: '/products/art-1.jpg',
    buyUrl: 'https://smartstore.naver.com/yeongsanyo' 
  },
  // ... 나머지 20개 데이터
];

export default function ExhibitionDetail() {
  const params = useParams();
  const item = exhibitionItems.find(i => i.id === params.id) || exhibitionItems[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white font-sans">
      
      {/* 상세 콘텐츠 영역 */}
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* 뒤로가기 - 주안님 요청사항 */}
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] text-zinc-500 hover:text-white transition-colors mb-16 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO ARCHIVE
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* 작품 이미지: 박물관 대형 전시물 느낌 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 aspect-[4/5] relative bg-zinc-900 border border-white/5 overflow-hidden shadow-2xl"
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover opacity-80"
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </motion.div>

            {/* 작품 설명: 유동적 폰트 적용 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5"
            >
              <span className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase block mb-6">{item.category}</span>
              
              {/* 제목: 화면 크기에 따라 폰트가 유동적으로 변함 (clamp 사용) */}
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-serif leading-[1.1] mb-10 tracking-tight">
                {item.title}
              </h1>
              
              <div className="h-px w-16 bg-zinc-800 mb-10" />
              
              <p className="text-[clamp(1rem,1.2vw,1.25rem)] text-zinc-400 font-light leading-relaxed mb-16 max-w-md">
                {item.story}
              </p>
              
              <button 
                onClick={() => window.open(item.buyUrl, '_blank')}
                className="w-full py-6 bg-white text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-zinc-200 transition-all active:scale-[0.98]"
              >
                Acquire this piece →
              </button>
            </motion.div>
          </div>
        </div>
      </main>

      {/* 푸터 고정: 주안님 요청사항 */}
      <footer className="py-12 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[12px] font-serif tracking-[0.3em] uppercase">YEONGSANYO</div>
          <div className="text-[10px] tracking-[0.2em] text-zinc-600">
            © 2026 Designed by Park Ju-an. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}