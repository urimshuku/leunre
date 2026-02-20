import { motion } from "framer-motion";

const metrics = [
  { value: "35+", label: "Countries" },
  { value: "1,500+", label: "Professionals Impacted" },
  { value: "50+", label: "Workshops & Trainings" },
  { value: "20+", label: "Company Partners" },
  { value: "4", label: "Leadership Programs" },
];

const TrustSection = () => (
  <section className="py-10 md:py-12 lg:py-14 bg-background border-b border-border section-shadow overflow-hidden">
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...metrics, ...metrics, ...metrics, ...metrics, ...metrics, ...metrics].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-8 md:mx-12 lg:mx-16"
            >
              <span className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground">
                {item.value}
              </span>
              <span className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
