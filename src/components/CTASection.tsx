import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="contact" className="bg-signature py-24 md:py-32 lg:py-40">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="gold-divider mx-auto mb-5 md:mb-6 lg:mb-8" style={{ background: "rgba(247,245,242,0.3)" }} />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading mb-5 md:mb-6 lg:mb-8" style={{ color: "#F7F5F2" }}>
          Partner with LEUNRE
        </h2>
        <p className="text-sm md:text-base mb-10 md:mb-12 lg:mb-14 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(247,245,242,0.7)" }}>
          Whether you're an individual seeking growth or an organization ready for transformation, we're here to guide the journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4.5 rounded-lg bg-gold text-accent-foreground font-medium text-sm md:text-base hover:brightness-105 transition-all"
          >
            Contact
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 lg:px-9 lg:py-4.5 rounded-lg border font-medium text-sm md:text-base hover:brightness-110 transition-all"
            style={{ borderColor: "rgba(247,245,242,0.25)", color: "#F7F5F2", backgroundColor: "rgba(247,245,242,0.05)" }}
          >
            Browse Programs
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
