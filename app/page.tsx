"use client";

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';

// 1. 전시 데이터 (기존과 동일)
const exhibitionItems = [
  { id: 'moonjar', title: '영산요: 흙의 기록', category: 'Ceramics', size: 'md:col-span-2 md:row-span-2' },
  { id: 2, title: 'NEO-DAIN: 선비의 결', category: 'Fashion', size: 'md:col-span-1 md:row-span-1' },
  { id: 3, title: 'Flowing Grain Study', category: 'Archive', size: 'md:col-span-1 md:row-span-2' },
  { id: 4, title: '300장의 사투', category: 'Process', size: 'md:col-span-1 md:row-span-1' },
  { id: 5, title: '청유의 깊이', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1' },
  { id: 6, title: 'Genderless Silhouette', category: 'Fashion', size: 'md:col-span-2 md:row-span-1' },
  { id: 7, title: '가마의 온도', category: 'Heritage', size: 'md:col-span-1 md:row-span-2' },
  { id: 8, title: 'Digital Craftmanship', category: 'Tech', size: 'md:col-span-2 md:row-span-2' },
  { id: 9, title: '백자의 여백', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1' },
  { id: 10, title: 'Urban Tech-wear', category: 'Fashion', size: 'md:col-span-1 md:row-span-1' },
  { id: 11, title: 'Pattern Logic', category: 'Design', size: 'md:col-span-1 md:row-span-2' },
  { id: 12, title: 'Master’s Hand', category: 'Heritage', size: 'md:col-span-1 md:row-span-1' },
  { id: 13, title: 'Fabric Texture #01', category: 'Material', size: 'md:col-span-2 md:row-span-1' },
  { id: 14, title: 'Embedded Soul', category: 'System', size: 'md:col-span-1 md:row-span-1' },
  { id: 15, title: '미니멀리즘의 극치', category: 'Archive', size: 'md:col-span-1 md:row-span-2' },
  { id: 16, title: '전통의 현대적 해석', category: 'Project', size: 'md:col-span-2 md:row-span-2' },
  { id: 17, title: 'Glaze Experiment', category: 'Process', size: 'md:col-span-1 md:row-span-1' },
  { id: 18, title: 'The Future Art', category: 'Concept', size: 'md:col-span-1 md:row-span-1' },
  { id: 19, title: '밤의 가마터', category: 'Mood', size: 'md:col-span-2 md:row-span-1' },
  { id: 20, title: 'YEONGSANYO Identity', category: 'Branding', size: 'md:col-span-1 md:row-span-1' },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 모바일 메뉴 상태

  const menuLinks = [
  { name: 'ABOUT', href: '/about' }, // 메인 페이지 아카이브 섹션으로 이동
  { name: 'Park Jeong Gyu', href: '/master/park' },
  { name: 'Ha Hyeon Hui', href: '/master/ha' },
  { name: 'SHOP', href: 'https://smartstore.naver.com/youngsanyo?NaPm=ct%3Dmor4pvh8%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3Dcbfaf9422601c49e5327ab438057925713111d82' } // 실제 주소로 교체
]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      
      {/* 1. 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
         <div className="relative w-24 h-10 overflow-hidden"> 
  <Image 
    src="/logo.svg" 
    alt="Logo" 
    fill 
    className="object-contain" // object-cover 대신 contain을 쓰면 이미지가 잘리지 않고 전체가 다 보여요!
  />
</div>
          {/* <span className="text-lg md:text-xl font-serif tracking-[0.4em] uppercase">YEONGSANYO</span> */}
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] font-light text-zinc-500">
          {menuLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-all">{link.name}</a>
          ))}
        </div>

        {/* 모바일 메뉴 트리거 */}
        <div 
          className="md:hidden text-[10px] tracking-[0.3em] font-light text-zinc-400 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          MENU
        </div>
      </nav>

      {/* 2. 모바일 메뉴 오버레이 (AnimatePresence) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-[10px] tracking-[0.3em] text-zinc-500"
              onClick={() => setIsMenuOpen(false)}
            >
              CLOSE
            </button>
            <div className="flex flex-col items-center gap-12">
              {menuLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-serif tracking-[0.2em] hover:text-zinc-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Hero 섹션 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <a href="https://www.youtube.com/watch?v=6N8l3TfOz6k" target="_blank" className="absolute inset-0 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <iframe className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none" src="https://www.youtube.com/embed/6N8l3TfOz6k?autoplay=1&mute=1&loop=1&playlist=6N8l3TfOz6k&controls=0&modestbranding=1&rel=0&playsinline=1" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_90%)]" />
        </a>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-[9vw] md:text-[8vw] font-serif tracking-[0.3em] whitespace-nowrap mb-4"
          >
            YEONGSANYO
          </motion.h1>
          <p className="text-[10px] md:text-sm tracking-[0.5em] font-light text-zinc-400 uppercase">"Tradition meets the most sophisticated lifestyle."</p>
        </div>
      </section>

      {/* 4. 전시 레이아웃 */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
  <div className="mb-24">
    <h2 className="text-sm tracking-[0.8em] font-light text-zinc-600 uppercase mb-4">Museum Archive</h2>
    <div className="h-px w-20 bg-zinc-800" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[350px] gap-4 md:gap-8">
    {exhibitionItems.map((item, index) => (
      /* 1. Link 태그로 감싸고, item.size를 여기로 옮깁니다 */
      <Link 
        href={`/exhibition/${item.id}`} 
        key={item.id} 
        className={item.size}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (index % 5) * 0.1, duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          /* 2. onClick은 이제 필요 없으니 지워도 됩니다 */
          className="group relative h-full overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer"
        >
          <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/10 transition-all duration-700" />
          <div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-[2s]" />
          <div className="absolute bottom-6 left-6 z-20">
            <span className="text-[9px] tracking-[0.4em] text-zinc-500 uppercase mb-2 block">{item.category}</span>
            <h3 className="text-lg md:text-xl font-serif tracking-tight leading-tight">{item.title}</h3>
          </div>
        </motion.div>
      </Link>
    ))}
  </div>
</section>

              {/* 4. 푸터 - 박물관의 마지막 기록 */}
<footer className="bg-black py-20 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      
      {/* 브랜드 정체성 */}
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-serif tracking-[0.3em] mb-6">Yeongsanyo</h2>
        <p className="text-gray-500 font-light leading-relaxed max-w-sm text-sm">
          전통의 깊이와 현대의 기술이 교차하는 지점을 탐구합니다. <br />
          영산요의 흙과 네오다인의 결이 만나 일상을 하나의 예술로 만듭니다.
        </p>
      </div>

      {/* 메뉴 링크 */}
      <div>
        <h4 className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">Explore</h4>
        <ul className="space-y-4 text-sm font-light text-gray-500">
          <li><a href="#" className="hover:text-white transition-colors">Archive</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Exhibition</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Editorial</a></li>
        </ul>
      </div>

      {/* 연락 및 주소 */}
      <div>
        <h4 className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">Contact</h4>
        <ul className="space-y-4 text-sm font-light text-gray-500">
          <li>Instagram: @yeongsanyo_official</li>
          <li>Email: dudtksdy@naver.com</li>
          <li className="leading-relaxed">
            Studio: Muan, Jeollanam-do <br />
            Kiln: Muan, Jeollanam-do
          </li>
        </ul>
      </div>
    </div>

    {/* 하단 저작권 및 기술 스택 */}
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] tracking-[0.2em] text-gray-600 uppercase">
      <div className="mb-4 md:mb-0">
        © 2026 Yeongsanyo. All Rights Reserved.
      </div>
      <div className="flex gap-6">
        <span>Designed by Park Ju-an</span>
        <span>Built with Next.js 15</span>
      </div>
    </div>
  </div>
</footer>
      {/* 푸터 생략 (기존 푸터 유지 가능) */}
    </main>
  )
}
  