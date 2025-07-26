import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    const numberOfColumns = Math.floor(window.innerWidth / 20);

    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.floor(Math.random() * numberOfColumns) * 20 + 'px';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(char);

      // Remove char after animation
      setTimeout(() => {
        if (container.contains(char)) {
          container.removeChild(char);
        }
      }, 6000);
    };

    // Create initial chars
    for (let i = 0; i < numberOfColumns; i++) {
      setTimeout(() => createMatrixChar(), Math.random() * 2000);
    }

    // Continuously create new chars
    const interval = setInterval(createMatrixChar, 100);

    return () => {
      clearInterval(interval);
      // Clean up remaining chars
      const chars = container.querySelectorAll('.matrix-char');
      chars.forEach(char => char.remove());
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixBackground;