import Link from 'next/link';
import { ArrowRight, Building2, Compass, LineChart, Rocket, Sparkles } from 'lucide-react';
import { helpGuidePath } from '@/lib/help-guides';
import styles from './help-card.module.scss';

// data 는 아이콘 이름만 들고 있고, 실제 컴포넌트 매핑은 화면 쪽에서 한다.
const ICONS = {
  rocket: Rocket,
  chart: LineChart,
  sparkles: Sparkles,
  building: Building2,
  compass: Compass,
};

// Help 메인의 큰 카드. shadow 는 쓰지 않고 hover 에서만 테두리를 브랜드 컬러로 바꾼다.
export function HelpCard({ guide }) {
  const Icon = ICONS[guide.icon] ?? Rocket;

  return (
    <Link className={styles.card} href={helpGuidePath(guide.slug)}>
      <span className={styles.iconBox}>
        <Icon aria-hidden="true" />
      </span>
      <h2 className={styles.title}>{guide.cardTitle}</h2>
      <p className={styles.desc}>{guide.cardDescription}</p>
      <span className={styles.action}>
        가이드 보기
        <ArrowRight aria-hidden="true" />
      </span>
    </Link>
  );
}

export default HelpCard;
