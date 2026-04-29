import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    quote: "LEUNRE fundamentally changed how our leadership team approaches challenges. The shift in mindset was immediate and lasting.",
    name: "Sarah Chen",
    role: "VP of People, TechForward Inc.",
  },
  {
    quote: "The experiential training was unlike anything we've done before. Our team came back more aligned, empathetic, and effective.",
    name: "Michael Okonkwo",
    role: "Director of L&D, Global Solutions",
  },
  {
    quote: "The Conscious Leadership course gave me clarity I didn't know I was missing. I lead differently now — with purpose and presence.",
    name: "Priya Sharma",
    role: "CEO, Innova Health",
  },
  {
    quote: "Our managers now lead with more empathy and accountability. The results show up in both team morale and execution quality.",
    name: "Daniel Kim",
    role: "Head of Operations, Northline Group",
  },
];

const CARD_GAP = 24;
const CARD_HEIGHT_MOBILE = 260;
const CARD_HEIGHT_DESKTOP = 300;
const DESKTOP_VIEWPORT_WIDTH = 1240;
const DESKTOP_CARD_WIDTH = (DESKTOP_VIEWPORT_WIDTH - 2 * CARD_GAP) / 3;

const SLIDE_DURATION_SEC = 1.5;
/** Time to stay on a slide after it has finished moving, before advancing */
const DWELL_MS = 7_000;

