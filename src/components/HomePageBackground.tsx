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
    borderRadius: string[];
  };
  duration: number;
  delay?: number;
  /** Uneven keyframe pacing (length must match keyframe count). */
  times?: number[];
  /** y loop length vs x — paths drift apart for organic motion. */
  yDurationScale?: number;
  scaleDurationScale?: number;
  rotateDurationScale?: number;
  borderRadiusDurationScale?: number;
};

function LiquidBlobLayer({ blob, motionDisabled }: { blob: LiquidBlob; motionDisabled: boolean }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const baseStyle = { ...blob.style, borderRadius: blob.animate.borderRadius[0] };

  if (!ready || motionDisabled) {
    return <div className="absolute pointer-events-none" style={baseStyle} aria-hidden />;
  }

  const yScale = blob.yDurationScale ?? 1.24;
  const sScale = blob.scaleDurationScale ?? 0.88;
  const rScale = blob.rotateDurationScale ?? 1.1;
  const brScale = blob.borderRadiusDurationScale ?? 0.48;

  return (
    <motion.div
      className="absolute pointer-events-none will-change-[transform,border-radius]"
      style={baseStyle}
      animate={blob.animate}
      transition={{
        delay: blob.delay ?? 0,
        times: blob.times,
        x: { duration: blob.duration, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
        y: { duration: blob.duration * yScale, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
        scale: { duration: blob.duration * sScale, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
        rotate: { duration: blob.duration * rScale, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
        borderRadius: {
          duration: blob.duration * brScale,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
      aria-hidden
    />
  );
}

/** Six blobs: wide travel, uneven pacing, desynced axes (loop, not mirror). */
const liquidBlobs: LiquidBlob[] = [
  {
    style: {
      top: "-12%",
      right: "-20%",
      width: "48%",
      height: "42%",
      background:
        "radial-gradient(ellipse at 40% 44%, rgba(164, 76, 35, 0.52) 0%, rgba(164, 76, 35, 0.36) 16%, rgba(164, 76, 35, 0.21) 30%, rgba(164, 76, 35, 0.09) 44%, rgba(164, 76, 35, 0) 60%)",
      filter: "blur(38px)",
      opacity: 0.94,
    },
    animate: {
      x: [0, 142, 178, 72, -56, -118, -92, 108, -38, 0],
      y: [0, -68, -124, 56, 108, 142, 48, -72, 88, 0],
      scale: [1, 1.22, 1.32, 0.88, 0.82, 0.78, 1.2, 0.94, 1.1, 1],
      rotate: [0, 18, 28, 12, -8, -22, 16, 10, -14, 0],
      borderRadius: [
        "58% 42% 60% 40% / 44% 56% 40% 60%",
        "80% 20% 26% 74% / 30% 70% 64% 36%",
        "24% 76% 74% 26% / 70% 30% 32% 68%",
        "42% 58% 70% 30% / 54% 46% 28% 72%",
        "72% 28% 36% 64% / 36% 64% 56% 44%",
        "30% 70% 62% 38% / 64% 36% 42% 58%",
        "54% 46% 38% 62% / 46% 54% 72% 28%",
        "66% 34% 48% 52% / 40% 60% 50% 50%",
        "48% 52% 56% 44% / 52% 48% 34% 66%",
        "58% 42% 60% 40% / 44% 56% 40% 60%",
      ],
    },
    duration: 11.5,
    times: [0, 0.07, 0.17, 0.26, 0.39, 0.48, 0.58, 0.71, 0.84, 1],
    yDurationScale: 1.38,
    scaleDurationScale: 0.76,
    rotateDurationScale: 1.22,
  },
  {
    style: {
      top: "-10%",
      left: "-20%",
      width: "46%",
      height: "40%",
      background:
        "radial-gradient(ellipse at 62% 46%, rgba(164, 76, 35, 0.5) 0%, rgba(164, 76, 35, 0.33) 16%, rgba(164, 76, 35, 0.2) 30%, rgba(164, 76, 35, 0.085) 44%, rgba(164, 76, 35, 0) 60%)",
      filter: "blur(40px)",
      opacity: 0.93,
    },
    animate: {
      x: [0, -124, -156, -52, 72, 112, 96, -84, 58, 0],
      y: [0, 58, 96, 142, 88, 22, -68, -102, 44, 0],
      scale: [1, 0.86, 0.78, 1.2, 1.16, 1.12, 0.9, 1.08, 0.96, 1],
      rotate: [0, -14, -24, -10, 14, 22, 8, -18, 12, 0],
      borderRadius: [
        "38% 62% 44% 56% / 58% 42% 54% 46%",
        "74% 26% 68% 32% / 34% 66% 28% 72%",
        "26% 74% 30% 70% / 68% 32% 72% 28%",
        "56% 44% 74% 26% / 40% 60% 50% 50%",
        "68% 32% 40% 60% / 46% 54% 70% 30%",
        "32% 68% 58% 42% / 62% 38% 36% 64%",
        "50% 50% 24% 76% / 52% 48% 66% 34%",
        "44% 56% 62% 38% / 58% 42% 48% 52%",
        "60% 40% 46% 54% / 38% 62% 54% 46%",
        "38% 62% 44% 56% / 58% 42% 54% 46%",
      ],
    },
    duration: 12.8,
    delay: 0.35,
    times: [0, 0.11, 0.2, 0.31, 0.43, 0.52, 0.63, 0.75, 0.89, 1],
    yDurationScale: 1.08,
    rotateDurationScale: 0.92,
  },
  {
    style: {
      top: "38%",
      left: "-18%",
      width: "44%",
      height: "38%",
      background:
        "radial-gradient(ellipse at 58% 48%, rgba(164, 76, 35, 0.48) 0%, rgba(164, 76, 35, 0.31) 18%, rgba(164, 76, 35, 0.18) 32%, rgba(164, 76, 35, 0.08) 46%, rgba(164, 76, 35, 0) 60%)",
      filter: "blur(42px)",
      opacity: 0.93,
    },
    animate: {
      x: [0, -98, -72, 88, -48, 92, -112, 64, -28, 0],
      y: [0, -52, -88, 92, 56, 28, -64, 118, -42, 0],
      scale: [1, 1.14, 1.24, 0.84, 0.9, 1.18, 0.88, 1.06, 0.92, 1],
      rotate: [0, 16, 24, -14, 10, 18, -20, 6, -10, 0],
      borderRadius: [
        "50% 50% 46% 54% / 40% 60% 58% 42%",
        "76% 24% 28% 72% / 32% 68% 70% 30%",
        "28% 72% 76% 24% / 68% 32% 26% 74%",
        "40% 60% 54% 46% / 56% 44% 66% 34%",
        "70% 30% 38% 62% / 38% 62% 48% 52%",
        "34% 66% 60% 40% / 64% 36% 44% 56%",
        "58% 42% 32% 68% / 44% 56% 62% 38%",
        "46% 54% 70% 30% / 52% 48% 36% 64%",
        "64% 36% 42% 58% / 42% 58% 52% 48%",
        "50% 50% 46% 54% / 40% 60% 58% 42%",
      ],
    },
    duration: 13.4,
    delay: 0.55,
    times: [0, 0.09, 0.22, 0.3, 0.44, 0.56, 0.65, 0.78, 0.91, 1],
    yDurationScale: 1.31,
    borderRadiusDurationScale: 0.42,
  },
  {
    style: {
      top: "42%",
      right: "-16%",
      width: "46%",
      height: "40%",
      background:
        "radial-gradient(ellipse at 42% 50%, rgba(164, 76, 35, 0.5) 0%, rgba(164, 76, 35, 0.33) 18%, rgba(164, 76, 35, 0.2) 32%, rgba(164, 76, 35, 0.085) 46%, rgba(164, 76, 35, 0) 60%)",
      filter: "blur(44px)",
      opacity: 0.93,
    },
    animate: {
      x: [0, 118, 152, -72, 96, -44, 128, -96, 52, 0],
      y: [0, 44, 72, -88, -52, 108, 32, -118, 68, 0],
      scale: [1, 1.08, 1.16, 0.8, 0.88, 1.26, 0.92, 1.12, 0.98, 1],
      rotate: [0, -10, -20, 16, -6, 12, -16, 20, -8, 0],
      borderRadius: [
        "46% 54% 58% 42% / 52% 48% 44% 56%",
        "78% 22% 30% 70% / 28% 72% 66% 34%",
        "22% 78% 70% 30% / 72% 28% 32% 68%",
        "60% 40% 44% 56% / 36% 64% 74% 26%",
        "32% 68% 72% 28% / 64% 36% 40% 60%",
        "54% 46% 26% 74% / 48% 52% 58% 42%",
        "68% 32% 50% 50% / 40% 60% 46% 54%",
        "40% 60% 64% 36% / 58% 42% 52% 48%",
        "52% 48% 38% 62% / 46% 54% 68% 32%",
        "46% 54% 58% 42% / 52% 48% 44% 56%",
      ],
    },
    duration: 12.2,
    delay: 0.15,
    times: [0, 0.13, 0.21, 0.34, 0.46, 0.55, 0.67, 0.8, 0.93, 1],
    yDurationScale: 1.18,
    scaleDurationScale: 0.95,
  },
  {
    style: {
      bottom: "-8%",
      left: "-14%",
      width: "44%",
      height: "36%",
      background:
        "radial-gradient(ellipse at 56% 44%, rgba(164, 76, 35, 0.47) 0%, rgba(164, 76, 35, 0.3) 18%, rgba(164, 76, 35, 0.17) 34%, rgba(164, 76, 35, 0.072) 48%, rgba(164, 76, 35, 0) 62%)",
      filter: "blur(40px)",
      opacity: 0.92,
    },
    animate: {
      x: [0, -88, -124, 96, -58, -76, 112, -32, 78, 0],
      y: [0, -48, -72, 72, 48, 18, -88, 104, -56, 0],
      scale: [1, 0.94, 0.88, 1.22, 1.14, 1.1, 0.82, 1.06, 0.9, 1],
      rotate: [0, -12, -22, 12, -18, -24, 10, 8, -16, 0],
      borderRadius: [
        "48% 52% 56% 44% / 50% 50% 42% 58%",
        "82% 18% 24% 76% / 26% 74% 70% 30%",
        "20% 80% 72% 28% / 74% 26% 30% 70%",
        "58% 42% 38% 62% / 44% 56% 78% 22%",
        "66% 34% 76% 24% / 34% 66% 38% 62%",
        "36% 64% 50% 50% / 62% 38% 54% 46%",
        "54% 46% 32% 68% / 40% 60% 72% 28%",
        "44% 56% 68% 32% / 56% 44% 46% 54%",
        "50% 50% 58% 42% / 48% 52% 36% 64%",
        "48% 52% 56% 44% / 50% 50% 42% 58%",
      ],
    },
    duration: 13.9,
    delay: 0.7,
    times: [0, 0.08, 0.19, 0.29, 0.41, 0.53, 0.62, 0.73, 0.87, 1],
    yDurationScale: 1.27,
    rotateDurationScale: 1.28,
  },
  {
    style: {
      bottom: "-6%",
      right: "-12%",
      width: "46%",
      height: "38%",
      background:
        "radial-gradient(ellipse at 46% 52%, rgba(164, 76, 35, 0.48) 0%, rgba(164, 76, 35, 0.31) 18%, rgba(164, 76, 35, 0.18) 32%, rgba(164, 76, 35, 0.08) 46%, rgba(164, 76, 35, 0) 60%)",
      filter: "blur(42px)",
      opacity: 0.93,
    },
    animate: {
      x: [0, 104, 132, -92, 76, -68, 118, -52, 88, 0],
      y: [0, -56, -92, 88, 52, -72, 36, 124, -38, 0],
      scale: [1, 1.12, 1.22, 0.82, 0.88, 1.04, 1.2, 0.9, 1.08, 1],
      rotate: [0, 12, 20, -18, 12, 10, -12, 18, -22, 0],
      borderRadius: [
        "54% 46% 42% 58% / 44% 56% 62% 38%",
        "24% 76% 70% 30% / 68% 32% 26% 74%",
        "78% 22% 28% 72% / 30% 70% 76% 24%",
        "38% 62% 74% 26% / 60% 40% 44% 56%",
        "72% 28% 34% 66% / 36% 64% 50% 50%",
        "32% 68% 54% 46% / 64% 36% 42% 58%",
        "52% 48% 22% 78% / 46% 54% 70% 30%",
        "46% 54% 66% 34% / 54% 46% 40% 60%",
        "64% 36% 48% 52% / 38% 62% 56% 44%",
        "54% 46% 42% 58% / 44% 56% 62% 38%",
      ],
    },
    duration: 11.8,
    delay: 0.85,
    times: [0, 0.1, 0.18, 0.32, 0.44, 0.53, 0.66, 0.77, 0.9, 1],
    yDurationScale: 1.15,
    scaleDurationScale: 0.82,
    borderRadiusDurationScale: 0.55,
  },
];

interface HomePageBackgroundProps {
  children: ReactNode;
}

const HomePageBackground = ({ children }: HomePageBackgroundProps) => (
  <PerformanceAwareBackground>{children}</PerformanceAwareBackground>
);

function PerformanceAwareBackground({ children }: HomePageBackgroundProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className="relative bg-[#f3f2f1] overflow-x-hidden isolate"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 15% 25%, rgba(164, 76, 35, 0.075) 0%, rgba(164, 76, 35, 0.033) 40%, transparent 68%), radial-gradient(ellipse at 85% 70%, rgba(164, 76, 35, 0.067) 0%, rgba(164, 76, 35, 0.03) 42%, transparent 70%), linear-gradient(180deg, #f3f2f1 0%, #f3f2f1 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 44%, rgba(53, 46, 38, 0.07) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "32%",
          height: "22%",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.14) 34%, rgba(255,255,255,0) 70%)",
          filter: "blur(28px)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        {liquidBlobs.map((blob, i) => (
          <LiquidBlobLayer key={i} blob={blob} motionDisabled={reduceMotion} />
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: EXTREME_NOISE_OVERLAY,
          backgroundRepeat: "repeat",
          backgroundSize: "56px 56px",
          mixBlendMode: "hard-light",
          opacity: 0.72,
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default HomePageBackground;
