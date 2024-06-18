import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiAnimation() {
  useEffect(() => {
    let duration = 86400 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    return () => clearInterval(interval);
  }, []); // Run effect only once on mount

  return (
    <div className="w-60 h-24 rounded-md mx-auto mt-20">
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        {/* <img
          className="rounded-full w-48 h-48"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/300px-IIT_Madras_Logo.svg.png?20100322035646"
          alt="image description"
        /> */}
      </div>
    </div>
  );
}
