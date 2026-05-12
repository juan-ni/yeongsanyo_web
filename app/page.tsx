"use client";

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';
// 1. 전시 데이터 (기존과 동일)
const exhibitionItems = [
  { id: 'moonjar', title: '박정규 : 열두달', category: 'Ceramics', size: 'md:col-span-2 md:row-span-2', image: '/images/moonjars.jpg' },
  { id: 2, title: 'NEO-DAIN: 선비의 결', category: 'Fashion', size: 'md:col-span-1 md:row-span-1',image: '/images/hahyeonhui_1.png' },
  { id: 3, title: 'Flowing Grain Study', category: 'Archive', size: 'md:col-span-1 md:row-span-2',image: '/images/ha_believe.jpeg' },
  { id: 4, title: '300장의 사투', category: 'Process', size: 'md:col-span-1 md:row-span-1',image: '/images/insour.jpeg' },
  { id: 5, title: '청유의 깊이', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1',image: '/images/wall_flower1.png' },
  { id: 6, title: 'Genderless Silhouette', category: 'Fashion', size: 'md:col-span-2 md:row-span-1' ,image: '/images/park_1.jpeg'},
  { id: 7, title: '가마의 온도', category: 'Heritage', size: 'md:col-span-1 md:row-span-2',image: '/images/teaware.jpeg' },
  { id: 8, title: 'Digital Craftmanship', category: 'Tech', size: 'md:col-span-2 md:row-span-2',image: '/images/ha_time.jpg' },
  { id: 9, title: '백자의 여백', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1',image: '/images/park_wave.jpeg' },
  { id: 10, title: 'Urban Tech-wear', category: 'Fashion', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_flower4.jpg'},
  { id: 11, title: 'Pattern Logic', category: 'Design', size: 'md:col-span-1 md:row-span-2',image: '/images/ha_top1.jpeg' },
  { id: 12, title: 'Master’s Hand', category: 'Heritage', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_moonjar.jpg'},
  { id: 13, title: 'Fabric Texture #01', category: 'Material', size: 'md:col-span-2 md:row-span-1',image: '/images/tea_carrier.jpeg' },
  { id: 14, title: 'Embedded Soul', category: 'System', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_and_park.jpg'},
  { id: 15, title: '미니멀리즘의 극치', category: 'Archive', size: 'md:col-span-1 md:row-span-2' ,image: '/images/ha_flower1.png'},
  { id: 16, title: '전통의 현대적 해석', category: 'Project', size: 'md:col-span-2 md:row-span-2' ,image: '/images/park_2.png'},
  { id: 17, title: 'Glaze Experiment', category: 'Process', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_flower2.png'},
  { id: 18, title: 'The Future Art', category: 'Concept', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_flower3.jpg'},
  { id: 19, title: '밤의 가마터', category: 'Mood', size: 'md:col-span-2 md:row-span-1' ,image: '/images/park_teaware.png'},
  { id: 20, title: 'YEONGSANYO Identity', category: 'Branding', size: 'md:col-span-1 md:row-span-1',image: '/images/buncheong_moonjar.jpeg' },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 모바일 메뉴 상태

  const menuLinks = [
  { name: 'ABOUT', href: '/about' }, // 메인 페이지 아카이브 섹션으로 이동
  { name: 'Park Jeong Gyu', href: '/master/park' },
  { name: 'Ha Hyeon Hui', href: '/master/ha' },
  { name: 'SHOP', href: 'https://yeongsanyo.shop' } // 실제 주소로 교체
]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 py-4 md:px-8 md:py-6 backdrop-blur-xl border-b border-white/5">
  {/* 로고 클릭 시 최상단 이동 */}
  {/* 1. 네비게이션 */}
      
  <div 
    className="flex items-center gap-4 cursor-pointer" 
    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
  >
    {/* 부모 컨테이너 크기를 반응형으로 조절 (핵심!) */}
    <div className="relative w-15 h-6 md:w-28 md:h-12 transition-all duration-300"> 
      <Image 
        src="/logo.svg" 
        alt="Yeongsanyo Logo" 
        fill 
        priority // 메인 로고는 우선적으로 로딩되게 설정
        className="object-contain" 
      />
    </div>
  </div>
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
<section className="relative w-full bg-black flex aspect-video items-center justify-center overflow-hidden">
        <a href="https://www.youtube.com/watch?v=6N8l3TfOz6k" target="_blank" className="absolute top-10 md:top-10 left-0 right-0 bottom-0 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <iframe className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none" src="https://www.youtube.com/embed/6N8l3TfOz6k?autoplay=1&mute=1&loop=1&playlist=6N8l3TfOz6k&controls=0&modestbranding=1&rel=0&playsinline=1" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_90%)]" />
        </a>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-[9vw] md:text-[8vw] font-serif tracking-[0.2em] whitespace-nowrap mb-1"
          >
            YEONGSANYO
          </motion.h1>
          <p className="text-[10px] md:text-sm tracking-[0.5em] font-light text-zinc-400 uppercase">"Tradition meets the most sophisticated lifestyle."</p>
        </div>
      </section>
<section className="py-24 md:py-32 bg-black text-zinc-300">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    
    {/* 섹션 타이틀 */}
    <div className="text-center mb-16 md:mb-24">
      <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-zinc-300 mb-4 uppercase">
        The Artisans
      </h2>
      <p className="text-zinc-500 font-light text-lg md:text-xl tracking-wider">
        영산요의 결을 빚어내는 세 사람
      </p>
    </div>

    {/* 사진 그리드 (모바일 1줄, 데스크톱 3줄) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
      
      {/* 1. 하현희 */}
      <div className="group cursor-pointer flex flex-col items-center text-center">
        <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-zinc-900">
          <img 
            src="/images/ha-hyeonhui.png" 
            alt="하현희" 
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-xl font-medium tracking-[0.15em] text-white mb-2">하현희</h3>
        <p className="text-xs font-light text-zinc-500 tracking-[0.2em] uppercase">
          Artisan {/* 역할에 맞게 수정하세요 */}
        </p>
      </div>

      {/* 2. 박정규 (명장님) */}
      <div className="group cursor-pointer flex flex-col items-center text-center">
        <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-zinc-900">
          <img 
            src="/images/park-jeonggyu.png" 
            alt="박정규" 
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-xl font-medium tracking-[0.15em] text-white mb-2">박정규</h3>
        <p className="text-xs font-light text-zinc-500 tracking-[0.2em] uppercase">
          Ceramics Master
        </p>
      </div>

      {/* 3. 박주안 (디렉터님) */}
      <div className="group cursor-pointer flex flex-col items-center text-center">
        <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-zinc-900">
          <img 
            src="/images/park-juan.png" 
            alt="박주안" 
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-xl font-medium tracking-[0.15em] text-white mb-2">박주안</h3>
        <p className="text-xs font-light text-zinc-500 tracking-[0.2em] uppercase">
          Brand Director
        </p>
      </div>

    </div>
  </div>
</section>
      {/* 4. 전시 레이아웃 */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
  <div className="mb-24">
    <h2 className="text-sm tracking-[0.8em] font-light text-zinc-600 uppercase mb-4">Museum Archive</h2>
    <div className="h-px w-20 bg-zinc-800" />
  </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
  {exhibitionItems.map((item, index: number) => (
    <div 
      key={item.id} 
      className={`relative overflow-hidden group bg-zinc-900 ${item.size}`}
      onClick={() => setSelectedItem(item)}
    >
      {/* 데이터에 image가 있을 때만 이미지를 보여줍니다 */}
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill // 2. 부모의 relative 속성을 따라 꽉 채웁니다
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          
          // --- 성능 최적화 핵심 속성 ---
          
          // 3. 상단 이미지 4개는 페이지 로드 시 즉시 가져옵니다 (LCP 최적화)
          priority={index < 4} 
          
          // 4. 용량을 줄이기 위해 화질을 적정 수준으로 조정합니다
          quality={75}
          
          // 5. 기기별 뷰포트에 맞는 이미지 크기 힌트를 줍니다 (다운로드 용량 절감)
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs">
          No Image Data
        </div>
      )}
      
      {/* 오버레이 정보 */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] mb-1">{item.category}</p>
        <h3 className="text-white text-base md:text-lg font-medium tracking-tight">{item.title}</h3>
      </div>
    </div>
  ))}
</div>

  {/* <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[350px] gap-4 md:gap-8">
    {exhibitionItems.map((item, index) => (
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
  </div> */}

</section>

              {/* 4. 푸터 - 박물관의 마지막 기록 */}
<footer className="bg-black py-20 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      
      {/* 브랜드 정체성 */}
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-serif tracking-[0.3em] mb-6">Yeongsanyo</h2>
        <p className="text-gray-00 font-light leading-relaxed max-w-sm text-sm">
          전통의 깊이와 현대의 기술이 교차하는 지점을 탐구합니다. <br />
          영산요의 전통과 현대의 결이 만나 일상을 하나의 예술로 만듭니다.
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
  