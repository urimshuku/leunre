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
      subtitle={"Transformation continues in daily life.\nOur products are created to keep growth alive — blending reflection, play, and purposeful action."}
    />

    {/* Product Showcase */}
    <ContentSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square rounded-2xl flex items-center justify-center card-elevated shadow-md"
          style={{ backgroundColor: "#F7F5F2" }}
        >
          <div className="text-center p-6 md:p-8 lg:p-10">
            <Layers className="w-10 h-10 md:w-14 md:h-14 text-primary mx-auto mb-5" strokeWidth={1} />
            <p className="text-base md:text-lg font-heading mb-2" style={{ color: "#1d1d1f" }}>Action Cards</p>
            <p className="text-sm" style={{ color: "#86868b" }}>Product image coming soon</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 md:mb-8">
            <div className="gold-divider border-sky-600 border-2 border-solid" />
          </div>
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-3">
            Flagship Tool
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-6" style={{ color: "#1d1d1f" }}>
            Action Cards
          </h2>
          <p className="text-sm md:text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "#86868b" }}>
            A beautifully crafted deck of prompt cards designed to spark self-reflection, deepen conversations, and accelerate personal and professional growth. Each card draws from behavioral science and real-world leadership practices to help you learn, unlearn, and relearn — one card at a time.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 text-sm" style={{ color: "#1d1d1f" }}>
                <f.icon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                <span className="font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm md:text-base transition-all rounded-xl opacity-90 shadow-sm"
          >
            Purchase Now <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </ContentSection>

    {/* Benefits */}
    <section className="py-16 md:py-24 lg:py-28 bg-[#f3f2f1] pt-[112px] pb-[112px] shadow-none">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Why Action Cards?"
          subtitle="More than just a card deck — it's a tool for transformation."
          className="mb-8 md:mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="font-medium text-sm" style={{ color: "#1d1d1f" }}>{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Use Cases */}
    <ContentSection>
      <SectionHeader
        title="How to Use Action Cards"
        subtitle="Versatile enough for solo practice and powerful enough for team settings."
        centered
        className="mb-12 md:mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
        {useCases.map((useCase, i) => (
          <div
            key={useCase.title}
            className="group bg-card rounded-2xl p-6 md:p-8 card-elevated card-elevated-hover shadow"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 border border-primary/20 transition-colors duration-200 group-hover:bg-primary/5">
                <useCase.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-heading mb-4" style={{ color: "#1d1d1f" }}>{useCase.title}</h3>
              <ul className="space-y-2.5">
                {useCase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#86868b" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </ContentSection>

    {/* Additional Tools */}
    <section className="py-16 md:py-24 lg:py-28 border-[#f3f2f1]" style={{ backgroundColor: "#F2ECE6" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="More Tools Coming Soon"
          subtitle="Expanding our toolkit to support your growth journey at every step."
          centered
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          <div className="relative group bg-card rounded-2xl p-6 md:p-8 overflow-hidden card-elevated">
            <div className="absolute inset-0 bg-white/50 z-10 rounded-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-primary/20">
                <BookOpen className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-heading mb-2" style={{ color: "#1d1d1f" }}>Self-Reflection Notebooks</h3>
              <p className="leading-relaxed text-sm" style={{ color: "#86868b" }}>To pause and realign — guided journaling tools designed to help you reconnect with your purpose and track your growth journey.</p>
            </motion.div>
          </div>

          <div className="relative group bg-card rounded-2xl p-6 md:p-8 overflow-hidden card-elevated">
            <div className="absolute inset-0 bg-white/50 z-10 rounded-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-primary/20">
                <Calendar className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-heading mb-2" style={{ color: "#1d1d1f" }}>Interactive Calendars</h3>
              <p className="leading-relaxed text-sm" style={{ color: "#86868b" }}>To integrate growth into everyday rhythm — structured calendars that weave learning and reflection into your daily routine.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <BottomCTA
      title="Ready to Grow?"
      subtitle="Get your Action Cards today and start your journey of transformation."
      buttonText="Purchase Now"
      buttonHref="#"
    />
  </PageLayout>
);

export default Products;
