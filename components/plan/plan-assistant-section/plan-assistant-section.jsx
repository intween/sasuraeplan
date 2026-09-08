import { MessageSquare, PencilLine, Wand2 } from 'lucide-react';
import { PlanAssistantDemo } from '@/components/plan/plan-assistant-demo';
import { Reveal } from '@/components/reveal';
import styles from './plan-assistant-section.module.scss';

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

export function PlanAssistantSection() {
  return (
    <section className={styles.section} id="plan-assistant">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Plan Assistant</span>
          <h2 className={styles.title}>
            내 계획서와 분석을 이해하는
            <br />
            AI 플랜비서.
          </h2>
          <p className={styles.sub}>
            현재 계획서와 VC 분석 결과를 기준으로 질문하고, 필요한 경우 실제 계획서 수정까지 요청할 수 있습니다.
          </p>
        </Reveal>

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

              {feature.examples ? (
                <ul className={styles.quoteList}>
                  {feature.examples.map((example) => (
                    <li key={example} className={styles.quote}>
                      “{example}”
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.cardDesc}>{feature.desc}</p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.demoWrap} delay={0.08}>
          <PlanAssistantDemo />
        </Reveal>
      </div>
    </section>
  );
}

export default PlanAssistantSection;
