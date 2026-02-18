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
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="gold-divider mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Our Courses
            </h1>
            <p className="text-lg text-primary-foreground/75 leading-relaxed">
              Transformative programs designed to shift perspective, build lasting capability, and unlock human potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="h-2 bg-primary group-hover:bg-gold transition-colors" />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold mb-3">
                        {course.tag}
                      </span>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <course.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock size={14} />
                      {course.duration}
                    </div>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-foreground mb-3">
                    {course.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Key Outcomes */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Key Outcomes</h3>
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
                    to={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-forest-light transition-colors"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Courses;
