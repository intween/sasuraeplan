import { FileCheck2, Info } from 'lucide-react';
import { ProductScreenshot } from '@/components/product-screenshot';
import { Reveal } from '@/components/reveal';
import { platformImages } from '@/lib/platform-images';
import styles from './vc-analysis-section.module.scss';

const axes = [
  { name: '시장', score: 86 },
  { name: '제품', score: 88 },
  { name: 'BM', score: 74, watch: true },
  { name: '실행', score: 80 },
  { name: '팀', score: 84 },
];

const priorities = [
  { num: '01', title: '고객 검증', hint: '인터뷰 · 사전 수요' },
  { num: '02', title: '매출 근거', hint: '단가 · 전환 가정' },
  { num: '03', title: '고객 확보', hint: '채널 · 확보 비용' },
];

const reportItems = ['종합 진단', '핵심 강점', '보완 영역', '심사 주의', '예상 질문', '실행 로드맵'];

export function VCAnalysisSection() {
  return (
    <section className={styles.section} id="vc-analysis">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>VC Analysis</span>
          <h2 className={styles.title}>VC 분석</h2>
          <p className={styles.message}>투자자 관점의 사업 진단.</p>
        </Reveal>

        <Reveal delay={0.08}>
          {/* TODO: 실제 VC 분석 Screenshot 으로 교체 (lib/platform-images.js) */}
          <ProductScreenshot
            src={platformImages.vcAnalysis}
            alt="사수래AI VC 분석 화면"
            title="VC 리포트"
            fallback={
          <div className={styles.product} role="img" aria-label="VC 분석 화면 예시">
            <div className={styles.reportBar}>
              <span className={styles.reportTitle}>VC 리포트</span>
              <span className={styles.reportDoc}>친환경 배달용기 사업계획서</span>
              <span className={styles.reportChip}>v1 기준</span>
            </div>

            <div className={styles.panels}>
              <div className={styles.panel}>
                <span className={styles.panelLabel}>VC Readiness Score</span>
                <div className={styles.scoreRow}>
                  <span className={styles.scoreValue}>82.4</span>
                  <span className={styles.scoreMax}>/ 100</span>
                  <span className={styles.gradeBadge}>B+</span>
                </div>

                <div className={styles.scoreMeta}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>Stage</span>
                    <span className={styles.stageChip}>Validation</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>등급</span>
                    <span className={styles.metaVal}>B+</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaKey}>지표</span>
                    <span className={styles.metaVal}>5축 · 25개</span>
                  </div>
                </div>
              </div>

              <div className={styles.panel}>
                <span className={styles.panelLabel}>5축 분석</span>
                <ul className={styles.axisList}>
                  {axes.map((axis, index) => (
                    <li key={axis.name}>
                      <div className={styles.axisHead}>
                        <span className={styles.axisName}>{axis.name}</span>
                        <span className={styles.axisScore}>{axis.score}</span>
                      </div>
                      <div className={styles.axisTrack}>
                        <span
                          className={`${styles.axisFill} ${axis.watch ? styles.axisFillWatch : ''}`}
                          style={{ width: `${axis.score}%`, '--axis-delay': `${index * 0.08}s` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.panel}>
                <span className={styles.panelLabel}>보완 영역</span>
                <ul className={styles.priorityList}>
                  {priorities.map((item) => (
                    <li key={item.num} className={styles.priorityItem}>
                      <span className={styles.priorityNum}>{item.num}</span>
                      <span className={styles.priorityText}>
                        {item.title}
                        <span className={styles.priorityHint}>{item.hint}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.reportFoot}>
              <ul className={styles.reportNav}>
                {reportItems.map((item, index) => (
                  <li key={item} className={`${styles.reportNavItem} ${index === 0 ? styles.reportNavActive : ''}`}>
                    <FileCheck2 aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.reportNote}>
                <Info aria-hidden="true" />
                <span>
                  <strong>첫 분석과 재분석 모두 동일한 리포트.</strong>
                </span>
              </p>
            </div>
          </div>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}

export default VCAnalysisSection;
