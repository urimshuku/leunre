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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
        {courses.map((course, i) => (
          <div
            key={course.slug}
            className="group bg-card rounded-xl overflow-hidden card-elevated card-elevated-hover transition-all duration-300"
          >
            <div className="h-1.5 bg-primary group-hover:bg-gold transition-colors" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8"
            >
              <div className="flex items-start justify-between mb-5 md:mb-6">
                <div>
                  <span className="inline-block text-xs font-medium uppercase tracking-wider text-gold mb-3">
                    {course.tag}
                  </span>
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <course.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock size={12} />
                  {course.duration}
                </div>
              </div>

              <h2 className="text-lg md:text-xl font-heading text-foreground mb-3 md:mb-4">
                {course.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5 md:mb-6 max-w-md">
                {course.description}
              </p>

              <div className="mb-5 md:mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Key Outcomes</h3>
                <ul className="space-y-2">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/programs/${course.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-forest-light transition-colors"
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
