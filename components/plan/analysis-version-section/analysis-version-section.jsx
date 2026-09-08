import { FileText, History, Info } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './analysis-version-section.module.scss';

// 카드와 연결 단계를 하나의 순서 목록으로 표현한다.
// (v1 → 계획서 수정 → 현재 계획서 → 재분석 → v2)
const steps = [
  {
    type: 'card',
    kind: 'analysis',
    tag: 'v1',
    score: '72',
    label: 'VC Readiness',
    note: '첫 분석 시점의 계획서 기준',
  },
  { type: 'link', text: '계획서 수정' },
  {
    type: 'card',
    kind: 'draft',
    tag: '현재 계획서',
    label: '분석 이후 수정됨',
    note: '수정해도 v1 점수는 그대로 유지',
  },
  { type: 'link', text: '재분석' },
  {
    type: 'card',
    kind: 'next',
    tag: 'v2',
    score: '?',
    label: '새로운 VC 평가',
    note: '재분석해야 새 점수가 생성됩니다',
  },
];

export function AnalysisVersionSection() {
  return (
    <section className={styles.section} id="analysis-version">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>
            <History aria-hidden="true" />
            분석 버전
          </span>
          <h2 className={styles.title}>
            계획서를 수정해도
            <br />
            이전 분석 결과는 그대로 남습니다.
          </h2>
        </Reveal>

        <ol className={styles.flow}>
          {steps.map((step, index) =>
            step.type === 'link' ? (
              <Reveal key={step.text} as="li" className={styles.linkItem} delay={index * 0.05}>
                <span className={styles.linkLine} aria-hidden="true" />
                <span className={styles.linkText}>{step.text}</span>
                <span className={styles.linkLine} aria-hidden="true" />
              </Reveal>
            ) : (
              <Reveal key={step.tag} as="li" className={styles.cardItem} delay={index * 0.05}>
                <div className={`${styles.card} ${styles[step.kind]}`}>
                  <span className={styles.tag}>{step.tag}</span>

                  {step.score ? (
                    <span className={styles.scoreRow}>
                      <span className={styles.score}>{step.score}</span>
                      <span className={styles.scoreMax}>/ 100</span>
                    </span>
                  ) : (
                    <span className={styles.draftIcon} aria-hidden="true">
                      <FileText />
                    </span>
                  )}

                  <span className={styles.label}>{step.label}</span>
                  <span className={styles.note}>{step.note}</span>
                </div>
              </Reveal>
            )
          )}
        </ol>

        <Reveal className={styles.footNote}>
          <Info aria-hidden="true" />
          <p>
            기존 분석 결과는 <strong>분석 당시 계획서의 스냅샷</strong>을 기준으로 합니다. 계획서를 수정했다고 해서 이전 점수가 자동으로
            바뀌지는 않습니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default AnalysisVersionSection;
