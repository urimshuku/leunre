import { motion } from "framer-motion";
import { ArrowRight, Building2, Mountain, Sparkles, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Building2,
    id: "organizational-development",
    title: "Organizational Development Support",
    description:
      "We partner with organizations to diagnose systemic challenges, align leadership, and design people strategies that drive sustainable growth. Our consultants work alongside your team to build internal capacity — from culture transformation to change management.",
    audience: [
      "HR and People Operations teams",
      "C-suite and executive leadership",
      "Organizations undergoing transformation or scaling",
    ],
    outcomes: [
      "A clear organizational development roadmap",
      "Improved leadership alignment and decision-making",
      "Stronger culture and employee engagement",
      "Sustainable frameworks for change management",
    ],
  },
  {
    icon: Mountain,
    id: "retreats",
    title: "Retreats",
    description:
      "Our curated retreats combine immersive learning with purposeful reflection. Designed for leadership teams and high-potential cohorts, each retreat is tailored to foster deeper connection, strategic clarity, and renewed energy.",
    audience: [
      "Leadership teams seeking alignment",
      "High-potential talent cohorts",
      "Boards and executive committees",
    ],
    outcomes: [
      "Strengthened team cohesion and trust",
      "Strategic clarity on key priorities",
      "Renewed energy and shared purpose",
      "Actionable commitments carried back to the workplace",
    ],
  },
  {
    icon: Sparkles,
    id: "experiential-training",
    title: "Experiential Training",
    description:
      "Learning by doing. Our experiential training programs go beyond lectures and slides — using simulations, role-play, real-world scenarios, and reflective practice to embed lasting behavioral change.",
    audience: [
      "Teams needing practical skill-building",
      "Organizations prioritizing behavioral change",
      "L&D departments seeking high-impact programs",
    ],
    outcomes: [
      "Immediate application of new skills on the job",
      "Higher retention through hands-on learning",
      "Measurable behavior shifts in participants",
      "Engaging, memorable learning experiences",
    ],
  },
  {
    icon: Users,
    id: "workshops",
    title: "Workshops",
    description:
      "Focused, facilitated sessions designed to tackle specific challenges — from communication breakdowns to team dynamics. Our workshops are interactive, insight-driven, and tailored to your organization's context.",
    audience: [
      "Intact teams addressing specific challenges",
      "Cross-functional groups building collaboration",
      "Managers and individual contributors alike",
    ],
    outcomes: [
      "Practical tools and frameworks to apply immediately",
      "Shared language and understanding across the team",
      "Clarity on next steps and accountability",
      "Energized, motivated participants",
    ],
  },
];

const Services = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-20 pb-12 md:pt-24 md:pb-14 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="gold-divider mb-4 md:mb-5 lg:mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 md:mb-5 lg:mb-6">
              Our Services
            </h1>
            <p className="text-base md:text-base lg:text-lg text-primary-foreground/75 leading-relaxed">
              Tailored solutions for organizations ready to invest in their people, culture, and leadership capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.title}
          id={service.id}
          className={`py-14 md:py-18 lg:py-24 ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
              {/* Left — Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
                  <service.icon className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-[1.7rem] lg:text-4xl font-heading font-bold text-foreground mb-4 md:mb-5 lg:mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-7 lg:mb-8">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-gold text-accent-foreground font-semibold text-sm md:text-sm lg:text-base hover:brightness-110 transition-all"
                >
                  Book a Consultation <ArrowRight size={16} />
                </a>
              </motion.div>

              {/* Right — Audience + Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4 md:space-y-6 lg:space-y-8"
              >
                {/* Ideal Audience */}
                <div className="bg-card rounded-xl border border-border p-5 md:p-6 lg:p-8">
                  <h3 className="text-base md:text-base lg:text-lg font-heading font-bold text-foreground mb-3 md:mb-4 lg:mb-5">
                    Ideal For
                  </h3>
                  <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                    {service.audience.map((item) => (
                      <li key={item} className="flex items-start gap-2 md:gap-2.5 lg:gap-3 text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Outcomes */}
                <div className="bg-card rounded-xl border border-border p-5 md:p-6 lg:p-8">
                  <h3 className="text-base md:text-base lg:text-lg font-heading font-bold text-foreground mb-3 md:mb-4 lg:mb-5">
                    Expected Outcomes
                  </h3>
                  <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2 md:gap-2.5 lg:gap-3 text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </main>
    <Footer />
  </>
);

export default Services;
