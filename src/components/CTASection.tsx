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
        className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 4px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}cta-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "65% center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(20,18,16,0.20) 0%, rgba(12,12,12,0.20) 48%, rgba(18,16,14,0.20) 100%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' seed='7' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
            mixBlendMode: "overlay",
            opacity: 0.38,
          }}
        />
        <div className="relative px-8 py-14 md:px-14 md:py-20 text-center">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="gold-divider border-sky-600 border-2 border-solid opacity-100" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-8" style={{ color: "#f5f5f7" }}>
            Partner with LEUNRE
          </h2>
          <p className="text-sm md:text-base mb-8 md:mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: "#f5f5f7" }}>
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
              style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.18)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.26)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              }}
            >
              Browse Programs
              <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
