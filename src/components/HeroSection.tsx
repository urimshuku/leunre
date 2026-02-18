import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroPeople from "@/assets/hero-people.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
    {/* Subtle background image */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroPeople}
        alt=""
        className="w-full h-full object-cover opacity-[0.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/80 to-primary" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
    </div>
    <div className="container relative z-10 mx-auto px-4 lg:px-8 py-32">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-primary/20 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm font-medium text-gold-light">Learn · Unlearn · Relearn</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] text-primary-foreground mb-6"
        >
          Unlock the Full
          <br />
          <span className="text-gold">Potential</span> Within
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/75 max-w-xl mb-10 leading-relaxed"
        >
          LEUNRE is a movement dedicated to transforming how people think, perceive, and grow — through courses, workshops, and experiential learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#courses"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gold text-accent-foreground font-semibold text-base hover:brightness-110 transition-all"
          >
            Explore Courses
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-primary-foreground/25 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all"
          >
            Work With Us
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
