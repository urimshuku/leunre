import { motion } from "framer-motion";
import { Building2, Presentation, Flame, Mountain, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Organizational Development",
    description: "Strategic support for companies undergoing cultural or structural transformation. We partner with leadership to build adaptive, human-centered organizations.",
  },
  {
    icon: Presentation,
    title: "Corporate Workshops",
    description: "High-impact, facilitator-led workshops tailored to your team's needs — from communication skills to leadership development and team alignment.",
  },
  {
    icon: Flame,
    title: "Experiential Training",
    description: "Immersive learning experiences that go beyond the classroom. Through real-world scenarios and reflective practices, teams build lasting behavioral change.",
  },
  {
    icon: Mountain,
    title: "Retreats",
    description: "Immersive experiential learning retreats that create lasting shifts in perspective and leadership.",
  },
];

const CorporateSolutions = () => (
  <section id="services" className="py-24 lg:py-32 bg-hero-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Corporate Solutions
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Enterprise-grade programs designed to transform your organization from the inside out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {solutions.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-6">
              <item.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">{item.title}</h3>
            <p className="text-primary-foreground/65 leading-relaxed text-sm mb-5">{item.description}</p>
            <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-light transition-colors">
              Learn More <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CorporateSolutions;
