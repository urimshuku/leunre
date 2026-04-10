import { motion } from "framer-motion";

interface BottomCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  /** When true, section has no solid fill so parent blobs/grain show through (e.g. Tools page). */
  transparentBackground?: boolean;
}

const BottomCTA = ({ title, subtitle, buttonText, buttonHref, transparentBackground = false }: BottomCTAProps) => (
  <section className={`py-16 md:py-24 lg:py-28 ${transparentBackground ? "bg-transparent" : "bg-[#f3f2f1]"}`}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="gold-divider border-sky-600 border-2 border-solid" />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#1d1d1f" }}>
          {title}
        </h2>
        <p className="mb-8 md:mb-12 leading-relaxed text-sm md:text-lg max-w-lg mx-auto" style={{ color: "#86868b" }}>
          {subtitle}
        </p>
        <a
          href={buttonHref}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all rounded-xl shadow-sm"
        >
          {buttonText}
        </a>
      </motion.div>
    </div>
  </section>
);

export default BottomCTA;
