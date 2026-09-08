import { ArrowRight, Check, Sparkles, Upload } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './start-mode-section.module.scss';

const modes = [
  {
    icon: Sparkles,
    eyebrow: '아이디어부터 시작',
    title: 'AI와 처음부터 작성',
    desc: '아이디어를 입력하면 AI가 사업에 필요한 내용을 질문하고, 답변을 사업계획서 구조로 정리합니다.',
    cta: 'AI와 작성 시작',
    featured: true,
  },
  {
    icon: Upload,
    eyebrow: '이미 계획서가 있다면',
    title: '기존 계획서 업로드',
    desc: '현재 작성된 사업계획서를 등록하고 분석과 개선을 시작합니다.',
    cta: '계획서 업로드',
  },
];

export function StartModeSection() {
  return (
    <section className={styles.section} id="start">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <h2 className={styles.title}>지금 상태 그대로 시작하세요.</h2>
        </Reveal>

        <div className={styles.grid}>
          {modes.map((mode, index) => (
            <Reveal
              key={mode.title}
              className={`${styles.card} ${mode.featured ? styles.cardFeatured : ''}`}
              delay={index * 0.07}
            >
              <span className={styles.cardIcon} aria-hidden="true">
                <mode.icon />
              </span>

              <span className={styles.cardEyebrow}>{mode.eyebrow}</span>
              <h3 className={styles.cardTitle}>{mode.title}</h3>
              <p className={styles.cardDesc}>{mode.desc}</p>

              <a href="#contact" className={mode.featured ? styles.ctaPrimary : styles.ctaSecondary}>
                {mode.cta}
                <ArrowRight aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.same}>
          <Check aria-hidden="true" />
          <p>
            두 방식 모두 <strong>동일한 계획서 1건</strong>으로 이용합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default StartModeSection;
