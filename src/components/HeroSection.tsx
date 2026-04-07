import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center bg-[#f9f8f6] pt-[40px] pb-[40px] overflow-hidden">
    {/* Subtle organic blob shapes */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute rounded-full"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: "800px",
          maxHeight: "800px",
          top: "-18%",
          right: "-12%",
          background: "radial-gradient(circle, rgba(164,76,35,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "40vw",
          height: "40vw",
          maxWidth: "600px",
          maxHeight: "600px",
          bottom: "-10%",
          left: "-8%",
          background: "radial-gradient(circle, rgba(200,180,160,0.07) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-28 lg:py-36">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl lg:text-[76px] xl:text-[88px] font-heading leading-[1.04] mb-6 md:mb-10"
          style={{ color: "#1d1d1f" }}
        >
          Learn.
          <br />
          Unlearn.
          <br />
          Relearn.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0, 0, 0.2, 1] }}
          className="text-lg md:text-2xl max-w-lg mb-4 md:mb-8 leading-relaxed"
          style={{ color: "#1d1d1f" }}
        >
          Unlocking Human Potential. Inspiring Transformation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="text-sm md:text-lg max-w-lg mb-10 md:mb-14 leading-relaxed"
          style={{ color: "#86868b" }}
        >
          LEUNRE is a movement unlocking human potential by inspiring new ways of thinking, fostering clarity, and helping individuals and organizations thrive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base transition-all duration-200 ease-in-out shadow-sm"
            style={{
              backgroundColor: "#3d3530",
              color: "#f9f8f6",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4a3f38";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3d3530";
            }}
          >
            Explore Programs
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base transition-all duration-200 ease-in-out"
            style={{
              backgroundColor: "#e8e4df",
              color: "#2c2825",
              border: "1px solid #ddd8d2",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e5ddd5";
              e.currentTarget.style.borderColor = "#d4ccc4";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e8e4df";
              e.currentTarget.style.borderColor = "#ddd8d2";
            }}
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
