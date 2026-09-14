import { ArrowRight } from 'lucide-react';
import styles from './help-flow.module.scss';

// "A → B → C" 형태의 짧은 흐름. 단계 카드가 아니라 한 줄 요약이다.
export function HelpFlow({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <ol className={styles.flow}>
      {steps.map((step, index) => (
        <li key={step} className={styles.item}>
          <span className={styles.label}>{step}</span>
          {index < steps.length - 1 && <ArrowRight className={styles.arrow} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export default HelpFlow;
