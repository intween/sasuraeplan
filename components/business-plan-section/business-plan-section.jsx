'use client';

import { Check, CheckCircle2, PenLine, Sparkles } from 'lucide-react';
import { ProductScreenshot } from '@/components/product-screenshot';
import { Reveal } from '@/components/reveal';
import { platformImages } from '@/lib/platform-images';
import styles from './business-plan-section.module.scss';

const outline = [
  { label: '개요', done: true },
  { label: '문제', active: true },
  { label: '제품', done: true },
  { label: '시장', done: true },
  { label: 'BM' },
  { label: '실행' },
  { label: '팀' },
  { label: '재무' },
];

const points = ['사업 정보 기반 작성', 'AI 제안 · 사용자 반영', '직접 수정 자유'];

export function BusinessPlanSection() {
  return (
    <section className={styles.section} id="business-plan">
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal>
            <span className={styles.eyebrow}>Business Plan</span>
            <h2 className={styles.title}>AI 계획서 작성</h2>
            <p className={styles.message}>사업 정보 기반 작성.</p>

            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point} className={styles.point}>
                  <Check aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            {/* TODO: 실제 계획서 작성 화면 Screenshot 으로 교체 (lib/platform-images.js) */}
            <ProductScreenshot
              src={platformImages.businessPlan}
              alt="사수래AI 계획서 작성 화면"
              title="계획서 작성"
              fallback={
            <div className={styles.product} role="img" aria-label="계획서 작성 화면 예시">
              <div className={styles.topbar}>
                <span className={`${styles.tab} ${styles.tabActive}`}>사업계획서</span>
                <span className={styles.tab}>VC 분석</span>
                <span className={styles.tab}>지원사업</span>
                <span className={styles.progressWrap}>
                  <span className={styles.progressTrack}>
                    <span className={styles.progressFill} style={{ width: '62%' }} />
                  </span>
                  작성률 62%
                </span>
              </div>

              <div className={styles.body}>
                <div className={styles.outline}>
                  <span className={styles.outlineLabel}>구성</span>
                  {outline.map((item) => (
                    <span key={item.label} className={`${styles.outlineItem} ${item.active ? styles.outlineItemActive : ''}`}>
                      {item.done || item.active ? <CheckCircle2 aria-hidden="true" /> : <span className={styles.outlineDot} aria-hidden="true" />}
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className={styles.editor}>
                  <h3 className={styles.editorTitle}>문제</h3>

                  <div className={styles.field}>
                    <span className={styles.fieldLabel}>문제</span>
                    <p className={styles.fieldText}>
                      배달 주문이 늘면서 소상공인의 포장재 비용이 매월 반복 지출로 발생합니다.
                    </p>
                  </div>

                  <div className={`${styles.field} ${styles.fieldActive}`}>
                    <span className={styles.fieldLabel}>고객</span>
                    <p className={styles.fieldText}>
                      대체 포장재를 검토해도 <span className={styles.highlight}>단가·회수·위생 기준</span>을 동시에 만족하는 선택지를 찾기 어렵습니다.
                    </p>
                  </div>

                  <span className={styles.wordCount}>자동 저장됨</span>
                </div>

                <div className={styles.aiPanel}>
                  <div className={styles.aiHead}>
                    <span className={styles.aiBadge}>
                      <Sparkles aria-hidden="true" />
                      AI
                    </span>
                    AI 제안
                  </div>

                  <div className={styles.aiCard}>
                    <span className={styles.aiCardLabel}>제안</span>
                    <p className={styles.aiCardText}>문제의 반복성과 비용 규모를 함께 제시하세요.</p>
                  </div>

                  <div className={styles.aiCard}>
                    <span className={styles.aiCardLabel}>초안</span>
                    <p className={styles.aiCardText}>“포장재 비용은 매출과 함께 증가하는 반복 비용입니다.”</p>
                  </div>

                  <div className={styles.aiActions}>
                    <span className={styles.aiButton}>
                      <PenLine aria-hidden="true" />
                      AI 작성
                    </span>
                    <span className={`${styles.aiButton} ${styles.aiButtonPrimary}`}>
                      <Check aria-hidden="true" />
                      계획서에 반영
                    </span>
                  </div>

                  <p className={styles.aiFootnote}>반영 전까지 원문은 유지됩니다.</p>
                </div>
              </div>
            </div>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default BusinessPlanSection;
