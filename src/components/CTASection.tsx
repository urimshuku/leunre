import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="contact" className="py-10 md:py-24 lg:py-28 border-0 pt-[48px] bg-[#f9f8f6] md:pt-[112px] pb-[72px] md:pb-[112px]">>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="flex justify-center mb-4 md:mb-8">
          <div className="border-sky-600 border-2 border-solid opacity-100" style={{ width: 40, height: 2, backgroundColor: "#D8CEC5", borderRadius: 2 }} />
        </div>
        <h2 className="text-xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-8" style={{ color: "#1d1d1f" }}>
          Partner with LEUNRE
        </h2>
        <p className="text-xs md:text-base mb-6 md:mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: "#86868b" }}>
          Whether you're an individual seeking growth or an organization ready for transformation, we're here to guide the journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base bg-primary text-primary-foreground hover:bg-primary/80 transition-all"
          >
            Contact
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base transition-all"
            style={{ backgroundColor: "#e8e4df", color: "#3d3530", border: "1px solid #ddd8d2" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e2d9d0";
              e.currentTarget.style.borderColor = "#d4cbc1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e8e4df";
              e.currentTarget.style.borderColor = "#ddd8d2";
            }}
          >
            Browse Programs
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
