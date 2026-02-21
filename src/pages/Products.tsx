import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, User, Users, Lightbulb, MessageCircle, Target, Layers, BookOpen, Calendar } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import SectionHeader from "@/components/shared/SectionHeader";
import BottomCTA from "@/components/shared/BottomCTA";

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
  { icon: Layers, label: "52 Curated Cards" },
  { icon: Lightbulb, label: "Evidence-Informed Prompts" },
  { icon: MessageCircle, label: "Conversation Starters" },
  { icon: Target, label: "Goal-Oriented Exercises" },
];

const Products = () => (
  <PageLayout>
    <PageHero
      title="Our Tools"
      subtitle="Tools designed to extend the learning journey beyond the classroom."
    />

    {/* Product Showcase */}
    <ContentSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square rounded-2xl bg-muted border border-border flex items-center justify-center"
        >
          <div className="text-center p-8 md:p-10 lg:p-12">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-4 md:mb-5 lg:mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Layers className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
            </div>
            <p className="text-base md:text-base lg:text-lg font-heading font-bold text-foreground mb-1 md:mb-1.5 lg:mb-2">Action Cards</p>
            <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">Product image coming soon</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[10px] md:text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-gold mb-3 md:mb-3.5 lg:mb-4">
            Flagship Tool
          </span>
          <h2 className="text-2xl md:text-[1.7rem] lg:text-4xl font-heading font-bold text-foreground mb-4 md:mb-5 lg:mb-6">
            Action Cards
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-7 lg:mb-8">
            A beautifully crafted deck of prompt cards designed to spark self-reflection, deepen conversations, and accelerate personal and professional growth. Each card draws from behavioral science and real-world leadership practices to help you learn, unlearn, and relearn — one card at a time.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4 mb-6 md:mb-7 lg:mb-8">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 md:gap-2.5 lg:gap-3 text-xs md:text-[0.8rem] lg:text-sm text-foreground">
                <div className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-primary" />
                </div>
                <span className="font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-gold text-accent-foreground font-semibold text-sm md:text-sm lg:text-base hover:brightness-110 transition-all"
          >
            Purchase Now <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </ContentSection>

    {/* Benefits */}
    <ContentSection variant="muted">
      <SectionHeader
        title="Why Action Cards?"
        subtitle="More than just a card deck — it's a tool for transformation."
        className="mb-8 md:mb-10 lg:mb-12"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-5 max-w-4xl">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-2 md:gap-2.5 lg:gap-3"
          >
            <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
            <p className="text-foreground font-medium text-xs md:text-[0.8rem] lg:text-sm">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </ContentSection>

    {/* Use Cases */}
    <ContentSection>
      <SectionHeader
        title="How to Use Action Cards"
        subtitle="Versatile enough for solo practice and powerful enough for team settings."
        centered
        className="mb-10 md:mb-12 lg:mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
        {useCases.map((useCase, i) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border p-5 md:p-6 lg:p-8"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
              <useCase.icon className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-lg lg:text-xl font-heading font-bold text-foreground mb-3 md:mb-4 lg:mb-5">{useCase.title}</h3>
            <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
              {useCase.items.map((item) => (
                <li key={item} className="flex items-start gap-2 md:gap-2.5 lg:gap-3 text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </ContentSection>

    {/* Additional Tools */}
    <ContentSection variant="muted">
      <SectionHeader
        title="More Tools Coming Soon"
        subtitle="Expanding our toolkit to support your growth journey at every step."
        centered
        className="mb-10 md:mb-12 lg:mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card rounded-xl border border-border p-5 md:p-6 lg:p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/30 z-10 rounded-xl flex items-center justify-center">
            <span className="text-sm font-heading font-bold text-foreground/70 uppercase tracking-wider">Coming Soon</span>
          </div>
          <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
            <BookOpen className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-primary" />
          </div>
          <h3 className="text-lg md:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 md:mb-2.5 lg:mb-3">Self-Reflection Notebooks</h3>
          <p className="text-muted-foreground leading-relaxed text-xs md:text-[0.8rem] lg:text-sm">To pause and realign — guided journaling tools designed to help you reconnect with your purpose and track your growth journey.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative bg-card rounded-xl border border-border p-5 md:p-6 lg:p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/30 z-10 rounded-xl flex items-center justify-center">
            <span className="text-sm font-heading font-bold text-foreground/70 uppercase tracking-wider">Coming Soon</span>
          </div>
          <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
            <Calendar className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-primary" />
          </div>
          <h3 className="text-lg md:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 md:mb-2.5 lg:mb-3">Interactive Calendars</h3>
          <p className="text-muted-foreground leading-relaxed text-xs md:text-[0.8rem] lg:text-sm">To integrate growth into everyday rhythm — structured calendars that weave learning and reflection into your daily routine.</p>
        </motion.div>
      </div>
    </ContentSection>

    <BottomCTA
      title="Ready to Grow?"
      subtitle="Get your Action Cards today and start your journey of transformation."
      buttonText="Purchase Now"
      buttonHref="#"
    />
  </PageLayout>
);

export default Products;
