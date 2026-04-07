import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[50vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center bg-[#f9f8f6] pt-[24px] pb-[24px] md:pt-[40px] md:pb-[40px] overflow-hidden">
    {/* Organic blob shapes — deeper warm tones for visible contrast */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-8%",
        right: "-3%",
        width: "55%",
        height: "70%",
        background: "radial-gradient(ellipse at center, rgba(164, 76, 35, 0.14) 0%, rgba(164, 76, 35, 0.04) 50%, transparent 72%)",
        filter: "blur(70px)",
        borderRadius: "50%",
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-12%",
        left: "-6%",
        width: "48%",
        height: "55%",
        background: "radial-gradient(ellipse at center, rgba(160, 130, 100, 0.15) 0%, rgba(160, 130, 100, 0.05) 50%, transparent 72%)",
        filter: "blur(80px)",
        borderRadius: "50%",
      }}
    />

    <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-28 lg:py-36">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          className="text-3xl md:text-6xl lg:text-[76px] xl:text-[88px] font-heading leading-[1.04] mb-4 md:mb-10"
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
          className="text-base md:text-2xl max-w-lg mb-3 md:mb-8 leading-relaxed"
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base bg-primary text-primary-foreground hover:bg-primary/80 transition-all shadow-sm"
          >
            Explore Programs
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base transition-all"
            style={{
              backgroundColor: "#e8e4df",
              color: "#3d3530",
              border: "1px solid #ddd8d2",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e2d9d0";
              e.currentTarget.style.borderColor = "#d4cbc1";
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
