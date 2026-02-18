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
  <section className="py-24 lg:py-32 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          What People Say
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hear from leaders and organizations who have experienced the LEUNRE transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm"
          >
            <Quote className="w-8 h-8 text-gold/50 mb-4" />
            <p className="text-foreground leading-relaxed mb-6 italic">"{item.quote}"</p>
            <div>
              <p className="font-heading font-bold text-foreground">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
