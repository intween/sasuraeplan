'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './final-cta.module.scss';

const situations = ['아이디어 단계', '계획서 작성 중', '기존 계획서 보유', '지원사업 준비', '기타'];
const startModes = ['AI와 새로 작성', '기존 계획서 업로드', '아직 모르겠음'];
/* Hidden: CTA 에서 기능을 다시 나열하지 않는다.
const points = ['AI 작성 · 기존 계획서 업로드', 'VC 관점 분석 · 플랜비서 수정', '전문가 피드백 · 정부지원사업'];
*/

/* Hidden: 요금제 노출을 중단해 관심 플랜 선택도 함께 숨긴다.
const plans = ['STANDARD', 'PRO', 'PREMIUM', '아직 모르겠음'];
*/

const initialForm = {
  startMode: '',
  name: '',
  phone: '',
  email: '',
  situation: '',
  message: '',
  consent: false,
};

export function FinalCTA() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setIsSubmitted(false);
  };

  // TODO: 문의 접수 API 연동 지점. 현재 저장소에는 문의 처리 route 가 없어 UI 만 구현되어 있다.
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <h2 className={styles.title}>
              잘 쓴 계획서라고 생각했다면,
              <br />한 번 더 확인해보세요.
            </h2>

            <p className={styles.lead}>VC 관점으로 분석하고, AI와 보완하고, 전문가의 시선까지.</p>

            {/* Hidden: CTA 에서 기능을 다시 나열하지 않는다.
            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point} className={styles.point}>
                  <Check aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            */}
          </Reveal>

          <Reveal className={styles.formCol} delay={0.1}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>이용 문의하기</h3>
              {/* <p className={styles.formHint}>시작 방식과 준비 상황을 남겨주시면 확인 후 안내드립니다.</p> */}

              <form onSubmit={handleSubmit}>
                <div className={styles.fields}>
                  {/* <div className={`${styles.field} ${styles.fieldWide}`}>
                    <label className={styles.label} htmlFor="contact-start-mode">
                      시작 방식 <span className={styles.required}>*</span>
                    </label>
                    <select className={styles.select} id="contact-start-mode" name="startMode" required value={form.startMode} onChange={handleChange}>
                      <option value="">선택해 주세요</option>
                      {startModes.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div> */}

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-name">
                      이름 <span className={styles.required}>*</span>
                    </label>
                    <input className={styles.input} id="contact-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} placeholder="홍길동" />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-phone">
                      연락처 <span className={styles.required}>*</span>
                    </label>
                    <input className={styles.input} id="contact-phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={handleChange} placeholder="010-0000-0000" />
                  </div>

                  <div className={`${styles.field} ${styles.fieldWide}`}>
                    <label className={styles.label} htmlFor="contact-email">
                      이메일 <span className={styles.required}>*</span>
                    </label>
                    <input className={styles.input} id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} placeholder="name@example.com" />
                  </div>

                  <div className={`${styles.field} ${styles.fieldWide}`}>
                    <label className={styles.label} htmlFor="contact-situation">
                      현재 상태
                    </label>
                    <select className={styles.select} id="contact-situation" name="situation" value={form.situation} onChange={handleChange}>
                      <option value="">선택해 주세요</option>
                      {situations.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Hidden: 요금제를 노출하지 않으므로 관심 플랜 선택도 숨긴다.
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-plan">
                      관심 플랜
                    </label>
                    <select className={styles.select} id="contact-plan" name="plan" value={form.plan} onChange={handleChange}>
                      <option value="">선택해 주세요</option>
                      {plans.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  */}

                  <div className={`${styles.field} ${styles.fieldWide}`}>
                    <label className={styles.label} htmlFor="contact-message">
                      문의 내용
                    </label>
                    <textarea className={styles.textarea} id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="사업 아이템과 현재 준비 상황을 알려주세요." />
                  </div>
                </div>

                <label className={styles.consent} htmlFor="contact-consent">
                  <input className={styles.checkbox} id="contact-consent" name="consent" type="checkbox" required checked={form.consent} onChange={handleChange} />
                  <span>개인정보 수집 및 이용에 동의합니다.</span>
                </label>

                <button type="submit" className={styles.submit}>
                  이용 문의하기
                </button>
              </form>

              {isSubmitted && (
                <p className={styles.status} role="status">
                  <Info aria-hidden="true" />
                  <span>문의 접수 기능은 연동 준비 중입니다. 잠시 후 다시 시도해 주세요.</span>
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
