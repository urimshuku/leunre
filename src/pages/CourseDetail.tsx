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
        <div className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundColor: "#F9F8F6" }}>
          <div className="text-center">
            <h1 className="text-2xl font-heading mb-4" style={{ color: "#1d1d1f" }}>Program Not Found</h1>
            <Link to="/programs" className="text-primary hover:opacity-70 transition-opacity font-medium">
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
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2" style={{ color: "#86868b" }}>
            <Clock size={18} />
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-base bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm"
          >
            Enroll / Inquire
          </a>
        </div>
      </DetailHero>

      {/* Overview */}
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl md:text-3xl font-heading mb-6" style={{ color: "#1d1d1f" }}>Overview</h2>
            <p className="leading-relaxed text-sm md:text-lg max-w-xl" style={{ color: "#86868b" }}>{course.overview}</p>
          </motion.div>

          <div className="bg-card rounded-2xl p-5 md:p-6 card-elevated card-elevated-hover">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-base md:text-lg font-heading mb-5" style={{ color: "#1d1d1f" }}>Who It's For</h3>
              <ul className="space-y-2.5">
                {course.whoItsFor.map((item) => (
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

      {/* Outcomes */}
      <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F2ECE6" }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading mb-8 md:mb-12" style={{ color: "#1d1d1f" }}>What You'll Achieve</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, i) => (
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

      {/* Curriculum */}
      <ContentSection>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading mb-8 md:mb-12" style={{ color: "#1d1d1f" }}>Curriculum Outline</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2.5">
            {course.curriculum.map((mod, i) => (
              <AccordionItem
                key={mod.module}
                value={`module-${i}`}
                className="bg-card rounded-2xl px-5 overflow-hidden card-elevated"
              >
                <AccordionTrigger className="font-heading hover:no-underline text-sm md:text-base" style={{ color: "#1d1d1f" }}>
                  {mod.module}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pb-2">
                    {mod.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm" style={{ color: "#86868b" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
