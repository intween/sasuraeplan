import { MessageSquare, PencilLine, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './authoring-section.module.scss';

const aiQuestions = [
  '어떤 고객의 어떤 문제를 해결하려고 하나요?',
  '고객은 지금 이 문제를 어떻게 해결하고 있나요?',
  '어떤 방식으로 수익을 만들 계획인가요?',
];

export function AuthoringSection() {
  return (
    <section className={styles.section} id="authoring">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>AI Business Plan</span>
          <h2 className={styles.title}>
            아이디어만 있어도,
            <br />
            계획서는 시작할 수 있습니다.
          </h2>
          <p className={styles.desc}>
            AI와 대화하며 사업을 구체화하고, 필요한 내용을 사업계획서로 정리하세요.
            <br />
            이미 작성한 계획서가 있다면 그대로 올려서 시작할 수도 있습니다.
          </p>
        </Reveal>

        <ol className={styles.grid}>
          {/* 01 — AI가 질문 */}
          <Reveal as="li" className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <MessageSquare />
              </span>
              <span className={styles.stepNo}>01</span>
            </div>
            <h3 className={styles.cardTitle}>AI가 질문</h3>
            <p className={styles.cardDesc}>고객, 문제, 수익 모델 등 계획서에 필요한 내용을 단계적으로 묻습니다.</p>

            <div className={styles.example}>
              <span className={styles.exLabel}>AI</span>
              <ul className={styles.askList}>
                {aiQuestions.map((question) => (
                  <li key={question} className={styles.exAsk}>
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* 02 — 사용자가 답변 */}
          <Reveal as="li" className={styles.card} delay={0.06}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <PencilLine />
              </span>
              <span className={styles.stepNo}>02</span>
            </div>
            <h3 className={styles.cardTitle}>사용자가 답변</h3>
            <p className={styles.cardDesc}>내 사업 이야기를 그대로 적으면 됩니다.</p>

            <div className={styles.example}>
              <span className={styles.exLabel}>내 답변</span>
              <p className={styles.exUser}>소규모 음식점이 친환경 포장재를 쓰고 싶어도 가격이 비싸서 못 써.</p>
            </div>
          </Reveal>

          {/* 03 — 계획서 작성 */}
          <Reveal as="li" className={`${styles.card} ${styles.cardAccent}`} delay={0.12}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                <Sparkles />
              </span>
              <span className={styles.stepNo}>03</span>
            </div>
            <h3 className={styles.cardTitle}>계획서 작성</h3>
            <p className={styles.cardDesc}>답변을 사업계획서 구조와 문장으로 정리합니다.</p>

            <div className={styles.example}>
              <span className={`${styles.exLabel} ${styles.exLabelAi}`}>계획서에 작성됨</span>
              <p className={styles.exWritten}>
                소규모 음식점은 친환경 포장재에 대한 수요가 존재하지만, 기존 제품의 높은 단가로 인해 도입에 부담을 겪고 있다.
              </p>
            </div>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}

export default AuthoringSection;
