import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "LEUNRE fundamentally changed how our leadership team approaches challenges. The shift in mindset was immediate and lasting.",
    name: "Sarah Chen",
    role: "VP of People, TechForward Inc.",
  },
  {
    quote: "The experiential training was unlike anything we've done before. Our team came back more aligned, empathetic, and effective.",
    name: "Michael Okonkwo",
    role: "Director of L&D, Global Solutions",
  },
  {
    quote: "The Conscious Leadership course gave me clarity I didn't know I was missing. I lead differently now — with purpose and presence.",
    name: "Priya Sharma",
    role: "CEO, Innova Health",
  },
];

const TestimonialsSection = () => (
  <section className="py-10 md:py-24 lg:py-28 border pt-[48px] pb-[48px] md:pt-[112px] md:pb-[112px] bg-[#f3f2f1]">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-16 lg:mb-20"
      >
        <div className="flex justify-center mb-4 md:mb-8">
          <div className="gold-divider border-sky-600 border-2 border-solid opacity-100" />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-4 md:mb-6 text-inherit" style={{ color: "#1d1d1f" }}>
          What People Say
        </h2>
        <p className="text-sm md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#86868b" }}>
          Hear from leaders and organizations who have experienced the LEUNRE transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={item.name}
            className="group bg-card rounded-2xl p-6 md:p-8 card-elevated card-elevated-hover"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Quote className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 mb-4 md:mb-5 group-hover:text-[#f97316] group-hover:fill-[#f97316]" style={{ color: "#D8CEC5" }} strokeWidth={1.5} />
              <p className="leading-relaxed mb-6 italic text-sm md:text-base" style={{ color: "#1d1d1f" }}>"{item.quote}"</p>
              <div>
                <p className="font-heading text-sm md:text-base" style={{ color: "#1d1d1f" }}>{item.name}</p>
                <p className="text-xs md:text-sm mt-1" style={{ color: "#86868b" }}>{item.role}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
