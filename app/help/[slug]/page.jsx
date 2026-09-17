import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { HelpNav } from '@/components/help/help-nav';
import { HelpVideo } from '@/components/help/help-video';
import { HelpSteps } from '@/components/help/help-steps';
import { HelpNotice } from '@/components/help/help-notice';
import { HelpFlow } from '@/components/help/help-flow';
import { HelpNext } from '@/components/help/help-next';
import { HELP_ROOT_PATH, findHelpGuide, helpGuides } from '@/lib/help-guides';
import styles from '../help.module.scss';

export function generateStaticParams() {
  return helpGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = findHelpGuide(slug);
  if (!guide) return {};

  // data 의 줄바꿈은 화면용이라 메타에서는 한 줄로 편다.
  const description = guide.description.replace(/\n/g, ' ');
  return {
    title: `${guide.title} | 사수래AI 사용가이드`,
    description,
    alternates: { canonical: `${HELP_ROOT_PATH}/${guide.slug}` },
    openGraph: { title: `${guide.title} | 사수래AI 사용가이드`, description, type: 'article', locale: 'ko_KR' },
  };
}

// 가이드 상세 — 5개 가이드가 모두 이 하나의 템플릿을 쓴다.
// 순서는 항상 같다: tab → breadcrumb → 제목 → 영상 → 핵심 사용 순서 → 알아두세요 → 다음 가이드.
// 지원사업 · 전문가 피드백만 steps 대신 sections(영역 + 흐름)을 쓴다.
export default async function HelpGuidePage({ params }) {
  const { slug } = await params;
  const guide = findHelpGuide(slug);
  if (!guide) notFound();

  return (
    <article>
      <HelpNav />

      <nav className={styles.breadcrumb} aria-label="현재 위치">
        <Link className={styles.breadcrumbLink} href={HELP_ROOT_PATH}>
          사용가이드
        </Link>
        <ChevronRight aria-hidden="true" />
        <span className={styles.breadcrumbCurrent}>{guide.title}</span>
      </nav>

      <div className={styles.guideHead}>
        <h1 className={styles.guideTitle}>{guide.title}</h1>
        <p className={styles.guideDesc}>{guide.description}</p>
      </div>

      <HelpVideo video={guide.video} />

      {guide.steps && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>핵심 사용 순서</h2>
          <HelpSteps steps={guide.steps} />
        </section>
      )}

      {guide.sections?.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <p className={styles.sectionDesc}>{section.description}</p>
          <HelpFlow steps={section.flow} />
        </section>
      ))}

      {guide.notices?.map((notice) => (
        <HelpNotice key={notice.title} title={notice.title} body={notice.body} />
      ))}

      <HelpNext nextGuide={guide.nextGuide} />
    </article>
  );
}
