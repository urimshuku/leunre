import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, Users2, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Heart,
    title: "Emotional Intelligence\n& Self Awareness",
    description: "Cultivate deep self-awareness, empathy, and emotional clarity to navigate life and leadership with authenticity.",
    tag: "Most Popular",
    slug: "emotional-intelligence",
  },
  {
    icon: MessageCircle,
    title: "Communication\n& Collaboration",
    description: "Build trust, resolve conflict, and foster meaningful connection through conscious communication practices.",
    tag: "Essential",
    slug: "communication-mastery",
  },
  {
    icon: Users2,
    title: "Conscious Leadership &\nPeople Management",
    description: "Lead with purpose and presence while developing the skills to inspire, coach, and grow high-performing teams.",
    tag: "Leadership",
    slug: "people-management",
  },
  {
    icon: Compass,
    title: "Team Harmony &\nOrganizational Well-being",
    description: "Create cultures of trust, alignment, and well-being where teams and organizations thrive together.",
    tag: "Advanced",
    slug: "conscious-leadership",
  },
];

const FeaturedCourses = () => (
  <section id="programs" className="py-20 md:py-28 lg:py-36 bg-muted border-b border-border/50 section-shadow">
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
            Featured Programs
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl">
            Growth happens through experience. Our trainings and workshops invite active participation — blending knowledge, practice, and reflection.
          </p>
        </div>
        <Link to="/programs" className="inline-flex items-center gap-2 text-xs md:text-xs lg:text-sm font-semibold text-primary hover:text-forest-light transition-colors">
          View All Programs <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {courses.map((course, i) => (
          <div
            key={course.title}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300"
          >
            <div className="h-1.5 md:h-1.5 lg:h-2 bg-primary group-hover:bg-gold transition-colors" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 md:p-5 lg:p-6"
            >
              <span className="inline-block text-[10px] md:text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-gold mb-3 md:mb-3.5 lg:mb-4">
                {course.tag}
              </span>
              <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-3.5 lg:mb-4">
                <course.icon className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" />
              </div>
              <h3 className="text-base md:text-base lg:text-lg font-heading font-bold text-foreground mb-1.5 md:mb-1.5 lg:mb-2 whitespace-pre-line">{course.title}</h3>
              <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-3.5 lg:mb-4">{course.description}</p>
              <Link to={`/programs/${course.slug}`} className="inline-flex items-center gap-1 text-xs md:text-xs lg:text-sm font-semibold text-primary hover:text-forest-light transition-colors">
                Learn More <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCourses;
