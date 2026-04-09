import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EXTREME_NOISE_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.85' numOctaves='6' seed='13' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

interface PageHeroProps {
  title: string;
  subtitle: string;
  withHomeAtmosphere?: boolean;
  matchProgramsSize?: boolean;
  noShadow?: boolean;
}

const PageHero = ({
  title,
  subtitle,
  withHomeAtmosphere = false,
  matchProgramsSize = false,
  noShadow = false,
}: PageHeroProps) => {
  const [animateBlobs, setAnimateBlobs] = useState(false);

  useEffect(() => {
    if (!withHomeAtmosphere) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 1024px)").matches;
    const saveData = typeof navigator !== "undefined" && "connection" in navigator
      ? Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
      : false;
    const lowCpu = typeof navigator !== "undefined" && navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;

    setAnimateBlobs(!(reduceMotion || smallScreen || saveData || lowCpu));
  }, [withHomeAtmosphere]);

  return (
    <section
      className={`relative border-none ${noShadow ? "shadow-none" : "shadow-[0px_0px_0px_0px_rgba(0,0,0,0),0px_4px_0px_0px_rgba(0,0,0,0.15),0px_4px_0px_0px_rgba(0,0,0,0.15)]"} overflow-hidden ${
        withHomeAtmosphere && !matchProgramsSize
          ? "min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center pt-[40px] pb-[40px]"
          : "pt-24 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28"
      }`}
      style={{ backgroundColor: "#F9F8F6" }}
    >
      {withHomeAtmosphere && animateBlobs && (
        <>
          <motion.div
            className="absolute pointer-events-none"
            animate={{
              x: [0, 104, 48, -26, -78, 0],
              y: [0, -54, 36, 86, 18, 0],
              scale: [1, 1.18, 0.98, 0.84, 1.08, 1],
              rotate: [-8, 7, 18, 9, -10, -8],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            style={{
              top: "-28%",
              right: "-22%",
              width: "84%",
              height: "98%",
              background: "radial-gradient(ellipse at 35% 40%, rgba(164, 76, 35, 0.3) 0%, rgba(164, 76, 35, 0.2) 30%, rgba(164, 76, 35, 0.1) 52%, rgba(164, 76, 35, 0) 76%)",
              filter: "blur(82px)",
              borderRadius: "56% 44% 63% 37% / 46% 58% 42% 54%",
              opacity: 0.95,
            }}
          />
          <motion.div
            className="absolute pointer-events-none"
            animate={{
              x: [0, -102, -44, 32, 84, 0],
              y: [0, 52, 94, 28, -26, 0],
              scale: [1, 0.84, 1.1, 1.19, 1.02, 1],
              rotate: [10, -10, -19, -4, 12, 10],
            }}
            transition={{ duration: 9, delay: 0.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            style={{
              bottom: "-38%",
              left: "-30%",
              width: "82%",
              height: "96%",
              background:
                "radial-gradient(ellipse at 64% 46%, rgba(164, 76, 35, 0.29) 0%, rgba(164, 76, 35, 0.19) 30%, rgba(164, 76, 35, 0.1) 52%, rgba(164, 76, 35, 0) 76%)",
              filter: "blur(90px)",
              borderRadius: "41% 59% 47% 53% / 60% 43% 57% 40%",
              opacity: 0.93,
            }}
          />
        </>
      )}
      {withHomeAtmosphere && !animateBlobs && (
        <>
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-22%",
              right: "-18%",
              width: "68%",
              height: "84%",
              background: "radial-gradient(ellipse at 35% 40%, rgba(164, 76, 35, 0.24) 0%, rgba(164, 76, 35, 0.14) 36%, rgba(164, 76, 35, 0.08) 58%, rgba(164, 76, 35, 0) 78%)",
              filter: "blur(72px)",
              borderRadius: "56% 44% 63% 37% / 46% 58% 42% 54%",
              opacity: 0.92,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-26%",
              left: "-24%",
              width: "66%",
              height: "82%",
              background: "radial-gradient(ellipse at 64% 46%, rgba(164, 76, 35, 0.22) 0%, rgba(164, 76, 35, 0.13) 36%, rgba(164, 76, 35, 0.08) 58%, rgba(164, 76, 35, 0) 78%)",
              filter: "blur(78px)",
              borderRadius: "41% 59% 47% 53% / 60% 43% 57% 40%",
              opacity: 0.9,
            }}
          />
        </>
      )}
      {withHomeAtmosphere && (
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: EXTREME_NOISE_OVERLAY,
            backgroundRepeat: "repeat",
            backgroundSize: "72px 72px",
            mixBlendMode: "hard-light",
            opacity: 1,
          }}
          aria-hidden
        />
      )}
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-heading mb-4 md:mb-8" style={{ color: "#1d1d1f" }}>
            {title}
          </h1>
          <p className="text-base md:text-xl leading-relaxed whitespace-pre-line max-w-xl" style={{ color: "#86868b" }}>
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
