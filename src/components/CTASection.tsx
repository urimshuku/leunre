import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-24 lg:py-32 bg-philosophy">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
          Partner with LEUNRE
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you're an individual seeking growth or an organization ready for transformation, we're here to guide the journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-forest-light transition-colors"
          >
            Contact Us
            <ArrowRight size={18} />
          </a>
          <a
            href="#courses"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border-2 border-primary text-foreground font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Browse Courses
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
