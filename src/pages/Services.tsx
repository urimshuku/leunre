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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <service.icon className="w-8 h-8 text-primary mb-6 md:mb-8" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6 md:mb-8" style={{ color: "#1d1d1f" }}>
              {service.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10 whitespace-pre-line max-w-lg" style={{ color: "#86868b" }}>
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
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated card-elevated-hover transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-lg md:text-xl font-heading mb-5" style={{ color: "#1d1d1f" }}>
                  Ideal For
                </h3>
                <ul className="space-y-3">
                  {service.audience.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#86868b" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated card-elevated-hover transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg md:text-xl font-heading mb-5" style={{ color: "#1d1d1f" }}>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
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
  </PageLayout>
);

export default Services;
