"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HaMaster() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-40 px-8">
      <Link href="/" className="fixed top-28 left-8 z-50 text-[13px] tracking-[0.3em] text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
  <span className="group-hover:-translate-x-1 transition-transform">←</span> 
  BACK TO MUSEUM
</Link>
      <div className="max-w-4xl mx-auto">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] text-zinc-500 uppercase">Artist</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-serif mt-4 mb-12">Ha Hyeon Hui</motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8 text-zinc-300 font-normal leading-relaxed">
            <p>영산요의 조형적 아름다움을 설계합니다. 전통적인 소재를 바탕으로 현대적인 실루엣을 찾아내어, 사용하는 이의 일상이 예술이 되도록 돕습니다.</p>
            <p> 시선은 도자기에 머물지 않고, 그것이 놓이는 공간의 공기까지 디자인합니다.</p>
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