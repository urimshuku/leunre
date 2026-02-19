import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceBySlug } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-background pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:text-forest-light transition-colors font-semibold">
              ← Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
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
              className="max-w-3xl"
            >
              <div className="mb-8">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  <ArrowLeft size={16} /> All Services
                </Link>
              </div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                {service.tag}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8">
                {service.description}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gold text-accent-foreground font-semibold text-base hover:brightness-110 transition-all"
              >
                Book a Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* Overview + Who It's For */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl border border-border p-8"
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
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
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
                <div
                  key={outcome}
                  className="flex items-start gap-4 bg-card rounded-xl border border-border p-6"
                >
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
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
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
                <div
                  key={step.title}
                  className="bg-card rounded-xl border border-border p-6 md:p-8"
                >
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
        </section>

        {/* CTA */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                Let's discuss how {service.title.toLowerCase()} can create lasting impact for your organization.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gold text-accent-foreground font-semibold text-base hover:brightness-110 transition-all"
              >
                Book a Consultation
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
