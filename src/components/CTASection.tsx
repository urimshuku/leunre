import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="contact" className="py-20 md:py-28 lg:py-36 bg-philosophy border-b border-border/50 section-shadow">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="gold-divider mx-auto mb-4 md:mb-5 lg:mb-6" />
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4 md:mb-5 lg:mb-6">
          Partner with LEUNRE
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-8 md:mb-9 lg:mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you're an individual seeking growth or an organization ready for transformation, we're here to guide the journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-3.5 lg:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-primary text-primary-foreground font-semibold text-sm md:text-sm lg:text-base hover:bg-forest-light transition-colors"
          >
            Contact
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md border font-semibold text-sm md:text-sm lg:text-base shadow-sm hover:shadow-md hover:brightness-110 transition-all"
            style={{ borderColor: "#33302e", color: "#33302e", backgroundColor: "rgba(51,48,46,0.05)" }}
          >
            Browse Programs
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
