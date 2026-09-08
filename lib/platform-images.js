// 실제 사수래AI 플랫폼 Screenshot 경로.
//
// 현재 /public 에 실제 서비스 화면 캡처가 없어 모두 null 이며,
// 각 섹션은 JSX + SCSS 로 만든 Product Mockup 으로 렌더된다.
//
// 실제 캡처를 추가할 때는 아래 값만 채우면 자동으로 Screenshot 이 사용된다.
//   public/images/platform/business-plan.webp  ->  businessPlan: '/images/platform/business-plan.webp'
//
// 권장 사양: .webp / .avif, 가로 비율 16:10, 화면 안 텍스트가 읽히도록 필요한 영역만 crop.
export const platformImages = {
  businessPlan: null, // TODO: 실제 계획서 작성 화면 Screenshot 으로 교체
  vcAnalysis: null, // TODO: 실제 VC 분석 화면 Screenshot 으로 교체
  improvement: null, // TODO: 실제 계획서 개선 / 실행 로드맵 화면 Screenshot 으로 교체
  governmentSupport: null, // TODO: 실제 지원사업 매칭 화면 Screenshot 으로 교체
};

export default platformImages;
