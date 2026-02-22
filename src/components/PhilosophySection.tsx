import { motion } from "framer-motion";
import { RotateCw, RotateCcw, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: RotateCw,
    label: "Learn",
    description: "Allows us to grow and gain new understanding.",
  },
  {
    icon: RotateCcw,
    label: "Unlearn",
    description: "Helps us let go of outdated beliefs and patterns that limit us.",
  },
  {
    icon: RefreshCw,
    label: "Relearn",
    description: "Opens the space to integrate new perspectives and evolve with clarity.",
  },
];

const PhilosophySection = () => (
  <section id="philosophy" className="py-20 md:py-28 lg:py-36 bg-philosophy border-b border-border/50 section-shadow">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12 lg:mb-16"
      >
        <div className="gold-divider mx-auto mb-4 md:mb-5 lg:mb-6" />
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">
          Our Philosophy
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          A cyclical journey of growth — not linear, but transformational.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="relative mx-auto w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 md:mb-5 lg:mb-6">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center shadow-lg relative z-10">
                <step.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-[calc(((100vw-4rem)/3-4rem))] lg:w-[calc(((min(64rem,100vw)-4rem)/3-5rem))] -translate-y-1/2 border-t-2 border-dashed border-gold/30" />
              )}
            </div>
            <h3 className="text-xl md:text-xl lg:text-2xl font-heading font-bold text-foreground mb-2 md:mb-2.5 lg:mb-3">{step.label}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PhilosophySection;
