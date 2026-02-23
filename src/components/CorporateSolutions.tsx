import { motion } from "framer-motion";
import { Building2, Mountain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Building2,
    title: "Organizational Development",
    description: "We support organizations in creating cultures where people feel connected, valued, and inspired. Our work combines strategic systems thinking with human-centered insight.",
    link: "/services/organizational-development",
  },
  {
    icon: Mountain,
    title: "Retreats",
    description: "Immersive experiences for individuals and organizations — spaces to pause, reset, and realign with purpose.",
    link: "/services/retreats",
  },
];

const CorporateSolutions = () => (
  <section id="services" className="py-20 md:py-28 lg:py-36 bg-philosophy border-b border-border/50 section-shadow">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12 lg:mb-16"
      >
        <div className="gold-divider mx-auto mb-4 md:mb-5 lg:mb-6" />
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">
          Corporate Solutions
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          Enterprise-grade programs designed to transform your organization from the inside out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
        {solutions.map((item, i) => (
          <div
            key={item.title}
            className="p-5 md:p-6 lg:p-8 rounded-xl bg-card border border-border hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col flex-1"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
                <item.icon className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 md:mb-2.5 lg:mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-[0.8rem] lg:text-sm mb-4 md:mb-4.5 lg:mb-5 flex-1">{item.description}</p>
              <Link to={item.link} className="inline-flex items-center gap-1 text-xs md:text-xs lg:text-sm font-semibold text-primary hover:text-forest-light transition-colors mt-auto">
                Learn More <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CorporateSolutions;
