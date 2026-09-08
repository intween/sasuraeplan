import { ArrowRight, Info, Mail } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { Reveal } from '@/components/reveal';
import styles from './funding-email-section.module.scss';

const programPoints = ['사업화 지원', '예비창업자 대상', '접수 일정 확인 필요'];

export function FundingEmailSection() {
  return (
    <section className={styles.section} id="funding-email">
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <span className={styles.eyebrow}>
              <Mail aria-hidden="true" />
              지원사업 이메일 안내
            </span>

            <h2 className={styles.title}>
              새로운 관련 지원사업이 나오면
              <br />
              이메일로 알려드립니다.
            </h2>

            <p className={styles.desc}>
              플랜 사수에 등록된 사업 정보를 기준으로 관련성이 높은 새로운 정부지원사업이 확인되면 이메일로 안내할 수 있습니다.
            </p>

            <div className={styles.caution}>
              <Info aria-hidden="true" />
              <p>
                지원사업 안내는 현재 등록된 사업 정보와의 관련성을 기준으로 하며, 최종 신청 자격과 일정은 반드시 공식 공고를 확인해야
                합니다.
              </p>
            </div>
          </Reveal>

          <Reveal className={styles.mailCol} delay={0.08}>
            <div className={styles.mail} role="img" aria-label="지원사업 안내 이메일 예시">
              <div className={styles.mailBar}>
                <span className={styles.mailApp}>
                  <Mail aria-hidden="true" />
                  메일
                </span>
                <span className={styles.mailNew}>새 메일</span>
              </div>

              <div className={styles.mailHead}>
                <BrandLogo className={styles.senderLogo} />
                <h3 className={styles.subject}>내 사업과 관련된 새로운 지원사업이 확인되었습니다</h3>
              </div>

              <div className={styles.mailBody}>
                <p className={styles.greeting}>안녕하세요.</p>
                <p className={styles.lead}>등록하신 사업 정보를 기준으로 관련성을 확인해볼 만한 새로운 지원사업이 확인되었습니다.</p>

                <div className={styles.programCard}>
                  <span className={styles.programTag}>새로운 공고</span>
                  <h4 className={styles.programTitle}>2027 예비창업패키지</h4>
                  <ul className={styles.programList}>
                    {programPoints.map((point) => (
                      <li key={point} className={styles.programItem}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className={styles.mailCta}>
                  플랜 사수에서 확인하기
                  <ArrowRight aria-hidden="true" />
                </span>

                <p className={styles.mailFoot}>
                  최종 신청 자격과 일정은 공식 공고를 기준으로 확인해 주세요.
                </p>
              </div>
            </div>

            <span className={styles.note}>안내 이메일 예시</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FundingEmailSection;
