import { FileText, Info, Plus } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './value-section.module.scss';

const versions = [
  { label: '원본', note: '첫 작성' },
  { label: 'v2', note: '고객 검증 보완' },
  { label: 'v3', note: '재무 근거 보완' },
  { label: '예비창업패키지', note: '지원사업 양식' },
  { label: '초기창업패키지', note: '지원사업 양식' },
];

export function ValueSection() {
  return (
    <section className={styles.section} id="value">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <h2 className={styles.title}>
            버전이 늘어나도
            <br />
            같은 사업이라면 하나입니다.
          </h2>
          <p className={styles.desc}>
            사수래AI의 기본 이용 단위는 <strong>사업 아이템 기준 계획서 1건</strong>입니다. <br />
            같은 사업이라면 버전을 아무리 늘려도 계획서 1건 안에서 관리됩니다.
          </p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.mainCard}>
            <div className={styles.cardHead}>
              <span className={styles.cardIcon} aria-hidden="true">
                <FileText />
              </span>
              <div className={styles.cardHeadText}>
                <span className={styles.cardLabel}>계획서 1건</span>
                <h3 className={styles.cardTitle}>친환경 배달용기 사업</h3>
              </div>
              <span className={styles.cardBadge}>이용권 1개</span>
            </div>

            <ul className={styles.versionList}>
              {versions.map((version) => (
                <li key={version.label} className={styles.version}>
                  <span className={styles.versionLabel}>{version.label}</span>
                  <span className={styles.versionNote}>{version.note}</span>
                </li>
              ))}
            </ul>

            <p className={styles.mainNote}>모두 동일한 계획서 1건</p>
          </Reveal>

          <Reveal className={styles.sideCard} delay={0.08}>
            <span className={styles.sideIcon} aria-hidden="true">
              <Plus />
            </span>
            <span className={styles.cardLabel}>새로운 사업 아이템</span>
            <h3 className={styles.sideTitle}>반려동물 구독 서비스</h3>
            <p className={styles.sideDesc}>새로운 사업 아이템을 추가하는 경우에만 새로운 계획서 이용권이 필요합니다.</p>
            <span className={styles.sideBadge}>이용권 1개 추가</span>
          </Reveal>
        </div>

        {/* <Reveal className={styles.note}>
          <Info aria-hidden="true" />
          <p>같은 사업의 버전 관리와 지원사업 양식 변환은 추가 이용권 없이 계속 이용할 수 있습니다.</p>
        </Reveal> */}
      </div>
    </section>
  );
}

export default ValueSection;
