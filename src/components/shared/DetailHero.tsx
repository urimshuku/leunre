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
    className="pt-20 pb-12 md:pt-24 md:pb-14 lg:pt-32 lg:pb-20 hero-bottom-shadow"
    style={{
      backgroundColor: "#edeae3",
    }}
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className="max-w-2xl"
      >
        <div className="mb-6">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            style={{ color: "#A64B1A" }}
          >
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </div>
        {tag && (
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-gold mb-3">
            {tag}
          </span>
        )}
        <div className="gold-divider mb-4 md:mb-5 lg:mb-6" />
        <h1
          className="text-3xl md:text-4xl lg:text-6xl font-heading font-normal mb-4 md:mb-5 lg:mb-6"
          style={{ color: "#A64B1A" }}
        >
          {title}
        </h1>
        <p
          className="text-base md:text-base lg:text-lg leading-relaxed whitespace-pre-line mb-6"
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
