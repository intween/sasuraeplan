import { BarChart3, ClipboardCheck, MessageSquare, PencilLine, Search, Wand2 } from 'lucide-react';
import { PlanAssistantDemo } from '@/components/plan/plan-assistant-demo';
import { Reveal } from '@/components/reveal';
// 기존 analysis-loop-section 의 흐름 UI 를 그대로 재사용한다. (섹션 통합)
import loopStyles from '@/components/plan/analysis-loop-section/analysis-loop-section.module.scss';
import styles from './plan-assistant-section.module.scss';

// VC 분석 결과 → 사수AI에게 질문 → 추가 정보 정리 → 실제 계획서 수정
const loop = [
  { icon: BarChart3, label: 'VC 분석 결과', detail: '72점', kind: 'score' },
  { icon: MessageSquare, label: '사수AI에게 질문', detail: '점수가 낮은 이유를 확인' },
  { icon: ClipboardCheck, label: '추가 정보 정리', detail: '부족한 근거를 보완' },
  { icon: Wand2, label: '실제 계획서 수정', detail: '“계획서에 넣어줘”', accent: true },
];

// 정부지원사업은 독립 섹션 대신 사수AI의 "추가 활용 기능" 으로만 보여준다.
const fundingFlow = [
  { icon: Search, label: '관련 공고 확인' },
  { icon: ClipboardCheck, label: '지원요건 정리' },
  { icon: PencilLine, label: '계획서 보완' },
];

/* Hidden: overlaps with the demo below — 사수AI 기능 카드 3종
const features = [
  {
    icon: MessageSquare,
    title: '분석 결과 질문',
    examples: ['왜 시장성 점수가 낮아?', 'VC가 이 부분을 왜 문제라고 보는 거야?', '가장 먼저 보완해야 할 부분은 뭐야?'],
  },
  {
    icon: PencilLine,
    title: '개선 방법 상담',
    examples: ['고객 검증을 어떻게 보완해야 해?', '재무 근거로 어떤 자료가 필요해?', '경쟁사 분석을 어떻게 정리해야 해?'],
  },
  {
    icon: Wand2,
    title: '계획서 직접 수정',
    examples: ['방금 이야기한 내용을 계획서에 넣어줘.', '이 부분 좀 더 명확하게 수정해줘.', '내가 준 자료를 시장분석에 반영해줘.'],
    accent: true,
  },
];
*/

export function PlanAssistantSection() {
  return (
    <section className={styles.section} id="plan-assistant">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Plan Assistant</span>
          <h2 className={styles.title}>
            분석 결과보다 중요한 건,
            <br />
            그다음 무엇을 바꾸느냐입니다.
          </h2>
          <p className={styles.sub}>분석 결과를 사수AI와 이야기하고, 부족한 내용을 실제 사업계획서까지 보완하세요.</p>
        </Reveal>

        <ol className={`${loopStyles.loop} ${styles.loop}`}>
          {loop.map((node, index) => (
            <Reveal key={node.label} as="li" className={loopStyles.item} delay={index * 0.06}>
              <div className={`${loopStyles.node} ${node.accent ? loopStyles.nodeAccent : ''}`}>
                <span className={loopStyles.nodeIcon} aria-hidden="true">
                  <node.icon />
                </span>
                <span className={loopStyles.nodeLabel}>{node.label}</span>
                <span className={`${loopStyles.nodeDetail} ${node.kind === 'score' ? loopStyles.nodeScore : ''}`}>{node.detail}</span>
              </div>

              {index < loop.length - 1 && <span className={loopStyles.arrow} aria-hidden="true" />}
            </Reveal>
          ))}
        </ol>

        {/* Hidden: overlaps with the demo below — 사수AI 기능 카드 3종
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              className={`${styles.card} ${feature.accent ? styles.cardAccent : ''}`}
              delay={index * 0.05}
            >
              <span className={styles.cardIcon} aria-hidden="true">
                <feature.icon />
              </span>
              <h3 className={styles.cardTitle}>{feature.title}</h3>

              <ul className={styles.quoteList}>
                {feature.examples.map((example) => (
                  <li key={example} className={styles.quote}>
                    “{example}”
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        */}

        <Reveal className={styles.demoWrap} delay={0.08}>
          <PlanAssistantDemo />
        </Reveal>

        {/* 추가 활용 기능 — 정부지원사업. 목업 없이 mini feature 수준으로만. */}
        {/* <Reveal className={styles.subFeature}>
          <div className={styles.subCopy}>
            <h3 className={styles.subTitle}>
              지원사업 준비에도
              <br />
              그대로 활용하세요.
            </h3>
            <p className={styles.subDesc}>
              내 사업과 맞는 공고를 확인하고, 지원 요건을 사수AI와 정리해 사업계획서에 바로 반영할 수 있습니다.
            </p>
          </div>

          <div className={styles.subSide}>
            <ol className={styles.miniFlow}>
              {fundingFlow.map((item, index) => (
                <li key={item.label} className={styles.miniItem}>
                  <span className={styles.miniPill}>
                    <span className={styles.miniIcon} aria-hidden="true">
                      <item.icon />
                    </span>
                    {item.label}
                  </span>
                  {index < fundingFlow.length - 1 && <span className={styles.miniArrow} aria-hidden="true" />}
                </li>
              ))}
            </ol>

            <p className={styles.miniNote}>관련된 새로운 지원사업이 등록되면 이메일로 알려드립니다.</p>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}

export default PlanAssistantSection;
