import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, Users2, Compass } from "lucide-react";
import courseEmotional from "@/assets/course-emotional.jpg";
import courseCommunication from "@/assets/course-communication.jpg";
import coursePeople from "@/assets/course-people.jpg";
import courseLeadership from "@/assets/course-leadership.jpg";

const courses = [
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Master self-awareness, empathy, and emotional regulation to lead with authenticity and resilience.",
    tag: "Most Popular",
    image: courseEmotional,
  },
  {
    icon: MessageCircle,
    title: "Communication Mastery",
    description: "Transform how you connect, influence, and build trust through powerful communication frameworks.",
    tag: "Essential",
    image: courseCommunication,
  },
  {
    icon: Users2,
    title: "People Management",
    description: "Develop the skills to inspire, coach, and empower high-performing teams in any organization.",
    tag: "Leadership",
    image: coursePeople,
  },
  {
    icon: Compass,
    title: "Conscious Leadership",
    description: "Lead with purpose, clarity, and integrity — creating impact that extends beyond the bottom line.",
    tag: "Advanced",
    image: courseLeadership,
  },
];

const FeaturedCourses = () => (
  <section id="courses" className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4"
      >
        <div>
          <div className="gold-divider mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Featured Courses
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Transformative programs designed to shift perspective and build lasting capability.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-forest-light transition-colors">
          View All Courses <ArrowRight size={16} />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300"
          >
            <div className="h-2 bg-primary group-hover:bg-gold transition-colors" />
            <div className="p-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold mb-4">
                {course.tag}
              </span>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <course.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.description}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-forest-light transition-colors">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCourses;
