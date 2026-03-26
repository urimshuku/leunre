import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import { courses } from "@/data/courses";

const Courses = () => (
  <PageLayout>
    <PageHero
      title="Our Programs"
      subtitle={"Growth happens through experience.\nOur trainings and workshops invite active participation — blending knowledge, practice, and reflection."}
    />

    <ContentSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {courses.map((course, i) => (
          <div
            key={course.slug}
            className="group bg-card rounded-2xl overflow-hidden card-elevated card-elevated-hover"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 md:p-6 lg:p-8"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-3">
                    {course.tag}
                  </span>
                  <div className="inline-flex icon-hover-border">
                    <course.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm" style={{ color: "#86868b" }}>
                  <Clock size={12} />
                  {course.duration}
                </div>
              </div>

              <h2 className="text-lg md:text-xl font-heading mb-3" style={{ color: "#1d1d1f" }}>
                {course.title}
              </h2>
              <p className="leading-relaxed text-sm md:text-base mb-5 max-w-md" style={{ color: "#86868b" }}>
                {course.description}
              </p>

              <div className="mb-5">
                <h3 className="text-sm font-medium mb-2.5" style={{ color: "#1d1d1f" }}>Key Outcomes</h3>
                <ul className="space-y-2">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm" style={{ color: "#86868b" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/programs/${course.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-70 transition-opacity"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </ContentSection>
  </PageLayout>
);

export default Courses;