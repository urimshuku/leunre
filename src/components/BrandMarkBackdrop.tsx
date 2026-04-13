import { useEffect, useRef, useState } from "react";

/**
 * Post-footer strip: same white surface as the footer, with an oversized
 * cropped wordmark (layout as before the “fit on screen” change).
 */
const BrandMarkBackdrop = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { rootMargin: "80px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="relative mt-0 w-full max-w-[100vw] overflow-hidden bg-[#FFFFFF]"
    >
      <div className="pointer-events-none relative mx-auto min-h-[clamp(10.5rem,28vh,20rem)] max-w-full min-w-0 select-none md:min-h-[clamp(12rem,32vh,24rem)]">
        <span
          className="font-heading absolute left-1/2 whitespace-nowrap font-bold transition-opacity duration-1000 ease-out"
          style={{
            bottom: 0,
            color: "rgba(29, 29, 31, 0.085)",
            fontSize: "clamp(6.5rem, 24vw, 26rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.82,
            opacity: revealed ? 1 : 0,
            transform: "translateX(-50%) translateY(4%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 28%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 28%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0) 100%)",
          }}
        >
          LEUNRE
        </span>
      </div>
    </section>
  );
};

export default BrandMarkBackdrop;
