import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BottomCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  /** When true, section has no solid fill so parent blobs/grain show through (e.g. Tools page). */
  transparentBackground?: boolean;
}

const darkCardStyle: React.CSSProperties = {
  background: "linear-gradient(160deg, rgba(30,30,30,0.92) 0%, rgba(18,18,18,0.96) 48%, rgba(24,22,20,0.94) 100%)",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow:
    "0 4px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4)",
  backdropFilter: "blur(14px) saturate(1.12)",
  WebkitBackdropFilter: "blur(14px) saturate(1.12)",
};

const BottomCTA = ({ title, subtitle, buttonText, buttonHref, transparentBackground = false }: BottomCTAProps) => (
  <section className={`py-16 md:py-24 lg:py-28 ${transparentBackground ? "bg-transparent" : "bg-[#f3f2f1]"}`}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-8 py-14 md:px-14 md:py-20 rounded-3xl"
        style={darkCardStyle}
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="gold-divider border-sky-600 border-2 border-solid" />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#f5f5f7" }}>
          {title}
        </h2>
        <p className="mb-8 md:mb-12 leading-relaxed text-sm md:text-lg max-w-lg mx-auto" style={{ color: "#a1a1a6" }}>
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

export default BottomCTA;
