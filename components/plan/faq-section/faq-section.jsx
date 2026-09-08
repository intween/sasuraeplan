'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './faq-section.module.scss';

const faqs = [
  {
    question: '아이디어만 있어도 시작할 수 있나요?',
    answer:
      '네. 아이디어 단계부터 AI의 질문에 답하며 사업계획서를 만들어갈 수 있습니다. AI가 없는 내용을 지어내는 것이 아니라, 답변한 사업 정보를 계획서 구조로 정리합니다.',
  },
  {
    question: '기존 사업계획서도 분석할 수 있나요?',
    answer:
      '네. 이미 작성한 사업계획서를 업로드하면 그대로 VC 관점 분석을 받을 수 있습니다. 계획서가 완벽하지 않아도 현재 상태 기준으로 강점과 빈틈을 확인할 수 있습니다.',
  },
  {
    question: 'AI가 없는 사업 내용을 임의로 만들어내나요?',
    answer:
      '아니요. 고객 인터뷰, 매출, 계약, 원가, PoC 등 실제 근거는 임의로 생성하지 않습니다. 계획서 수정도 “추가해줘”, “반영해줘”처럼 명확히 요청한 경우에만 이루어지고, 단순한 질문은 계획서를 바꾸지 않습니다.',
  },
  {
    question: '분석 결과를 실제 계획서에 반영할 수 있나요?',
    answer:
      '네. 플랜비서에게 분석 결과를 물어보고 보완할 내용을 정리한 뒤, 그대로 사업계획서에 반영할 수 있습니다. 기존 분석 결과는 분석 당시 기준으로 그대로 유지되며, 새로운 평가가 필요하면 재분석을 진행합니다.',
  },
  {
    question: '전문가 피드백도 받을 수 있나요?',
    answer:
      '전문가가 사업계획서 원본과 VC 분석 결과를 함께 검토한 뒤, 피드백이 작성된 검토본을 제공합니다. 전문가가 현재 계획서를 직접 수정하지는 않으며, 제공 범위는 사업 분야와 검토 범위에 따라 상담 후 안내드립니다.',
  },
  {
    question: '이용 비용은 어떻게 되나요?',
    answer: '이용 범위에 따라 협의 후 안내드립니다.',
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
                <h3 className={styles.itemHeading}>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className={styles.question}>{faq.question}</span>
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
