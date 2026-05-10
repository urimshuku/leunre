import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { OPEN_LANDSCAPE_REVEAL_MASK } from "@/constants/openLandscapeReveal";
import { useNearViewport } from "@/hooks/useNearViewport";

const CTASection = () => {
  const [sectionRef, shouldLoadBackground] = useNearViewport<HTMLElement>("900px");

  return (
  <section
    id="contact"
    ref={sectionRef}
    className="content-visibility-auto relative isolate min-h-[620px] overflow-hidden bg-transparent pt-[72px] md:min-h-[720px] md:pt-[112px] lg:min-h-[780px] lg:pt-[124px]"
  >
    <div
      className="absolute inset-x-0 bottom-0 top-[210px] z-0 overflow-hidden md:top-[230px] lg:top-[250px]"
      aria-hidden
    >
      {shouldLoadBackground ? (
        <div className="relative h-full min-h-[1px] w-full">
          <img
            src={`${import.meta.env.BASE_URL}partner-with-leunre-landscape.png`}
            alt=""
            className="h-full w-full origin-bottom scale-[1.22] object-cover object-bottom"
            style={{
              objectPosition: "center 75%",
              maskImage: OPEN_LANDSCAPE_REVEAL_MASK,
              WebkitMaskImage: OPEN_LANDSCAPE_REVEAL_MASK,
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
    </div>
    <div
      className="absolute inset-x-0 bottom-0 top-[210px] z-[2] pointer-events-none md:top-[230px] lg:top-[250px]"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' seed='7' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
        mixBlendMode: "soft-light",
        opacity: 0.1,
        maskImage: OPEN_LANDSCAPE_REVEAL_MASK,
        WebkitMaskImage: OPEN_LANDSCAPE_REVEAL_MASK,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
      aria-hidden
    />
    <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center"
      >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#1d1d1f" }}>
            Partner with LEUNRE
          </h2>
          <p className="text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: "#5f5f64" }}>
            Whether you're an individual seeking growth or an organization ready for transformation, we're here to guide the journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base bg-primary text-primary-foreground hover:bg-primary/80 transition-all btn-bevel-solid"
            >
              Contact
              <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base transition-all btn-bevel-outline"
              style={{ backgroundColor: "rgba(255,255,255,0.52)", color: "#1d1d1f", border: "1px solid rgba(29,29,31,0.16)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.74)";
                e.currentTarget.style.borderColor = "rgba(29,29,31,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.52)";
                e.currentTarget.style.borderColor = "rgba(29,29,31,0.16)";
              }}
            >
              Browse Programs
              <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
            </Link>
          </div>
      </motion.div>
    </div>
  </section>
  );
};

export default CTASection;
