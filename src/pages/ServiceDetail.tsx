import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, User, Building2 } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import DetailHero from "@/components/shared/DetailHero";
import ContentSection from "@/components/shared/ContentSection";
import BottomCTA from "@/components/shared/BottomCTA";
import { getServiceBySlug, retreatTypes } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center bg-background pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:text-forest-light transition-colors font-semibold">
              ← Back to Services
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <DetailHero
        backTo="/services"
        backLabel="All Services"
        tag={service.tag}
        title={service.title}
        description={service.description}
      >
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-base shadow-sm hover:shadow-md hover:brightness-110 transition-all"
          style={{ backgroundColor: "#b7551f", color: "#ffffff" }}
        >
          Book a Consultation
        </a>
      </DetailHero>

      {/* Overview + Who It's For */}
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="gold-divider mb-6" />
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{service.overview}</p>
          </motion.div>

          <div className="bg-card rounded-xl border border-border p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-heading font-bold text-foreground mb-5">Ideal For</h3>
              <ul className="space-y-3">
                {service.audience.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </ContentSection>

      {/* Retreat Types - only for retreats */}
      {slug === "retreats" && (
        <ContentSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Types of Retreats</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {retreatTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 md:p-8 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  {i === 0 ? <User className="w-5 h-5 text-primary" /> : <Building2 className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </ContentSection>
      )}

      {/* Outcomes */}
      <ContentSection variant={slug === "retreats" ? "default" : "muted"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="gold-divider mb-6" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10">Expected Outcomes</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.outcomes.map((outcome, i) => (
            <div key={outcome} className="flex items-start gap-4 bg-card rounded-xl border border-border p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 w-full"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-gold" />
                </div>
                <p className="text-foreground font-medium">{outcome}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Our Approach */}
      <ContentSection variant={slug === "retreats" ? "muted" : "default"}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="gold-divider mb-6" />
            <h2 className="text-3xl font-heading font-bold text-foreground mb-10">Our Approach</h2>
          </motion.div>
          <div className="space-y-6">
            {service.approach.map((step, i) => (
              <div key={step.title} className="bg-card rounded-xl border border-border p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <BottomCTA
        title="Ready to Get Started?"
        subtitle={`Let's discuss how ${service.title.toLowerCase()} can create lasting impact for your organization.`}
        buttonText="Book a Consultation"
        buttonHref="/contact"
      />
    </PageLayout>
  );
};

export default ServiceDetail;
