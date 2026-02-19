import { motion } from "framer-motion";
import { RotateCw, RotateCcw, RefreshCw, ArrowRight, Eye, Rocket, Heart, Compass, Flame, Shield } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  { icon: Heart, title: "Empathy First", description: "We lead with compassion and seek to understand before being understood." },
  { icon: Compass, title: "Purposeful Growth", description: "Every program, product, and partnership is designed with intentional impact in mind." },
  { icon: Flame, title: "Courage to Unlearn", description: "We challenge assumptions — our own and others' — to make space for what's next." },
  { icon: Shield, title: "Integrity Always", description: "We operate with transparency, honesty, and a deep commitment to doing what's right." },
  { icon: RefreshCw, title: "Continuous Evolution", description: "We practice what we teach — constantly learning, adapting, and growing." },
  { icon: Eye, title: "Radical Clarity", description: "We cut through noise to deliver insights and experiences that truly matter." },
];

const philosophySteps = [
  { icon: RotateCw, label: "Learn", description: "Acquire new knowledge, frameworks, and perspectives that expand your understanding." },
  { icon: RotateCcw, label: "Unlearn", description: "Challenge outdated beliefs and mental models that no longer serve your growth." },
  { icon: RefreshCw, label: "Relearn", description: "Rebuild with fresh insight, integrating wisdom into how you lead, communicate, and live." },
];

const AboutUs = () => (
  <PageLayout>
    <PageHero
      title="About LEUNRE"
      subtitle="A movement dedicated to transforming how people think, perceive, and grow."
    />

    {/* Brand Story */}
    <ContentSection>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="gold-divider mb-4 md:mb-5 lg:mb-6" />
          <h2 className="text-2xl md:text-[1.7rem] lg:text-4xl font-heading font-bold text-foreground mb-6 md:mb-7 lg:mb-8">
            Our Story
          </h2>
          <div className="space-y-4 md:space-y-5 lg:space-y-6 text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
            <p>
              LEUNRE was born from a simple but powerful conviction: the way we've been taught to learn is no longer enough. In a world that shifts faster than our habits can keep up, the real competitive advantage isn't what you know — it's how willing you are to let go of what you know and rebuild.
            </p>
            <p>
              We started as a conversation between practitioners, coaches, and leaders who saw the same pattern everywhere — talented people held back not by lack of skill, but by outdated mental models, unexamined assumptions, and fear of change.
            </p>
            <p>
              So we built LEUNRE — <span className="text-foreground font-semibold">Learn. Unlearn. Relearn.</span> — as a movement for those who refuse to stay still. Through immersive courses, experiential training, retreats, and tools like our Growth Cards, we help individuals and organizations develop the clarity, courage, and capability to thrive.
            </p>
          </div>
        </motion.div>
      </div>
    </ContentSection>

    {/* Philosophy */}
    <ContentSection variant="muted">
      <SectionHeader
        title="The LEUNRE Philosophy"
        subtitle="Growth isn't linear — it's a cycle. Our philosophy is built on three interconnected stages that drive lasting transformation."
        centered
        className="mb-10 md:mb-12 lg:mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
        {philosophySteps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="relative mx-auto w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 md:mb-5 lg:mb-6">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center shadow-lg relative z-10">
                <step.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
              </div>
              {i < philosophySteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-[calc(((100vw-4rem)/3-4rem))] lg:w-[calc(((min(64rem,100vw)-4rem)/3-5rem))] -translate-y-1/2 border-t-2 border-dashed border-gold/30" />
              )}
            </div>
            <h3 className="text-xl md:text-xl lg:text-2xl font-heading font-bold text-foreground mb-2 md:mb-2.5 lg:mb-3">{step.label}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </ContentSection>

    {/* Mission & Vision */}
    <ContentSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-6 md:p-8 lg:p-10"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
            <Rocket className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-primary" />
          </div>
          <h3 className="text-xl md:text-xl lg:text-2xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-sm lg:text-base">
            To empower individuals and organizations to continuously evolve — by learning with curiosity, unlearning with courage, and relearning with clarity. We exist to build the human capabilities that drive meaningful change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-6 md:p-8 lg:p-10"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
            <Eye className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-primary" />
          </div>
          <h3 className="text-xl md:text-xl lg:text-2xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-sm lg:text-base">
            A world where growth is a way of life — where people and organizations embrace change, lead with empathy, and create impact that extends far beyond the bottom line.
          </p>
        </motion.div>
      </div>
    </ContentSection>

    {/* Values */}
    <ContentSection variant="muted">
      <SectionHeader
        title="What We Stand For"
        subtitle="Our values aren't just words on a wall — they're the principles that guide every decision, interaction, and program we create."
        centered
        className="mb-10 md:mb-12 lg:mb-16"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl border border-border p-5 md:p-6 lg:p-8"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-3.5 lg:mb-4">
              <value.icon className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-primary" />
            </div>
            <h3 className="text-base md:text-base lg:text-lg font-heading font-bold text-foreground mb-1.5 md:mb-1.5 lg:mb-2">{value.title}</h3>
            <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </ContentSection>

    {/* Movement Positioning */}
    <ContentSection variant="muted">
      <SectionHeader
        title="More Than a Company. A Movement."
        subtitle="LEUNRE isn't just about training — it's about shifting how the world approaches growth. We're building a community of leaders, thinkers, and doers who believe that the willingness to evolve is the greatest strength of all."
        centered
        className="mb-6 md:mb-8 lg:mb-10"
      />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-9 lg:mb-10">
          Whether you join us through a course, a retreat, a deck of Growth Cards, or a partnership — you become part of something bigger.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-gold text-accent-foreground font-semibold text-sm md:text-sm lg:text-base hover:brightness-110 transition-all"
        >
          Join the Movement <ArrowRight size={16} />
        </a>
      </div>
    </ContentSection>
  </PageLayout>
);

export default AboutUs;
