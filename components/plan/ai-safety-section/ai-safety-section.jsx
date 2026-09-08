import { Eye, MessageCircleQuestion, RotateCcw, Wand2 } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './ai-safety-section.module.scss';

const principles = [
  {
    icon: MessageCircleQuestion,
    title: '질문은 답변만',
    desc: '“어떻게 보완하면 좋을까?”와 같은 질문에는 답변만 합니다.',
  },
  {
    icon: Wand2,
    title: '명확한 수정 요청',
    desc: '“추가해줘”, “수정해줘”, “반영해줘”라고 사용자가 요청하면 실제 계획서를 수정합니다.',
  },
  {
    icon: Eye,
    title: '변경사항 확인',
    desc: 'AI가 어떤 부분을 변경했는지 확인할 수 있습니다.',
  },
];

export function AISafetySection() {
  return (
    <section className={styles.section} id="ai-safety">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <h2 className={styles.title}>
            AI가 마음대로
            <br />
            계획서를 수정하지 않습니다.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {principles.map((item, index) => (
            <Reveal key={item.title} className={styles.card} delay={index * 0.06}>
              <span className={styles.icon} aria-hidden="true">
                <item.icon />
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.revert}>
          <span className={styles.revertIcon} aria-hidden="true">
            <RotateCcw />
          </span>
          <p>
            <strong>되돌리기</strong>
            AI가 수정하기 이전 상태로 언제든 되돌릴 수 있습니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default AISafetySection;
