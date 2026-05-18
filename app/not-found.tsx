import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] flex-col items-center justify-center bg-[#fcfbf9] px-6 text-center text-[#1c1b1a]">
      <div className="max-w-md border-t border-b border-[#1c1b1a]/20 py-16 px-4 md:px-8">
        {/* 상단 에러 코드 - 미니멀한 서체 느낌 */}
        <span className="text-xs font-light tracking-[0.3em] text-gray-400 uppercase block mb-4">
          404 Not Found
        </span>
        
        {/* 서정적이고 단정한 타이틀 */}
        <h1 className="text-xl md:text-2xl font-normal tracking-tight mb-4 text-[#111111]">
          길이 잠시 어긋났습니다
        </h1>
        
        {/* 정갈한 안내 문구 */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-10 font-light">
          찾으시는 페이지가 삭제되었거나 주소가 변경되었습니다.<br />
          마치 깨진 조각을 정성스레 이어 붙이듯,<br />
          영산요의 본래 자리로 편안하게 안내해 드리겠습니다.
        </p>

        {/* 미니멀한 라인 버튼 */}
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-[#1c1b1a] text-xs uppercase tracking-[0.15em] font-medium text-[#1c1b1a] bg-transparent hover:bg-[#1c1b1a] hover:text-[#fcfbf9] transition-all duration-300 ease-in-out"
        >
          영산요 메인으로 이동
        </Link>
      </div>
    </main>
  );
}