import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="contact" className="py-10 md:py-24 lg:py-28 pt-[72px] md:pt-[112px] pb-[112px] bg-transparent border-b-0 border-b-[#eae8e6] border-t-0 border-r-0 border-l-0">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="gold-divider border-sky-600 border-2 border-solid opacity-100" />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#1d1d1f" }}>
          Partner with LEUNRE
        </h2>
        <p className="text-sm md:text-base mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: "#86868b" }}>
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
            style={{ backgroundColor: "#FFFFFF", color: "#3d3530", border: "1px solid #ECEAE6" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f3f0";
              e.currentTarget.style.borderColor = "#ddd8d2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "#ECEAE6";
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
