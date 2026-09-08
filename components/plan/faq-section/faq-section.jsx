'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './faq-section.module.scss';

const faqs = [
  {
    question: 'AI와 사업계획서를 처음부터 작성할 수 있나요?',
    answer:
      '네. 아이디어 단계부터 AI의 질문에 답하며 사업계획서를 작성할 수 있습니다. 기존 사업계획서가 있다면 업로드해서 시작할 수도 있습니다.',
  },
  {
    question: '계획서 1건은 무엇인가요?',
    answer: '사업 아이템 1개를 의미합니다. 동일 사업의 v2, v3 및 정부지원사업용 파생 버전은 같은 계획서로 관리합니다.',
  },
  {
    question: '첫 VC 분석은 별도 결제인가요?',
    answer: '아니요. 모든 플랜의 계획서 1건에는 첫 VC 분석이 포함됩니다.',
  },
  {
    question: '플랜비서에게 수정해달라고 하면 실제 계획서가 바뀌나요?',
    answer:
      '“추가해줘”, “수정해줘”, “반영해줘”처럼 사용자가 명확하게 요청한 경우 실제 계획서에 반영할 수 있습니다. 단순한 질문은 자동으로 계획서를 변경하지 않습니다.',
  },
  {
    question: 'AI가 없는 실적이나 데이터를 만들어주나요?',
    answer: '아니요. 고객 인터뷰, 매출, 계약, 원가, PoC 등의 실제 근거는 임의로 생성하지 않습니다.',
  },
  {
    question: '계획서를 수정하면 VC 점수도 자동으로 바뀌나요?',
    answer:
      '아닙니다. 기존 VC 분석은 분석 당시 계획서 기준입니다. 새로운 평가가 필요한 경우 재분석을 진행해야 합니다.',
  },
  {
    question: '정부지원사업은 어떻게 알려주나요?',
    answer: '등록된 사업 정보와 관련성이 높은 새로운 지원사업이 확인되면 이메일로 안내할 수 있습니다.',
  },
  {
    question: '이메일을 받으면 신청할 수 있다는 의미인가요?',
    answer: '아닙니다. 사업과의 관련성을 기준으로 안내하며, 최종 신청 자격과 일정은 공식 공고를 확인해야 합니다.',
  },
  {
    question: '전문가 검토는 어떻게 진행되나요?',
    answer:
      '전문가가 현재 사업계획서 원본과 VC 분석 결과를 함께 검토한 뒤, 피드백이 작성된 전문가 검토본을 제공합니다.',
  },
  {
    question: '전문가가 내 사업계획서를 직접 수정하나요?',
    answer:
      '아닙니다. 전문가의 역할은 원본 사업계획서를 읽고 세밀한 피드백을 작성하는 것입니다. 피드백이 포함된 별도의 검토본을 제공하며, 현재 계획서가 자동으로 변경되지는 않습니다.',
  },
  {
    question: '전문가를 직접 선택할 수 있나요?',
    answer: '현재는 사업 분야와 사업계획서 내용을 기준으로 적합한 전문가를 배정합니다.',
  },
  {
    question: '전문가 검토 이후에는 어떻게 하나요?',
    answer:
      '전문가 검토본을 참고해 직접 계획서를 수정하거나, 플랜비서에게 전문가 피드백을 기준으로 질문하고 필요한 내용을 계획서에 반영할 수 있습니다.',
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
