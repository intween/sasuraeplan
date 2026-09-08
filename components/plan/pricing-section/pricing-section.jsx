import { Check } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './pricing-section.module.scss';

/* Hidden: 요금제 카드는 문의형 단일 상품으로 대체 — 코드는 유지한다.
const plans = [
  {
    name: 'STANDARD',
    price: '50,000',
    desc: 'AI 작성 또는 기존 계획서 업로드부터 첫 VC 분석까지',
    specs: [
      { label: '계획서', value: '1건' },
      { label: '첫 VC Full 분석', value: '포함', brand: true },
      { label: 'VC 재분석', value: '미포함', muted: true },
      { label: '전문가 검토', value: '별도 구매', muted: true },
    ],
    inherit: '기본 기능 전체 포함',
  },
  {
    name: 'PRO',
    price: '100,000',
    badge: '추천',
    featured: true,
    desc: '첫 분석 이후 개선하고 한 번 더 VC 평가까지',
    specs: [
      { label: '계획서', value: '1건' },
      { label: '첫 VC Full 분석', value: '포함', brand: true },
      { label: 'VC 재분석', value: '1회', brand: true },
      { label: '전문가 검토', value: '별도 구매', muted: true },
    ],
    inherit: 'STANDARD의 모든 기능 포함',
  },
  {
    name: 'PREMIUM',
    price: '200,000',
    desc: 'AI와 사업계획서를 반복적으로 분석·개선하고, 마지막에는 VC 분석 결과를 참고한 실제 전문가의 세밀한 피드백까지 받을 수 있는 플랜',
    specs: [
      { label: '계획서', value: '1건' },
      { label: '첫 VC Full 분석', value: '포함', brand: true },
      { label: 'VC 재분석', value: '총 2회', brand: true },
      { label: '전문가 검토', value: '1회 포함', brand: true },
    ],
    inherit: 'PRO 기본 기능 포함',
  },
];

const notes = [
  '첫 VC Full 분석은 모든 플랜에 포함됩니다.',
  '직접 수정, AI 수정, 계획서 개선, 자료 추가, 플랜비서 대화는 별도 횟수로 차감하지 않습니다.',
  '재분석은 결과가 정상 생성된 경우에만 횟수를 사용합니다.',
];
*/

const commonFeatures = [
  'AI 사업계획서 작성',
  '기존 계획서 업로드',
  'VC 관점 분석',
  '플랜비서 · 계획서 수정',
  '정부지원사업 확인',
  '전문가 피드백',
];

export function PricingSection() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.title}>
            필요한 만큼만,
            <br />
            상담 후 안내드립니다.
          </h2>
          <p className={styles.desc}>
            서비스 이용 범위와 전문가 피드백 여부에 따라 달라지기 때문에, 문의 주시면 사업 상황에 맞게 안내드립니다.
          </p>
        </Reveal>

        <div className={styles.single}>
          <Reveal className={`${styles.card} ${styles.cardFeatured}`}>
            <h3 className={styles.planName}>이용 요금</h3>

            <p className={styles.price}>협의</p>

            <p className={styles.planDesc}>사업 상황과 필요한 이용 범위를 알려주시면 확인 후 안내드립니다.</p>

            <ul className={`${styles.commonList} ${styles.singleList}`}>
              {commonFeatures.map((item) => (
                <li key={item} className={styles.commonChip}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className={styles.ctaFeatured}>
              이용 문의하기
            </a>
          </Reveal>
        </div>

        {/* Hidden: 요금제 비교 · 공통 포함 · 안내 문구는 문의형 단일 상품으로 대체
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.cardFeatured : ''}`}
              delay={index * 0.06}
            >
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}

              <h3 className={styles.planName}>{plan.name}</h3>

              <p className={styles.price}>
                {plan.price}
                <span className={styles.priceUnit}>원</span>
              </p>

              <p className={styles.planDesc}>{plan.desc}</p>

              {plan.inherit && <p className={styles.inherit}>{plan.inherit}</p>}

              <ul className={styles.specList}>
                {plan.specs.map((spec) => (
                  <li key={spec.label} className={styles.specRow}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span
                      className={`${styles.specValue} ${spec.muted ? styles.specValueMuted : ''} ${
                        spec.brand ? styles.specValueBrand : ''
                      }`}
                    >
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={plan.featured ? styles.ctaFeatured : styles.cta}>
                {plan.name} 시작하기
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.common}>
          <span className={styles.commonLabel}>모든 플랜 공통 포함</span>
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
          <ul className={styles.notes}>
            {notes.map((note) => (
              <li key={note} className={styles.note}>
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
        */}
      </div>
    </section>
  );
}

export default PricingSection;
