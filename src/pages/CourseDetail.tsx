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
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2" style={{ color: "#86868b" }}>
            <Clock size={18} />
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-base hover:opacity-90 transition-all shadow-sm"
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
            <h2 className="text-3xl md:text-4xl font-heading mb-8" style={{ color: "#1d1d1f" }}>Overview</h2>
            <p className="leading-relaxed text-base md:text-lg max-w-xl" style={{ color: "#86868b" }}>{course.overview}</p>
          </motion.div>

          <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated card-elevated-hover transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-heading mb-6" style={{ color: "#1d1d1f" }}>Who It's For</h3>
              <ul className="space-y-3">
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
      <section className="py-24 md:py-28 lg:py-32" style={{ backgroundColor: "hsl(37 18% 96%)" }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-12 md:mb-16" style={{ color: "#1d1d1f" }}>What You'll Achieve</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {course.outcomes.map((outcome, i) => (
              <div key={outcome} className="flex items-start gap-4 bg-card rounded-2xl p-6 card-elevated card-elevated-hover transition-all duration-300">
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
            <h2 className="text-3xl md:text-4xl font-heading mb-12 md:mb-16" style={{ color: "#1d1d1f" }}>Curriculum Outline</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {course.curriculum.map((mod, i) => (
              <AccordionItem
                key={mod.module}
                value={`module-${i}`}
                className="bg-card rounded-2xl px-6 overflow-hidden card-elevated"
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
