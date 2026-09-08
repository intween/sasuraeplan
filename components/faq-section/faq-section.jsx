'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './faq-section.module.scss';

const faqs = [
  {
    question: '계획서 수정 시 추가 구매가 필요한가요?',
    answer: '아니요.\n동일 양식의 수정과 개선은 기존 계획서에서 계속 가능합니다.',
  },
  {
    question: '다른 지원사업 양식도 같은 계획서인가요?',
    answer: '아니요.\n양식이 달라지면 새로운 계획서로 관리됩니다.',
  },
  {
    question: '지원사업 검색도 추가 구매인가요?',
    answer: '아니요.\n지원사업 검색과 매칭은 플랜 기본 기능입니다.',
  },
  {
    question: '기존 내용은 다시 입력해야 하나요?',
    answer: '아니요.\n기존 사업 내용을 새 양식에 활용할 수 있습니다.',
  },
  {
    question: '재분석은 필수인가요?',
    answer: '아니요.\n새로운 VC 평가가 필요한 경우에만 사용합니다.',
  },
  {
    question: 'AI가 실적을 만들어주나요?',
    answer: '아니요.\n제공되지 않은 실제 사실은 임의 생성하지 않습니다.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.title}>자주 묻는 질문</h2>
        </Reveal>

        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-trigger-${index}`;
            const panelId = `${baseId}-faq-panel-${index}`;

            return (
              <div key={faq.question} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {faq.question}
                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                      <ChevronDown />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.panel}
                      initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? {} : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <p className={styles.answer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
