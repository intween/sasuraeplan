import { Bell, CalendarDays, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import styles from './schedule-section.module.scss';

const tasks = [
  { name: '고객 인터뷰 5명', due: 'D-3', soon: true },
  { name: '경쟁사 가격 조사', due: '금요일' },
  { name: '재무 계획 업데이트', due: '다음 주 월요일' },
];

const alerts = [
  { primary: true, text: '고객 인터뷰 일정이 3일 남았습니다.' },
  { primary: false, text: '이번 주 계획한 시장조사가 아직 완료되지 않았습니다.' },
];

export function ScheduleSection() {
  return (
    <section className={styles.section} id="schedule">
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <span className={styles.eyebrow}>Plan &amp; Reminder</span>
            <h2 className={styles.title}>
              분석에서 나온 과제를
              <br />
              실제 일정으로.
            </h2>
            <p className={styles.desc}>
              플랜비서와 이야기하다 나온 준비 과제는 머릿속에만 남기지 않아도 됩니다. 그대로 일정으로 옮겨 두면, 기한이 다가올 때 알려드립니다.
            </p>

            <div className={styles.commandCard}>
              <span className={styles.commandLabel}>
                <Sparkles aria-hidden="true" />
                이렇게 말하면 됩니다
              </span>
              <p className={styles.command}>“다음 주 금요일까지 고객 5명 인터뷰하는 일정 잡아줘.”</p>
            </div>
          </Reveal>

          <Reveal className={styles.productCol} delay={0.1}>
            <div className={styles.product} role="img" aria-label="일정 관리 화면 예시">
              <div className={styles.productBar}>
                <CalendarDays aria-hidden="true" />
                이번 주 할 일
                <span className={styles.productChip}>3건</span>
              </div>

              <ul className={styles.taskList}>
                {tasks.map((task) => (
                  <li key={task.name} className={styles.taskItem}>
                    <span className={styles.taskCheck} aria-hidden="true" />
                    <span className={styles.taskName}>{task.name}</span>
                    <span className={`${styles.taskDue} ${task.soon ? styles.taskDueSoon : ''}`}>{task.due}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.alerts}>
                {alerts.map((alert) => (
                  <div key={alert.text} className={`${styles.alert} ${alert.primary ? styles.alertPrimary : ''}`}>
                    <Bell aria-hidden="true" />
                    <span>{alert.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <span className={styles.note}>서비스 화면 예시</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
