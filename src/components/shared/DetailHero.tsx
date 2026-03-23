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
}

const DetailHero = ({ backTo, backLabel, tag, title, description, children }: DetailHeroProps) => (
  <section
    className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-28 hero-bottom-shadow"
    style={{ backgroundColor: "#edeae3" }}
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className="max-w-2xl"
      >
        <div className="mb-8">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            style={{ color: "#A64B1A" }}
          >
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </div>
        {tag && (
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-gold mb-4">
            {tag}
          </span>
        )}
        <div className="gold-divider mb-5 md:mb-6 lg:mb-8" />
        <h1
          className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-5 md:mb-6 lg:mb-8"
          style={{ color: "#A64B1A" }}
        >
          {title}
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed whitespace-pre-line mb-8 max-w-xl"
          style={{ color: "#A64B1A" }}
        >
          {description}
        </p>
        {children}
      </motion.div>
    </div>
  </section>
);

export default DetailHero;
