import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, Users2, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Heart,
    title: "Emotional Intelligence &\nSelf Awareness",
    description: "Cultivate deep self-awareness, empathy, and emotional clarity to navigate life and leadership with authenticity.",
    tag: "Most Popular",
    slug: "emotional-intelligence",
  },
  {
    icon: MessageCircle,
    title: "Communication &\nCollaboration",
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
  <section id="programs" className="py-24 md:py-32 lg:py-40 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-16 lg:mb-20 gap-6"
      >
        <div>
          <div className="gold-divider mb-5 md:mb-6 lg:mb-7" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground mb-4 md:mb-5 lg:mb-6">
            Featured Programs
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed">
            Growth happens through experience. Our trainings and workshops invite active participation — blending knowledge, practice, and reflection.
          </p>
        </div>
        <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-forest-light transition-colors shrink-0">
          View All Programs <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
        {courses.map((course, i) => (
          <div
            key={course.title}
            className="group bg-card rounded-xl overflow-hidden card-elevated card-elevated-hover transition-all duration-300"
          >
            <div className="h-1.5 bg-primary group-hover:bg-gold transition-colors" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 md:p-6 lg:p-7"
            >
              <span className="inline-block text-[10px] md:text-xs font-medium uppercase tracking-wider text-gold mb-4 md:mb-5">
                {course.tag}
              </span>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-primary/15 transition-colors">
                <course.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-heading text-foreground mb-2 md:mb-3 whitespace-pre-line">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 md:mb-5">{course.description}</p>
              <Link to={`/programs/${course.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-forest-light transition-colors">
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
