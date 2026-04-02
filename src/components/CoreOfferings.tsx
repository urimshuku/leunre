import { motion } from "framer-motion";
import { BookOpen, Users, ShoppingBag } from "lucide-react";

const offerings = [
  {
    icon: BookOpen,
    title: "Clarity",
    description: "Structured learning programs designed to develop critical thinking and emotional intelligence.",
  },
  {
    icon: Users,
    title: "Connection",
    description: "Organizational development support and immersive retreats that drive transformation and culture change.",
  },
  {
    icon: ShoppingBag,
    title: "Conscious Growth",
    description: "Curated tools and resources that support continuous personal and professional development.",
  },
];

const CoreOfferings = () => (
  <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F7F5F2" }}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 lg:mb-20"
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="gold-divider" />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-6" style={{ color: "#1d1d1f" }}>
          Our Approach
        </h2>
        <p className="text-sm md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#86868b" }}>
          Comprehensive solutions for individuals and organizations seeking meaningful growth and transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {offerings.map((item, i) => (
          <div
            key={item.title}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mx-auto mb-5 md:mb-6">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} fill="currentColor" opacity={0.15} />
              </div>
              <h3 className="text-lg md:text-xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>{item.title}</h3>
              <p className="leading-relaxed text-sm md:text-base max-w-xs mx-auto" style={{ color: "#86868b" }}>{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreOfferings;
