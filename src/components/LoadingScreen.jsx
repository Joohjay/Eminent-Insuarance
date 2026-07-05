import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading website">
      <img src={`${import.meta.env.BASE_URL}logo.PNG`} alt="Eminent Insurance Solutions" />
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
