import { motion } from "framer-motion";

interface BottomCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

const BottomCTA = ({ title, subtitle, buttonText, buttonHref }: BottomCTAProps) => (
  <section className="py-24 md:py-28 lg:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6 md:mb-8" style={{ color: "#1d1d1f" }}>
          {title}
        </h2>
        <p className="mb-10 md:mb-12 leading-relaxed text-base md:text-lg max-w-lg mx-auto" style={{ color: "#86868b" }}>
          {subtitle}
        </p>
        <a
          href={buttonHref}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all shadow-sm"
        >
          {buttonText}
        </a>
      </motion.div>
    </div>
  </section>
);

export default BottomCTA;
