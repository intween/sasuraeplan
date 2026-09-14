import { Info } from 'lucide-react';
import styles from './help-notice.module.scss';

// 알아두세요 / 중요 안내.
// 운영정책 전문을 그대로 옮기지 않고, 사용자가 오해하기 쉬운 핵심 한두 줄만 담는다.
export function HelpNotice({ title = '알아두세요', body = [] }) {
  if (!body.length) return null;

  return (
    <aside className={styles.notice}>
      <p className={styles.head}>
        <Info aria-hidden="true" />
        {title}
      </p>
      <div className={styles.body}>
        {body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </aside>
  );
}

export default HelpNotice;
