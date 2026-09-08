'use client';

import { ArrowRight, Ban, ShieldAlert, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './ai-trust-section.module.scss';

const notGenerated = ['매출', '고객 수', '인터뷰', '계약', 'PoC', '원가', '시장 데이터'];
const instead = ['근거 확인', '자료 요청', '계획서 반영'];

export function AITrustSection() {
  return (
    <section className={styles.section} id="ai-trust">
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal>
            <span className={styles.eyebrow}>AI Principle</span>
            <h2 className={styles.title}>AI 작성 원칙</h2>
            <p className={styles.message}>없는 사실은 만들지 않습니다.</p>

            <ul className={styles.insteadList}>
              {instead.map((item) => (
                <li key={item} className={styles.insteadChip}>
                  <ShieldCheck aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <ShieldAlert aria-hidden="true" />
                임의 생성하지 않는 항목
              </div>

              <ul className={styles.list}>
                {notGenerated.map((item) => (
                  <li key={item} className={styles.item}>
                    <Ban aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className={styles.guide}>
                <ArrowRight aria-hidden="true" />
                <span>
                  대신 <strong>실행 로드맵</strong>으로 필요한 자료를 안내합니다.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AITrustSection;
