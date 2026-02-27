import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section
    className="pt-20 pb-12 md:pt-24 md:pb-14 lg:pt-32 lg:pb-20 hero-bottom-shadow"
    style={{
      backgroundColor: "#edeae3",
    }}
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="gold-divider mb-4 md:mb-5 lg:mb-6" />
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-4 md:mb-5 lg:mb-6" style={{ color: "#b7551f" }}>
          {title}
        </h1>
        <p className="text-base md:text-base lg:text-lg leading-relaxed whitespace-pre-line" style={{ color: "#b7551f" }}>
          {subtitle}
        </p>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
