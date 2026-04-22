import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroReveal } from "@/lib/motion";

const EXTREME_NOISE_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.85' numOctaves='6' seed='13' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

const HeroSection = () => {
  const [animateBlobs, setAnimateBlobs] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 1024px)").matches;
    const saveData = typeof navigator !== "undefined" && "connection" in navigator
      ? Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
      : false;
    const lowCpu = typeof navigator !== "undefined" && navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;

    setAnimateBlobs(!(reduceMotion || smallScreen || saveData || lowCpu));
  }, []);

  return (
    <section
      className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center bg-[#f9f8f6] pt-[40px] pb-[40px] overflow-hidden"
    >
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 52% 44%, rgba(164, 76, 35, 0.17) 0%, rgba(164, 76, 35, 0.1) 26%, rgba(164, 76, 35, 0.042) 50%, rgba(249, 248, 246, 0) 74%), linear-gradient(180deg, #f9f8f6 0%, #f3f2f1 100%)",
      }}
      aria-hidden
    >
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,255,255,0) 48%, rgba(53, 46, 38, 0.08) 100%)",
      }}
      aria-hidden
    />
    <div
      className="absolute pointer-events-none z-0"
      style={{
        top: "18%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "44%",
        height: "38%",
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.54) 0%, rgba(255,255,255,0.24) 38%, rgba(255,255,255,0) 72%)",
        filter: "blur(18px)",
      }}
      aria-hidden
    />
    {/* Liquid orange atmosphere */}
    {animateBlobs && <motion.div
      className="absolute pointer-events-none will-change-[transform]"
      animate={{
        x: [0, 148, 92, -44, -132, -58, 124, 36, -96, 0],
        y: [0, -88, 22, 118, 54, -72, -28, 96, 14, 0],
        scale: [1, 1.26, 0.88, 1.14, 0.78, 1.2, 0.92, 1.08, 0.86, 1],
        rotate: [-12, 14, 22, -8, -18, 11, 19, -14, 6, -12],
        borderRadius: [
          "56% 44% 63% 37% / 46% 58% 42% 54%",
          "74% 26% 28% 72% / 32% 68% 58% 42%",
          "28% 72% 68% 32% / 64% 36% 38% 62%",
          "46% 54% 62% 38% / 54% 46% 24% 76%",
          "68% 32% 34% 66% / 36% 64% 52% 48%",
          "34% 66% 72% 28% / 62% 38% 44% 56%",
          "52% 48% 40% 60% / 48% 52% 70% 30%",
          "62% 38% 58% 42% / 42% 58% 34% 66%",
          "40% 60% 48% 52% / 58% 42% 62% 38%",
          "56% 44% 63% 37% / 46% 58% 42% 54%",
        ],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.08, 0.19, 0.28, 0.42, 0.51, 0.64, 0.76, 0.9, 1],
        x: { duration: 17, ease: "easeInOut" },
        y: { duration: 22, ease: "easeInOut" },
        scale: { duration: 14, ease: "easeInOut" },
        rotate: { duration: 19, ease: "easeInOut" },
        borderRadius: { duration: 9, ease: "easeInOut" },
      }}
      style={{
        top: "-28%",
        right: "-22%",
        width: "77%",
        height: "90%",
        background: "radial-gradient(ellipse at 35% 40%, rgba(164, 76, 35, 0.48) 0%, rgba(164, 76, 35, 0.33) 18%, rgba(164, 76, 35, 0.18) 32%, rgba(164, 76, 35, 0.075) 46%, rgba(164, 76, 35, 0) 62%)",
        filter: "blur(24px)",
        borderRadius: "56% 44% 63% 37% / 46% 58% 42% 54%",
        opacity: 0.94,
      }}
    />
    }
    {animateBlobs && <motion.div
      className="absolute pointer-events-none will-change-[transform]"
      animate={{
        x: [0, -138, -62, 48, 118, 72, -96, -28, 86, 0],
        y: [0, 64, 132, 44, -48, -102, 28, 88, -36, 0],
        scale: [1, 0.8, 1.22, 0.9, 1.16, 1.04, 0.84, 1.12, 0.94, 1],
        rotate: [12, -16, -24, 8, 18, -11, -7, 15, -20, 12],
        borderRadius: [
          "41% 59% 47% 53% / 60% 43% 57% 40%",
          "22% 78% 64% 36% / 58% 42% 28% 72%",
          "70% 30% 32% 68% / 34% 66% 72% 28%",
          "48% 52% 70% 30% / 52% 48% 40% 60%",
          "36% 64% 44% 56% / 68% 32% 54% 46%",
          "58% 42% 76% 24% / 40% 60% 46% 54%",
          "30% 70% 52% 48% / 64% 36% 66% 34%",
          "66% 34% 38% 62% / 46% 54% 58% 42%",
          "44% 56% 60% 40% / 50% 50% 32% 68%",
          "41% 59% 47% 53% / 60% 43% 57% 40%",
        ],
      }}
      transition={{
        delay: 0.4,
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.12, 0.21, 0.33, 0.45, 0.54, 0.67, 0.79, 0.91, 1],
        x: { duration: 20, ease: "easeInOut" },
        y: { duration: 15, ease: "easeInOut" },
        scale: { duration: 18, ease: "easeInOut" },
        rotate: { duration: 16, ease: "easeInOut" },
        borderRadius: { duration: 8.5, ease: "easeInOut" },
      }}
      style={{
        bottom: "-38%",
        left: "-30%",
        width: "75%",
        height: "88%",
        background:
          "radial-gradient(ellipse at 64% 46%, rgba(164, 76, 35, 0.46) 0%, rgba(164, 76, 35, 0.31) 18%, rgba(164, 76, 35, 0.17) 32%, rgba(164, 76, 35, 0.075) 46%, rgba(164, 76, 35, 0) 62%)",
        filter: "blur(24px)",
        borderRadius: "41% 59% 47% 53% / 60% 43% 57% 40%",
        opacity: 0.92,
      }}
    />
    }
    {!animateBlobs && (
      <>
        <div className="absolute pointer-events-none" style={{ top: "-22%", right: "-18%", width: "62%", height: "77%", background: "radial-gradient(ellipse at 35% 40%, rgba(164, 76, 35, 0.46) 0%, rgba(164, 76, 35, 0.29) 22%, rgba(164, 76, 35, 0.15) 36%, rgba(164, 76, 35, 0.06) 48%, rgba(164, 76, 35, 0) 62%)", filter: "blur(24px)", borderRadius: "56% 44% 63% 37% / 46% 58% 42% 54%", opacity: 0.94 }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-26%", left: "-24%", width: "60%", height: "75%", background: "radial-gradient(ellipse at 64% 46%, rgba(164, 76, 35, 0.44) 0%, rgba(164, 76, 35, 0.27) 22%, rgba(164, 76, 35, 0.145) 36%, rgba(164, 76, 35, 0.06) 48%, rgba(164, 76, 35, 0) 62%)", filter: "blur(24px)", borderRadius: "41% 59% 47% 53% / 60% 43% 57% 40%", opacity: 0.92 }} />
      </>
    )}
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
    </div>

    <div className="relative z-10 mx-auto w-full max-w-site-rail px-4 md:px-6 lg:px-8 py-16 md:py-28 lg:py-36">
      <div className="max-w-3xl">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroReveal}
          custom={0.08}
          className="text-4xl md:text-6xl lg:text-[76px] xl:text-[88px] font-heading leading-[1.04] mb-6 md:mb-10"
          style={{ color: "#1d1d1f" }}
        >
          Learn.
          <br />
          Unlearn.
          <br />
          Relearn.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroReveal}
          custom={0.72}
          className="text-lg md:text-2xl max-w-lg mb-4 md:mb-8 leading-relaxed"
          style={{ color: "#1d1d1f" }}
        >
          Unlocking Human Potential.
          <br />
          Inspiring Transformation.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroReveal}
          custom={0.88}
          className="text-sm md:text-lg max-w-lg mb-10 md:mb-14 leading-relaxed"
          style={{ color: "#86868b" }}
        >
          LEUNRE is a movement unlocking human potential by inspiring new ways of thinking, fostering clarity, and helping individuals and organizations thrive.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroReveal}
          custom={1.14}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base bg-primary text-primary-foreground hover:bg-primary/80 transition-all btn-bevel-solid"
          >
            Explore Programs
            <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base transition-all btn-bevel-outline"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#3d3530",
              border: "1px solid #ECEAE6",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f3f0";
              e.currentTarget.style.borderColor = "#ddd8d2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "#ECEAE6";
            }}
          >
            Work With Us
            <ChevronRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
          </Link>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
