'use client';

import { Check, CheckCircle2, Sparkles } from 'lucide-react';
import styles from './dashboard-mockup.module.scss';

const planSections = [
  { label: '사업 개요', state: 'active' },
  { label: '문제 인식', state: 'done' },
  { label: '제품·서비스', state: 'done' },
  { label: '시장 분석', state: 'done' },
  { label: '비즈니스 모델', state: 'idle' },
  { label: '성장 전략', state: 'idle' },
  { label: '팀 구성', state: 'idle' },
  { label: '재무 계획', state: 'idle' },
];

const workspaceMenu = [
  { label: 'VC 분석', accent: true },
  { label: '지원사업', accent: true },
];

// 랜딩페이지 전용 정적 목업. 실제 앱 로직/API 를 사용하지 않는다.
export function DashboardMockup() {
  return (
    <div className={styles.frame} role="img" aria-label="사수래AI 사업계획서 작성 화면 예시">
      <div className={styles.topbar}>
        <span className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            사
          </span>
          사수래AI
        </span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.docTitle}>친환경 배달용기 사업계획서</span>
        <span className={styles.saveState}>
          <CheckCircle2 aria-hidden="true" />
          자동 저장됨
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.sidebar}>
          <span className={styles.sidebarLabel}>사업계획서</span>
          {planSections.map((item) => (
            <span key={item.label} className={`${styles.navItem} ${styles[item.state] || ''}`}>
              <span className={styles.dot} aria-hidden="true" />
              {item.label}
            </span>
          ))}

          <span className={styles.navSplit} aria-hidden="true" />

          {workspaceMenu.map((item) => (
            <span key={item.label} className={`${styles.navItem} ${styles.navItemAccent}`}>
              <span className={styles.dot} aria-hidden="true" />
              {item.label}
            </span>
          ))}
        </div>

        <div className={styles.editor}>
          <div className={styles.editorHead}>
            <h3 className={styles.editorTitle}>사업 아이템 개요</h3>
            <span className={styles.stepBadge}>작성 중</span>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}>해결하려는 문제</span>
            <p className={styles.blockBody}>
              배달 소상공인의 일회용 포장재 비용과 폐기물 문제를 다회용 용기 순환 공급으로 해결합니다.
              <span className={styles.caret} aria-hidden="true" />
            </p>
          </div>

          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>목표 고객</span>
              <span className={styles.metaValue}>배달 전문 소상공인</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>수익 모델</span>
              <span className={styles.metaValue}>정기 구독 + 공급 계약</span>
            </div>
            <div className={`${styles.metaCard} ${styles.metaCardWide}`}>
              <span className={styles.metaLabel}>제품·서비스</span>
              <span className={styles.metaValue}>다회용 배송 용기 순환 공급 서비스</span>
            </div>
          </div>

          <div className={styles.aiPanel}>
            <div className={styles.aiHead}>
              <span className={styles.aiBadge}>
                <Sparkles aria-hidden="true" />
                AI
              </span>
              <span className={styles.aiTitle}>AI 작성 제안</span>
            </div>
            <p className={styles.aiText}>고객 사례와 수치 근거를 추가하면 설득력이 높아집니다.</p>

            <div className={styles.aiActions}>
              <span className={styles.aiButton}>
                <Sparkles aria-hidden="true" />
                AI로 내용 작성
              </span>
              <span className={`${styles.aiButton} ${styles.applyButton}`}>
                <Check aria-hidden="true" />
                계획서에 반영
              </span>
            </div>

            <p className={styles.aiNote}>반영을 선택한 내용만 저장됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMockup;
