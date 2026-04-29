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
  <section id="services" className="content-visibility-auto py-10 md:py-24 lg:py-28 border-b-0 border-b-[#eae8e6] border-t-0 border-r-0 border-l-0 pt-[72px] pb-[72px] md:pt-[112px] md:pb-[112px] bg-transparent">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 lg:mb-20"
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="gold-divider border-2 border-solid border-sky-600" />
        </div>
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
            className="group p-6 md:p-8 lg:p-10 card-elevated flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col flex-1"
            >
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transition-transform duration-200 group-hover:scale-[1.03] icon-tile-grain icon-tile-standard"
              >
                <item.icon
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: "hsl(var(--primary))" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg md:text-xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>{item.title}</h3>
              <p className="leading-relaxed text-sm md:text-base mb-5 md:mb-6 flex-1 max-w-sm" style={{ color: "#86868b" }}>{item.description}</p>
              <Link
                to={item.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-70 transition-opacity mt-auto"
              >
                Learn More{" "}
                <ArrowRight size={12} className="icon-arrow-nudge icon-arrow-nudge--right" />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CorporateSolutions;
