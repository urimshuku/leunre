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
          What People Say
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Hear from leaders and organizations who have experienced the LEUNRE transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={item.name}
            className="group bg-card rounded-xl p-6 md:p-8 lg:p-10 card-elevated card-elevated-hover transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Quote className="w-6 h-6 md:w-7 md:h-7 text-gold/40 group-hover:text-gold transition-colors duration-300 mb-4 md:mb-5" />
              <p className="text-foreground leading-relaxed mb-6 md:mb-8 italic text-sm md:text-base">"{item.quote}"</p>
              <div>
                <p className="font-heading text-foreground text-sm md:text-base">{item.name}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{item.role}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
