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
  <section className="py-14 md:py-20 lg:py-32 bg-muted">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12 lg:mb-16"
      >
        <div className="gold-divider mx-auto mb-4 md:mb-5 lg:mb-6" />
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">
          What We Offer
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          Comprehensive solutions for individuals and organizations seeking meaningful growth and transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
        {offerings.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-5 md:p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 md:mb-2.5 lg:mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-xs md:text-[0.8rem] lg:text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreOfferings;
