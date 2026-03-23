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
    <div className={`gold-divider mb-5 md:mb-6 lg:mb-7 ${centered ? "mx-auto" : ""}`} />
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-4 md:mb-5 lg:mb-6 whitespace-pre-line">
      {title}
    </h2>
    {subtitle && (
      <div className={`text-muted-foreground text-sm md:text-base leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
        {subtitle.split('\n').filter(Boolean).map((line, i) => (
          <p key={i} className={i > 0 ? "mt-4" : ""}>{line}</p>
        ))}
      </div>
    )}
  </motion.div>
);

export default SectionHeader;
