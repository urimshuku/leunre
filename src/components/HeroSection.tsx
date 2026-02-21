import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
    <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] mb-4 md:mb-5 lg:mb-6"
        >
          <span style={{ color: '#d29d33' }}>Learn,</span>
          <br />
          <span style={{ color: '#d29d33' }}>Unlearn,</span>
          <br />
          <span style={{ color: '#d29d33' }}>Relearn,</span>
          <br />
          <span className="text-primary-foreground">Unlocking Human Potential.</span>
          <br />
          <span className="text-primary-foreground">Inspiring Transformation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-primary-foreground/75 max-w-xl mb-8 md:mb-9 lg:mb-10 leading-relaxed"
        >
          LEUNRE is a movement dedicated to transforming how people think, perceive, and grow — through courses, workshops, and experiential learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4"
        >
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-gold text-accent-foreground font-semibold text-sm md:text-sm lg:text-base hover:brightness-110 transition-all"
          >
            Explore Programs
            <ArrowRight size={16} />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md border border-primary-foreground/25 text-primary-foreground font-semibold text-sm md:text-sm lg:text-base hover:bg-primary-foreground/10 transition-all"
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
