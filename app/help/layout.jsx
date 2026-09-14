import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import styles from './help.module.scss';

// Help 는 랜딩과 같은 header · logo · footer 를 그대로 쓴다.
// 다른 사이트로 넘어온 느낌이 나면 안 되기 때문이다.
// 다른 점은 읽기 폭뿐이다 — 랜딩(1280px)보다 좁은 1040px 로 둔다.
export default function HelpLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
