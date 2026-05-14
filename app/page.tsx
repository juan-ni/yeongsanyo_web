"use client";

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';
import { desc } from 'framer-motion/client';

// 1. 전시 데이터 (함수 밖으로 이동하여 관리하기 편하게 함)
const exhibitionItems = [
  { id: 'moonjar', title: '열두달', category: 'Ceramics', size: 'md:col-span-2 md:row-span-2', image: '/images/moonjars.jpg', description: '박정규 명장의 손끝에서 탄생한 달항아리 시리즈입니다. 열두 달의 변화하는 시간을 흙의 질감과 곡선으로 표현하여 절제된 미학을 보여줍니다.' },
  { id: 2, title: '흐르는 시간', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1',image: '/images/hahyeonhui_1.png',description: '하현희 작가의 작품으로 탑의 형태에서 영감을 받아 향을 꽂아 사용할 수 있는 디자인입니다. 전통적인 형태에 현대적인 감각을 더해 일상 속에서 예술을 즐길 수 있도록 제작되었습니다.' },
  { id: 3, title: '기원', category: 'Ceramics', size: 'md:col-span-1 md:row-span-2',image: '/images/ha_believe.jpeg',description: '하현희 작가의 작품으로, 전통적인 도자기의 형태에 현대적인 감각을 더해 일상 속에서 예술을 즐길 수 있도록 제작되었습니다. 기원은 과거와 현재, 그리고 미래를 잇는 다리 역할을 하며, 우리의 삶에 긍정적인 에너지를 불어넣는 작품입니다.'},
  { id: 4, title: '흙속바다', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1',image: '/images/insour.jpeg', description: '박정규 명장이 도자기를 처음 시작했을 때 분청에 그려지는 어문을 보며 흙속의 바다를 느꼈고 오랜시간 도자를 하면서 함께 흙속을 헤엄하던 기억이 만들어낸 작품입니다.'},
  { id: 5, title: '분청어문편병', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1',image: '/images/wall_flower1.png', description: '하현희 작가의 작품으로, 전통적인 도자기의 형태에 현대적인 감각을 더해 일상 속에서 예술을 즐길 수 있도록 제작되었습니다.' },
  { id: 6, title: '사리함', category: 'Ceramics', size: 'md:col-span-2 md:row-span-1' ,image: '/images/park_1.jpeg', description: '박정규 명장의 작품으로, 전통적인 도자기의 형태에 현대적인 감각을 더해 일상 속에서 예술을 즐길 수 있도록 제작되었습니다. 기원은 과거와 현재, 그리고 미래를 잇는 다리 역할을 하며, 우리의 삶에 긍정적인 에너지를 불어넣는 작품입니다.'},
  { id: 7, title: '다도세트', category: 'Ceramics', size: 'md:col-span-1 md:row-span-2',image: '/images/teaware.jpeg', description: '찻잔,다식기,차호,숙우,다관 등 차 생활에 필요한 도자기 다구가 담긴 다구세트입니다.' },
  { id: 8, title: '간절함', category: 'Ceramics', size: 'md:col-span-2 md:row-span-2',image: '/images/ha_time.jpg', description: '하현희 작가의 작품으로 작은 사람이 큰 탑에 온 마음을 다해 기도하는 간절하고도 절실한 마음을 담은 작품입니다.' },
  { id: 9, title: '물결개완', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1',image: '/images/park_wave.jpeg', description: '박정규 명장의 작품으로, 전통적인 도자기의 형태에 현대적인 감각을 더해 일상 속에서 예술을 즐길 수 있도록 제작되었습니다.' },
  { id: 10, title: '분청의 결', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_flower4.jpg', description: '하현희 작가가 생각하는 분청의 결을 담은 작품들입니다.' },
  { id: 11, title: '5층탑', category: 'Ceramics', size: 'md:col-span-1 md:row-span-2',image: '/images/ha_top1.jpeg', description: '하현희 작가의 작품으로 5층 석탑, 오방사상을 뜻하는 작품입니다.' },
  { id: 12, title: '야광명월', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_moonjar.jpg', description: '하현희 작가의 대표작품으로 야광명월, 어릴적 작가가 봤던 그 밤에 밝게 빛나는 달과 따뜻한 정서를 표현한 작품입니다.' },
  { id: 13, title: '숨쉬는 이중차호', category: 'Ceramics', size: 'md:col-span-2 md:row-span-1',image: '/images/tea_carrier.jpeg', description: '박정규 명장의 이중차호는 흙가마에서 오직 나무로만 1250도 고온의 불길에서 탄생합니다. 숙성차를 더 깊고 오래 즐기실 수 있습니다. ' },
  { id: 14, title: '분청철화어문편병', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_and_park.jpg', description: '두 작가의 협업작품으로 박정규 명장은 형태를 하현희 작가는 철화어문을 담았습니다.' },
  { id: 15, title: '기적', category: 'Ceramics', size: 'md:col-span-1 md:row-span-2' ,image: '/images/ha_flower1.png', description: '하현희 작가의 작품으로 간절하면 돌과 흙에서도 꽃이 핀다는 의미를 담고 있습니다.' },
  { id: 16, title: '전통의 현대적 해석', category: 'Ceramics', size: 'md:col-span-2 md:row-span-2' ,image: '/images/park_2.png', description: '' },
  { id: 17, title: '석탑의 균형', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_flower2.png', description: '하현희 작가의 작품으로 반듯한 탑이 아닌 형태를 띄고 있습니다. 완벽하지 않더라도 그자체의 아름다움을 표현하여 우리의 삶을 표현하였습니다.' },
  { id: 18, title:'어디에서도', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1' ,image: '/images/ha_flower3.jpg', description: '병,잔,그릇 어디에 둬도 꽃을 꽂을 수 있는 작품으로 어디에서든 자신의 할 일을 다해낼 수 있다는 용기를 담은 작품입니다.' },
  { id: 19, title: '농차세트', category: 'Ceramics', size: 'md:col-span-2 md:row-span-1' ,image: '/images/park_teaware.png', description: '한 방울씩 떨어지지만 그 맛과 향은 진하고 여운이 있는 농차를 즐길 수 있는 세트입니다.' },
  { id: 20, title: '분청 달항아리', category: 'Ceramics', size: 'md:col-span-1 md:row-span-1',image: '/images/buncheong_moonjar.jpeg', description: '분청의 색은 어두운 편입니다. 하지만 분을 바르면 하얗게 보입니다. 이 특징을 이용하여 달의 어두우면서도 밝은 모습을 표현하였습니다.' },
];

export default function Page() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'Park Jeong Gyu', href: '/master/park' },
    { name: 'Ha Hyeon Hui', href: '/master/ha' },
    { name: 'SHOP', href: 'https://yeongsanyo.shop' }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 py-4 md:px-8 md:py-6 backdrop-blur-xl border-b border-white/5">
        <div 
          className="flex items-center gap-4 cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="relative w-15 h-6 md:w-28 md:h-12 transition-all duration-300"> 
            <Image 
              src="/logo.svg" 
              alt="Yeongsanyo Logo" 
              fill 
              priority 
              className="object-contain" 
            />
          </div>
        </div>

        <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] font-light text-zinc-500">
          {menuLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-all">{link.name}</a>
          ))}
        </div>

        <div 
          className="md:hidden text-[10px] tracking-[0.3em] font-light text-zinc-400 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          MENU
        </div>
      </nav>

      {/* 모바일 메뉴 오버레이 */}
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

      {/* Hero 섹션 */}
      {/* 3. Hero 섹션 */}
      <section className="relative w-full bg-black flex aspect-video items-center justify-center overflow-hidden group">
        {/* 1. 영상 전체 영역을 클릭하면 유튜브로 이동하게 하는 투명 링크 레이어 */}
        <Link 
          href="https://www.youtube.com/watch?v=6N8l3TfOz6k" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label="영산요 유튜브 영상 보기"
        />

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute inset-0 overflow-hidden">
            <iframe 
              className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
              src="https://www.youtube.com/embed/6N8l3TfOz6k?autoplay=1&mute=1&loop=1&playlist=6N8l3TfOz6k&controls=0&modestbranding=1&rel=0&playsinline=1" 
              frameBorder="0" 
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_90%)]" />
        </div>

        {/* 2. 중앙 텍스트 (z-10으로 설정하여 링크보다 아래에 두거나, 
           pointer-events-none을 주어 클릭이 링크 레이어로 통과되게 합니다) */}
        <div className="relative z-10 text-center px-4 pointer-events-none">
          <motion.h1 
            className="text-[9vw] md:text-[8vw] font-serif tracking-[0.2em] whitespace-nowrap mb-1"
          >
            YEONGSANYO
          </motion.h1>
          <p className="text-[10px] md:text-sm tracking-[0.5em] font-light text-zinc-400 uppercase">
            "Tradition meets the most sophisticated lifestyle."
          </p>
        </div>
      </section>

      {/* Artisans 섹션 */}
      <section className="py-24 md:py-32 bg-black text-zinc-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-zinc-300 mb-4 uppercase">The Artisans</h2>
            <p className="text-zinc-500 font-light text-lg md:text-xl tracking-wider">영산요의 결을 빚어내는 세 사람</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { name: '하현희', role: 'Artisan', img: '/images/ha-hyeonhui.png' },
              { name: '박정규', role: 'Ceramics Master', img: '/images/park-jeonggyu.png' },
              { name: '박주안', role: 'Brand Director', img: '/images/park-juan.png' }
            ].map((artisan) => (
              <div key={artisan.name} className="group cursor-pointer flex flex-col items-center text-center">
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-zinc-900">
                  <img src={artisan.img} alt={artisan.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                </div>
                <h3 className="text-xl font-medium tracking-[0.15em] text-white mb-2">{artisan.name}</h3>
                <p className="text-xs font-light text-zinc-500 tracking-[0.2em] uppercase">{artisan.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Museum Archive 섹션 */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm tracking-[0.8em] font-light text-zinc-600 uppercase mb-4">Museum Archive</h2>
          <div className="h-px w-20 bg-zinc-800" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {exhibitionItems.map((item, index: number) => (
            <div 
              key={item.id} 
              className={`relative overflow-hidden group bg-zinc-900 ${item.size} cursor-pointer`}
              onClick={() => setSelectedItem(item)}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 4} 
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs">No Image Data</div>
              )}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] mb-1">{item.category}</p>
                <h3 className="text-white text-base md:text-lg font-medium tracking-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 작품 상세 모달 UI (AnimatePresence 추가) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 max-w-4xl w-full rounded-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-6 right-6 text-zinc-500 hover:text-white z-20" onClick={() => setSelectedItem(null)}>CLOSE</button>
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-3/5 aspect-square bg-zinc-800">
                  <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" />
                </div>
                <div className="p-8 md:p-12 md:w-2/5 flex flex-col justify-center">
                  <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase mb-4">{selectedItem.category}</span>
                  <h2 className="text-3xl font-serif tracking-tight mb-6">{selectedItem.title}</h2>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
              {selectedItem.description || "영산요의 정성이 담긴 작품입니다. 상세 정보는 준비 중입니다."}
            </p>
                  <div className="pt-8 border-t border-white/5">
                    <button className="text-[10px] tracking-[0.4em] text-white uppercase hover:text-zinc-400 transition-colors">Inquiry Now</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-serif tracking-[0.3em] mb-6">Yeongsanyo</h2>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm text-sm">
                전통의 깊이와 현대의 기술이 교차하는 지점을 탐구합니다. <br />
                영산요의 전통과 현대의 결이 만나 일상을 하나의 예술로 만듭니다.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-light text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Archive</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Exhibition</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Editorial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">Contact</h4>
              <ul className="space-y-4 text-sm font-light text-gray-500">
                <li>Instagram: @yeongsanyo_official</li>
                <li>Email: dudtksdy@naver.com</li>
                <li className="leading-relaxed">Studio: Muan, Jeollanam-do <br />Kiln: Muan, Jeollanam-do</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] tracking-[0.2em] text-gray-600 uppercase">
            <div className="mb-4 md:mb-0">© 2026 Yeongsanyo. All Rights Reserved.</div>
            <div className="flex gap-6">
              <span>Designed by Park Ju-an</span>
              <span>Built with Next.js 15</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}