const SLIDE_EASE = [0.32, 0.72, 0, 1] as const;
/** Left column leads, then center, then right — reads as “first pushes middle to third” */
const PUSH_STAGGER_SEC = 0.07;

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion() === true;
  const [isPageVisible, setIsPageVisible] = useState(() =>
    typeof document === "undefined" ? true : document.visibilityState === "visible",
  );
  const n = testimonials.length;
  const loopSlides = [...testimonials, ...testimonials, ...testimonials];

  const [slideIndex, setSlideIndex] = useState(2 * n);
  const instantJumpRef = useRef(false);
  const dwellTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cardWidth = isMobile ? 280 : DESKTOP_CARD_WIDTH;
  const cardHeight = isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP;
  const step = cardWidth + CARD_GAP;
  const viewportWidth = isMobile ? cardWidth : DESKTOP_VIEWPORT_WIDTH;
  const edgePad = viewportWidth / 2 - cardWidth / 2;

  const logicalActive = ((2 * n - slideIndex) % n + n) % n;
  const autoplayEnabled = !reduceMotion && isPageVisible;

  useEffect(() => {
    const syncVisibility = () => setIsPageVisible(document.visibilityState === "visible");

    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  const clearDwellTimer = useCallback(() => {
    if (dwellTimeoutRef.current !== null) {
      clearTimeout(dwellTimeoutRef.current);
      dwellTimeoutRef.current = null;
    }
  }, []);

  const advanceSlide = useCallback(() => {
    setSlideIndex((prev) => {
      if (prev === n) {
        instantJumpRef.current = true;
        return 2 * n;
      }
      return prev - 1;
    });
  }, [n]);

  const scheduleNextAdvance = useCallback(() => {
    clearDwellTimer();
    if (!autoplayEnabled) return;

    dwellTimeoutRef.current = window.setTimeout(() => {
      dwellTimeoutRef.current = null;
      advanceSlide();
    }, DWELL_MS);
  }, [clearDwellTimer, autoplayEnabled, advanceSlide]);

  useEffect(() => {
    if (!autoplayEnabled) {
      clearDwellTimer();
      return;
    }

    dwellTimeoutRef.current = window.setTimeout(() => {
      dwellTimeoutRef.current = null;
      advanceSlide();
    }, DWELL_MS);
    return () => clearDwellTimer();
  }, [advanceSlide, clearDwellTimer, autoplayEnabled]);

  const handleTrackAnimationComplete = useCallback(() => {
    if (instantJumpRef.current) {
      instantJumpRef.current = false;
      scheduleNextAdvance();
      return;
    }
    /* Staggered card motion can outlast the track; start dwell after the last slot finishes */
    const extraMs = isMobile ? 0 : Math.round(2 * PUSH_STAGGER_SEC * 1000);
    if (extraMs > 0) {
      window.setTimeout(() => scheduleNextAdvance(), extraMs);
    } else {
      scheduleNextAdvance();
    }
  }, [scheduleNextAdvance, isMobile]);

  const goToLogicalIndex = (logical: number) => {
    clearDwellTimer();
    setSlideIndex(2 * n - logical);
  };

  const slideTransition = instantJumpRef.current || reduceMotion
    ? { duration: 0 }
    : { duration: SLIDE_DURATION_SEC, ease: SLIDE_EASE };

  const pushSlotForIndex = (i: number) => {
    if (isMobile) return 1;
    const d = i - slideIndex;
    if (d === -1) return 0;
    if (d === 0) return 1;
    if (d === 1) return 2;
    return 1;
  };

  const cardMotionTransition = (i: number) => {
    if (instantJumpRef.current || reduceMotion) {
      return { duration: 0 };
    }
    const slot = pushSlotForIndex(i);
    const d = SLIDE_DURATION_SEC;
    const s = slot * PUSH_STAGGER_SEC;
    return {
      opacity: { duration: d, ease: SLIDE_EASE, delay: s },
      x: { duration: d, ease: SLIDE_EASE, delay: s },
    };
  };

  return (
    <section className="content-visibility-auto py-10 md:py-24 lg:py-28 pt-[72px] pb-[72px] md:pt-[112px] md:pb-[112px] bg-transparent">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex justify-start mb-6 md:mb-8">
            <div className="gold-divider border-sky-600 border-2 border-solid opacity-100" />
          </div>
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-6 text-inherit"
            style={{ color: "#1d1d1f" }}
          >
            What People Say
          </h2>
          <p
            className="text-sm md:text-lg max-w-xl leading-relaxed"
            style={{ color: "#86868b" }}
          >
            Hear from leaders and organizations who have experienced the LEUNRE
            transformation.
          </p>
        </motion.div>
      </div>

      <div className="w-full flex justify-center overflow-x-auto overflow-y-visible md:overflow-x-visible px-4 md:px-6 lg:px-8">
        <div
          className="relative shrink-0 overflow-hidden rounded-none flex items-center py-8"
          style={{
            width: viewportWidth,
            maxWidth: "100%",
            /* Extra vertical space so .card-elevated box-shadow matches Corporate Solutions (not clipped). */
            height: cardHeight + 64,
          }}
        >
          <motion.div
            className="flex"
            style={{
              gap: CARD_GAP,
              paddingLeft: edgePad,
              paddingRight: edgePad,
            }}
            initial={{ x: -2 * n * step }}
            animate={{ x: -slideIndex * step }}
            transition={slideTransition}
            onAnimationComplete={handleTrackAnimationComplete}
          >
            {loopSlides.map((item, i) => {
              const slot = pushSlotForIndex(i);
              const isPushTriple =
                !isMobile && i >= slideIndex - 1 && i <= slideIndex + 1;
              const pushX =
                instantJumpRef.current || !isPushTriple
                  ? 0
                  : slot === 0
                    ? [14, 0]
                    : slot === 1
                      ? [6, 0]
                      : [-12, 0];

              const nearby = Math.abs(i - slideIndex) <= 2;

              return (
                <motion.div
                  key={`slide-${i}`}
                  className="flex-shrink-0"
                  style={{ width: cardWidth, height: cardHeight, visibility: nearby ? "visible" : "hidden" }}
                  initial={false}
                  animate={{
                    opacity: i === slideIndex ? 1 : 0.4,
                    x: pushX,
                  }}
                  transition={cardMotionTransition(i)}
                >
                  {nearby && (
                    <div
                      className="group w-full h-full card-elevated p-6 md:p-8 lg:p-10 flex flex-col"
                      style={{ minHeight: cardHeight, height: cardHeight }}
                    >
                      <Quote
                        className="w-5 h-5 md:w-6 md:h-6 mb-4 md:mb-5 flex-shrink-0"
                        fill="rgba(196, 98, 42, 0.75)"
                        stroke="none"
                        strokeWidth={0}
                      />
                      <p
                        className="leading-relaxed mb-6 italic text-sm md:text-base flex-1 min-h-0 overflow-y-auto [scrollbar-width:thin]"
                        style={{ color: "#1d1d1f" }}
                      >
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      <div className="flex-shrink-0 mt-auto">
                        <p
                          className="font-heading text-sm md:text-base"
                          style={{ color: "#1d1d1f" }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="text-xs md:text-sm mt-1"
                          style={{ color: "#86868b" }}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToLogicalIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === logicalActive
                ? "w-6 h-2 bg-gray-500"
                : "w-2 h-2 bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
