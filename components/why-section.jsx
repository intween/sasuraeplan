import { ChevronRight, FileText, Gauge, Landmark, ShieldCheck, Wrench } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './why-section.module.scss';

const steps = [
  { icon: FileText, no: '01', title: '계획서 작성', caption: '아이디어 · 기존 계획서' },
  { icon: Gauge, no: '02', title: 'VC 분석', caption: 'VC 리포트' },
  { icon: Wrench, no: '03', title: '계획서 개선', caption: '보완 영역 · 실행 로드맵', ai: true },
  { icon: Landmark, no: '04', title: '지원사업', caption: '매칭 · 양식 확인' },
  { icon: ShieldCheck, no: '05', title: '전문가 검증', caption: '코멘트 · 검토본' },
];

export function WhySection() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Service Flow</span>
          <h2 className={styles.title}>하나의 흐름으로.</h2>
        </Reveal>

        <div className={styles.flow}>
          {steps.map((step, index) => (
            <Reveal key={step.title} className={styles.step} delay={index * 0.05}>
              <span className={`${styles.stepIcon} ${step.ai ? styles.stepIconAi : ''}`}>
                <step.icon aria-hidden="true" />
              </span>
              <span className={styles.stepNumber}>{step.no}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.caption}</p>
              {index < steps.length - 1 && (
                <span className={styles.arrow} aria-hidden="true">
                  <ChevronRight />
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
