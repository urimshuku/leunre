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
  <section id="programs" className="py-24 md:py-28 lg:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 lg:mb-24 gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-5 md:mb-6" style={{ color: "#1d1d1f" }}>
            Featured Programs
          </h2>
          <p className="text-base md:text-lg max-w-lg leading-relaxed" style={{ color: "#86868b" }}>
            Growth happens through experience. Our trainings and workshops invite active participation — blending knowledge, practice, and reflection.
          </p>
        </div>
        <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-70 transition-opacity shrink-0">
          View All Programs <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {courses.map((course, i) => (
          <div
            key={course.title}
            className="group bg-card rounded-2xl overflow-hidden card-elevated card-elevated-hover transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8"
            >
              <span className="inline-block text-[11px] font-medium uppercase tracking-wider text-primary mb-5">
                {course.tag}
              </span>
              <course.icon className="w-6 h-6 md:w-7 md:h-7 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-heading mb-3 whitespace-pre-line" style={{ color: "#1d1d1f" }}>{course.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#86868b" }}>{course.description}</p>
              <Link to={`/programs/${course.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-70 transition-opacity">
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
