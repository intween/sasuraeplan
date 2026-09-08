'use client';

import { ArrowRight, FileCheck2, FileText, Gauge, Info, MessageSquareQuote } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './experts-section.module.scss';

export function ExpertsSection() {
  return (
    <section className={styles.section} id="experts">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Expert Review</span>
          <h2 className={styles.title}>전문가 검증</h2>
          <p className={styles.message}>AI 분석 이후 최종 검토.</p>
        </Reveal>

        <div className={styles.flow}>
          <Reveal className={styles.stage}>
            <span className={styles.stageLabel}>대상</span>
            <span className={styles.stageItem}>
              <FileText aria-hidden="true" />
              계획서
            </span>
            <span className={styles.stageItem}>
              <Gauge aria-hidden="true" />
              VC 분석
            </span>
          </Reveal>

          <div className={styles.connector} aria-hidden="true">
            <ArrowRight />
          </div>

          <Reveal className={`${styles.stage} ${styles.stageMain}`} delay={0.08}>
            <span className={styles.stageLabel}>진행</span>
            <span className={styles.stageItem}>
              <FileCheck2 aria-hidden="true" />
              전문가 검토
            </span>
            <p className={styles.stageText}>계획서 원문 + AI 분석 결과</p>
          </Reveal>

          <div className={styles.connector} aria-hidden="true">
            <ArrowRight />
          </div>

          <Reveal className={styles.stage} delay={0.16}>
            <span className={styles.stageLabel}>결과</span>
            <span className={styles.stageItem}>
              <MessageSquareQuote aria-hidden="true" />
              전문가 코멘트
            </span>
            <span className={styles.stageItem}>
              <FileText aria-hidden="true" />
              검토본
            </span>
          </Reveal>
        </div>

        <Reveal className={styles.note}>
          <Info aria-hidden="true" />
          <span>
            <strong>PREMIUM 1회 포함.</strong> STANDARD · PRO 는 별도 구매.
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export default ExpertsSection;
