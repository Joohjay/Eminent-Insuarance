import { useScrollPosition } from '../hooks/useScrollPosition';

function ScrollProgress() {
  const { scrollProgress } = useScrollPosition();
  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
