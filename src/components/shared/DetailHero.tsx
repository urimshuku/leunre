import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { type ReactNode } from "react";

interface DetailHeroProps {
  backTo: string;
  backLabel: string;
  tag?: string;
  title: string;
  description: string;
  children?: ReactNode;
  transparentBackground?: boolean;
}

const DetailHero = ({ backTo, backLabel, tag, title, description, children, transparentBackground = false }: DetailHeroProps) => (
  <section className="pt-24 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28" style={transparentBackground ? undefined : { backgroundColor: "#F9F8F6" }}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className="max-w-2xl"
      >
        <div className="mb-6 md:mb-8">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            style={{ color: "#86868b" }}
          >
            <ArrowLeft size={16} className="icon-arrow-nudge icon-arrow-nudge--left" /> {backLabel}
          </Link>
        </div>
        {tag && (
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-4">
            {tag}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-heading mb-4 md:mb-8" style={{ color: "#1d1d1f" }}>
          {title}
        </h1>
        <p className="text-base md:text-xl leading-relaxed whitespace-pre-line mb-6 md:mb-8 max-w-xl" style={{ color: "#86868b" }}>
          {description}
        </p>
        {children}
      </motion.div>
    </div>
  </section>
);

export default DetailHero;
