import { BrandLogo } from '@/components/brand-logo';
import styles from './footer.module.scss';

const serviceLinks = [
  { label: '서비스 소개', href: '#how-it-works' },
  { label: 'VC 분석', href: '#vc-analysis' },
  { label: '플랜비서', href: '#plan-assistant' },
  { label: '지원사업', href: '#funding' },
  { label: '지원사업 이메일 안내', href: '#funding-email' },
];

const supportLinks = [
  { label: '이용요금', href: '#pricing' },
  { label: '전문가 검토', href: '#expert-review' },
  { label: 'FAQ', href: '#faq' },
  { label: '문의하기', href: '#contact' },
];

// 개인정보처리방침 / 이용약관은 아직 실제 페이지가 없어 링크를 만들지 않는다.
// 문서가 준비되면 아래 배열에 href 를 추가하고 <span> 을 <a> 로 바꾼다.
const legalItems = ['개인정보처리방침', '이용약관'];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <BrandLogo className={styles.brandLogo} />
            <p className={styles.tagline}>AI 사업계획서 작성부터 VC 분석과 계획서 개선까지 이어가는 사업 준비 플랫폼</p>
          </div>

          <nav className={styles.col} aria-label="서비스">
            <span className={styles.colTitle}>서비스</span>
            <ul className={styles.linkList}>
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a className={styles.link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label="이용 안내">
            <span className={styles.colTitle}>이용 안내</span>
            <ul className={styles.linkList}>
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a className={styles.link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} 플랜 사수. All rights reserved.</p>
          <ul className={styles.legal}>
            {legalItems.map((label) => (
              <li key={label} className={styles.legalItem}>
                {label}
                <span className={styles.legalNote}>준비 중</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
