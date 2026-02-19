import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";



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
          id={service.slug}
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
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-gold text-accent-foreground font-semibold text-sm md:text-sm lg:text-base hover:brightness-110 transition-all"
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
