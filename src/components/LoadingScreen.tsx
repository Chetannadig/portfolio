import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hyperspeed from "./animations/Hyperspeed";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"loading" | "hyperspeed" | "done">(
    "loading"
  );
  const [count, setCount] = useState(0);

  // Step 1: Count up to 100%
  useEffect(() => {
    if (phase !== "loading") return;

    const countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(countInterval);
          setTimeout(() => setPhase("hyperspeed"), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(countInterval);
  }, [phase]);

  // Step 2: Hyperspeed animation phase
  useEffect(() => {
    if (phase === "hyperspeed") {
      const timer = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {phase === "loading" && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Moving Sigma Lines */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[120vh] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  rotate: `${Math.random() * 30 - 15}deg`,
                }}
                animate={{
                  y: [0, 100, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Gradient Count Text */}
          <motion.div
            className="relative text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1, 0.9, 1], opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          >
            {count}%
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="absolute bottom-24 text-center text-slate-300 text-lg tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Booting Portfolio Engine...
            </span>
          </motion.div>
        </motion.div>
      )}

      {phase === "hyperspeed" && (
        <motion.div
          key="hyperspeed"
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: window.innerWidth < 768 ? 200 : 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: window.innerWidth < 768 ? 70 : 90,
              fovSpeedUp: window.innerWidth < 768 ? 110 : 150,
              speedUp: window.innerWidth < 768 ? 1.2 : 2,
              carLightsFade: 0.4,
              totalSideLightSticks: window.innerWidth < 768 ? 10 : 20,
              lightPairsPerRoadWay: window.innerWidth < 768 ? 12 : 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
