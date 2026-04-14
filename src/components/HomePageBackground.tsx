import { motion } from "framer-motion";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";

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
  times?: number[];
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
      className="absolute pointer-events-none will-change-[transform]"
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

/** Three blobs (reduced from 6): top-right, top-left, bottom-right. Lower blur radii for GPU savings. */
const liquidBlobs: LiquidBlob[] = [
  {
    style: {
      top: "-12%",
      right: "-20%",
      width: "48%",
      height: "42%",
      background:
        "radial-gradient(ellipse at 40% 44%, rgba(164, 76, 35, 0.52) 0%, rgba(164, 76, 35, 0.36) 16%, rgba(164, 76, 35, 0.21) 30%, rgba(164, 76, 35, 0.09) 44%, rgba(164, 76, 35, 0) 60%)",
      filter: "blur(24px)",
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
      filter: "blur(24px)",
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
      bottom: "-6%",
      right: "-12%",
      width: "46%",
      height: "38%",
      background:
        "radial-gradient(ellipse at 46% 52%, rgba(164, 76, 35, 0.48) 0%, rgba(164, 76, 35, 0.31) 18%, rgba(164, 76, 35, 0.18) 32%, rgba(164, 76, 35, 0.08) 46%, rgba(164, 76, 35, 0) 60%)",
      filter: "blur(24px)",
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
          filter: "blur(18px)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        {liquidBlobs.map((blob, i) => (
          <LiquidBlobLayer key={i} blob={blob} motionDisabled={reduceMotion} />
        ))}
      </div>
      {/* Noise overlay removed for GPU performance */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default HomePageBackground;
