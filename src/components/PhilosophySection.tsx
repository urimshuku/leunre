import { motion } from "framer-motion";
import { RotateCw, RotateCcw, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: RotateCw,
    label: "Learn",
    description: "Acquire new knowledge, frameworks, and perspectives that expand your understanding of yourself and the world.",
  },
  {
    icon: RotateCcw,
    label: "Unlearn",
    description: "Let go of outdated beliefs, biases, and mental models that no longer serve your growth or potential.",
  },
  {
    icon: RefreshCw,
    label: "Relearn",
    description: "Rebuild your thinking with clarity, purpose, and deeper awareness — becoming who you were meant to be.",
  },
];

const PhilosophySection = () => (
  <section id="philosophy" className="py-14 md:py-24 lg:py-32 bg-philosophy">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <div className="gold-divider mx-auto mb-4 md:mb-6" />
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-4">
          Our Philosophy
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
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
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg">
              <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-gold/30" />
            )}
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2 md:mb-3">{step.label}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PhilosophySection;
