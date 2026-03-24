import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-heading mb-6 md:mb-8" style={{ color: "#1d1d1f" }}>
          {title}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line max-w-xl" style={{ color: "#86868b" }}>
          {subtitle}
        </p>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
