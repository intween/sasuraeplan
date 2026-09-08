import { Check, Quote, ThumbsUp } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { publicImage } from '@/lib/public-asset';
import { VCScreenshot } from './vc-screenshot';
import styles from './vc-analysis-section.module.scss';

const axes = [
  { name: '문제·시장성', score: 78 },
  { name: '제품·서비스', score: 74 },
  { name: '비즈니스 모델', score: 68 },
  { name: '실행 가능성', score: 71 },
  { name: '팀·재무', score: 63, watch: true },
];

const strengths = ['해결하려는 문제가 구체적', '수익 구조가 명확', '초기 목표 고객이 좁고 뚜렷'];

const priorities = [
  { num: '01', title: '고객 검증 근거', hint: '인터뷰 · 사전 수요' },
  { num: '02', title: '재무 산정 근거', hint: '단가 · 원가 · 가정' },
  { num: '03', title: '고객 확보 방안', hint: '채널 · 확보 비용' },
];

// Full Report 에 포함되는 항목
const reportItems = ['VC Readiness Score', 'Startup Stage · 종합등급', 'VC 5축 · 25개 세부지표', '종합 진단 · 핵심 강점', '우선 보완 영역 · 심사 주의점', 'AI 가상 심사위원단 · 예상 심사 질문'];

export function VCAnalysisSection() {
  // public/vc_img.png 가 있으면 실제 분석 화면을, 없으면 아래 목업을 보여준다.
  const shot = publicImage('vc_img.png');

  return (
    <section className={styles.section} id="vc-analysis">
      <div className={styles.container}>
        <div className={styles.split}>
          {/* 좌측: 설명 + 포함 항목 */}
          <Reveal className={styles.copyCol}>
            <span className={styles.eyebrow}>VC Readiness</span>
            <h2 className={styles.title}>
              내 사업계획서,
              <br />
              평가자가 보면 몇 점일까요?
            </h2>
            <p className={styles.desc}>작성자의 시선이 아니라 평가자의 관점에서 사업의 강점과 빈틈을 확인하세요.</p>

            <ul className={styles.checkList}>
              {reportItems.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 우측: 실제 분석 결과 화면 (없으면 목업) */}
          <Reveal className={styles.shotCol} delay={0.08}>
            {shot ? (
              <>
                <VCScreenshot src={shot.src} width={shot.width} height={shot.height} alt="플랜 사수 VC 분석 결과 화면" />
                <span className={styles.note}>실제 VC 분석 결과 화면</span>
              </>
            ) : (
              <>
                <div className={styles.report} role="img" aria-label="VC 분석 Full Report 화면 예시">
                  <div className={styles.reportBar}>
                    <span className={styles.reportTitle}>VC Full Report</span>
                    <span className={styles.reportChip}>v1 기준</span>
                  </div>

                  <div className={styles.panels}>
                    <div className={styles.panel}>
                      <span className={styles.panelLabel}>VC Readiness Score</span>

                      <div className={styles.scoreRow}>
                        <span className={styles.scoreValue}>72</span>
                        <span className={styles.scoreMax}>/ 100</span>
                      </div>

                      <dl className={styles.metaList}>
                        <div className={styles.metaRow}>
                          <dt className={styles.metaKey}>종합등급</dt>
                          <dd className={styles.metaBadge}>B</dd>
                        </div>
                        <div className={styles.metaRow}>
                          <dt className={styles.metaKey}>Startup Stage</dt>
                          <dd className={styles.metaStage}>Validation</dd>
                        </div>
                        <div className={styles.metaRow}>
                          <dt className={styles.metaKey}>세부지표</dt>
                          <dd className={styles.metaValue}>5축 · 25개</dd>
                        </div>
                      </dl>
                    </div>

                    <div className={styles.panel}>
                      <span className={styles.panelLabel}>VC 5축 분석</span>
                      <ul className={styles.axisList}>
                        {axes.map((axis, index) => (
                          <li key={axis.name}>
                            <div className={styles.axisHead}>
                              <span className={styles.axisName}>{axis.name}</span>
                              <span className={`${styles.axisScore} ${axis.watch ? styles.axisScoreWatch : ''}`}>{axis.score}</span>
                            </div>
                            <div className={styles.axisTrack}>
                              <span className={`${styles.axisFill} ${axis.watch ? styles.axisFillWatch : ''}`} style={{ width: `${axis.score}%`, '--axis-delay': `${index * 0.08}s` }} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.panel}>
                      <span className={`${styles.panelLabel} ${styles.panelLabelDiagnosis}`}>종합 진단</span>
                      <blockquote className={styles.diagnosis}>
                        <Quote aria-hidden="true" />
                        사업모델의 기본 구조는 명확하지만 고객 검증과 재무 산정 근거의 보완이 필요합니다.
                      </blockquote>

                      <span className={`${styles.blockLabel} ${styles.blockLabelStrength}`}>
                        <ThumbsUp aria-hidden="true" />
                        핵심 강점
                      </span>
                      <ul className={styles.strengthList}>
                        {strengths.map((item) => (
                          <li key={item} className={styles.strengthItem}>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <span className={styles.blockLabel}>우선 보완 영역</span>
                      <ul className={styles.priorityList}>
                        {priorities.map((item) => (
                          <li key={item.num} className={styles.priorityItem}>
                            <span className={styles.priorityNum}>{item.num}</span>
                            <span className={styles.priorityBody}>
                              <span className={styles.priorityTitle}>{item.title}</span>
                              <span className={styles.priorityHint}>{item.hint}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <span className={styles.note}>서비스 화면 예시</span>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default VCAnalysisSection;
