import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="contact" className="py-16 md:py-24 lg:py-28 border-0 pt-[112px] bg-[#f3f2f1]">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="border-sky-600" style={{ width: 40, height: 2, backgroundColor: "rgba(245,245,247,0.2)", borderRadius: 2 }} />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8 text-inherit" style={{ color: "#f5f5f7" }}>
          Partner with LEUNRE
        </h2>
        <p className="text-sm md:text-base mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(245,245,247,0.6)" }}>
          Whether you're an individual seeking growth or an organization ready for transformation, we're here to guide the journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl font-medium text-sm md:text-base bg-primary text-primary-foreground hover:opacity-90 transition-all"
          >
            Contact
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl border font-medium text-sm md:text-base hover:bg-white/10 transition-all"
            style={{ borderColor: "rgba(245,245,247,0.2)", color: "#f5f5f7" }}
          >
            Browse Programs
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
