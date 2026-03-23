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
  <section id="services" className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: "#F2ECE6" }}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14 md:mb-16 lg:mb-20"
      >
        <div className="gold-divider mx-auto mb-5 md:mb-6 lg:mb-7" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-4 md:mb-5 lg:mb-6">
          Corporate Solutions
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Enterprise-grade programs designed to transform your organization from the inside out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-3xl mx-auto">
        {solutions.map((item, i) => (
          <div
            key={item.title}
            className="group p-6 md:p-8 lg:p-10 rounded-xl bg-card card-elevated card-elevated-hover transition-all duration-300 flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col flex-1"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/8 flex items-center justify-center mb-5 md:mb-6 lg:mb-8 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-heading text-foreground mb-3 md:mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5 md:mb-6 flex-1 max-w-sm">{item.description}</p>
              <Link to={item.link} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-forest-light transition-colors mt-auto">
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
