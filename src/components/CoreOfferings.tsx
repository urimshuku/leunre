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
  <section className="py-24 md:py-28 lg:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-20 lg:mb-24"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-6" style={{ color: "#1d1d1f" }}>
          What We Offer
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#86868b" }}>
          Comprehensive solutions for individuals and organizations seeking meaningful growth and transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {offerings.map((item, i) => (
          <div
            key={item.title}
            className="group p-8 md:p-10 lg:p-12 rounded-2xl bg-card card-elevated card-elevated-hover transition-all duration-300 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mb-6 md:mb-8 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>{item.title}</h3>
              <p className="leading-relaxed text-sm md:text-base max-w-xs mx-auto" style={{ color: "#86868b" }}>{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreOfferings;
