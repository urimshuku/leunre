import { motion } from "framer-motion";

const logos = [
  "Accenture", "Deloitte", "McKinsey", "Google", "Unilever", "Siemens"
];

const TrustSection = () => (
  <section className="py-6 md:py-8 lg:py-12">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="section-card">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs md:text-xs lg:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6 md:mb-8 lg:mb-10"
      >
        Trusted by leading organizations worldwide
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 lg:gap-14">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-base md:text-xl lg:text-2xl font-heading font-bold text-muted-foreground/40 select-none"
          >
            {name}
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
