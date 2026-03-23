import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import { services } from "@/data/services";

const Services = () => (
  <PageLayout>
    <PageHero
      title="Our Services"
      subtitle="Tailored solutions for organizations ready to invest in their people, culture, and leadership capacity."
    />

    {services.map((service, i) => (
      <ContentSection
        key={service.title}
        id={service.slug}
        variant={i % 2 === 1 ? "warm" : "default"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/8 flex items-center justify-center mb-5 md:mb-6 lg:mb-8 group-hover:bg-primary/15 transition-colors">
              <service.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-5 md:mb-6 lg:mb-8">
              {service.title}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 md:mb-10 whitespace-pre-line max-w-lg">
              {service.description}
            </p>
            <Link
              to={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-lg bg-gold text-accent-foreground font-medium text-sm md:text-base hover:brightness-105 transition-all"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right — Audience + Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 md:space-y-6"
          >
            <div className="bg-card rounded-xl p-6 md:p-8 card-elevated card-elevated-hover transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-base md:text-lg font-heading text-foreground mb-4 md:mb-5">
                  Ideal For
                </h3>
                <ul className="space-y-3">
                  {service.audience.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8 card-elevated card-elevated-hover transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-base md:text-lg font-heading text-foreground mb-4 md:mb-5">
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
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
  </PageLayout>
);

export default Services;
