import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

function BackToTop() {
  const { scrollPosition } = useScrollPosition();
  const isVisible = scrollPosition.y > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default BackToTop;
