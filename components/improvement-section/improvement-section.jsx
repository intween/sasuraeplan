'use client';

import { AlertTriangle, Check, ChevronRight, Info, Sparkles } from 'lucide-react';
import { ProductScreenshot } from '@/components/product-screenshot';
import { Reveal } from '@/components/reveal';
import { platformImages } from '@/lib/platform-images';
import styles from './improvement-section.module.scss';

const cycle = [
  { label: 'VC 분석' },
  { label: '보완 영역' },
  { label: '실행 로드맵' },
  { label: '자료 확보', kind: 'action' },
  { label: '계획서 반영', kind: 'action' },
  { label: '재분석', kind: 'optional' },
];

const prepItems = ['대상 설정', '질문 설계', '인터뷰', '결과 반영'];

const steps = [
  { num: '01', title: '대상 설정', desc: '목표 고객 10곳' },
  { num: '02', title: '질문 설계', desc: '비용 · 지불 의사' },
  { num: '03', title: '인터뷰', desc: '답변 · 수치 기록' },
  { num: '04', title: '결과 반영', desc: '확인된 내용만 반영' },
];

const kindClass = { version: 'nodeVersion', action: 'nodeAction', optional: 'nodeOptional' };

export function ImprovementSection() {
  return (
    <section className={styles.section} id="improvement">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Improvement</span>
          <h2 className={styles.title}>계획서 개선</h2>
          <p className={styles.message}>분석에서 실행까지.</p>
        </Reveal>

        <Reveal>
          <ul className={styles.rail}>
            {cycle.map((node, index) => (
              <li key={node.label} className={styles.railItem}>
                <span className={`${styles.node} ${styles[kindClass[node.kind]] || ''}`}>{node.label}</span>
                {index < cycle.length - 1 && (
                  <span className={styles.railArrow} aria-hidden="true">
                    <ChevronRight />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          {/* TODO: 실제 계획서 개선 / 실행 로드맵 Screenshot 으로 교체 (lib/platform-images.js) */}
          <ProductScreenshot
            src={platformImages.improvement}
            alt="사수래AI 계획서 개선 화면"
            title="실행 로드맵"
            fallback={
          <div className={styles.product} role="img" aria-label="실행 로드맵 화면 예시">
            <div className={styles.productBar}>
              실행 로드맵
              <span className={styles.productChip}>보완</span>
            </div>

            <div className={styles.productGrid}>
              <div className={styles.pane}>
                <h3 className={styles.issueTitle}>
                  <AlertTriangle aria-hidden="true" />
                  고객 검증
                </h3>

                <span className={styles.blockLabel}>필요 근거</span>
                <p className={styles.blockText}>실제 고객의 문제 경험과 지불 의사.</p>

                <span className={styles.blockLabel}>준비 항목</span>
                <ul className={styles.checkList}>
                  {prepItems.map((item) => (
                    <li key={item} className={styles.checkItem}>
                      <Check aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.pane}>
                <span className={styles.blockLabel}>진행</span>
                <ol className={styles.steps}>
                  {steps.map((step, index) => (
                    <li key={step.num} className={styles.step}>
                      <span className={styles.stepMarker}>
                        <span className={styles.stepNum}>{step.num}</span>
                        {index < steps.length - 1 && <span className={styles.stepLine} aria-hidden="true" />}
                      </span>
                      <span className={styles.stepBody}>
                        <span className={styles.stepTitle}>{step.title}</span>
                        <span className={styles.stepDesc}>{step.desc}</span>
                      </span>
                    </li>
                  ))}
                </ol>

                <span className={styles.paneCta}>
                  <Sparkles aria-hidden="true" />
                  AI 도움받기
                </span>
              </div>
            </div>

            <p className={styles.footNote}>
              <Info aria-hidden="true" />
              <span>
                <strong>동일 양식의 수정은 자유롭게.</strong> 새로운 VC 평가가 필요할 때만 재분석을 사용합니다.
              </span>
            </p>
          </div>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}

export default ImprovementSection;
