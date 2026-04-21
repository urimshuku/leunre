import { motion, useReducedMotion } from "framer-motion";
import { RotateCw, RotateCcw, RefreshCw, ArrowRight, Eye, Rocket, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import SectionHeader from "@/components/shared/SectionHeader";
import UnifiedPageAtmosphere from "@/components/shared/UnifiedPageAtmosphere";

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
const orangeTokenIconStyle = {
  background: "hsl(var(--primary))",
  border: "1.5px solid rgba(255, 255, 255, 0.4)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(71,32,11,0.35), 0 2px 6px rgba(120,57,25,0.26)",
};

const AboutUs = () => {
  const reduceMotion = useReducedMotion() === true;

  return (
  <PageLayout>
    <UnifiedPageAtmosphere>
    <PageHero
      title="About"
      subtitle="A movement dedicated to transforming how people think, perceive, and grow."
      noShadow
      transparentBackground
    />

    {/* Brand Story */}
    <ContentSection className="!bg-transparent">
      <div className="max-w-2xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="mb-6 md:mb-8">
            <div className="gold-divider border-sky-600 border-2 border-solid" />
          </div>
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
    <section className="py-16 md:py-24 lg:py-28 pt-[112px] pb-[112px] bg-transparent border-b-0 border-t-0 border-x-0">
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
                  className="w-full h-full"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
                >
                  <motion.div
                    className="w-full h-full rounded-full flex items-center justify-center relative z-10"
                    style={orangeTokenIconStyle}
                    initial={{ rotate: 0 }}
                    whileInView={reduceMotion ? { rotate: 0 } : { rotate: iconRotations[i] }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: [0, 0, 0.2, 1], delay: i * 0.14 }}
                  >
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
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
    <ContentSection className="!bg-transparent">
      <SectionHeader title="Our Purpose" centered className="mb-12 md:mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
        <div className="group p-6 md:p-8 lg:p-10 card-elevated">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transition-transform duration-200 group-hover:scale-[1.03] icon-tile-grain icon-tile-standard">
              <Rocket className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>Our Mission</h3>
            <p className="leading-relaxed text-sm md:text-base max-w-sm" style={{ color: "#86868b" }}>
              To unlocking human potential by inspiring new ways of thinking, enhancing perception, and fostering clarity. We empower individuals to transform, and we help organizations cultivate cultures where purpose, well-being, and collaboration naturally thrive.
            </p>
          </motion.div>
        </div>

        <div className="group p-6 md:p-8 lg:p-10 card-elevated">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transition-transform duration-200 group-hover:scale-[1.03] icon-tile-grain icon-tile-standard">
              <Eye className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
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
    <section className="py-16 md:py-24 lg:py-28 bg-transparent pt-[112px] pb-[112px] border-b-0 border-x-0 border-t-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Our Approach"
          subtitle={"We believe that systems are living, and people are the pulse within them.\n\nOur approach honors the balance between structure and awareness — between measurable outcomes and meaningful impact.\n\nOur work is guided by three principles."}
          centered
          className="mb-12 md:mb-16 lg:mb-20"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-site-rail mx-auto">
          {values.map((value, i) => (
            <div key={value.title} className="group p-8 md:p-10 lg:p-12 card-elevated text-center flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col flex-1"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 transition-transform duration-200 group-hover:scale-[1.03] icon-tile-grain icon-tile-standard">
                  <motion.div
                    whileInView={
                      i === 0
                        ? { scaleY: [1, 0.1, 1], transition: { duration: 1.2, delay: 0.8, times: [0, 0.5, 1] } }
                        : i === 1
                        ? { scale: [1, 1.2, 1, 1.2, 1, 1.2, 1], transition: { duration: 3, delay: 0.8, times: [0, 0.1, 0.2, 0.4, 0.5, 0.7, 0.8] } }
                        : { rotate: [0, 360], transition: { duration: 2.5, delay: 0.8, ease: "easeInOut" } }
                    }
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-heading mb-2 md:mb-3" style={{ color: "#1d1d1f" }}>{value.title}</h3>
                <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: "#86868b" }}>{value.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Movement Positioning */}
    <section className="py-16 md:py-24 lg:py-28 bg-transparent pt-[112px] pb-[112px] border-b-0 border-x-0 border-t-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="relative max-w-site-rail mx-auto rounded-3xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow:
              "0 4px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}movement-bg.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, rgba(20,18,16,0.20) 0%, rgba(12,12,12,0.20) 48%, rgba(18,16,14,0.20) 100%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' seed='7' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "120px 120px",
              mixBlendMode: "overlay",
              opacity: 0.38,
            }}
          />
          <div className="relative px-8 py-16 md:px-16 md:py-24 lg:px-20 lg:py-28 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-3 md:mb-5" style={{ color: "#f5f5f7" }}>
              More Than a Company.{"\n"}A Movement.
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-lg mx-auto" style={{ color: "#f5f5f7" }}>
              LEUNRE invites you to be part of a global shift — where development means wholeness, and progress means balance.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-lg mx-auto" style={{ color: "#f5f5f7" }}>
              Whether you're an individual seeking clarity or an organization striving for purposeful impact, your growth contributes to something greater.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: "#f5f5f7" }}>
              Together, we can build a world where learning transforms lives, and alignment guides change.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-4.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all btn-bevel-solid"
            >
              Join the Movement <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </UnifiedPageAtmosphere>
  </PageLayout>
  );
};

export default AboutUs;
