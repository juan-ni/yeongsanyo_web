"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      
      {/* 1. 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="flex items-center gap-4 cursor-pointer">
          <span className="text-xl font-serif tracking-[0.4em] uppercase">YEONGSANYO</span>
        </Link>
        <Link href="/" className="text-[12px] tracking-[0.3em] text-zinc-500 hover:text-white transition-all">
          CLOSE
        </Link>
      </nav>

      <main className="flex-grow pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* 2. 브랜드 정체성 (Hero) */}
          <section className="mb-40">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase block mb-6"
            >
              Masterpiece
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-[clamp(3rem,8vw,6rem)] font-serif leading-[1.1] mb-12 tracking-tight"
            >
              전통, 가장 세련된<br /> 일상이 되다
            </motion.h1>
            <p className="text-[clamp(1.2rem,1.6vw,1.5rem)] text-zinc-400 font-light leading-relaxed max-w-2xl">
              영산요는 전남 무안에서 30년간 흙과 불을 다스려온 박정규 명장의 헤리티지에서 시작되었습니다. 
              그 전통의 결을 현대적인 기술(Technical Wear)로 치환합니다.
            </p>
          </section>

          {/* 3. 로고 정체성 (Identity Section) - 주안님 요청사항 */}
          <section className="mb-40 py-24 border-y border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-square flex items-center justify-center bg-zinc-900/50 rounded-2xl border border-white/5 group">
                {/* 로고 이미지 자리 */}
                <div className="relative w-40 h-40 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                  <Image src="/logo.svg" alt="Logo Symbol" fill className="object-contain" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_100%)]" />
              </div>
              
              <div>
                <h2 className="text-[14px] tracking-[0.5em] text-blue-500 uppercase mb-8">The Symbolism</h2>
                <h3 className="text-4xl font-serif mb-10 leading-snug">산과 강, <br />그리고 그 사이를 흐르는<br /> 무한한 선</h3>
                
                <div>
  {/* 소제목: 모바일 14px -> 데스크톱 16px로 상향 */}
  <h4 className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-300 mb-4 uppercase">
    01. ESSENTIAL STRUCTURE
  </h4>
  {/* 본문: 모바일 18px -> 데스크톱 20px로 확실히 키움 */}
  <p className="text-zinc-400 font-normal text-base md:text-base leading-relaxed mb-6">
    영산요의 브랜드 로고는 브랜드의 이름인 '영산요'의 초성 'ㅇㅅㅇ'을 기하학적으로 형상화하여 탄생했습니다.
  </p>
</div>

<div>
  {/* 소제목: 모바일 14px -> 데스크톱 16px */}
  <h4 className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-300 mb-4 uppercase">
    02. THE UNBROKEN FLOW
  </h4>
  {/* 본문: 모바일 18px -> 데스크톱 20px */}
  <p className="text-zinc-400 font-normal text-base md:text-base leading-relaxed">
    전면의 부드러운 곡선은 유유히 흐르는 강을, 후면의 견고한 직선은 굳건히 자리를 지키는 산을 상징합니다. 
    이 모든 선이 하나로 이어진 무한루프(Infinity)의 형태는 과거와 현재를 잇고, 세대를 넘어 이어질 영산요만의 영속적인 예술 가치를 담고 있습니다.
  </p>
</div>
              </div>
            </div>
          </section>

          {/* 4. 신념 & 찾아오는 길 (기존 내용 유지/정돈) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
             {/* 우리의 신념 */}
             <div className="space-y-12">
                <h2 className="text-2xl font-serif mb-8">Our Credo</h2>
                <div>
                  <h3 className="text-[14px] tracking-[0.3em] text-white mb-4 uppercase">Authenticity</h3>
                  <p className="text-zinc-400 font-normal leading-relaxed text-base">
                    1250도의 고온. 예술은 타협하지 않는 공정만이 진정한 가치를 만듭니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-[14px] tracking-[0.3em] text-white mb-4 uppercase">Minimalism</h3>
                  <p className="text-zinc-400 font-normal leading-relaxed text-base">
                    소재와 형태 본연의 매력에 집중합니다.
                  </p>
                </div>
             </div>
             
             {/* Location */}
             <div className="p-10 bg-zinc-900/20 border border-white/5 rounded-xl">
                <h2 className="text-2xl font-serif mb-8">Visit Us</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[14px] tracking-[0.2em] text-zinc-400 uppercase mb-2">Muan Kiln</h4>
                    <p className="text-base font-light text-zinc-300 mb-4">전라남도 무안군 영산요 가마터</p>
                    <Link href="https://map.naver.com" className="text-[14px] text-zinc-600 hover:text-white underline underline-offset-4">NAVIGATE →</Link>
                  </div>
                  {/* <div>
                    <h4 className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase mb-2">Seoul Studio</h4>
                    <p className="text-sm font-light text-zinc-500 mb-4">서울특별시 마포구 디자인 스튜디오</p>
                    <Link href="https://map.kakao.com" className="text-[10px] text-zinc-600 hover:text-white underline underline-offset-4">NAVIGATE →</Link>
                  </div> */}
                </div>
             </div>
          </section>
        </div>
      </main>

      {/* 5. 푸터 */}
      <footer className="py-12 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[12px] font-serif tracking-[0.3em] uppercase">YEONGSANYO</div>
          <div className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
            © 2026 Designed by Park Ju-an.
          </div>
        </div>
      </footer>
    </div>
  );
}