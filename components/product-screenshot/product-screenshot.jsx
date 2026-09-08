import Image from 'next/image';
import { BrandLogo } from '@/components/brand-logo';
import styles from './product-screenshot.module.scss';

// 실제 Screenshot 이 있으면 Browser Frame 안에 넣어 보여주고,
// 없으면 fallback 으로 전달된 Product Mockup 컴포넌트를 렌더한다.
// 어느 쪽이든 "서비스 화면 예시" 표시를 함께 노출한다.
// 실제 캡처 경로는 lib/platform-images.js 에서 관리한다.
export function ProductScreenshot({ src, alt, title, width = 1600, height = 1000, priority = false, fallback = null }) {
  return (
    <div className={styles.wrap}>
      {src ? (
        <div className={styles.frame}>
          <div className={styles.bar}>
            <BrandLogo className={styles.barLogo} />
            {title && <span className={styles.barTitle}>{title}</span>}
          </div>

          <Image
            className={styles.image}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      ) : (
        fallback
      )}

      <span className={styles.note}>서비스 화면 예시</span>
    </div>
  );
}

export default ProductScreenshot;
