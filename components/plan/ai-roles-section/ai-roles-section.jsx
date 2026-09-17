import { ArrowRight, PencilLine, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './ai-roles-section.module.scss';

const phases = [
  {
    icon: PencilLine,
    stage: '작성 단계',
    role: 'AI 작성 코치',
    direction: 'AI가 묻습니다',
    desc: '사용자의 정보를 받아 계획서를 처음부터 만드는 역할입니다.',
    from: 'ai',
    lines: ['어떤 고객을 대상으로 하나요?', '현재 생각하고 있는 수익모델은 무엇인가요?', '경쟁 서비스와 어떤 차이가 있나요?'],
  },
  {
    icon: Sparkles,
    stage: '분석 이후',
    role: 'AI 사수AI',
    direction: '내가 묻습니다',
    desc: '현재 계획서와 VC 분석 결과를 기준으로 사업을 계속 발전시키는 역할입니다.',
    from: 'user',
    accent: true,
    lines: ['왜 이 점수가 낮아?', '고객 인터뷰 결과가 생겼어. 이걸 계획서에 넣어줘.', '내 사업과 관련된 지원사업 있어?'],
  },
];

export function AIRolesSection() {
  return (
    <section className={styles.section} id="ai-roles">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <h2 className={styles.title}>
            작성할 때도, 분석 이후에도
            <br />
            같은 AI가 내 사업을 이해합니다.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {phases.map((phase, index) => (
            <Reveal key={phase.role} className={`${styles.card} ${phase.accent ? styles.cardAccent : ''}`} delay={index * 0.07}>
              <div className={styles.cardHead}>
                <span className={styles.cardIcon} aria-hidden="true">
                  <phase.icon />
                </span>
                <span className={styles.cardHeadText}>
                  <span className={styles.stage}>{phase.stage}</span>
                  <span className={styles.role}>{phase.role}</span>
                </span>
              </div>

              <p className={styles.cardDesc}>{phase.desc}</p>

              <span className={styles.direction}>{phase.direction}</span>
              <ul className={styles.lines}>
                {phase.lines.map((line) => (
                  <li key={line} className={`${styles.line} ${phase.from === 'user' ? styles.lineUser : styles.lineAi}`}>
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <span className={styles.bridge} aria-hidden="true">
            <ArrowRight />
          </span>
        </div>

        <Reveal className={styles.note}>
          <p>
            처음 작성할 때부터 이후 사업 준비까지, <strong>같은 AI가 계속 내 사업을 이해하고 있습니다.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default AIRolesSection;
