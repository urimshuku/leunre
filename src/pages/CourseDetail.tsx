import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import DetailHero from "@/components/shared/DetailHero";
import ContentSection from "@/components/shared/ContentSection";
import BottomCTA from "@/components/shared/BottomCTA";
import { getCourseBySlug } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

  if (!course) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center bg-background pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Program Not Found</h1>
            <Link to="/programs" className="text-primary hover:text-forest-light transition-colors font-semibold">
              ← Back to Programs
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <DetailHero
        backTo="/programs"
        backLabel="All Programs"
        tag={course.tag}
        title={course.title}
        description={course.description}
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 text-primary-foreground/60">
            <Clock size={18} />
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-base shadow-sm hover:shadow-md hover:brightness-110 transition-all"
            style={{ backgroundColor: "#b7551f", color: "#ffffff" }}
          >
            Enroll / Inquire
          </a>
        </div>
      </DetailHero>

      {/* Overview */}
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
            <p className="text-muted-foreground leading-relaxed text-lg">{course.overview}</p>
          </motion.div>

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
      </ContentSection>

      {/* Outcomes */}
      <ContentSection variant="muted">
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

      {/* Curriculum */}
      <ContentSection>
        <div className="max-w-3xl mx-auto">
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
      </ContentSection>

      <BottomCTA
        title="Ready to Begin?"
        subtitle="Take the first step toward transformation. Reach out to learn more about enrollment and upcoming cohorts."
        buttonText="Enroll / Inquire"
        buttonHref="#contact"
      />
    </PageLayout>
  );
};

export default CourseDetail;
