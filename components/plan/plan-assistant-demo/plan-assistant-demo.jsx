'use client';

import { useId, useRef, useState } from 'react';
import { Check, FileText, Landmark, MessageSquare, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import styles from './plan-assistant-demo.module.scss';

// 랜딩 전용 UI 데모. 실제 AI 응답이나 저장 동작은 일어나지 않는다.
const tabs = [
  {
    id: 'analysis',
    label: '분석 질문',
    icon: MessageSquare,
    messages: [
      { from: 'user', text: '왜 시장성 점수가 낮은 거야?' },
      {
        from: 'ai',
        text: '시장 규모는 제시되어 있지만, 그중 실제로 확보 가능한 구간과 그 근거가 아직 없습니다. 그래서 시장성 지표가 낮게 나왔습니다.',
      },
      { from: 'user', text: 'VC라면 어디를 가장 걱정할까?' },
      { from: 'ai', text: '초기 고객을 어떤 채널로, 얼마의 비용에 확보할 수 있는지를 가장 먼저 확인하려 할 가능성이 높습니다.' },
    ],
    panelTitle: '계획서 상태',
    panelKind: 'untouched',
  },
  {
    id: 'edit',
    label: '계획서 수정',
    icon: FileText,
    messages: [
      { from: 'user', text: '왜 고객 검증 점수가 낮은 거야?' },
      { from: 'ai', text: '현재 계획서에서는 고객의 문제는 설명되어 있지만, 실제 고객을 대상으로 확인한 근거가 부족합니다.' },
      { from: 'user', text: '지난주에 잠재 고객 7명을 인터뷰했고 5명이 이 문제를 가장 불편하다고 했어.' },
      // 모바일에서는 대화를 4마디로 줄인다.
      { from: 'ai', text: '실제 고객 검증 근거로 활용할 수 있습니다.', desktopOnly: true },
      { from: 'user', text: '그러면 고객검증 부분에 추가해줘.', command: true, desktopOnly: true },
      { from: 'ai', text: '고객 검증 영역에 반영했습니다.', applied: true },
    ],
    panelTitle: '사업계획서 · 고객 검증',
    panelKind: 'diff',
  },
  {
    id: 'funding',
    label: '지원사업',
    icon: Landmark,
    messages: [
      { from: 'user', text: '예비창업패키지 준비하려면 뭐가 필요해?' },
      {
        from: 'ai',
        text: '공고 양식은 문제인식·실현가능성·성장전략·팀 구성으로 구성됩니다. 현재 계획서 기준으로는 실현가능성 항목의 근거가 가장 부족합니다.',
      },
      { from: 'user', text: '신청 자격은 내가 되는 거야?' },
      {
        from: 'ai',
        text: '최종 신청 자격과 일정은 공식 공고 기준으로 확인해야 합니다. 확인이 필요한 항목을 정리해 드릴까요?',
      },
    ],
    panelTitle: '관련 공고',
    panelKind: 'funding',
  },
];

function Panel({ kind }) {
  if (kind === 'diff') {
    return (
      <>
        <div className={styles.diffBlock}>
          <span className={styles.diffLabel}>변경 전</span>
          <p className={`${styles.diffText} ${styles.diffBefore}`}>고객 인터뷰 결과 없음</p>
        </div>

        <div className={styles.diffBlock}>
          <span className={`${styles.diffLabel} ${styles.diffLabelAfter}`}>변경 후</span>
          <p className={`${styles.diffText} ${styles.diffAfter}`}>잠재 고객 7명을 대상으로 인터뷰를 진행했으며, 5명이 해당 문제를 주요 불편사항으로 응답함.</p>
        </div>

        <div className={styles.panelActions}>
          <span className={styles.panelButton}>변경사항 보기</span>
          <span className={styles.panelButton}>
            <RotateCcw aria-hidden="true" />
            되돌리기
          </span>
        </div>
      </>
    );
  }

  if (kind === 'untouched') {
    return (
      <div className={styles.untouched}>
        <ShieldCheck aria-hidden="true" />
        <p>
          <strong>계획서 변경 없음</strong>
          질문에는 설명만 합니다. 수정 요청이 있을 때만 계획서가 바뀝니다.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.fundingCard}>
        <h4 className={styles.fundingTitle}>예비창업패키지</h4>
        <ul className={styles.chips}>
          <li className={styles.chip}>예비창업자</li>
          <li className={styles.chip}>사업화</li>
          <li className={styles.chip}>정부지원</li>
        </ul>
        <p className={styles.fundingNote}>신청 자격·일정은 공식 공고 기준으로 확인이 필요합니다.</p>
      </div>

      <div className={styles.panelActions}>
        <span className={styles.panelButton}>공고 확인</span>
        <span className={styles.panelButton}>내 사업과 비교하기</span>
      </div>
    </>
  );
}

export function PlanAssistantDemo() {
  const [activeId, setActiveId] = useState('edit');
  const baseId = useId();
  const tabRefs = useRef([]);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeId);
  const active = tabs[activeIndex];

  const focusTab = (index) => {
    const next = (index + tabs.length) % tabs.length;
    setActiveId(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusTab(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusTab(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <div className={styles.demo}>
      <div className={styles.tabsWrap}>
        <div className={styles.tabs} role="tablist" aria-label="플랜비서 사용 예시" onKeyDown={onKeyDown}>
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                onClick={() => setActiveId(tab.id)}>
                <tab.icon aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.stage} role="tabpanel" id={`${baseId}-panel-${active.id}`} aria-labelledby={`${baseId}-tab-${active.id}`} tabIndex={0}>
        {/* 서비스 화면 상단 (브랜드는 이 한 곳에만 표시한다) */}
        <div className={styles.stageBar}>
          <BrandLogo className={styles.stageLogo} />
          <span className={styles.stageDoc}>친환경 다회용 배달용기 서비스</span>
          <span className={styles.stageChip}>계획서 v1</span>
        </div>

        <div className={styles.stageBody}>
          {/* 대화 */}
          <div className={styles.chat}>
            <div className={styles.chatHead}>
              {/* <span className={styles.chatBadge} aria-hidden="true">
              <Sparkles />
            </span> */}
              <span className={styles.chatName}>플랜비서</span>
              <span className={styles.chatCtx}>계획서 v1 · VC 분석 연결됨</span>
            </div>

            <div className={styles.thread} key={active.id}>
              {active.messages.map((message, index) => {
                if (message.applied) {
                  return (
                    <div
                      key={index}
                      className={`${styles.applied} ${message.desktopOnly ? styles.desktopOnly : ''}`}
                      style={{ '--msg-delay': `${index * 0.09}s` }}
                    >
                      <Check aria-hidden="true" />
                      {message.text}
                    </div>
                  );
                }

                return (
                  <p
                    key={index}
                    className={`${styles.message} ${message.from === 'user' ? styles.messageUser : styles.messageAi} ${
                      message.command ? styles.messageCommand : ''
                    } ${message.desktopOnly ? styles.desktopOnly : ''}`}
                    style={{ '--msg-delay': `${index * 0.09}s` }}
                  >
                    {message.text}
                  </p>
                );
              })}
            </div>
          </div>

          {/* 결과 패널 */}
          <div className={styles.side}>
            <span className={styles.sideLabel}>{active.panelTitle}</span>
            <Panel kind={active.panelKind} />
          </div>
        </div>
      </div>

      <p className={styles.caption}>실제 사용 화면을 단순화한 UI 데모입니다.</p>
    </div>
  );
}

export default PlanAssistantDemo;
