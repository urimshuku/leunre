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
            <h1 className="text-2xl font-heading text-foreground mb-4">Program Not Found</h1>
            <Link to="/programs" className="text-primary hover:text-forest-light transition-colors font-medium">
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
          <div className="flex items-center gap-2" style={{ color: "#A64B1A" }}>
            <Clock size={18} />
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-base hover:brightness-105 transition-all"
            style={{ backgroundColor: "#A64B1A", color: "#ffffff" }}
          >
            Enroll / Inquire
          </a>
        </div>
      </DetailHero>

      {/* Overview */}
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="gold-divider mb-6 md:mb-8" />
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6 md:mb-8">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">{course.overview}</p>
          </motion.div>

          <div className="bg-card rounded-xl p-6 md:p-8 card-elevated card-elevated-hover transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-heading text-foreground mb-5 md:mb-6">Who It's For</h3>
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
      </ContentSection>

      {/* Outcomes */}
      <ContentSection variant="warm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="gold-divider mb-6 md:mb-8" />
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-10 md:mb-14">What You'll Achieve</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {course.outcomes.map((outcome, i) => (
            <div key={outcome} className="flex items-start gap-4 bg-card rounded-xl p-6 card-elevated card-elevated-hover transition-all duration-300">
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
                <p className="text-foreground font-medium text-sm">{outcome}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Curriculum */}
      <ContentSection>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="gold-divider mb-6 md:mb-8" />
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-10 md:mb-14">Curriculum Outline</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {course.curriculum.map((mod, i) => (
              <AccordionItem
                key={mod.module}
                value={`module-${i}`}
                className="bg-card rounded-xl px-6 overflow-hidden card-elevated"
              >
                <AccordionTrigger className="text-foreground font-heading hover:no-underline text-sm md:text-base">
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
