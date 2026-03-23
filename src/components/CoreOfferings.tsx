import { motion } from "framer-motion";
import { BookOpen, Users, ShoppingBag } from "lucide-react";

const offerings = [
  {
    icon: BookOpen,
    title: "Programs",
    description: "Structured learning programs designed to develop critical thinking and emotional intelligence.",
  },
  {
    icon: Users,
    title: "Services",
    description: "Organizational development support and immersive retreats that drive transformation and culture change.",
  },
  {
    icon: ShoppingBag,
    title: "Tools",
    description: "Curated tools and resources that support continuous personal and professional development.",
  },
];

const CoreOfferings = () => (
  <section className="py-24 md:py-32 lg:py-40 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14 md:mb-16 lg:mb-20"
      >
        <div className="gold-divider mx-auto mb-5 md:mb-6 lg:mb-7" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-4 md:mb-5 lg:mb-6">
          What We Offer
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Comprehensive solutions for individuals and organizations seeking meaningful growth and transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {offerings.map((item, i) => (
          <div
            key={item.title}
            className="group p-6 md:p-8 lg:p-10 rounded-xl bg-card card-elevated card-elevated-hover transition-all duration-300 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/8 flex items-center justify-center mb-5 md:mb-6 lg:mb-8 group-hover:bg-primary/15 transition-colors mx-auto">
                <item.icon className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-heading text-foreground mb-3 md:mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreOfferings;
