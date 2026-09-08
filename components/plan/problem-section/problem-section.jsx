import { ArrowRight, BarChart3, FileText, PencilRuler } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './problem-section.module.scss';

const problems = [
  {
    num: '01',
    icon: FileText,
    title: '무엇을 써야 할지 모르고',
    desc: '아이디어는 있지만 사업계획서 문장과 구조로 정리하기 어렵습니다.',
  },
  {
    num: '02',
    icon: BarChart3,
    title: '분석을 받아도 다음이 막히고',
    desc: '점수가 왜 낮은지, 어떤 내용을 보완해야 하는지 판단하기 어렵습니다.',
  },
  {
    num: '03',
    icon: PencilRuler,
    title: '새로운 정보가 생겨도',
    desc: '다시 계획서의 어디를 어떻게 고칠지 고민하게 됩니다.',
  },
];

export function ProblemSection() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Why Plan Sasu</span>
          <h2 className={styles.title}>
            쓰는 것도 어렵고,
            <br />
            고치는 건 더 어렵습니다.
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {problems.map((item, index) => (
            <Reveal key={item.num} className={styles.card} delay={index * 0.06}>
              <span className={styles.cardIcon} aria-hidden="true">
                <item.icon />
              </span>
              <span className={styles.cardNum}>{item.num}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.bridge}>
          <ArrowRight aria-hidden="true" />
          <p>
            플랜 사수는 <strong>작성부터 분석, 수정까지</strong> 이 과정을 하나로 연결합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default ProblemSection;
