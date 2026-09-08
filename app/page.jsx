import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/plan/hero-section';
import { ProblemSection } from '@/components/plan/problem-section';
import { AuthoringSection } from '@/components/plan/authoring-section';
import { StartModeSection } from '@/components/plan/start-mode-section';
import { HowItWorks } from '@/components/plan/how-it-works';
import { VCAnalysisSection } from '@/components/plan/vc-analysis-section';
import { AnalysisLoopSection } from '@/components/plan/analysis-loop-section';
import { PlanAssistantSection } from '@/components/plan/plan-assistant-section';
import { AIRolesSection } from '@/components/plan/ai-roles-section';
import { AISafetySection } from '@/components/plan/ai-safety-section';
import { AIFactSection } from '@/components/plan/ai-fact-section';
import { FundingSection } from '@/components/plan/funding-section';
import { FundingEmailSection } from '@/components/plan/funding-email-section';
import { ComparisonSection } from '@/components/plan/comparison-section';
import { ValueSection } from '@/components/plan/value-section';
import { AnalysisVersionSection } from '@/components/plan/analysis-version-section';
import { PricingSection } from '@/components/plan/pricing-section';
import { ExpertReviewSection } from '@/components/plan/expert-review-section';
import { FAQSection } from '@/components/plan/faq-section';
import { FinalCTA } from '@/components/plan/final-cta';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 사업계획서, 혼자 작성하지 마세요 */}
        <HeroSection />

        {/* 쓰는 것도 어렵고, 고치는 건 더 어렵다 */}
        <ProblemSection />

        {/* AI 작성 — 아이디어만 있어도 계획서부터 같이 */}
        <AuthoringSection />

        {/* 두 가지 시작 방식 (신규 작성 / 기존 업로드) */}
        <StartModeSection />

        {/* 작성 → 분석 → 개선 7단계 */}
        <HowItWorks />

        {/* VC Full Report */}
        <VCAnalysisSection />

        {/* 점수보다 중요한 건 그 다음 */}
        <AnalysisLoopSection />

        {/* 플랜비서 · 대화로 계획서 수정 */}
        <PlanAssistantSection />

        {/* 작성 코치 · 플랜비서 — 같은 AI */}
        <AIRolesSection />

        {/* AI 수정 정책 */}
        <AISafetySection />

        {/* AI 사실 생성 원칙 */}
        <AIFactSection />

        {/* 정부지원사업 + 계획서 준비 연결 */}
        <FundingSection />

        {/* 새로운 관련 공고 이메일 안내 */}
        <FundingEmailSection />

        {/* 계획서 1건의 의미 */}
        <ValueSection />

        {/* 분석 버전 · 스냅샷 */}
        <AnalysisVersionSection />

        {/* 전문가 검토 — 원본 계획서 + VC 분석 참고 → 검토본 */}
        <ExpertReviewSection />

        {/* 이용요금 */}
        <PricingSection />

        {/* 일반 생성형 AI 와의 차이 */}
        <ComparisonSection />

        {/* FAQ */}
        <FAQSection />

        {/* 최종 CTA · 문의 */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
