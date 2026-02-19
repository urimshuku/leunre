import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ title, subtitle, centered = false, className = "" }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`${centered ? "text-center" : ""} ${className}`}
  >
    <div className={`gold-divider mb-4 md:mb-5 lg:mb-6 ${centered ? "mx-auto" : ""}`} />
    <h2 className="text-2xl md:text-[1.7rem] lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
