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
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-6 whitespace-pre-line" style={{ color: "#1d1d1f" }}>
      {title}
    </h2>
    {subtitle && (
      <div className={`text-base md:text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`} style={{ color: "#86868b" }}>
        {subtitle.split('\n').filter(Boolean).map((line, i) => (
          <p key={i} className={i > 0 ? "mt-4" : ""}>{line}</p>
        ))}
      </div>
    )}
  </motion.div>
);

export default SectionHeader;
