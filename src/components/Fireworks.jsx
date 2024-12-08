import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Fireworks = () => {
  useEffect(() => {
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return <div>🎉 All names are processed!</div>;
};

export default Fireworks;
