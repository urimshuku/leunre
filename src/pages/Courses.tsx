import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import ContentSection from "@/components/shared/ContentSection";
import UnifiedPageAtmosphere from "@/components/shared/UnifiedPageAtmosphere";
import { courses } from "@/data/courses";
import { heroReveal } from "@/lib/motion";

const Courses = () => (
  <PageLayout>
    <UnifiedPageAtmosphere>
      <section className="relative pt-24 pb-12 md:pt-36 md:pb-20 lg:pt-44 lg:pb-28 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroReveal}
              custom={0.08}
              className="text-4xl md:text-5xl lg:text-[72px] font-heading mb-4 md:mb-8"
              style={{ color: "#1d1d1f" }}
            >
              Our Programs
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={heroReveal}
              custom={0.08}
              className="text-base md:text-xl leading-relaxed whitespace-pre-line max-w-xl"
              style={{ color: "#86868b" }}
            >
              {"Growth happens through experience.\nOur trainings and workshops invite active participation — blending knowledge, practice, and reflection."}
            </motion.p>
          </div>
        </div>
      </section>

      <ContentSection className="!bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {courses.map((course, i) => (
            <Link
              key={course.slug}
              to={`/programs/${course.slug}`}
              className="group overflow-hidden card-elevated cursor-pointer block"
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
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.03] icon-tile-grain icon-tile-standard">
                      <course.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" strokeWidth={1.5} />
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

                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn More{" "}
                  <ArrowRight size={14} className="icon-arrow-nudge icon-arrow-nudge--right" />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </ContentSection>
    </UnifiedPageAtmosphere>
  </PageLayout>
);

export default Courses;
