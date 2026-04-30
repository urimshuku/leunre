import { motion, useReducedMotion } from "framer-motion";

/**
 * Post-footer strip: same white surface as the footer, with an oversized
 * cropped wordmark (layout as before the “fit on screen” change).
 */
const BrandMarkBackdrop = () => {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      aria-hidden="true"
      className="relative mt-0 w-full max-w-[100vw] overflow-hidden"
      style={{ backgroundColor: "#1d1d1f" }}
    >
      <div className="pointer-events-none relative mx-auto min-h-[clamp(10.5rem,28vh,20rem)] max-w-full min-w-0 select-none md:min-h-[clamp(12rem,32vh,24rem)]">
        <div
          className="absolute inset-x-0 bottom-0 h-[92%]"
          style={{
            background:
              "linear-gradient(to top, hsl(var(--primary) / 0.36) 0%, hsl(var(--primary) / 0.24) 30%, hsl(var(--primary) / 0.11) 62%, rgba(29, 29, 31, 0) 100%)",
          }}
        />
        <motion.span
          className="font-heading absolute left-1/2 whitespace-nowrap font-bold"
          initial={reduceMotion ? { opacity: 1, x: "-50%", y: "4%" } : { opacity: 0, x: "-50%", y: "28%" }}
          whileInView={{ opacity: 1, x: "-50%", y: "4%" }}
          viewport={{ once: true, amount: 0.2, margin: "80px 0px 0px 0px" }}
          transition={{ duration: reduceMotion ? 0 : 3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            bottom: 0,
            color: "rgba(255, 255, 255, 0.06)",
            fontSize: "clamp(6.5rem, 24vw, 26rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.82,
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 28%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 28%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0) 100%)",
          }}
        >
          LEUNRE
        </motion.span>
      </div>
    </section>
  );
};

export default BrandMarkBackdrop;
