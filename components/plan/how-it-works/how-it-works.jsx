import { BarChart3, Landmark, MessageSquare, PencilLine, RefreshCw, Sparkles, Wand2 } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './how-it-works.module.scss';

const steps = [
  {
    no: '01',
    icon: Sparkles,
    title: 'AI와 작성 또는 기존 계획서 업로드',
    desc: '아이디어 단계라면 AI와 처음부터 작성하고, 기존 계획서가 있다면 그대로 업로드합니다.',
    accent: true,
  },
  {
    no: '02',
    icon: PencilLine,
    title: '계획서 작성·수정',
    desc: 'AI와 대화하면서 부족한 내용을 채우고 사업계획서 구조로 정리합니다.',
  },
  {
    no: '03',
    icon: BarChart3,
    title: '첫 VC 분석',
    desc: '현재 계획서를 VC 관점에서 Full Report로 평가합니다.',
  },
  {
    no: '04',
    icon: MessageSquare,
    title: '플랜비서와 분석 상담',
    desc: '왜 이런 평가가 나왔는지, 어떤 부분을 보완해야 하는지 자유롭게 질문합니다.',
  },
  {
    no: '05',
    icon: Wand2,
    title: 'AI와 계획서 개선',
    desc: '새로운 정보가 생기면 “이 내용을 계획서에 넣어줘”라고 말해 실제 사업계획서를 수정합니다.',
    accent: true,
  },
  {
    no: '06',
    icon: Landmark,
    title: '관련 정부지원사업 확인',
    desc: '현재 사업 아이템과 관련성이 높은 정부지원사업을 확인합니다.',
  },
  {
    no: '07',
    icon: RefreshCw,
    title: '필요하면 재분석',
    desc: '계획서를 개선한 뒤 새로운 평가가 필요하면 다시 VC 분석합니다.',
    optional: true,
  },
];

export function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.title}>
            작성부터 분석,
            <br />
            개선까지 하나의 흐름으로.
          </h2>
        </Reveal>

        <ol className={styles.grid}>
          {steps.map((step, index) => (
            <Reveal
              key={step.no}
              as="li"
              className={`${styles.step} ${step.accent ? styles.stepAccent : ''}`}
              delay={index * 0.05}
            >
              <div className={styles.stepTop}>
                <span className={styles.stepIcon} aria-hidden="true">
                  <step.icon />
                </span>
                <span className={styles.stepNo}>
                  STEP {step.no}
                  {step.optional && <span className={styles.stepFlag}>선택</span>}
                </span>
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
