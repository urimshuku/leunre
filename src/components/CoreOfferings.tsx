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
  <section className="py-10 md:py-24 lg:py-28 pt-[48px] md:pt-[112px] border bg-[#f3f2f1]">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16 lg:mb-20"
      >
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="gold-divider bg-inherit text-inherit border-2 border-sky-600 border-solid" />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-6" style={{ color: "#1d1d1f" }}>
          What We Offer
        </h2>
        <p className="text-sm md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#86868b" }}>
          Comprehensive solutions for individuals and organizations seeking meaningful growth and transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {offerings.map((item, i) => (
          <div
            key={item.title}
            className="group p-8 md:p-10 lg:p-12 rounded-2xl bg-card card-elevated card-elevated-hover text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-5 md:mb-6 border border-primary/20 transition-colors duration-200 group-hover:bg-primary/5">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
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
