import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, CheckCircle2, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCourseBySlug } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-background pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Course Not Found</h1>
            <Link to="/courses" className="text-primary hover:text-forest-light transition-colors font-semibold">
              ← Back to Courses
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
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors mb-8 block"
              >
                <ArrowLeft size={16} /> All Courses
              </Link>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                {course.tag}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                {course.title}
              </h1>
              <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-primary-foreground/60">
                  <Clock size={18} />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gold text-accent-foreground font-semibold text-base hover:brightness-110 transition-all"
                >
                  Enroll / Inquire
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
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
                <p className="text-muted-foreground leading-relaxed text-lg">{course.overview}</p>
              </motion.div>

              {/* Who It's For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl border border-border p-8"
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-5">Who It's For</h3>
                <ul className="space-y-3">
                  {course.whoItsFor.map((item) => (
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
              <h2 className="text-3xl font-heading font-bold text-foreground mb-10">What You'll Achieve</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {course.outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-card rounded-xl border border-border p-6"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-gold" />
                  </div>
                  <p className="text-foreground font-medium">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="gold-divider mb-6" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-10">Curriculum Outline</h2>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-3">
              {course.curriculum.map((mod, i) => (
                <AccordionItem
                  key={mod.module}
                  value={`module-${i}`}
                  className="bg-card rounded-xl border border-border px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-foreground font-heading font-semibold hover:no-underline">
                    {mod.module}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pb-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                Ready to Begin?
              </h2>
              <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                Take the first step toward transformation. Reach out to learn more about enrollment and upcoming cohorts.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-gold text-accent-foreground font-semibold text-base hover:brightness-110 transition-all"
              >
                Enroll / Inquire
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CourseDetail;
