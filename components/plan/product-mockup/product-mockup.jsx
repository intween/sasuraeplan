import { Check, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import styles from './product-mockup.module.scss';

// 랜딩 전용 정적 UI 목업. 실제 앱 로직이나 API 는 사용하지 않는다.
const steps = [
  { label: '작성', state: 'done' },
  { label: 'VC 분석', state: 'done' },
  { label: '사수AI', state: 'active' },
];

const axes = [
  { name: '문제·시장성', score: 78 },
  { name: '제품·서비스', score: 74 },
  { name: '비즈니스 모델', score: 68 },
  { name: '실행 가능성', score: 71 },
  { name: '팀·재무', score: 63, watch: true },
];

const messages = [
  { from: 'ai', body: <>현재 고객 검증과 재무 근거를 먼저 보완하는 것이 좋습니다.</> },
  { from: 'user', body: <>지난주 고객 7명 인터뷰했고 5명이 불편하다고 했어.</> },
  { from: 'ai', body: <>고객 검증 근거로 활용할 수 있습니다.</> },
  { from: 'user', body: <>계획서에 넣어줘.</>, command: true },
];

export function ProductMockup() {
  return (
    <div className={styles.frame} role="img" aria-label="사수래AI 화면 예시: AI와 작성한 계획서를 VC 분석하고, 사수AI와 대화하며 계획서를 수정하는 장면">
      <div className={styles.topbar}>
        <BrandLogo className={styles.brandLogo} />
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.docTitle}>친환경 다회용 배달용기 서비스</span>
        <span className={styles.saveState}>
          <CheckCircle2 aria-hidden="true" />
          자동 저장됨
        </span>
      </div>

      {/* 작성 → VC 분석 → 사수AI */}
      <div className={styles.stepNav}>
        {steps.map((step, index) => (
          <span key={step.label} className={styles.stepWrap}>
            <span className={`${styles.step} ${styles[step.state]}`}>
              {step.state === 'done' && <Check aria-hidden="true" />}
              {step.label}
            </span>
            {index < steps.length - 1 && <span className={styles.stepArrow} aria-hidden="true" />}
          </span>
        ))}
      </div>

      <div className={styles.body}>
        {/* 왼쪽: 내 계획서 + VC 분석 요약 */}
        <div className={styles.analysis}>
          <div className={styles.planCard}>
            <span className={styles.planLabel}>내 계획서</span>
            <span className={styles.planName}>친환경 다회용 배달용기 서비스</span>
            <span className={styles.planState}>
              <Check aria-hidden="true" />
              AI와 작성 완료
            </span>
          </div>

          <span className={styles.paneLabel}>VC Readiness</span>

          <div className={styles.scoreRow}>
            <span className={styles.scoreValue}>72</span>
            <span className={styles.scoreMax}>/ 100</span>
            <span className={styles.grade}>B 등급</span>
          </div>

          <ul className={styles.axisList}>
            {axes.map((axis, index) => (
              <li key={axis.name} className={styles.axisItem}>
                <div className={styles.axisHead}>
                  <span className={styles.axisName}>{axis.name}</span>
                  <span className={`${styles.axisScore} ${axis.watch ? styles.axisScoreWatch : ''}`}>{axis.score}</span>
                </div>
                <div className={styles.axisTrack}>
                  <span className={`${styles.axisFill} ${axis.watch ? styles.axisFillWatch : ''}`} style={{ width: `${axis.score}%`, '--axis-delay': `${0.25 + index * 0.09}s` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 오른쪽: 사수AI 대화 */}
        <div className={styles.assistant}>
          <div className={styles.assistantHead}>
            {/* <span className={styles.assistantBadge} aria-hidden="true">
              <Sparkles />
            </span> */}
            <span className={styles.assistantName}>사수AI</span>
            <span className={styles.assistantCtx}>계획서 v1 · VC 분석 연결됨</span>
          </div>

          <div className={styles.thread}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.message} ${message.from === 'user' ? styles.messageUser : styles.messageAi} ${message.command ? styles.messageCommand : ''}`} style={{ '--msg-delay': `${0.35 + index * 0.5}s` }}>
                {message.body}
              </div>
            ))}

            <div className={styles.applied} style={{ '--msg-delay': `${0.35 + messages.length * 0.5}s` }}>
              <span className={styles.appliedHead}>
                <Check aria-hidden="true" />
                고객 검증 영역에 반영했습니다
              </span>
              <div className={styles.appliedActions}>
                <span className={styles.appliedButton}>변경사항 보기</span>
                <span className={styles.appliedButton}>
                  <RotateCcw aria-hidden="true" />
                  되돌리기
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMockup;
