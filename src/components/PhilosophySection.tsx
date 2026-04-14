import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
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
const orangeTokenIconStyle = {
  background: "linear-gradient(180deg, #CC7A44 0%, #B7642F 100%)",
  border: "1px solid rgba(255, 255, 255, 0.32)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(71,32,11,0.35), 0 2px 6px rgba(120,57,25,0.26)",
};

const PhilosophySection = () => {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;
  const [rotations, setRotations] = useState([0, 0, 0]);
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.25 });
  const didScrollReveal = useRef(false);

  useEffect(() => {
    if (!isGridInView || reduceMotion || didScrollReveal.current) return;
    didScrollReveal.current = true;
    const timeouts = iconRotations.map((delta, i) =>
      window.setTimeout(() => {
        setRotations((prev) => {
          const next = [...prev];
          next[i] += delta;
          return next;
        });
      }, i * 130),
    );
    return () => timeouts.forEach(clearTimeout);
  }, [isGridInView, reduceMotion]);

  const onIconHover = (index: number) => {
    if (reduceMotion) return;
    setRotations((prev) => {
      const next = [...prev];
      next[index] += iconRotations[index];
      return next;
    });
  };

  return (
    <section id="philosophy" className="py-10 md:py-24 lg:py-28 pb-[72px] pt-[72px] md:pb-[112px] md:pt-[112px] bg-transparent border-b-0 border-b-[#eae8e6] border-t-0 border-r-0 border-l-0">
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

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
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
                  className="w-full h-full"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
                >
                  <motion.div
                    className="w-full h-full rounded-full flex items-center justify-center relative z-10 cursor-pointer"
                    style={orangeTokenIconStyle}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: reduceMotion ? 0 : rotations[i] }}
                    transition={{ duration: 0.65, ease: [0, 0, 0.2, 1] }}
                    whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                    onHoverStart={() => onIconHover(i)}
                    aria-hidden
                  >
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white pointer-events-none" strokeWidth={1.5} />
                  </motion.div>
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
