import { motion } from "framer-motion";

interface BottomCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

const BottomCTA = ({ title, subtitle, buttonText, buttonHref }: BottomCTAProps) => (
  <section className="py-24 md:py-32 lg:py-40 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-5 md:mb-6 lg:mb-8">
          {title}
        </h2>
        <p className="text-muted-foreground mb-8 md:mb-10 lg:mb-12 leading-relaxed text-sm md:text-base max-w-lg mx-auto">
          {subtitle}
        </p>
        <a
          href={buttonHref}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4.5 rounded-lg bg-gold text-accent-foreground font-medium text-sm md:text-base hover:brightness-105 transition-all"
        >
          {buttonText}
        </a>
      </motion.div>
    </div>
  </section>
);

export default BottomCTA;
