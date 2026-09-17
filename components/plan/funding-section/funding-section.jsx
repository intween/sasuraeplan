import { ExternalLink, Info, Landmark, Mail, MessageSquare, Scale, Search } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './funding-section.module.scss';

const programs = [
  {
    badge: '새로운 지원사업',
    title: '예비창업패키지',
    desc: '현재 사업 단계와 관련성을 검토해볼 수 있는 지원사업입니다.',
    chips: ['예비창업', '사업화', '정부지원'],
    featured: true,
  },
  {
    badge: '관련 공고',
    title: '창업중심대학 예비창업자 과정',
    desc: '등록된 사업 분야와 겹치는 항목이 있습니다.',
    chips: ['예비창업자', '교육·보육'],
  },
];

// 지원사업 확인 → 사수AI 상담 → 계획서 활용
const linkFlow = [
  { icon: Search, label: '내 사업에 맞는 지원사업 확인' },
  { icon: ExternalLink, label: '공고 내용 확인' },
  { icon: MessageSquare, label: '사수AI와 지원 준비', quote: '내 계획서에서 무엇을 보완해야 해?', accent: true },
];

const actions = [
  { icon: ExternalLink, label: '공고 확인' },
  { icon: Scale, label: '내 사업과 비교하기' },
  { icon: MessageSquare, label: '사수AI에게 물어보기' },
];

export function FundingSection() {
  return (
    <section className={styles.section} id="funding">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Funding Opportunity</span>
          <h2 className={styles.title}>
            내 사업에 맞는 지원사업,
            <br />
            직접 찾고 계신가요?
          </h2>
          <p className={styles.desc}>
            관련 공고를 확인하고, 사수AI와 지원 준비까지 이어가세요.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {programs.map((program, index) => (
            <Reveal
              key={program.title}
              className={`${styles.card} ${program.featured ? styles.cardFeatured : ''}`}
              delay={index * 0.06}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardIcon} aria-hidden="true">
                  <Landmark />
                </span>
                <span className={`${styles.cardBadge} ${program.featured ? styles.cardBadgeFeatured : ''}`}>{program.badge}</span>
              </div>

              <h3 className={styles.cardTitle}>{program.title}</h3>
              <p className={styles.cardDesc}>{program.desc}</p>

              <ul className={styles.chips}>
                {program.chips.map((chip) => (
                  <li key={chip} className={styles.chip}>
                    {chip}
                  </li>
                ))}
              </ul>

              {program.featured && (
                <ul className={styles.actions}>
                  {actions.map((action) => (
                    <li key={action.label} className={styles.action}>
                      <action.icon aria-hidden="true" />
                      {action.label}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <Reveal className={styles.matchCard} delay={0.12}>
            <span className={styles.matchLabel}>
              <Search aria-hidden="true" />
              매칭 기준
            </span>
            <dl className={styles.matchList}>
              <div className={styles.matchRow}>
                <dt>사업 단계</dt>
                <dd>예비창업</dd>
              </div>
              <div className={styles.matchRow}>
                <dt>지역</dt>
                <dd>서울</dd>
              </div>
              <div className={styles.matchRow}>
                <dt>분야</dt>
                <dd>친환경 · 제조</dd>
              </div>
            </dl>
            <p className={styles.matchNote}>계획서에 등록된 사업 정보 기준</p>
          </Reveal>
        </div>

        {/* Hidden: overlaps with the section title — 지원사업 준비 안내 제목
        <Reveal className={styles.linkHead}>
          <h3 className={styles.linkTitle}>
            지원할 사업을 찾았다면
            <br />
            현재 계획서에서 바로 준비하세요.
          </h3>
        </Reveal>
        */}

        <ol className={styles.linkFlow}>
          {linkFlow.map((step, index) => (
            <Reveal key={step.label} as="li" className={styles.linkItem} delay={index * 0.05}>
              <div className={`${styles.linkCard} ${step.accent ? styles.linkCardAccent : ''}`}>
                <span className={styles.linkIcon} aria-hidden="true">
                  <step.icon />
                </span>
                <span className={styles.linkLabel}>{step.label}</span>
                {step.quote && <span className={styles.linkQuote}>“{step.quote}”</span>}
              </div>
            </Reveal>
          ))}
        </ol>

        {/* 지원사업 이메일 안내는 별도 섹션 대신 보조 문구로 노출한다. */}
        <Reveal className={styles.linkNote}>
          <p>
            <Mail aria-hidden="true" />
            관련된 새로운 지원사업이 등록되면 <strong>이메일로 알려드립니다.</strong>
          </p>
        </Reveal>

        <Reveal className={styles.disclaimer}>
          <Info aria-hidden="true" />
          <p>
            최종 신청 가능 여부와 일정은 해당 지원사업의 공식 공고를 기준으로 확인해야 합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default FundingSection;
