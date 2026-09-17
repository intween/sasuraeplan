'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { helpGuides, helpGuidePath } from '@/lib/help-guides';
import styles from './help-nav.module.scss';

// 가이드가 5개뿐이라 sidebar 를 만들지 않는다.
// 데스크톱은 상단 가로 navigation, 모바일은 가로 스크롤 탭.
export function HelpNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="사용가이드 목록">
      <div className={styles.track}>
        {helpGuides.map((guide) => {
          const href = helpGuidePath(guide.slug);
          const isActive = pathname === href;
          return (
            <Link
              key={guide.slug}
              href={href}
              className={`${styles.item} ${isActive ? styles.active : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {guide.navLabel}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default HelpNav;
