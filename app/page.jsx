import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/plan/hero-section';
import { AuthoringSection } from '@/components/plan/authoring-section';
import { VCAnalysisSection } from '@/components/plan/vc-analysis-section';
import { PlanAssistantSection } from '@/components/plan/plan-assistant-section';
import { PricingSection } from '@/components/plan/pricing-section';
import { ExpertReviewSection } from '@/components/plan/expert-review-section';
import { FAQSection } from '@/components/plan/faq-section';
import { FinalCTA } from '@/components/plan/final-cta';

/*
 * Hidden: 랜딩 흐름 정리(Hero → 작성 → 분석 → 수정 → 전문가 → 지원사업 → 요금 → FAQ → CTA)에서
 * 중복되거나 과도하게 상세한 섹션은 삭제하지 않고 주석으로 남겨 둔다.
 *
 * import { ProblemSection } from '@/components/plan/problem-section';
 * import { StartModeSection } from '@/components/plan/start-mode-section';
 * import { HowItWorks } from '@/components/plan/how-it-works';
 * import { AnalysisLoopSection } from '@/components/plan/analysis-loop-section';
 * import { AIRolesSection } from '@/components/plan/ai-roles-section';
 * import { AISafetySection } from '@/components/plan/ai-safety-section';
 * import { AIFactSection } from '@/components/plan/ai-fact-section';
 * import { FundingSection } from '@/components/plan/funding-section';       // → PlanAssistantSection 의 추가 활용 기능으로 통합
 * import { FundingEmailSection } from '@/components/plan/funding-email-section';
 * import { ComparisonSection } from '@/components/plan/comparison-section';
 * import { ValueSection } from '@/components/plan/value-section';
 * import { AnalysisVersionSection } from '@/components/plan/analysis-version-section';
 */

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 01 · 혼자 쓴 사업계획서, 실제 사업에서도 통할까요? + 4단계 흐름 */}
        <HeroSection />

        {/* Hidden: overlaps with Hero — 문제 제기를 길게 설명하는 섹션
        <ProblemSection /> */}

        {/* 02 · AI 사업계획서 작성 / 기존 계획서 업로드 */}
        <AuthoringSection />

        {/* Hidden: overlaps with Hero and Authoring — 두 가지 시작 방식
        <StartModeSection /> */}

        {/* Hidden: too granular — 7 STEP 사용 과정. Hero 하단 4단계 흐름으로 대체
        <HowItWorks /> */}

        {/* 03 · VC 관점 분석 */}
        <VCAnalysisSection />

        {/* Hidden: merged into PlanAssistantSection — 분석 이후 개선 루프
        <AnalysisLoopSection /> */}

        {/* 04 · 플랜비서와 계획서 수정 */}
        <PlanAssistantSection />

        {/* Hidden: overlaps with PlanAssistantSection — 작성 코치 · 플랜비서는 같은 AI
        <AIRolesSection /> */}

        {/* Hidden: moved to FAQ — AI 수정 정책
        <AISafetySection /> */}

        {/* Hidden: moved to FAQ — AI 사실 생성 원칙
        <AIFactSection /> */}

        {/* 05 · 전문가 피드백 */}
        <ExpertReviewSection />

        {/* Hidden: government support moved into Plan Assistant feature section
        <FundingSection />
        <FundingEmailSection /> */}

        {/* Hidden: 계획서 1건 · 버전 정책 설명
        <ValueSection /> */}

        {/* Hidden: moved to FAQ — 분석 버전 · 스냅샷 유지 정책
        <AnalysisVersionSection /> */}

        {/* 07 · 이용 요금 (협의) */}
        <PricingSection />

        {/* Hidden: too long — 일반 생성형 AI 와의 비교
        <ComparisonSection /> */}

        {/* 08 · FAQ */}
        <FAQSection />

        {/* 09 · 마지막 CTA · 문의 */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
