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
        <div className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundColor: "#F9F8F6" }}>
          <div className="text-center">
            <h1 className="text-2xl font-heading mb-4" style={{ color: "#1d1d1f" }}>Service Not Found</h1>
            <Link to="/services" className="text-primary hover:opacity-70 transition-opacity font-medium">
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
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-base bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm"
        >
          Book a Consultation
        </a>
      </DetailHero>

      {/* Overview + Who It's For */}
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl md:text-3xl font-heading mb-6" style={{ color: "#1d1d1f" }}>Overview</h2>
            <p className="leading-relaxed text-sm md:text-lg max-w-xl" style={{ color: "#86868b" }}>{service.overview}</p>
          </motion.div>

          <div className="bg-card rounded-2xl p-5 md:p-6 card-elevated card-elevated-hover">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-base md:text-lg font-heading mb-5" style={{ color: "#1d1d1f" }}>Ideal For</h3>
              <ul className="space-y-2.5">
                {service.audience.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#86868b" }}>
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
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
        <section className="py-16 md:py-24 lg:py-28 bg-[#f3f2f1]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading mb-8 md:mb-12 text-center" style={{ color: "#1d1d1f" }}>Types of Retreats</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {retreatTypes.map((type, i) => (
                <div
                  key={type.title}
                  className="group bg-card rounded-2xl p-6 md:p-8 text-center card-elevated card-elevated-hover"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {i === 0 ? <User className="w-6 h-6 text-primary mx-auto mb-4" strokeWidth={1.5} /> : <Building2 className="w-6 h-6 text-primary mx-auto mb-4" strokeWidth={1.5} />}
                    <h3 className="text-lg md:text-xl font-heading mb-2" style={{ color: "#1d1d1f" }}>{type.title}</h3>
                    <p className="leading-relaxed text-sm" style={{ color: "#86868b" }}>{type.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="py-16 md:py-24 lg:py-28 bg-[#f3f2f1] pt-[112px] pb-[112px]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading mb-8 md:mb-12" style={{ color: "#1d1d1f" }}>Expected Outcomes</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.outcomes.map((outcome, i) => (
              <div key={outcome} className="flex items-start gap-4 bg-card rounded-2xl p-5 card-elevated card-elevated-hover">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 w-full"
                >
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="font-medium text-sm" style={{ color: "#1d1d1f" }}>{outcome}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <ContentSection>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading mb-8 md:mb-12" style={{ color: "#1d1d1f" }}>Our Approach</h2>
          </motion.div>
          <div className="space-y-4">
            {service.approach.map((step, i) => (
              <div key={step.title} className="bg-card rounded-2xl p-5 md:p-6 card-elevated card-elevated-hover">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ border: "1px solid #ECEAE6" }}>
                    <span className="text-sm text-primary font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-heading mb-2" style={{ color: "#1d1d1f" }}>{step.title}</h3>
                    <p className="leading-relaxed text-sm" style={{ color: "#86868b" }}>{step.description}</p>
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
