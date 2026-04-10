import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import { services } from "@/data/services";

const EXTREME_NOISE_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.85' numOctaves='6' seed='13' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

const Services = () => (
  <PageLayout>
    <div className="relative overflow-hidden bg-[#F9F8F6]">
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-8%",
          right: "-16%",
          width: "62%",
          height: "40%",
          background:
            "radial-gradient(ellipse at 35% 40%, rgba(164, 76, 35, 0.22) 0%, rgba(164, 76, 35, 0.14) 32%, rgba(164, 76, 35, 0.08) 54%, rgba(164, 76, 35, 0) 78%)",
          filter: "blur(84px)",
          borderRadius: "56% 44% 63% 37% / 46% 58% 42% 54%",
          opacity: 0.92,
        }}
        aria-hidden
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "28%",
          left: "-22%",
          width: "64%",
          height: "48%",
          background:
            "radial-gradient(ellipse at 64% 46%, rgba(164, 76, 35, 0.2) 0%, rgba(164, 76, 35, 0.12) 34%, rgba(164, 76, 35, 0.06) 56%, rgba(164, 76, 35, 0) 80%)",
          filter: "blur(92px)",
          borderRadius: "41% 59% 47% 53% / 60% 43% 57% 40%",
          opacity: 0.9,
        }}
        aria-hidden
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          right: "-24%",
          width: "68%",
          height: "42%",
          background:
            "radial-gradient(ellipse at 42% 44%, rgba(164, 76, 35, 0.18) 0%, rgba(164, 76, 35, 0.1) 34%, rgba(164, 76, 35, 0.05) 56%, rgba(164, 76, 35, 0) 80%)",
          filter: "blur(96px)",
          borderRadius: "54% 46% 60% 40% / 48% 56% 44% 52%",
          opacity: 0.88,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: EXTREME_NOISE_OVERLAY,
          backgroundRepeat: "repeat",
          backgroundSize: "72px 72px",
          mixBlendMode: "hard-light",
          opacity: 1,
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <PageHero
          title="Our Services"
          subtitle="Tailored solutions for organizations ready to invest in their people, culture, and leadership capacity."
          matchProgramsSize
          noShadow
          transparentBackground
        />

        {services.map((service) => (
          <ContentSection
            key={service.title}
            id={service.slug}
            variant="default"
            className={`bg-transparent ${service.slug === "organizational-development" ? "border-none" : ""}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
                viewport={{ once: true }}
              >
                <div className="mb-6 md:mb-8">
                  <div className="gold-divider border-sky-600 border-2 border-solid" />
                </div>
                <div className="inline-block mb-5 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border border-primary/20">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-6" style={{ color: "#1d1d1f" }}>
                  {service.title}
                </h2>
                <p className="text-sm md:text-lg leading-relaxed mb-8 whitespace-pre-line max-w-lg" style={{ color: "#86868b" }}>
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all shadow-sm"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <div className="bg-card rounded-2xl p-5 md:p-6 card-elevated card-elevated-hover">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <h3 className="text-base md:text-lg font-heading mb-4" style={{ color: "#1d1d1f" }}>
                      Ideal For
                    </h3>
                    <ul className="space-y-2.5">
                      {service.audience.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#86868b" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="bg-card rounded-2xl p-5 md:p-6 card-elevated card-elevated-hover">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-base md:text-lg font-heading mb-4" style={{ color: "#1d1d1f" }}>
                      Expected Outcomes
                    </h3>
                    <ul className="space-y-2.5">
                      {service.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#86868b" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </ContentSection>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Services;
