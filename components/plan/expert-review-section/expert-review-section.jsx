import { ArrowRight, CheckCircle2, Download, FileText, Info, UserCheck } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { Reveal } from '@/components/reveal';
import styles from './expert-review-section.module.scss';

// 핵심 3단계만 보여준다.
const features = ['사업계획서 검토', '전문가 피드백', '보완 포인트 확인'];

// 전문가 검토 진행 상태
const statuses = [
  { label: '검토 신청', done: true },
  { label: '전문가 배정', done: true },
  { label: '전문가 검토', done: true },
  { label: '검토 완료', current: true },
];

// 전문가가 원본 문서에 남긴 의견 (문서를 수정한 것이 아니라 코멘트를 단 형태)
const comments = [
  {
    source: '친환경 포장재 시장은 지속적으로 성장하고 있다.',
    note: '전체 시장 성장성뿐 아니라, 현재 목표 고객이 실제 구매할 가능성을 보여주는 근거를 추가하면 설득력이 높아집니다.',
  },
  {
    source: '제품 판매를 통해 수익을 창출한다.',
    note: '판매단가와 예상 원가의 산정 기준이 무엇인지 설명이 필요합니다.',
  },
];

/* Hidden: 진행 방식 설명 축소 — 핵심 3단계(features)로 대체
const pipeline = [
  { icon: FileText, title: '사업계획서 원본', note: '전문가가 직접 읽는 주 검토 대상', primary: true },
  { icon: BarChart3, title: 'VC 분석 결과 · 세부지표', note: '더 세밀하게 보기 위한 참고자료' },
];

const afterReview = [
  { from: 'expert', text: '고객 검증에서 실제 구매 의향 근거가 부족합니다.' },
  { from: 'user', text: '전문가가 이렇게 피드백했는데 어떤 자료가 필요해?' },
  { from: 'ai', text: '구매 의향을 확인할 수 있는 인터뷰 응답이나 사전 예약 기록이 근거가 될 수 있습니다.' },
  { from: 'user', text: '내가 가지고 있는 인터뷰 결과를 기준으로 계획서에 반영해줘.', command: true },
];
*/

