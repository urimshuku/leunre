import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
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

const SLIDE_DURATION_SEC = 2;
/** Time to stay on a slide after it has finished moving, before advancing */
const DWELL_MS = 10_000;

const SLIDE_EASE = [0.32, 0.72, 0, 1] as const;

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const n = testimonials.length;
  /** Triple strip: middle block indices `n`…`2n` (duplicate of first item at `n` and `2n`) */
  const loopSlides = [...testimonials, ...testimonials, ...testimonials];

  /** Start at `2n`: same centered card as `n`, but we decrement so motion is right→left (strip moves right). */
  const [slideIndex, setSlideIndex] = useState(2 * n);
  const instantJumpRef = useRef(false);
  const dwellTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cardWidth = isMobile ? 280 : 380;
  const cardHeight = isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP;
  const step = cardWidth + CARD_GAP;
  const viewportWidth = isMobile ? cardWidth : 3 * cardWidth + 2 * CARD_GAP;
  const edgePad = viewportWidth / 2 - cardWidth / 2;

  /** Dot index while using decrementing physical index `slideIndex` */
  const logicalActive = ((2 * n - slideIndex) % n + n) % n;

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
        requestAnimationFrame(() => {
          instantJumpRef.current = false;
        });
        return 2 * n;
      }
      return prev - 1;
    });
  }, [n]);

  const scheduleNextAdvance = useCallback(() => {
    clearDwellTimer();
    dwellTimeoutRef.current = window.setTimeout(() => {
      dwellTimeoutRef.current = null;
      advanceSlide();
    }, DWELL_MS);
  }, [clearDwellTimer, advanceSlide]);

  /** First slide: stay 10s, then advance (same ref as manual dwell so dot-click can cancel) */
  useEffect(() => {
    dwellTimeoutRef.current = window.setTimeout(() => {
      dwellTimeoutRef.current = null;
      advanceSlide();
    }, DWELL_MS);
    return () => clearDwellTimer();
  }, [advanceSlide, clearDwellTimer]);

  const handleTrackAnimationComplete = useCallback(() => {
    scheduleNextAdvance();
  }, [scheduleNextAdvance]);

  const goToLogicalIndex = (logical: number) => {
    clearDwellTimer();
    setSlideIndex(2 * n - logical);
  };

  const slideTransition = instantJumpRef.current
    ? { duration: 0 }
    : { duration: SLIDE_DURATION_SEC, ease: SLIDE_EASE };

  return (
    <section className="py-10 md:py-24 lg:py-28 pt-[72px] pb-[72px] md:pt-[112px] md:pb-[112px] bg-transparent">
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
          className="relative shrink-0 overflow-hidden rounded-none"
          style={{
            width: viewportWidth,
            maxWidth: "100%",
            height: cardHeight,
          }}
        >
          <motion.div
            className="flex h-full"
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
            {loopSlides.map((item, i) => (
              <motion.div
                key={`slide-${i}`}
                className="flex-shrink-0"
                style={{ width: cardWidth, height: cardHeight }}
                initial={false}
                animate={{
                  opacity: i === slideIndex ? 1 : 0.4,
                }}
                transition={{
                  duration: SLIDE_DURATION_SEC * 0.45,
                  ease: SLIDE_EASE,
                }}
              >
                <div
                  className="w-full h-full bg-card rounded-2xl p-6 md:p-8 card-elevated flex flex-col"
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
              </motion.div>
            ))}
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
