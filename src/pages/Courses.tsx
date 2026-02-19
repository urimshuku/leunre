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
      subtitle="Transformative programs designed to shift perspective, build lasting capability, and unlock human potential."
    />

    <ContentSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {courses.map((course, i) => (
          <div
            key={course.slug}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300"
          >
            <div className="h-1.5 md:h-1.5 lg:h-2 bg-primary group-hover:bg-gold transition-colors" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 md:p-6 lg:p-8"
            >
              <div className="flex items-start justify-between mb-4 md:mb-5 lg:mb-6">
                <div>
                  <span className="inline-block text-[10px] md:text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-gold mb-2 md:mb-2.5 lg:mb-3">
                    {course.tag}
                  </span>
                  <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <course.icon className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs md:text-xs lg:text-sm text-muted-foreground">
                  <Clock size={12} />
                  {course.duration}
                </div>
              </div>

              <h2 className="text-lg md:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 md:mb-2.5 lg:mb-3">
                {course.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-sm lg:text-sm mb-4 md:mb-5 lg:mb-6">
                {course.description}
              </p>

              <div className="mb-4 md:mb-5 lg:mb-6">
                <h3 className="text-xs md:text-xs lg:text-sm font-semibold text-foreground mb-2 md:mb-2.5 lg:mb-3">Key Outcomes</h3>
                <ul className="space-y-1.5 md:space-y-1.5 lg:space-y-2">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/programs/${course.slug}`}
                className="inline-flex items-center gap-2 text-xs md:text-[0.8rem] lg:text-sm font-semibold text-primary hover:text-forest-light transition-colors"
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
