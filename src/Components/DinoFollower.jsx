import { useEffect, useRef } from "react";

export default function DinoFollower() {
  const dinoRef = useRef(null);

  const targetX = useRef(0);
  const targetY = useRef(0);

  const dinoX = useRef(0);
  const dinoY = useRef(0);

  useEffect(() => {
    const dino = dinoRef.current;
    if (!dino) return;

    // Set initial position
    dinoX.current = window.innerWidth * 0.02; // 2% from left
dinoY.current = window.innerHeight * 0.09; // 6% from top


    targetX.current = dinoX.current;
    targetY.current = dinoY.current;

    // CLICK ANYWHERE → set destination
    const handleClick = (event) => {
      targetX.current = event.pageX - dino.offsetWidth / 2;
      targetY.current = event.pageY - dino.offsetHeight / 2;

      // Flip direction
      if (targetX.current < dinoX.current) {
        dino.style.transform = "scaleX(-1)";
      } else {
        dino.style.transform = "scaleX(1)";
      }
    };

    document.addEventListener("click", handleClick);

    let rafId;

    const animateDino = () => {
      const speed = 0.0199;

      const dx = targetX.current - dinoX.current;
      const dy = targetY.current - dinoY.current;

      // move only if far enough
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        dinoX.current += dx * speed;
        dinoY.current += dy * speed;
      }

      // Clamp inside screen
     const vw = document.documentElement.scrollWidth;
const vh = document.documentElement.scrollHeight;

      const w = dino.offsetWidth;
      const h = dino.offsetHeight;

      dinoX.current = Math.min(Math.max(0, dinoX.current), vw - w);
      dinoY.current = Math.min(Math.max(0, dinoY.current), vh - h);

      dino.style.left = `${dinoX.current}px`;
      dino.style.top = `${dinoY.current}px`;

      rafId = requestAnimationFrame(animateDino);
    };

    animateDino();

    return () => {
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none relative left-[2%] top-[6%] lg:w-20 xl:w-20">

    <img
      ref={dinoRef}
      src="/olympicsImages/dino.gif"
      alt="dino"
      className=" z-9999 select-none pointer-events-none absolute w-15"
      style={{
          left: 0,
          top: 0,
        }}
        draggable={false}
        />
    </div>
  );
}
