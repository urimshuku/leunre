import { motion } from "framer-motion";
import { RotateCw, RotateCcw, RefreshCw, ArrowRight, Eye, Rocket, Heart, Compass, Flame, Shield } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  { icon: Eye, title: "Clarity", description: "Seeing what truly matters." },
  { icon: Heart, title: "Connection", description: "Fostering alignment among people and systems." },
  { icon: RefreshCw, title: "Conscious Growth", description: "Evolving in alignment with life as a whole." },
];

const philosophySteps = [
  { icon: RotateCw, label: "Learn", description: "Allows us to grow and gain new understanding." },
  { icon: RotateCcw, label: "Unlearn", description: "Helps us let go of outdated beliefs and patterns that limit us." },
  { icon: RefreshCw, label: "Relearn", description: "Opens the space to integrate new perspectives and evolve with clarity." },
];

const AboutUs = () => (
  <PageLayout>
    <PageHero
      title="About"
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
              After more than a decade in the corporate world, designing systems and structures for growth, one realization became clear: the most sustainable system is the one that supports human and planetary evolution together.
            </p>
            <p>
              When people grow with awareness, organizations flourish. When organizations act with integrity, societies transform. When systems operate in alignment with life, harmony becomes possible.
            </p>
            <p>
              LEUNRE was created to bring this vision to life: bridging structure with purpose, process with people, and learning with transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </ContentSection>

    {/* Philosophy */}
    <ContentSection variant="muted">
      <SectionHeader
        title="The LEUNRE Philosophy"
        subtitle={"LEUNRE stands for Learning, Unlearning, and Relearning. It embodies the natural rhythm of growth: expanding awareness, releasing what no longer serves, and integrating what leads us forward.\n\nAt the heart of LEUNRE is the belief that genuine transformation happens through this continuous cycle.\n\nThrough this process, individuals and organizations develop adaptability, creativity, and depth."}
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
            To unlocking human potential by inspiring new ways of thinking, enhancing perception, and fostering clarity. We empower individuals to transform, and we help organizations cultivate cultures where purpose, well-being, and collaboration naturally thrive.
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
            A world where personal insight and professional growth come together to create meaningful and lasting change.
          </p>
        </motion.div>
      </div>
    </ContentSection>

    {/* Values */}
    <ContentSection variant="muted">
      <SectionHeader
        title="Our Approach"
        subtitle={"We believe that systems are living, and people are the pulse within them.\n\nOur approach honors the balance between structure and awareness — between measurable outcomes and meaningful impact.\n\nOur work is guided by three principles."}
        centered
        className="mb-10 md:mb-12 lg:mb-16"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl border border-border p-5 md:p-6 lg:p-8 text-center"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-3.5 lg:mb-4 mx-auto">
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
        title={"More Than a Company.\nA Movement."}
        subtitle="LEUNRE invites you to be part of a global shift — where development means wholeness, and progress means balance."
        centered
        className="mb-6 md:mb-8 lg:mb-10"
      />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-5 lg:mb-6">
          Whether you're an individual seeking clarity or an organization striving for purposeful impact, your growth contributes to something greater.
        </p>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-9 lg:mb-10">
          Together, we can build a world where learning transforms lives, and alignment guides change.
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
