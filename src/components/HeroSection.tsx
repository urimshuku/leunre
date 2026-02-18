import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
    <div className="container relative z-10 mx-auto px-4 lg:px-8 py-16 md:py-32">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gold/30 bg-primary/20 backdrop-blur-sm mb-6 md:mb-8"
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-gold-light">Learn · Unlearn · Relearn</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] text-primary-foreground mb-4 md:mb-6"
        >
          Unlock the Full
          <br />
          <span className="text-gold">Potential</span> Within
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-xl text-primary-foreground/75 max-w-xl mb-8 md:mb-10 leading-relaxed"
        >
          LEUNRE is a movement dedicated to transforming how people think, perceive, and grow — through courses, workshops, and experiential learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4"
        >
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-md border-2 border-gold bg-gold text-accent-foreground font-semibold text-sm md:text-base hover:bg-transparent hover:text-gold transition-all"
          >
            Explore Courses
            <ArrowRight size={16} />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-md border border-primary-foreground/25 text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary-foreground/10 transition-all"
          >
            Work With Us
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
