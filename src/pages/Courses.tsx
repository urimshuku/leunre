import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

const Courses = () => (
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
              Our Courses
            </h1>
            <p className="text-base md:text-base lg:text-lg text-primary-foreground/75 leading-relaxed">
              Transformative programs designed to shift perspective, build lasting capability, and unlock human potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-14 md:py-18 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
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

                  {/* Key Outcomes */}
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
                    to={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-2 text-xs md:text-[0.8rem] lg:text-sm font-semibold text-primary hover:text-forest-light transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Courses;
