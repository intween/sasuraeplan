'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import styles from './vc-screenshot.module.scss';

// 실제 VC 분석 결과 화면을 SaaS window 프레임 안에 보여주고,
// 클릭하면 원본 비율 그대로 확대해서 볼 수 있게 한다.
// 확대는 브라우저 기본 <dialog> 를 사용해 별도 의존성을 추가하지 않는다.
export function VCScreenshot({ src, width, height, alt }) {
  const dialogRef = useRef(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <figure className={styles.frame}>
        <div className={styles.bar}>
          <BrandLogo className={styles.barLogo} />
          <span className={styles.barTitle}>VC Full Report</span>
          <button type="button" className={styles.zoomButton} onClick={open}>
            <Maximize2 aria-hidden="true" />
            크게 보기
          </button>
        </div>

        <button type="button" className={styles.imageButton} onClick={open} aria-label="VC 분석 결과 화면 크게 보기">
          <Image
            className={styles.image}
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 1023px) 100vw, 60vw"
          />
        </button>
      </figure>

      {/* 클릭 시 확대 */}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className={styles.dialogInner}>
          <button type="button" className={styles.closeButton} onClick={close} aria-label="닫기">
            <X aria-hidden="true" />
          </button>
          <Image className={styles.dialogImage} src={src} alt={alt} width={width} height={height} sizes="96vw" />
        </div>
      </dialog>
    </>
  );
}

export default VCScreenshot;
