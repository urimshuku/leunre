import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNearViewport } from "@/hooks/useNearViewport";

interface BottomCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  /** When true, section has no solid fill so parent blobs/grain show through (e.g. Tools page). */
  transparentBackground?: boolean;
  /** Optional photo background, rendered with CTA overlay + grain layers. */
  backgroundImage?: string;
  backgroundPosition?: string;
  landscapeImageClassName?: string;
  openLandscape?: boolean;
  landscapeGradient?: string;
}

const darkCardStyle: React.CSSProperties = {
  background: "linear-gradient(160deg, rgba(30,30,30,0.92) 0%, rgba(18,18,18,0.96) 48%, rgba(24,22,20,0.94) 100%)",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow:
    "0 4px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4)",
  backdropFilter: "blur(14px) saturate(1.12)",
  WebkitBackdropFilter: "blur(14px) saturate(1.12)",
};

const BottomCTA = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  transparentBackground = false,
  backgroundImage,
  backgroundPosition = "center",
  landscapeImageClassName = "",
  openLandscape = false,
  landscapeGradient = "linear-gradient(180deg, #f3f2f1 0%, #f3f2f1 28%, rgba(243, 242, 241, 0.94) 38%, rgba(243, 242, 241, 0.68) 50%, rgba(243, 242, 241, 0.28) 64%, rgba(243, 242, 241, 0) 78%)",
}: BottomCTAProps) => {
  const [cardRef, shouldLoadBackground] = useNearViewport<HTMLDivElement>();
  const [sectionRef, shouldLoadLandscape] = useNearViewport<HTMLElement>("900px");

  if (openLandscape && backgroundImage) {
    return (
      <section
        ref={sectionRef}
        className={`content-visibility-auto relative isolate min-h-[620px] overflow-hidden pt-[72px] md:min-h-[720px] md:pt-[112px] lg:min-h-[780px] lg:pt-[124px] ${
          transparentBackground ? "bg-transparent" : "bg-[#f3f2f1]"
        }`}
      >
        <div
          className="absolute inset-x-0 bottom-0 top-[210px] z-0 overflow-hidden md:top-[230px] lg:top-[250px]"
          aria-hidden
        >
          {shouldLoadLandscape ? (
            <img
              src={backgroundImage}
              alt=""
              className={`h-full w-full origin-bottom scale-[1.22] object-cover object-bottom ${landscapeImageClassName}`}
              style={{ objectPosition: backgroundPosition }}
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: landscapeGradient,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 top-[210px] z-[2] pointer-events-none md:top-[230px] lg:top-[250px]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' seed='7' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
            mixBlendMode: "soft-light",
            opacity: 0.22,
          }}
          aria-hidden
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#1d1d1f" }}>
              {title}
            </h2>
            <p className="mb-8 md:mb-12 leading-relaxed text-sm md:text-lg max-w-lg mx-auto" style={{ color: "#5f5f64" }}>
              {subtitle}
            </p>
            <a
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all rounded-xl btn-bevel-solid"
            >
              {buttonText}
              <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
  <section className={`content-visibility-auto py-16 md:py-24 lg:py-28 ${transparentBackground ? "bg-transparent" : "bg-[#f3f2f1]"}`}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className={`relative mx-auto rounded-3xl overflow-hidden ${
          backgroundImage
            ? "max-w-site-rail px-8 py-16 md:px-16 md:py-24 lg:px-20 lg:py-28"
            : "max-w-3xl px-8 py-14 md:px-14 md:py-20"
        }`}
        style={darkCardStyle}
      >
        {backgroundImage ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: shouldLoadBackground ? `url(${backgroundImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition,
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(160deg, rgba(20,18,16,0.20) 0%, rgba(12,12,12,0.20) 48%, rgba(18,16,14,0.20) 100%)" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' seed='7' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat",
                backgroundSize: "120px 120px",
                mixBlendMode: "overlay",
                opacity: 0.38,
              }}
            />
          </>
        ) : null}
        <div className="relative">
          {!backgroundImage ? (
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="gold-divider border-sky-600 border-2 border-solid" />
            </div>
          ) : null}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#f5f5f7" }}>
            {title}
          </h2>
          <p className="mb-8 md:mb-12 leading-relaxed text-sm md:text-lg max-w-lg mx-auto" style={{ color: "#f5f5f7" }}>
            {subtitle}
          </p>
          <a
            href={buttonHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all rounded-xl btn-bevel-solid"
          >
            {buttonText}
            <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default BottomCTA;
