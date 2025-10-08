import { useEffect, useRef } from "react";
import { motion, useAnimation } from "motion/react";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const controls = useAnimation();
  const rotationRef = useRef(0);
  const letters = Array.from(text);

  useEffect(() => {
    const start = rotationRef.current;
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [controls, spinDuration, text, onHover]);

  const handleHoverStart = () => {
    const start = rotationRef.current;
    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotationRef.current;
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  const radius = 50; // default circle radius (adjusts size)

  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-full text-white font-semibold cursor-pointer ${className}`}
      style={{
        width: "clamp(160px, 24vw, 260px)",
        height: "clamp(160px, 24vw, 260px)",
      }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (i / letters.length) * (2 * Math.PI);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotateDeg = (angle * 180) / Math.PI + 90; // rotate upright

        return (
          <span 
            key={i}
            className="absolute text-[clamp(13px,2vw,18px)] text-foreground tracking-widest"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${rotateDeg}deg)`,
              transformOrigin: "center",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;

