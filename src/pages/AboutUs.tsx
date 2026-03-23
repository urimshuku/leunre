import { motion } from "framer-motion";
import { RotateCw, RotateCcw, RefreshCw, ArrowRight, Eye, Rocket, Heart } from "lucide-react";
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

const iconRotations = [360, -360, 360];

const AboutUs = () => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
  <PageLayout>
    <PageHero
      title="About"
      subtitle="A movement dedicated to transforming how people think, perceive, and grow."
    />

    {/* Brand Story */}
    <ContentSection>
      <div className="max-w-2xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="gold-divider mb-5 md:mb-6 lg:mb-8" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-6 md:mb-8 lg:mb-10">
            Our Story
          </h2>
          <div className="space-y-5 md:space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed">
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
    <ContentSection variant="warm">
      <SectionHeader
        title="The LEUNRE Philosophy"
        subtitle={"LEUNRE stands for Learning, Unlearning, and Relearning. It embodies the natural rhythm of growth: expanding awareness, releasing what no longer serves, and integrating what leads us forward.\n\nAt the heart of LEUNRE is the belief that genuine transformation happens through this continuous cycle.\n\nThrough this process, individuals and organizations develop adaptability, creativity, and depth."}
        centered
        className="mb-14 md:mb-16 lg:mb-20"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 max-w-4xl mx-auto">
        {philosophySteps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="relative mx-auto w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-5 md:mb-6 lg:mb-8">
              <motion.div
                className="w-full h-full rounded-full bg-primary flex items-center justify-center shadow-lg relative z-10"
                initial={{ rotate: 0 }}
                whileInView={prefersReducedMotion ? {} : { rotate: iconRotations[i] }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: i * 0.15 }}
              >
                <step.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
              </motion.div>
              {i < philosophySteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-[calc(((100vw-4rem)/3-4rem))] lg:w-[calc(((min(64rem,100vw)-4rem)/3-5rem))] -translate-y-1/2 border-t-2 border-dashed border-gold/30" />
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-3 md:mb-4">{step.label}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </ContentSection>

    {/* Mission & Vision */}
    <ContentSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-3xl mx-auto">
        <div className="group bg-card rounded-xl p-6 md:p-8 lg:p-10 card-elevated card-elevated-hover transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/8 flex items-center justify-center mb-5 md:mb-6 lg:mb-8 group-hover:bg-primary/15 transition-colors">
              <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4 md:mb-5">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-sm">
              To unlocking human potential by inspiring new ways of thinking, enhancing perception, and fostering clarity. We empower individuals to transform, and we help organizations cultivate cultures where purpose, well-being, and collaboration naturally thrive.
            </p>
          </motion.div>
        </div>

        <div className="group bg-card rounded-xl p-6 md:p-8 lg:p-10 card-elevated card-elevated-hover transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/8 flex items-center justify-center mb-5 md:mb-6 lg:mb-8 group-hover:bg-primary/15 transition-colors">
              <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4 md:mb-5">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-sm">
              A world where personal insight and professional growth come together to create meaningful and lasting change.
            </p>
          </motion.div>
        </div>
      </div>
    </ContentSection>

    {/* Values */}
    <ContentSection variant="compact-warm">
      <SectionHeader
        title="Our Approach"
        subtitle={"We believe that systems are living, and people are the pulse within them.\n\nOur approach honors the balance between structure and awareness — between measurable outcomes and meaningful impact.\n\nOur work is guided by three principles."}
        centered
        className="mb-14 md:mb-16 lg:mb-20"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
        {values.map((value, i) => (
          <div
            key={value.title}
            className="group bg-card rounded-xl p-6 md:p-8 lg:p-10 text-center card-elevated card-elevated-hover transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4 md:mb-5 mx-auto group-hover:bg-primary/15 transition-colors">
                <value.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-heading text-foreground mb-2 md:mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </ContentSection>

    {/* Movement Positioning */}
    <ContentSection>
      <SectionHeader
        title={"More Than a Company.\nA Movement."}
        subtitle="LEUNRE invites you to be part of a global shift — where development means wholeness, and progress means balance."
        centered
        className="mb-8 md:mb-10 lg:mb-12"
      />
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5 md:mb-6">
          Whether you're an individual seeking clarity or an organization striving for purposeful impact, your growth contributes to something greater.
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 md:mb-12">
          Together, we can build a world where learning transforms lives, and alignment guides change.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-lg bg-gold text-accent-foreground font-medium text-sm md:text-base hover:brightness-105 transition-all"
        >
          Join the Movement <ArrowRight size={16} />
        </a>
        </motion.div>
      </div>
    </ContentSection>
  </PageLayout>
  );
};

export default AboutUs;
