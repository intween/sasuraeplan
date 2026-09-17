import Image from 'next/image';

// 제품 UI·브랜드 영역에서 공통으로 사용하는 실제 로고.
// 로고 이미지에 이미 "사수래AI" 브랜드명이 포함되어 있으므로
// 이 컴포넌트 옆에 브랜드명 텍스트를 다시 표기하지 않는다.
// 크기는 className 으로 height 만 지정하고 width 는 auto 로 두어 원본 비율(993:188)을 유지한다.
export function BrandLogo({ className, priority = false }) {
  return (
    <Image className={className} src="/sasurae_logo.png" alt="사수래AI" width={993} height={188} priority={priority} />
  );
}

export default BrandLogo;
