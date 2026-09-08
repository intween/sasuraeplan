import { ArrowRight, Check, GraduationCap } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './partner-section.module.scss';

const benefits = [
  '컨설팅 전 계획서 및 VC 분석 준비',
  '컨설팅 후 실행 과제 관리',
  '피드백 이후 계획서 수정',
  '지원사업 준비 지속',
  '다음 상담 시 변화 확인',
];

export function PartnerSection() {
  return (
    <section className={styles.section} id="partner">
      <div className={styles.container}>
        <Reveal className={styles.card}>
          <div className={styles.copy}>
            <span className={styles.badge}>
              <GraduationCap aria-hidden="true" />
              창업교육 · 컨설팅 기관
            </span>

            <h2 className={styles.title}>창업교육·컨설팅을 운영하고 계신가요?</h2>
            <p className={styles.desc}>
              수강생이 컨설팅 이후에도 스스로 사업 준비를 이어갈 수 있도록 플랜 사수를 활용할 수 있습니다.
            </p>

            <a href="#contact" className={styles.cta}>
              교육·컨설팅 연계 문의
              <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li key={benefit} className={styles.benefit}>
                <Check aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default PartnerSection;
