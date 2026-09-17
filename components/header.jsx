'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import styles from './header.module.scss';

// href 를 루트 기준(`/#...`)으로 둔다. 랜딩(/)에서는 그대로 같은 문서 안 스크롤이고,
// /help 에서는 랜딩의 해당 섹션으로 이동한다.
// page: true 인 항목만 실제 페이지 이동이라 next/link 를 쓴다.
const navItems = [
  { label: 'AI 작성', href: '/#authoring' },
  { label: 'VC 분석', href: '/#vc-analysis' },
  { label: '사수AI', href: '/#plan-assistant' },
  { label: '전문가 피드백', href: '/#expert-review' },
  { label: '이용요금', href: '/#pricing' },
  // 사용가이드는 주요 CTA 가 아니다 — 버튼이 아니라 일반 nav 링크로만 둔다.
  { label: '사용가이드', href: '/help', page: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 모바일 메뉴가 열려 있는 동안 배경 스크롤을 막는다.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  // Esc 로 모바일 메뉴를 닫는다.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="/#top" className={styles.logo} aria-label="사수래AI 홈">
          <BrandLogo className={styles.logoImage} priority />
        </a>

        <nav className={styles.nav} aria-label="주요 메뉴">
          {navItems.map((item) =>
            item.page ? (
              <Link key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className={styles.actions}>
          <a href="/#contact" className={styles.cta}>
            이용 문의하기
          </a>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className={styles.mobilePanel}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? {} : { height: 'auto', opacity: 1 }}
            exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className={styles.mobileInner}>
              {navItems.map((item) =>
                item.page ? (
                  <Link key={item.label} href={item.href} className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </a>
                )
              )}
              <a href="/#contact" className={styles.mobileCta} onClick={() => setIsMenuOpen(false)}>
                이용 문의하기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
