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

const iconRotations = [360, -360, 360];

const PhilosophySection = () => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section id="philosophy" className="py-16 md:py-24 lg:py-[11px] bg-[#f3f3f2] pb-[111px] pt-[111px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="gold-divider border-solid border-2 shadow-md border-sky-600" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-6" style={{ color: "#1d1d1f" }}>
            Our Philosophy
          </h2>
          <p className="text-sm md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#86868b" }}>
            A cyclical journey of growth — not linear, but transformational.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="relative mx-auto w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-5 md:mb-6">
                <motion.div
                  className="w-full h-full rounded-full bg-primary flex items-center justify-center relative z-10"
                  initial={{ rotate: 0 }}
                  whileInView={prefersReducedMotion ? {} : { rotate: iconRotations[i] }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: i * 0.15 }}
                >
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-foreground" strokeWidth={1.5} />
                </motion.div>
              </div>
              <h3 className="text-xl md:text-2xl font-heading mb-2 md:mb-3" style={{ color: "#1d1d1f" }}>{step.label}</h3>
              <p className="leading-relaxed text-sm md:text-base max-w-xs mx-auto" style={{ color: "#86868b" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
