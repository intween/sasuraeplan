import { ArrowRight, ClipboardCheck, Plus, Repeat, UserCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './consulting-section.module.scss';

const stages = [
  {
    icon: UserCheck,
    label: '컨설팅에서',
    desc: '전문가와 사업 방향과 문제를 확인합니다.',
  },
  {
    icon: ClipboardCheck,
    label: '플랜 사수에',
    desc: '해야 할 일과 받은 피드백을 이어서 관리합니다.',
    accent: true,
  },
  {
    icon: Repeat,
    label: '실행하면서',
    desc: '자료를 모으고 계획서를 수정하고, 필요한 경우 다시 분석합니다.',
  },
];

export function ConsultingSection() {
  return (
    <section className={styles.section} id="consulting">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>After Consulting</span>
          <h2 className={styles.title}>
            컨설팅에서 받은 조언을
            <br />그날로 끝내지 마세요.
          </h2>
          <p className={styles.desc}>컨설턴트가 방향을 잡아줬다면, 플랜 사수는 그 다음 실행을 이어갑니다.</p>
        </Reveal>

        <ol className={styles.flow}>
          {stages.map((stage, index) => (
            <Reveal key={stage.label} as="li" className={styles.stageItem} delay={index * 0.07}>
              <div className={`${styles.stage} ${stage.accent ? styles.stageAccent : ''}`}>
                <span className={styles.stageIcon} aria-hidden="true">
                  <stage.icon />
                </span>
                <h3 className={styles.stageLabel}>{stage.label}</h3>
                <p className={styles.stageDesc}>{stage.desc}</p>
              </div>

              {index < stages.length - 1 && (
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowRight />
                </span>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.summary}>
          <span className={styles.summaryPart}>전문가의 판단</span>
          <span className={styles.summaryPlus} aria-hidden="true">
            <Plus />
          </span>
          <span className={`${styles.summaryPart} ${styles.summaryPartBrand}`}>플랜 사수의 지속적인 실행 관리</span>
        </Reveal>
      </div>
    </section>
  );
}

export default ConsultingSection;