export function ExpertReviewSection() {
  return (
    <section className={styles.section} id="expert-review">
      <div className={styles.container}>
        <div className={styles.split}>
          {/* 좌: 설명 */}
          <Reveal className={styles.copyCol}>
            <span className={styles.badge}>Expert Review</span>

            <h2 className={styles.title}>
              AI와 충분히 다듬었다면,
              <br />
              이제 <span className={styles.titleAccent}>전문가의 시선으로.</span>
            </h2>

            <p className={styles.desc}>사업계획서의 논리와 설득력을 전문가 피드백으로 한 번 더 확인하세요.</p>

            <ul className={styles.featureList}>
              {features.map((item) => (
                <li key={item} className={styles.feature}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className={styles.assignNote}>
              <UserCheck aria-hidden="true" />
              <span>사업 분야와 사업계획서 내용을 기준으로 적합한 전문가를 배정합니다.</span>
            </p>
          </Reveal>

          {/* 우: 검토 완료 제품 화면 */}
          <Reveal className={styles.mockCol} delay={0.08}>
            <div className={styles.mock}>
              <div className={styles.mockBar}>
                <BrandLogo className={styles.mockLogo} />
                <span className={styles.mockBarTitle}>전문가 검토</span>
                <span className={styles.mockBadge}>검토 완료</span>
              </div>

              <div className={styles.mockBody}>
                <ol className={styles.statusRow}>
                  {statuses.map((status) => (
                    <li key={status.label} className={`${styles.statusItem} ${status.current ? styles.statusCurrent : ''} ${status.done ? styles.statusDone : ''}`}>
                      {status.label}
                    </li>
                  ))}
                </ol>

                <p className={styles.mockMessage}>전문가가 사업계획서와 VC 분석 결과를 검토하고, 피드백이 포함된 검토본을 업로드했습니다.</p>

                <div className={styles.fileCard}>
                  <span className={styles.fileIcon} aria-hidden="true">
                    <FileText />
                  </span>
                  <span className={styles.fileBody}>
                    <span className={styles.fileName}>사업계획서_전문가검토본.pdf</span>
                    <span className={styles.fileMeta}>전문가 검토본</span>
                  </span>
                  <span className={styles.fileStatus}>검토 완료</span>
                </div>

                <div className={styles.fileActions}>
                  <span className={styles.filePrimary}>검토본 보기</span>
                  <span className={styles.fileGhost}>
                    <Download aria-hidden="true" />
                    다운로드
                  </span>
                </div>

                <span className={styles.previewLabel}>전문가 주요 의견</span>
                <ul className={styles.commentList}>
                  {comments.map((item) => (
                    <li key={item.source} className={styles.comment}>
                      <p className={styles.commentSource}>
                        <mark className={styles.mark}>{item.source}</mark>
                      </p>
                      <div className={styles.commentNote}>
                        <span className={styles.commentTag}>전문가 의견</span>
                        {item.note}
                      </div>
                    </li>
                  ))}
                </ul>

                <p className={styles.noEdit}>전문가는 현재 계획서를 직접 수정하지 않습니다. 검토본을 확인한 뒤 반영할 내용을 직접 정하면 됩니다.</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hidden: 진행 방식 설명이 길어 축소 — 좌측 핵심 3단계로 대체
        --- 전문가가 무엇을 보고 무엇을 만드는지 ---
        <Reveal className={styles.pipeline}>
          <div className={styles.sources}>
            {pipeline.map((item) => (
              <div key={item.title} className={`${styles.sourceCard} ${item.primary ? styles.sourcePrimary : ''}`}>
                <span className={styles.sourceIcon} aria-hidden="true">
                  <item.icon />
                </span>
                <span className={styles.sourceBody}>
                  <span className={styles.sourceTitle}>{item.title}</span>
                  <span className={styles.sourceNote}>{item.note}</span>
                </span>
              </div>
            ))}
          </div>

          <span className={styles.arrow} aria-hidden="true">
            <ArrowRight />
          </span>

          <div className={`${styles.stage} ${styles.stageActive}`}>
            <span className={styles.stageTitle}>전문가 검토</span>
            <span className={styles.stageNote}>원본 문서를 읽고 피드백 작성</span>
          </div>

          <span className={styles.arrow} aria-hidden="true">
            <ArrowRight />
          </span>

          <div className={styles.stage}>
            <span className={styles.stageTitle}>전문가 검토본</span>
            <span className={styles.stageNote}>피드백이 작성된 별도 파일</span>
          </div>
        </Reveal>

        --- 검토본 → 플랜비서 ---
        <Reveal className={styles.afterCard}>
          <div className={styles.afterHead}>
            <MessageSquare aria-hidden="true" />
            <h3 className={styles.afterTitle}>전문가 피드백을 그대로 플랜비서에게</h3>
          </div>

          <ul className={styles.afterThread}>
            {afterReview.map((line, index) => (
              <li
                key={index}
                className={`${styles.afterLine} ${styles[`after${line.from}`]} ${line.command ? styles.afterCommand : ''}`}
              >
                {line.from === 'expert' && <span className={styles.afterTag}>전문가 의견</span>}
                {line.text}
              </li>
            ))}
          </ul>
        </Reveal>
        */}

        {/* <Reveal className={styles.premium}>
          <Info aria-hidden="true" />
          <p>
            <strong>전문가 피드백은 사업 분야와 검토 범위에 따라 상담 후 안내드립니다.</strong>
          </p>
          <a href="#contact" className={styles.premiumCta}>
            이용 문의하기
            <ArrowRight aria-hidden="true" />
          </a>
        </Reveal> */}
      </div>
    </section>
  );
}

export default ExpertReviewSection;
