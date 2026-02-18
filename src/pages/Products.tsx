import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, User, Users, Sparkles, Lightbulb, MessageCircle, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  "Spark meaningful conversations and self-reflection",
  "Build emotional intelligence through daily practice",
  "Applicable for coaching, team-building, and personal growth",
  "Beautifully designed for gifting and professional use",
  "Evidence-informed prompts rooted in behavioral science",
  "Portable and easy to integrate into any routine",
];

const useCases = [
  {
    icon: User,
    title: "For Individuals",
    items: [
      "Daily self-reflection and journaling prompts",
      "Personal development and goal setting",
      "Mindfulness and emotional check-ins",
      "Conversation starters for deeper relationships",
    ],
  },
  {
    icon: Users,
    title: "For Teams",
    items: [
      "Icebreakers for meetings and workshops",
      "Team retrospectives and feedback sessions",
      "Leadership development exercises",
      "Culture-building rituals and offsites",
    ],
  },
];

const features = [
  { icon: Sparkles, label: "52 Curated Cards" },
  { icon: Lightbulb, label: "Evidence-Informed Prompts" },
  { icon: MessageCircle, label: "Conversation Starters" },
  { icon: Target, label: "Goal-Oriented Exercises" },
];

const Products = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="gold-divider mb-4 md:mb-6" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 md:mb-6">
              Our Products
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed">
              Tools designed to extend the learning journey beyond the classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Visual Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl bg-muted border border-border flex items-center justify-center"
            >
              <div className="text-center p-8 md:p-12">
                <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                </div>
                <p className="text-base md:text-lg font-heading font-bold text-foreground mb-1 md:mb-2">Growth Cards</p>
                <p className="text-xs md:text-sm text-muted-foreground">Product image coming soon</p>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gold mb-3 md:mb-4">
                Flagship Product
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 md:mb-6">
                Growth Cards
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                A beautifully crafted deck of prompt cards designed to spark self-reflection, deepen conversations, and accelerate personal and professional growth. Each card draws from behavioral science and real-world leadership practices to help you learn, unlearn, and relearn — one card at a time.
              </p>

              {/* Feature badges */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-foreground">
                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <f.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    </div>
                    <span className="font-medium">{f.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-md bg-gold text-accent-foreground font-semibold text-sm md:text-base hover:brightness-110 transition-all"
              >
                Purchase Now <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 md:py-24 bg-philosophy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-8 md:mb-12"
          >
            <div className="gold-divider mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
              Why Growth Cards?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              More than just a card deck — it's a tool for transformation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 max-w-4xl">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-2 md:gap-3"
              >
                <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-foreground font-medium text-xs md:text-sm">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="gold-divider mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
              How to Use Growth Cards
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto">
              Versatile enough for solo practice and powerful enough for team settings.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-5 md:p-8"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <useCase.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-3 md:mb-5">{useCase.title}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {useCase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4 md:mb-6">
              Ready to Grow?
            </h2>
            <p className="text-primary-foreground/70 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Get your Growth Cards today and start your journey of transformation.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-md bg-gold text-accent-foreground font-semibold text-sm md:text-base hover:brightness-110 transition-all"
            >
              Purchase Now <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Products;
