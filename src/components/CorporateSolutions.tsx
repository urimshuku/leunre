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
  <section id="services" className="py-16 md:py-24 lg:py-28 section-separator" style={{ backgroundColor: "#F2ECE6" }}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 lg:mb-20"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-6" style={{ color: "#1d1d1f" }}>
          Corporate Solutions
        </h2>
        <p className="text-sm md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#86868b" }}>
          Enterprise-grade programs designed to transform your organization from the inside out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
        {solutions.map((item, i) => (
          <div
            key={item.title}
            className="group p-6 md:p-8 lg:p-10 rounded-2xl bg-card card-elevated card-elevated-hover flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col flex-1"
            >
              <div className="inline-flex icon-hover-border mb-5 md:mb-6">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>{item.title}</h3>
              <p className="leading-relaxed text-sm md:text-base mb-5 md:mb-6 flex-1 max-w-sm" style={{ color: "#86868b" }}>{item.description}</p>
              <Link to={item.link} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-70 transition-opacity mt-auto">
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