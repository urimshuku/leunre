import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="contact" className="py-10 md:py-24 lg:py-28 pt-[72px] md:pt-[112px] pb-[112px] bg-transparent border-b-0 border-b-[#eae8e6] border-t-0 border-r-0 border-l-0">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-8 py-14 md:px-14 md:py-20 text-center rounded-3xl"
        style={{
          background: "linear-gradient(160deg, rgba(30,30,30,0.92) 0%, rgba(18,18,18,0.96) 48%, rgba(24,22,20,0.94) 100%)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 4px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4)",
          backdropFilter: "blur(14px) saturate(1.12)",
          WebkitBackdropFilter: "blur(14px) saturate(1.12)",
        }}
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="gold-divider border-sky-600 border-2 border-solid opacity-100" />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#f5f5f7" }}>
          Partner with LEUNRE
        </h2>
        <p className="text-sm md:text-base mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: "#a1a1a6" }}>
          Whether you're an individual seeking growth or an organization ready for transformation, we're here to guide the journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base bg-primary text-primary-foreground hover:bg-primary/80 transition-all btn-bevel-solid"
          >
            Contact
            <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base transition-all btn-bevel-outline"
            style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.14)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            Browse Programs
            <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
