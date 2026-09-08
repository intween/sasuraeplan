import { ArrowRight, Sparkles, Upload } from 'lucide-react';
import { ProductMockup } from '@/components/plan/product-mockup';
import styles from './hero-section.module.scss';

/* Hidden: overlaps with the hero sub copy and the core product flow below
const flow = [
  {
    no: '01',
    icon: Sparkles,
    title: '계획서를 만들거나 올려보세요',
    desc: 'AI와 처음부터 작성하거나 기존 계획서를 그대로 업로드',
  },
  {
    no: '02',
    icon: BarChart3,
    title: 'VC 관점으로 분석해보세요',
    desc: '시장 · 고객 · 사업모델의 강점과 빈틈 확인',
  },
  {
    no: '03',
    icon: Wand2,
    title: '분석에서 끝내지 마세요',
    desc: '플랜비서와 이야기하며 실제 계획서에 반영',
    accent: true,
  },
  {
    no: '04',
    icon: UserCheck,
    title: '전문가의 시선까지 더해보세요',
    desc: 'AI가 놓칠 수 있는 부분을 전문가 피드백으로 확인',
  },
];
*/

export function HeroSection() {
  return (
    <section className={styles.section} id="top">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <Sparkles aria-hidden="true" />
            AI 작성 · VC 분석 · 전문가 피드백
          </span>

          <h1 className={styles.headline}>
            <span className={styles.headlineAsk}>
              사업계획서,
              <br />
              잘 썼다고 생각하세요?
            </span>
            <span className={styles.headlineTurn}>
              평가자는
              <br />
              다르게 볼 수 있습니다.
            </span>
          </h1>

          <p className={styles.description}>
            내가 놓친 사업의 빈틈을 VC 관점으로 분석하고,
            <br />
            플랜비서와 보완하고, 전문가의 시선으로 한 번 더 점검하세요.
          </p>

          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.ctaPrimary}>
              AI와 계획서 시작하기
              <ArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              <Upload aria-hidden="true" />
              기존 계획서 업로드
            </a>
          </div>
        </div>

        {/* Hidden: overlaps with the hero sub copy and the core product flow below
        <ol className={styles.flow} id="how-it-works">
          {flow.map((step) => (
            <li key={step.no} className={`${styles.flowItem} ${step.accent ? styles.flowItemAccent : ''}`}>
              <span className={styles.flowIcon} aria-hidden="true">
                <step.icon />
              </span>
              <span className={styles.flowNo}>{step.no}</span>
              <span className={styles.flowTitle}>{step.title}</span>
              <span className={styles.flowDesc}>{step.desc}</span>
            </li>
          ))}
        </ol>
        */}

        <div className={styles.product}>
          <ProductMockup />
          <span className={styles.productNote}>서비스 화면 예시</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
