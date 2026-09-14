import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { helpGuidePath } from '@/lib/help-guides';
import styles from './help-next.module.scss';

// 다음 가이드 — 큰 CTA banner 가 아니라 compact link card 로 둔다.
export function HelpNext({ nextGuide }) {
  if (!nextGuide) return null;

  return (
    <Link className={styles.next} href={helpGuidePath(nextGuide.slug)}>
      <span className={styles.text}>
        <span className={styles.eyebrow}>다음 가이드</span>
        <span className={styles.title}>{nextGuide.label}</span>
      </span>
      <ArrowRight className={styles.arrow} aria-hidden="true" />
    </Link>
  );
}

export default HelpNext;
