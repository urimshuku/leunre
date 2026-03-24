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
  <section className="py-24 md:py-28 lg:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-20 lg:mb-24"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-6" style={{ color: "#1d1d1f" }}>
          What People Say
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#86868b" }}>
          Hear from leaders and organizations who have experienced the LEUNRE transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={item.name}
            className="group bg-card rounded-2xl p-8 md:p-10 card-elevated card-elevated-hover transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Quote className="w-6 h-6 md:w-7 md:h-7 text-border group-hover:text-primary transition-colors duration-300 mb-5 md:mb-6" strokeWidth={1.5} />
              <p className="leading-relaxed mb-8 italic text-sm md:text-base" style={{ color: "#1d1d1f" }}>"{item.quote}"</p>
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
