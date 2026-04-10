import { motion } from "framer-motion";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";

const EXTREME_NOISE_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.85' numOctaves='6' seed='13' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

type LiquidBlob = {
  style: CSSProperties;
  animate: {
    x: number[];
    y: number[];
    scale: number[];
    rotate: number[];
  };
  duration: number;
  delay?: number;
};

function LiquidBlobLayer({ blob, shouldAnimate }: { blob: LiquidBlob; shouldAnimate: boolean }) {
  const [ready, setReady] = useState(false);
  const tonedStyle: CSSProperties = {
    ...blob.style,
    opacity: typeof blob.style.opacity === "number" ? blob.style.opacity * 0.72 : blob.style.opacity,
  };

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready || !shouldAnimate) {
    return <div className="absolute pointer-events-none" style={tonedStyle} aria-hidden />;
  }

  return (
    <motion.div
      className="absolute pointer-events-none will-change-transform"
      style={tonedStyle}
      animate={blob.animate}
      transition={{
        duration: blob.duration,
        delay: blob.delay ?? 0,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      aria-hidden
    />
  );
}

const liquidBlobs: LiquidBlob[] = [
  {
    style: {
      top: "-8%",
      right: "-16%",
      width: "56%",
      height: "46%",
      background:
        "radial-gradient(ellipse at 36% 40%, rgba(164, 76, 35, 0.28) 0%, rgba(164, 76, 35, 0.18) 36%, rgba(164, 76, 35, 0.09) 58%, rgba(164, 76, 35, 0) 80%)",
      filter: "blur(74px)",
      opacity: 0.9,
    },
    animate: {
      x: [0, 152, 86, -52, -122, 0],
      y: [0, -84, 58, 126, 28, 0],
      scale: [1, 1.22, 1.02, 0.82, 1.08, 1],
      rotate: [0, 14, 24, 10, -10, 0],
    },
    duration: 11,
  },
  {
    style: {
      top: "8%",
      left: "-18%",
      width: "52%",
      height: "44%",
      background:
        "radial-gradient(ellipse at 64% 46%, rgba(164, 76, 35, 0.27) 0%, rgba(164, 76, 35, 0.17) 36%, rgba(164, 76, 35, 0.09) 58%, rgba(164, 76, 35, 0) 80%)",
      filter: "blur(78px)",
      opacity: 0.88,
    },
    animate: {
      x: [0, -142, -74, 48, 120, 0],
      y: [0, 82, 136, 36, -44, 0],
      scale: [1, 0.8, 1.1, 1.2, 1.02, 1],
      rotate: [0, -18, -9, 12, 20, 0],
    },
    duration: 10.5,
    delay: 0.9,
  },
  {
    style: {
      top: "24%",
      right: "-17%",
      width: "58%",
      height: "48%",
      background:
        "radial-gradient(ellipse at 56% 56%, rgba(164, 76, 35, 0.25) 0%, rgba(164, 76, 35, 0.16) 34%, rgba(164, 76, 35, 0.08) 58%, rgba(164, 76, 35, 0) 80%)",
      filter: "blur(82px)",
      opacity: 0.86,
    },
    animate: {
      x: [0, -132, -54, 56, 126, 0],
      y: [0, -70, 30, 108, 36, 0],
      scale: [1, 1.2, 1, 0.8, 1.1, 1],
      rotate: [0, 14, 22, 8, -10, 0],
    },
    duration: 12,
    delay: 0.5,
  },
  {
    style: {
      top: "38%",
      left: "30%",
      width: "34%",
      height: "28%",
      background:
        "radial-gradient(ellipse at 52% 50%, rgba(164, 76, 35, 0.2) 0%, rgba(164, 76, 35, 0.13) 34%, rgba(164, 76, 35, 0.06) 58%, rgba(164, 76, 35, 0) 80%)",
      filter: "blur(68px)",
      opacity: 0.68,
    },
    animate: {
      x: [0, 68, -42, -58, 24, 0],
      y: [0, -56, -18, 56, 30, 0],
      scale: [1, 1.18, 0.9, 1.14, 1.01, 1],
      rotate: [0, 12, -10, -16, 6, 0],
    },
    duration: 9.5,
    delay: 1.2,
  },
  {
    style: {
      top: "52%",
      left: "-18%",
      width: "52%",
      height: "44%",
      background:
        "radial-gradient(ellipse at 58% 48%, rgba(164, 76, 35, 0.26) 0%, rgba(164, 76, 35, 0.16) 34%, rgba(164, 76, 35, 0.08) 58%, rgba(164, 76, 35, 0) 80%)",
      filter: "blur(80px)",
      opacity: 0.86,
    },
    animate: {
      x: [0, -126, -48, 56, 108, 0],
      y: [0, 62, 134, 40, -34, 0],
      scale: [1, 0.86, 1.08, 1.18, 1.02, 1],
      rotate: [0, -14, -8, 10, 16, 0],
    },
    duration: 11.5,
    delay: 0.7,
  },
  {
    style: {
      top: "66%",
      right: "-18%",
      width: "54%",
      height: "46%",
      background:
        "radial-gradient(ellipse at 44% 54%, rgba(164, 76, 35, 0.25) 0%, rgba(164, 76, 35, 0.16) 34%, rgba(164, 76, 35, 0.08) 58%, rgba(164, 76, 35, 0) 80%)",
      filter: "blur(84px)",
      opacity: 0.9,
    },
    animate: {
      x: [0, 132, 52, -58, -118, 0],
      y: [0, -64, 36, 122, 34, 0],
      scale: [1, 1.18, 1, 0.84, 1.1, 1],
      rotate: [0, 12, 20, 8, -8, 0],
    },
    duration: 12.2,
    delay: 1,
  },
];

interface HomePageBackgroundProps {
  children: ReactNode;
}

const HomePageBackground = ({ children }: HomePageBackgroundProps) => (
  <PerformanceAwareBackground>{children}</PerformanceAwareBackground>
);

function PerformanceAwareBackground({ children }: HomePageBackgroundProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 1024px)").matches;
    const saveData = typeof navigator !== "undefined" && "connection" in navigator
      ? Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
      : false;
    const lowCpu = typeof navigator !== "undefined" && navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;

    setShouldAnimate(!(reduceMotion || smallScreen || saveData || lowCpu));
  }, []);

  return (
    <div
      className="relative bg-[#f3f2f1] overflow-x-hidden isolate"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 30%, rgba(164, 76, 35, 0.18) 0%, rgba(164, 76, 35, 0.1) 28%, rgba(164, 76, 35, 0.04) 48%, rgba(243, 242, 241, 0) 72%), linear-gradient(180deg, #f3f2f1 0%, #f3f2f1 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0) 50%, rgba(53, 46, 38, 0.08) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "38%",
          height: "24%",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.18) 36%, rgba(255,255,255,0) 72%)",
          filter: "blur(30px)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        {(shouldAnimate ? liquidBlobs : [liquidBlobs[0], liquidBlobs[2], liquidBlobs[4], liquidBlobs[6]]).map((blob, i) => (
          <LiquidBlobLayer key={i} blob={blob} shouldAnimate={shouldAnimate} />
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: EXTREME_NOISE_OVERLAY,
          backgroundRepeat: "repeat",
          backgroundSize: "56px 56px",
          mixBlendMode: "hard-light",
          opacity: 1,
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default HomePageBackground;
