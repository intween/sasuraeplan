import { Ban, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './ai-fact-section.module.scss';

const notGenerated = ['고객 인터뷰', '고객 수', '매출', '계약', '원가', 'PoC', '실제 테스트 결과', '실제 파트너십', '실제 인증', '조사하지 않은 시장 데이터'];

const flow = [
  { num: '01', text: '고객 검증 근거가 부족합니다.' },
  { num: '02', text: '어떤 고객에게 무엇을 확인해야 하는지 안내' },
  { num: '03', text: '사용자가 실제 조사' },
  { num: '04', text: '실제 결과를 계획서에 반영', accent: true },
];

export function AIFactSection() {
  return (
    <section className={styles.section} id="ai-fact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <h2 className={styles.title}>
              없는 사업 실적은
              <br />
              AI가 만들어내지 않습니다.
            </h2>
            <p className={styles.desc}>다음과 같은 실제 사실은 사용자가 제공하지 않았다면 임의로 생성하지 않습니다. 실제 근거가 필요한 경우, 무엇을 준비해야 하는지 안내합니다.</p>

            <span className={styles.listLabel}>
              <Ban aria-hidden="true" />
              임의로 생성하지 않는 항목
            </span>
            <ul className={styles.chips}>
              {notGenerated.map((item) => (
                <li key={item} className={styles.chip}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.flowCol} delay={0.08}>
            <div className={styles.flowCard}>
              <span className={styles.flowLabel}>
                <ShieldCheck aria-hidden="true" />
                대신 이렇게 안내합니다
              </span>

              <ol className={styles.flow}>
                {flow.map((step) => (
                  <li key={step.num} className={`${styles.step} ${step.accent ? styles.stepAccent : ''}`}>
                    <span className={styles.stepNum}>{step.num}</span>
                    <span className={styles.stepText}>{step.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AIFactSection;
