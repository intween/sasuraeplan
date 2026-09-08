import { Check } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './comparison-section.module.scss';

const rows = [
  { feature: '사업 아이디어 정리', general: '대화', plan: '계획서 작성으로 연결' },
  { feature: '사업계획서 작성', general: '텍스트 생성', plan: '실제 계획서 구조에 작성' },
  { feature: '현재 계획서 맥락', general: '매번 전달', plan: '현재 계획서 기반' },
  { feature: 'VC 분석', general: '별도', plan: '계획서와 연결' },
  { feature: '분석 질문', general: '일반 답변', plan: '실제 VC 분석 결과 기반' },
  { feature: '계획서 수정', general: '복사·붙여넣기', plan: '명확한 요청 시 직접 반영' },
  { feature: '변경사항', general: '별도 관리', plan: '변경사항 확인 및 되돌리기' },
  { feature: '정부지원사업', general: '직접 탐색', plan: '현재 사업과 관련된 공고 확인' },
  { feature: '신규 지원사업', general: '직접 확인', plan: '관련 공고 이메일 안내' },
  { feature: '재분석', general: '별도', plan: '개선 과정과 연결' },
  { feature: '전문가 검토', general: '별도 탐색', plan: '사업계획서 + VC 분석 기반 전문가 피드백' },
];

export function ComparisonSection() {
  return (
    <section className={styles.section} id="comparison">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <h2 className={styles.title}>
            답변으로 끝나지 않고
            <br />실제 사업계획서까지 이어집니다.
          </h2>
        </Reveal>

        <Reveal className={styles.tableWrap} delay={0.06}>
          <table className={styles.table}>
            <caption className={styles.caption}>일반적인 생성형 AI와 플랜 사수의 사용 방식 비교</caption>
            <thead>
              <tr>
                <th scope="col" className={styles.colFeature}>
                  기능
                </th>
                <th scope="col" className={styles.colGeneral}>
                  일반적인 생성형 AI
                </th>
                <th scope="col" className={styles.colPlan}>
                  <span className={styles.planHead}>플랜 사수</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row" className={styles.cellFeature}>
                    {row.feature}
                  </th>
                  <td className={styles.cellGeneral} data-label="일반적인 생성형 AI">
                    {row.general}
                  </td>
                  <td className={styles.cellPlan} data-label="플랜 사수">
                    <span className={styles.planValue}>
                      <Check aria-hidden="true" />
                      {row.plan}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

export default ComparisonSection;
