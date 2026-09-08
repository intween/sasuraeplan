import { ArrowRight, ChevronRight, FileText, MessageSquare, Sparkles, Upload } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './comparison-section.module.scss';

const newPlanFlow = ['아이디어', 'AI 작성', '계획서', 'VC 분석'];
const uploadFlow = ['파일 업로드', '내용 확인', '수정', 'VC 분석'];

function FlowList({ items }) {
  return (
    <ul className={styles.flow}>
      {items.map((item, index) => (
        <li key={item} className={styles.flowItem}>
          <span className={`${styles.flowChip} ${index === items.length - 1 ? styles.flowChipLast : ''}`}>{item}</span>
          {index < items.length - 1 && (
            <span className={styles.flowArrow} aria-hidden="true">
              <ChevronRight />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ComparisonSection() {
  return (
    <section className={styles.section} id="start">
      <div className={styles.container}>
        <Reveal className={styles.head}>
          <span className={styles.eyebrow}>Start</span>
          <h2 className={styles.title}>두 가지 시작.</h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.card}>
            <div className={styles.cardHead}>
              <span className={`${styles.cardIcon} ${styles.cardIconAlt}`}>
                <Sparkles aria-hidden="true" />
              </span>
              <h3 className={styles.cardTitle}>신규 작성</h3>
            </div>

            <FlowList items={newPlanFlow} />

            <div className={styles.mini}>
              <div className={styles.miniHead}>
                <MessageSquare aria-hidden="true" />
                AI 작성
              </div>
              <p className={styles.coachBubble}>해결하려는 고객의 문제는 무엇인가요?</p>
              <div className={styles.coachInput}>
                <span className={styles.coachInputText}>답변 입력</span>
                <span className={styles.coachSend} aria-hidden="true">
                  <ArrowRight />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.card} delay={0.1}>
            <div className={styles.cardHead}>
              <span className={styles.cardIcon}>
                <Upload aria-hidden="true" />
              </span>
              <h3 className={styles.cardTitle}>계획서 업로드</h3>
            </div>

            <FlowList items={uploadFlow} />

            <div className={styles.mini}>
              <div className={`${styles.miniHead} ${styles.miniHeadPlain}`}>
                <FileText aria-hidden="true" />
                계획서 업로드
              </div>
              <div className={styles.dropzone}>
                <Upload aria-hidden="true" />
                <span className={styles.dropzoneTitle}>파일을 끌어다 놓기</span>
              </div>
              <div className={styles.fileRow}>
                <span className={styles.fileIcon} aria-hidden="true">
                  <FileText />
                </span>
                <span className={styles.fileMeta}>
                  <span className={styles.fileName}>친환경 배달용기 사업계획서</span>
                  <span className={styles.fileSub}>8개 섹션</span>
                </span>
                <span className={styles.fileState}>확인</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
