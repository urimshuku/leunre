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
  <section className="bg-hero-gradient pt-32 pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="mb-8">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </div>
        {tag && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold mb-4">
            {tag}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
          {title}
        </h1>
        <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8 whitespace-pre-line">
          {description}
        </p>
        {children}
      </motion.div>
    </div>
  </section>
);

export default DetailHero;
