import { motion } from "framer-motion";
import { RotateCw, RotateCcw, RefreshCw, ArrowRight, Eye, Rocket, Heart, Compass, Flame, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We lead with compassion and seek to understand before being understood.",
  },
  {
    icon: Compass,
    title: "Purposeful Growth",
    description: "Every program, product, and partnership is designed with intentional impact in mind.",
  },
  {
    icon: Flame,
    title: "Courage to Unlearn",
    description: "We challenge assumptions — our own and others' — to make space for what's next.",
  },
  {
    icon: Shield,
    title: "Integrity Always",
    description: "We operate with transparency, honesty, and a deep commitment to doing what's right.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Evolution",
    description: "We practice what we teach — constantly learning, adapting, and growing.",
  },
  {
    icon: Eye,
    title: "Radical Clarity",
    description: "We cut through noise to deliver insights and experiences that truly matter.",
  },
];

const philosophySteps = [
  {
    icon: RotateCw,
    label: "Learn",
    description: "Acquire new knowledge, frameworks, and perspectives that expand your understanding.",
  },
  {
    icon: RotateCcw,
    label: "Unlearn",
    description: "Challenge outdated beliefs and mental models that no longer serve your growth.",
  },
  {
    icon: RefreshCw,
    label: "Relearn",
    description: "Rebuild with fresh insight, integrating wisdom into how you lead, communicate, and live.",
  },
];

const AboutUs = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="gold-divider mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              About LEUNRE
            </h1>
            <p className="text-lg text-primary-foreground/75 leading-relaxed">
              A movement dedicated to transforming how people think, perceive, and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="gold-divider mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-philosophy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The LEUNRE Philosophy
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Growth isn't linear — it's a cycle. Our philosophy is built on three interconnected stages that drive lasting transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {philosophySteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{step.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-10"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals and organizations to continuously evolve — by learning with curiosity, unlearning with courage, and relearning with clarity. We exist to build the human capabilities that drive meaningful change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl border border-border p-10"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where growth is a way of life — where people and organizations embrace change, lead with empathy, and create impact that extends far beyond the bottom line.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-philosophy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values aren't just words on a wall — they're the principles that guide every decision, interaction, and program we create.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Positioning */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              More Than a Company.<br />A Movement.
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
              LEUNRE isn't just about training — it's about shifting how the world approaches growth. We're building a community of leaders, thinkers, and doers who believe that the willingness to evolve is the greatest strength of all.
            </p>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
              Whether you join us through a course, a retreat, a deck of Growth Cards, or a partnership — you become part of something bigger.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gold text-accent-foreground font-semibold text-base hover:brightness-110 transition-all"
            >
              Join the Movement <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutUs;
