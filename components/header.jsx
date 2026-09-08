'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import styles from './header.module.scss';

const navItems = [
  { label: 'AI 작성', href: '#authoring' },
  { label: 'VC 분석', href: '#vc-analysis' },
  { label: '플랜비서', href: '#plan-assistant' },
  { label: '전문가 피드백', href: '#expert-review' },
  { label: '지원사업', href: '#funding' },
  { label: '이용요금', href: '#pricing' },
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
        <a href="#top" className={styles.logo} aria-label="플랜 사수 홈">
          <BrandLogo className={styles.logoImage} priority />
        </a>

        <nav className={styles.nav} aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
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
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className={styles.mobileCta} onClick={() => setIsMenuOpen(false)}>
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
