import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden hero-bottom-shadow" style={{ backgroundColor: "#edeae3" }}>
    <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] font-heading leading-[1.08] mb-6 md:mb-8 lg:mb-10"
        >
          <span style={{ color: "#A64B1A" }}>Learn.</span>
          <br />
          <span style={{ color: "#A64B1A" }}>Unlearn.</span>
          <br />
          <span style={{ color: "#A64B1A" }}>Relearn.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0, 0, 0.2, 1] }}
          className="text-base md:text-lg lg:text-xl font-normal max-w-lg mb-5 md:mb-6 lg:mb-7 leading-relaxed" style={{ color: "#A64B1A" }}
        >
          Unlocking Human Potential. Inspiring Transformation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="text-base md:text-lg max-w-lg mb-10 md:mb-12 lg:mb-14 leading-relaxed" style={{ color: "#A64B1A" }}
        >
          LEUNRE is a movement unlocking human potential by inspiring new ways of thinking, fostering clarity, and helping individuals and organizations thrive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4"
        >
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4.5 rounded-lg font-medium text-sm md:text-base hover:brightness-105 transition-all"
            style={{ backgroundColor: "#A64B1A", color: "#ffffff" }}
          >
            Explore Programs
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4.5 rounded-lg border font-medium text-sm md:text-base hover:brightness-105 transition-all"
            style={{ borderColor: "#D8CEC5", color: "#5C3A2E", backgroundColor: "rgba(92,58,46,0.03)" }}
          >
            Work With Us
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
