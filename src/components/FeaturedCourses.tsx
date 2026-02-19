import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, Users2, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Master self-awareness, empathy, and emotional regulation to lead with authenticity and resilience.",
    tag: "Most Popular",
  },
  {
    icon: MessageCircle,
    title: "Communication Mastery",
    description: "Transform how you connect, influence, and build trust through powerful communication frameworks.",
    tag: "Essential",
  },
  {
    icon: Users2,
    title: "People Management",
    description: "Develop the skills to inspire, coach, and empower high-performing teams in any organization.",
    tag: "Leadership",
  },
  {
    icon: Compass,
    title: "Conscious Leadership",
    description: "Lead with purpose, clarity, and integrity — creating impact that extends beyond the bottom line.",
    tag: "Advanced",
  },
];

const FeaturedCourses = () => (
  <section id="courses" className="py-14 md:py-20 lg:py-32 bg-muted">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 lg:mb-16 gap-4"
      >
        <div>
          <div className="gold-divider mb-4 md:mb-5 lg:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-3.5 lg:mb-4">
            Featured Courses
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl">
            Transformative programs designed to shift perspective and build lasting capability.
          </p>
        </div>
        <Link to="/courses" className="inline-flex items-center gap-2 text-xs md:text-xs lg:text-sm font-semibold text-primary hover:text-forest-light transition-colors">
          View All Courses <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300"
          >
            <div className="h-1.5 md:h-1.5 lg:h-2 bg-primary group-hover:bg-gold transition-colors" />
            <div className="p-4 md:p-5 lg:p-6">
              <span className="inline-block text-[10px] md:text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-gold mb-3 md:mb-3.5 lg:mb-4">
                {course.tag}
              </span>
              <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-3.5 lg:mb-4">
                <course.icon className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" />
              </div>
              <h3 className="text-base md:text-base lg:text-lg font-heading font-bold text-foreground mb-1.5 md:mb-1.5 lg:mb-2">{course.title}</h3>
              <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-3.5 lg:mb-4">{course.description}</p>
              <a href="#" className="inline-flex items-center gap-1 text-xs md:text-xs lg:text-sm font-semibold text-primary hover:text-forest-light transition-colors">
                Learn More <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCourses;
