"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ParkMaster() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-40 px-8">
      <Link href="/" className="fixed top-28 left-8 z-50 text-[10px] tracking-[0.3em] text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group">
  <span className="group-hover:-translate-x-1 transition-transform">←</span> 
  BACK TO MUSEUM
</Link>
      <div className="max-w-4xl mx-auto">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] text-zinc-500 uppercase">Ceramics Master</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-serif mt-4 mb-12">Park Jeong Gyu</motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8 text-zinc-400 font-light leading-relaxed">
            <p>전남 무안의 흙과 불을 다스리며 30년 넘게 전통 도자기의 길을 걷고 있습니다. 그의 손끝에서 탄생하는 달항아리는 비움과 채움의 미학을 동시에 담아냅니다.</p>
            <p>영산요의 설립자이자 명장으로서, 과거의 기술을 현대의 식탁 위로 올리는 작업을 지속하고 있습니다.</p>
          </div>
          <div className="aspect-[3/4] bg-zinc-900 border border-white/5 relative overflow-hidden">
            {/* <Image src="/master-park.jpg" alt="Master Park" fill className="object-cover opacity-70" /> */}
            <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest text-zinc-700">MASTER PORTRAIT</div>
          </div>
        </div>
      </div>
      <footer className="py-12 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[12px] font-serif tracking-[0.3em] uppercase">YEONGSANYO</div>
          <div className="text-[10px] tracking-[0.2em] text-zinc-600">
            © 2026 Designed by Park Ju-an. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}