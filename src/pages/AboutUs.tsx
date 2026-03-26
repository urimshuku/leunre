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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-6 md:mb-8" style={{ color: "#1d1d1f" }}>
            Our Story
          </h2>
          <div className="space-y-5 text-sm md:text-lg leading-relaxed" style={{ color: "#86868b" }}>
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
    <section className="py-16 md:py-24 lg:py-28 section-separator" style={{ backgroundColor: "#F2ECE6" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="The LEUNRE Philosophy"
          subtitle={"LEUNRE stands for Learning, Unlearning, and Relearning. It embodies the natural rhythm of growth: expanding awareness, releasing what no longer serves, and integrating what leads us forward.\n\nAt the heart of LEUNRE is the belief that genuine transformation happens through this continuous cycle.\n\nThrough this process, individuals and organizations develop adaptability, creativity, and depth."}
          centered
          className="mb-12 md:mb-16 lg:mb-20"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {philosophySteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="relative mx-auto w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-5 md:mb-6">
                <motion.div
                  className="w-full h-full rounded-full bg-primary flex items-center justify-center relative z-10"
                  initial={{ rotate: 0 }}
                  whileInView={prefersReducedMotion ? {} : { rotate: iconRotations[i] }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: i * 0.15 }}
                >
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary-foreground" strokeWidth={1.5} />
                </motion.div>
              </div>
              <h3 className="text-xl md:text-2xl font-heading mb-2 md:mb-3" style={{ color: "#1d1d1f" }}>{step.label}</h3>
              <p className="leading-relaxed text-sm md:text-base max-w-xs mx-auto" style={{ color: "#86868b" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <ContentSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
        <div className="group bg-card rounded-2xl p-6 md:p-8 lg:p-10 card-elevated card-elevated-hover">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex icon-hover-border mb-5 md:mb-6">
              <Rocket className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>Our Mission</h3>
            <p className="leading-relaxed text-sm md:text-base max-w-sm" style={{ color: "#86868b" }}>
              To unlocking human potential by inspiring new ways of thinking, enhancing perception, and fostering clarity. We empower individuals to transform, and we help organizations cultivate cultures where purpose, well-being, and collaboration naturally thrive.
            </p>
          </motion.div>
        </div>

        <div className="group bg-card rounded-2xl p-6 md:p-8 lg:p-10 card-elevated card-elevated-hover">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex icon-hover-border mb-5 md:mb-6">
              <Eye className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>Our Vision</h3>
            <p className="leading-relaxed text-sm md:text-base max-w-sm" style={{ color: "#86868b" }}>
              A world where personal insight and professional growth come together to create meaningful and lasting change.
            </p>
          </motion.div>
        </div>
      </div>
    </ContentSection>

    {/* Values */}
    <section className="py-16 md:py-24 lg:py-28 section-separator" style={{ backgroundColor: "#F2ECE6" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Our Approach"
          subtitle={"We believe that systems are living, and people are the pulse within them.\n\nOur approach honors the balance between structure and awareness — between measurable outcomes and meaningful impact.\n\nOur work is guided by three principles."}
          centered
          className="mb-12 md:mb-16 lg:mb-20"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="group bg-card rounded-2xl p-6 md:p-8 text-center card-elevated card-elevated-hover"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="inline-flex icon-hover-border mb-4 md:mb-5 mx-auto">
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-heading mb-2" style={{ color: "#1d1d1f" }}>{value.title}</h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#86868b" }}>{value.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Movement Positioning */}
    <ContentSection variant="warm">
      <SectionHeader
        title={"More Than a Company.\nA Movement."}
        subtitle="LEUNRE invites you to be part of a global shift — where development means wholeness, and progress means balance."
        centered
        className="mb-8 md:mb-10"
      />
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
        <p className="text-sm md:text-lg leading-relaxed mb-5" style={{ color: "#86868b" }}>
          Whether you're an individual seeking clarity or an organization striving for purposeful impact, your growth contributes to something greater.
        </p>
        <p className="text-sm md:text-lg leading-relaxed mb-10" style={{ color: "#86868b" }}>
          Together, we can build a world where learning transforms lives, and alignment guides change.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all shadow-sm"
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