'use client';

import { ExternalLink, FilePlus2, Info, Landmark } from 'lucide-react';
import { ProductScreenshot } from '@/components/product-screenshot';
import { Reveal } from '@/components/reveal';
import { platformImages } from '@/lib/platform-images';
import styles from './government-support-section.module.scss';

// 데모용 목업 데이터. 실제 지원사업 공고 API 연동 전까지 정적 값으로 표시한다.
const supportPrograms = [
  { id: 1, title: '예비창업패키지', status: '지원 가능', category: '사업화', selected: true },
  { id: 2, title: '창업중심대학', status: '지원 가능', category: '창업지원' },
  { id: 3, title: '지역 창업지원사업', status: '조건 확인', category: '지역 사업화', warn: true },
];

const myConditions = [
  { key: '사업 단계', value: '예비창업' },
  { key: '지역', value: '서울' },
  { key: '분야', value: '친환경 / 제조' },
];

const programDetail = [
  { key: '분야', value: '사업화' },
  { key: '대상', value: '예비창업자' },
  { key: '접수', value: '공고 확인' },
];

export const targetFormSections = [
  { num: '01', label: '문제인식' },
  { num: '02', label: '실현가능성' },
  { num: '03', label: '성장전략' },
  { num: '04', label: '팀 구성' },
];

export function GovernmentSupportSection() {
  return (
    <section className={styles.section} id="government-support">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Support Programs</span>
          <h2 className={styles.title}>지원사업 매칭</h2>
          <p className={styles.message}>내 사업에 맞는 창업지원사업.</p>
        </Reveal>

        <Reveal delay={0.08}>
          {/* TODO: 실제 지원사업 매칭 Screenshot 으로 교체 (lib/platform-images.js) */}
          <ProductScreenshot
            src={platformImages.governmentSupport}
            alt="사수래AI 지원사업 매칭 화면"
            title="지원사업 매칭"
            fallback={
          <div className={styles.product} role="img" aria-label="지원사업 매칭 화면 예시">
            <div className={styles.productBar}>
              지원사업 매칭
              <span className={styles.productChip}>친환경 배달용기</span>
            </div>

            <div className={styles.panes}>
              <div className={styles.pane}>
                <span className={styles.paneLabel}>사업 조건</span>
                <div className={styles.conditions}>
                  {myConditions.map((item) => (
                    <div key={item.key} className={styles.condition}>
                      <span className={styles.conditionKey}>{item.key}</span>
                      <span className={styles.conditionValue}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.conditionNote}>계획서 정보 기준</p>
              </div>

              <div className={styles.pane}>
                <span className={styles.paneLabel}>지원사업</span>
                <ul className={styles.programs}>
                  {supportPrograms.map((program) => (
                    <li key={program.id} className={`${styles.program} ${program.selected ? styles.programSelected : ''}`}>
                      <span className={styles.programIcon} aria-hidden="true">
                        <Landmark />
                      </span>
                      <span className={styles.programBody}>
                        <span className={styles.programTitle}>{program.title}</span>
                        <span className={styles.programCategory}>{program.category}</span>
                      </span>
                      <span className={`${styles.programStatus} ${program.warn ? styles.programStatusWarn : ''}`}>{program.status}</span>
                    </li>
                  ))}
                </ul>
                <p className={styles.programsNote}>공고별 조건 확인 필요</p>
              </div>

              <div className={styles.pane}>
                <span className={styles.paneLabel}>공고</span>
                <div className={styles.detailCard}>
                  <h3 className={styles.detailTitle}>예비창업패키지</h3>
                  <dl className={styles.detailList}>
                    {programDetail.map((item) => (
                      <div key={item.key} className={styles.detailRow}>
                        <dt className={styles.detailKey}>{item.key}</dt>
                        <dd className={styles.detailValue}>{item.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <span className={styles.formPreviewLabel}>양식</span>
                  <ul className={styles.formList}>
                    {targetFormSections.map((item) => (
                      <li key={item.num} className={styles.formItem}>
                        <span className={styles.formNum}>{item.num}</span>
                        {item.label}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.detailActions}>
                    <span className={styles.detailGhost}>
                      <ExternalLink aria-hidden="true" />
                      공고 보기
                    </span>
                    <span className={styles.detailCta}>
                      <FilePlus2 aria-hidden="true" />이 양식으로 만들기
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className={styles.footNote}>
              <Info aria-hidden="true" />
              <span>
                <strong>지원사업 검색과 매칭은 플랜 기본 기능입니다.</strong>
              </span>
            </p>
          </div>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}

export default GovernmentSupportSection;
