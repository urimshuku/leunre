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
  <section className="py-20 md:py-28 lg:py-36 bg-background border-b border-border/50 section-shadow">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12 lg:mb-16"
      >
        <div className="gold-divider mx-auto mb-4 md:mb-5 lg:mb-6" />
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">
          What People Say
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          Hear from leaders and organizations who have experienced the LEUNRE transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={item.name}
            className="group bg-card rounded-xl p-5 md:p-6 lg:p-8 card-elevated card-elevated-hover transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Quote className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gold/50 group-hover:text-gold transition-colors duration-300 mb-3 md:mb-3.5 lg:mb-4" />
              <p className="text-foreground leading-relaxed mb-4 md:mb-5 lg:mb-6 italic text-sm md:text-[0.9rem] lg:text-base">"{item.quote}"</p>
              <div>
                <p className="font-heading font-bold text-foreground text-sm md:text-[0.9rem] lg:text-base">{item.name}</p>
                <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
