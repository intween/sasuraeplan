import { HelpCard } from '@/components/help/help-card';
import { HELP_HOME, helpGuides } from '@/lib/help-guides';
import styles from './help.module.scss';

export const metadata = {
  title: '사용가이드 | 사수래AI',
  description: '사수래AI를 처음 시작하는 방법부터 VC 분석과 사수AI 활용까지, 영상과 핵심 사용 순서로 빠르게 확인하세요.',
  alternates: { canonical: '/help' },
  openGraph: {
    title: '사용가이드 | 사수래AI',
    description: '처음 시작하는 방법부터 VC 분석과 사수AI 활용까지 빠르게 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

// 사용가이드 메인.
// 문서 사이트가 아니라 짧은 튜토리얼 허브다 — Hero 는 작게, 카드는 5개만,
// 제품 목업과 FAQ 는 두지 않는다. 콘텐츠가 5개뿐이라 검색도 넣지 않는다.
// 카드 배치는 위 2개(처음 시작하기 · VC 분석), 아래 3개로 고정한다 — help.module.scss 의 .cardGrid 참고.
export default function HelpPage() {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>{HELP_HOME.title}</h1>
        <p className={styles.heroDesc}>{HELP_HOME.description}</p>
      </div>

      <div className={styles.cardGrid}>
        {helpGuides.map((guide) => (
          <HelpCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </>
  );
}
