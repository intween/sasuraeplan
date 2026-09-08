import { ArrowRight, Check, ChevronRight, FilePlus2, FileText, Wand2 } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './plan-license-section.module.scss';

const planCards = [
  {
    form: '기본 양식',
    versions: ['v1', 'v2', 'v3'],
    free: ['AI 작성', '직접 수정', '자료 추가', '계획서 개선'],
    result: '1건',
    base: true,
  },
  { form: '예비창업패키지', badge: '새 계획서', result: '+1건' },
  { form: '창업중심대학', badge: '새 계획서', result: '+1건' },
];

const sectionMapping = [
  { from: '문제', to: '01 문제인식' },
  { from: '제품', to: '02 실현가능성' },
  { from: '시장 · BM', to: '03 성장전략' },
  { from: '팀 · 재무', to: '04 팀 구성' },
];

export function PlanLicenseSection() {
  return (
    <section className={styles.section} id="plan-license">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Plan License</span>
          <h2 className={styles.title}>양식별 계획서</h2>
          <p className={styles.message}>같은 양식은 수정 자유, 새 양식은 새 계획서.</p>
        </Reveal>

        <div className={styles.grid}>
          {planCards.map((plan, index) => (
            <Reveal key={plan.form} className={`${styles.card} ${plan.base ? styles.cardBase : ''}`} delay={index * 0.06}>
              <span className={`${styles.formName} ${plan.base ? styles.formNameBase : ''}`}>
                <FileText aria-hidden="true" />
                {plan.form}
              </span>

              {plan.versions && (
                <ul className={styles.versions}>
                  {plan.versions.map((version) => (
                    <li key={version} className={styles.versionChip}>
                      {version}
                    </li>
                  ))}
                </ul>
              )}

              {plan.free && (
                <ul className={styles.freeList}>
                  {plan.free.map((item) => (
                    <li key={item} className={styles.freeChip}>
                      <Check aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {plan.badge && <span className={styles.newBadge}>{plan.badge}</span>}

              <span className={`${styles.result} ${plan.base ? styles.resultSame : styles.resultNew}`}>{plan.result}</span>
            </Reveal>
          ))}
        </div>

        <div className={styles.rules}>
          <Reveal className={`${styles.rule} ${styles.ruleFree}`}>
            <Check aria-hidden="true" />
            <span>
              <strong>동일 양식</strong>
              수정 자유
            </span>
          </Reveal>
          <Reveal className={`${styles.rule} ${styles.ruleNew}`} delay={0.06}>
            <FilePlus2 aria-hidden="true" />
            <span>
              <strong>새 양식</strong>
              계획서 추가
            </span>
          </Reveal>
        </div>

        <div className={styles.detailGrid}>
          <Reveal className={styles.panel}>
            <h3 className={styles.panelTitle}>
              <Wand2 aria-hidden="true" />
              기존 내용 활용
            </h3>
            <p className={styles.panelDesc}>자동 구조화로 다시 입력하지 않습니다.</p>

            <ul className={styles.mapList}>
              {sectionMapping.map((row) => (
                <li key={row.from} className={styles.mapRow}>
                  <span className={styles.mapFrom}>{row.from}</span>
                  <span className={styles.mapArrow} aria-hidden="true">
                    <ChevronRight />
                  </span>
                  <span className={styles.mapTo}>{row.to}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.modalStage} delay={0.08}>
            <div className={styles.modal} role="img" aria-label="새 양식으로 계획서를 만들 때 표시되는 안내 화면 예시">
              <h3 className={styles.modalTitle}>새 계획서</h3>
              <p className={styles.modalDesc}>예비창업패키지</p>

              <div className={styles.modalCompare}>
                <div className={styles.modalRow}>
                  <span className={styles.modalRowLabel}>현재</span>
                  <span className={styles.modalRowItem}>기본 사업계획서</span>
                </div>
                <span className={styles.modalArrow} aria-hidden="true">
                  <ArrowRight />
                </span>
                <div className={`${styles.modalRow} ${styles.modalRowNew}`}>
                  <span className={styles.modalRowLabel}>변경</span>
                  <span className={styles.modalRowItem}>예비창업패키지</span>
                </div>
              </div>

              <p className={styles.modalNotice}>
                <FilePlus2 aria-hidden="true" />새 양식 · 계획서 1건 필요
              </p>

              <div className={styles.modalActions}>
                <span className={styles.modalPrimary}>이용권 구매하기</span>
                <span className={styles.modalSecondary}>취소</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default PlanLicenseSection;
