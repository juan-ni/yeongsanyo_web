import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>삭제되었거나 주소가 변경된 영산요 페이지입니다.</p>

      <Link href="/">
        영산요 메인으로 이동
      </Link>
    </main>
  );
}