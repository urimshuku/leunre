import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const HeroSection = () => (
  <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: "#edeae3" }}>
    <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] mb-4 md:mb-5 lg:mb-6"
          >
            <span style={{ color: "#b7551f" }}>Learn.</span>
            <br />
            <span style={{ color: "#b7551f" }}>Unlearn.</span>
            <br />
            <span style={{ color: "#b7551f" }}>Relearn.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base md:text-lg lg:text-xl font-bold max-w-xl mb-4 md:mb-5 lg:mb-6 leading-relaxed" style={{ color: "#b7551f" }}
          >
            Unlocking Human Potential. Inspiring Transformation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl max-w-xl mb-8 md:mb-9 lg:mb-10 leading-relaxed" style={{ color: "#b7551f" }}
          >
            LEUNRE is a movement unlocking human potential by inspiring new ways of thinking, fostering clarity, and helping individuals and organizations thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4"
          >
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md font-semibold text-sm md:text-sm lg:text-base shadow-sm hover:shadow-md hover:brightness-110 transition-all"
              style={{ backgroundColor: "#b7551f", color: "#ffffff" }}
            >
              Explore Programs
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md border font-semibold text-sm md:text-sm lg:text-base shadow-sm hover:shadow-md hover:brightness-110 transition-all"
              style={{ borderColor: "#33302e", color: "#33302e", backgroundColor: "rgba(51,48,46,0.05)" }}
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
