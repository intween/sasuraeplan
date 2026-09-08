import { ArrowRight, Sparkles, Upload } from 'lucide-react';
import { ProductMockup } from '@/components/plan/product-mockup';
import styles from './hero-section.module.scss';

export function HeroSection() {
  return (
    <section className={styles.section} id="top">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <Sparkles aria-hidden="true" />
            AI 사업계획서 작성부터 VC 분석까지
          </span>

          <h1 className={styles.headline}>
            사업계획서,
            <br />
            혼자 작성하지 마세요.
          </h1>

          <p className={styles.lead}>
            <span className={styles.leadAccent}>AI와 같이 만들고, VC에게 분석받고, 계속 발전시키세요.</span>
          </p>

          <p className={styles.description}>
            아이디어부터 사업계획서까지. AI와 함께 작성하고,
            <br /> VC 관점으로 분석하며 완성도를 높여보세요.
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

          <p className={styles.trust}>계획서 1건 · 신규 작성 또는 기존 업로드 · 첫 VC 분석 포함</p>
        </div>

        <div className={styles.product}>
          <ProductMockup />
          <span className={styles.productNote}>서비스 화면 예시</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
