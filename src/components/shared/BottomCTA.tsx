import { motion } from "framer-motion";

interface BottomCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

const BottomCTA = ({ title, subtitle, buttonText, buttonHref }: BottomCTAProps) => (
  <section className="py-20 md:py-28 lg:py-36 bg-background border-b border-border/50 section-shadow">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-2xl md:text-[1.7rem] lg:text-4xl font-heading font-normal text-foreground mb-4 md:mb-5 lg:mb-6">
          {title}
        </h2>
        <p className="text-muted-foreground mb-6 md:mb-7 lg:mb-8 leading-relaxed text-sm md:text-sm lg:text-base">
          {subtitle}
        </p>
        <a
          href={buttonHref}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-gold text-accent-foreground font-medium text-sm md:text-sm lg:text-base hover:brightness-110 transition-all"
        >
          {buttonText}
        </a>
      </motion.div>
    </div>
  </section>
);

export default BottomCTA;
