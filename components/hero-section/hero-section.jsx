import { ArrowRight, Check } from 'lucide-react';
import { DashboardMockup } from '@/components/dashboard-mockup';
import { ProductScreenshot } from '@/components/product-screenshot';
import { platformImages } from '@/lib/platform-images';
import styles from './hero-section.module.scss';

const trustItems = ['계획서 작성', '계획서 업로드', 'VC 분석', '계획서 개선', '지원사업 매칭'];

export function HeroSection() {
  return (
    <section className={styles.section} id="top">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>AI Business Plan Platform</span>

            <h1 className={styles.headline}>
              사업계획서,
              <br />
              <span className={styles.headlineAccent}>작성에서 끝내지 마세요.</span>
            </h1>

            <p className={styles.description}>계획서 작성부터 VC 분석, 개선, 지원사업 준비까지.</p>

            <div className={styles.ctaRow}>
              <a href="#contact" className={styles.ctaPrimary}>
                사수래AI 문의하기
                <ArrowRight aria-hidden="true" />
              </a>
              <a href="#business-plan" className={styles.ctaSecondary}>
                플랫폼 보기
              </a>
            </div>

            <ul className={styles.trustList}>
              {trustItems.map((item) => (
                <li key={item} className={styles.trustItem}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.product} ${styles.productEnter}`}>
            <div className={styles.productInner}>
              {/* TODO: 실제 계획서 작성 화면 Screenshot 으로 교체 (lib/platform-images.js) */}
              <ProductScreenshot
                src={platformImages.businessPlan}
                alt="사수래AI 계획서 작성 화면"
                title="친환경 배달용기 사업계획서"
                priority
                fallback={<DashboardMockup />}
              />
            </div>

            <div className={`${styles.floatCard} ${styles.cardVc}`} aria-hidden="true">
              <span className={styles.floatLabel}>VC Readiness</span>
              <span className={styles.floatValue}>82</span>
            </div>

            <div className={`${styles.floatCard} ${styles.cardSupport}`} aria-hidden="true">
              <span className={styles.floatLabel}>지원사업</span>
              <span className={styles.floatText}>예비창업패키지</span>
            </div>

            <div className={`${styles.floatCard} ${styles.cardImprove}`} aria-hidden="true">
              <span className={styles.floatLabel}>보완 영역</span>
              <span className={styles.floatText}>고객 검증</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
