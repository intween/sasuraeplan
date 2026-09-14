import styles from './help-steps.module.scss';

// 핵심 사용 순서.
// 영상이 메인 visual 이므로 본문은 카드가 아니라 얇은 divider 로만 나눈 editorial layout 으로
// 둔다 — 파란 테두리 카드를 여러 개 쌓으면 영상보다 시선을 먼저 가져간다.
export function HelpSteps({ steps }) {
  if (!steps?.length) return null;

  return (
    <ol className={styles.list}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.num} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className={styles.body}>
            <h3 className={styles.title}>
              <span className={styles.srOnly}>{index + 1}단계. </span>
              {step.title}
            </h3>
            {step.description && <p className={styles.desc}>{step.description}</p>}
            {step.example && (
              <p className={styles.example}>
                <span className={styles.exampleLabel}>예</span>“{step.example}”
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default HelpSteps;
