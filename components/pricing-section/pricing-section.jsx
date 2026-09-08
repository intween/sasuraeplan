import { Check, FilePlus2 } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './pricing-section.module.scss';

const plans = [
  {
    name: 'STANDARD',
    price: '50,000원',
    items: [
      { label: '계획서', value: '1건' },
      { label: '첫 VC 분석', value: '포함' },
      { label: '재분석', value: '없음', muted: true },
      { label: '전문가 검증', value: '별도', muted: true },
    ],
  },
  {
    name: 'PRO',
    price: '100,000원',
    featured: true,
    items: [
      { label: '계획서', value: '1건' },
      { label: '첫 VC 분석', value: '포함' },
      { label: '재분석', value: '1회', brand: true },
      { label: '전문가 검증', value: '별도', muted: true },
    ],
  },
  {
    name: 'PREMIUM',
    price: '200,000원',
    items: [
      { label: '계획서', value: '1건' },
      { label: '첫 VC 분석', value: '포함' },
      { label: '재분석', value: '2회', brand: true },
      { label: '전문가 검증', value: '1회', brand: true },
    ],
  },
];

const commonFeatures = ['AI 작성', '직접 수정', '계획서 개선', '자료 추가', '실행 로드맵', '지원사업 매칭'];

export function PricingSection() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.title}>이용 플랜</h2>
          <p className={styles.message}>계획서 1건 기준.</p>
        </Reveal>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <Reveal key={plan.name} className={`${styles.card} ${plan.featured ? styles.cardFeatured : ''}`} delay={index * 0.06}>
              {plan.featured && <span className={styles.badge}>추천</span>}

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.price}>{plan.price}</p>

              <ul className={styles.keyList}>
                {plan.items.map((item) => (
                  <li key={item.label} className={styles.keyRow}>
                    <span className={styles.keyName}>{item.label}</span>
                    <span className={`${styles.keyValue} ${item.muted ? styles.keyValueMuted : ''} ${item.brand ? styles.keyValueBrand : ''}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={plan.featured ? styles.ctaFeatured : styles.cta}>
                문의하기
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.common}>
          <span className={styles.commonLabel}>기본 기능</span>
          <ul className={styles.commonList}>
            {commonFeatures.map((item) => (
              <li key={item} className={styles.commonChip}>
                <Check aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className={styles.note}>
            <FilePlus2 aria-hidden="true" />새 지원사업 양식은 별도 계획서로 관리됩니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default PricingSection;
