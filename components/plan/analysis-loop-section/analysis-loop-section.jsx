import { BarChart3, ClipboardCheck, MessageSquare, RefreshCw, Wand2 } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './analysis-loop-section.module.scss';

const loop = [
  { icon: BarChart3, label: 'VC 분석', detail: '72점', kind: 'score' },
  { icon: MessageSquare, label: '왜 이런 평가인지 질문', detail: '사수AI가 근거를 설명' },
  { icon: ClipboardCheck, label: '필요한 근거 확보', detail: '실제 고객 인터뷰 진행' },
  { icon: Wand2, label: '“계획서에 넣어줘”', detail: 'AI가 실제 계획서 수정', accent: true },
  { icon: RefreshCw, label: '필요 시 재분석', detail: '새로운 VC 평가 확인', optional: true },
];

export function AnalysisLoopSection() {
  return (
    <section className={styles.section} id="analysis-loop">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <h2 className={styles.title}>
            분석 결과보다 중요한 건
            <br />그 다음입니다.
          </h2>
          <p className={styles.desc}>
            분석 결과를 보고 끝나는 것이 아니라, 왜 그런 평가가 나왔는지 질문하고, 필요한 근거를 실제로 확보한 뒤, 그 내용을 다시
            계획서에 반영할 수 있습니다.
          </p>
        </Reveal>

        <ol className={styles.loop}>
          {loop.map((node, index) => (
            <Reveal key={node.label} as="li" className={styles.item} delay={index * 0.06}>
              <div
                className={`${styles.node} ${node.accent ? styles.nodeAccent : ''} ${node.optional ? styles.nodeOptional : ''}`}
              >
                <span className={styles.nodeIcon} aria-hidden="true">
                  <node.icon />
                </span>
                <span className={styles.nodeLabel}>{node.label}</span>
                <span className={`${styles.nodeDetail} ${node.kind === 'score' ? styles.nodeScore : ''}`}>{node.detail}</span>
              </div>

              {index < loop.length - 1 && <span className={styles.arrow} aria-hidden="true" />}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default AnalysisLoopSection;
