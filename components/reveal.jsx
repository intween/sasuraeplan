import styles from './reveal.module.scss';

// 스크롤 진입 시 약한 페이드 업.
// 애니메이션은 CSS 로만 처리하므로 서버 렌더링 결과가 이미 보이는 상태이고,
// prefers-reduced-motion 이면 애니메이션 없이 그대로 렌더된다.
export function Reveal({ children, className, delay = 0, y = 22, as: Tag = 'div' }) {
  const style = {};
  if (delay) style['--reveal-delay'] = `${delay}s`;
  if (y !== 22) style['--reveal-y'] = `${y}px`;

  return (
    <Tag className={className ? `${styles.reveal} ${className}` : styles.reveal} style={style}>
      {children}
    </Tag>
  );
}

export default Reveal;
