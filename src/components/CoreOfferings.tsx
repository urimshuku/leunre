import { motion } from "framer-motion";
import { BookOpen, Users, ShoppingBag } from "lucide-react";

const offerings = [
  {
    icon: BookOpen,
    title: "Courses",
    description: "Structured learning programs designed to develop critical thinking and emotional intelligence.",
  },
  {
    icon: Users,
    title: "Services",
    description: "Corporate workshops and consulting that drive organizational transformation and culture change.",
  },
  {
    icon: ShoppingBag,
    title: "Products",
    description: "Curated tools and resources that support continuous personal and professional development.",
  },
];

const CoreOfferings = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          What We Offer
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive solutions for individuals and organizations seeking meaningful growth and transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {offerings.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-xl bg-card border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreOfferings;
