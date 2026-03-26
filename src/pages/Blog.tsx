import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import SectionHeader from "@/components/shared/SectionHeader";

const featuredPost = {
  title: "Why Unlearning Is the Most Underrated Leadership Skill",
  excerpt:
    "In a world obsessed with acquiring new skills, we rarely talk about the power of letting go. Discover why the best leaders are those willing to challenge their own assumptions.",
  author: "LEUNRE Editorial",
  date: "Feb 12, 2026",
  readTime: "7 min read",
  category: "Leadership",
  slug: "unlearning-leadership-skill",
};

const posts = [
  {
    title: "The Relearn Framework: A Practical Guide to Reinvention",
    excerpt: "Moving beyond theory — a step-by-step approach to rebuilding your mental models for lasting personal and professional growth.",
    author: "LEUNRE Editorial",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    category: "Growth",
    slug: "relearn-framework-guide",
  },
  {
    title: "From Burnout to Breakthrough: Rethinking How We Work",
    excerpt: "Burnout isn't just about doing too much — it's about doing the wrong things. Explore how intentional unlearning can transform your relationship with work.",
    author: "LEUNRE Editorial",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    category: "Wellbeing",
    slug: "burnout-to-breakthrough",
  },
  {
    title: "Building a Culture of Continuous Evolution in Teams",
    excerpt: "High-performing teams aren't built on static skills. Learn how to foster a culture where learning, unlearning, and relearning become second nature.",
    author: "LEUNRE Editorial",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    category: "Teams",
    slug: "culture-continuous-evolution",
  },
  {
    title: "The Action Cards: How Tangible Tools Spark Intangible Change",
    excerpt: "Discover the philosophy behind our Action Cards and how a simple deck can become a powerful catalyst for reflection and transformation.",
    author: "LEUNRE Editorial",
    date: "Jan 14, 2026",
    readTime: "4 min read",
    category: "Tools",
    slug: "growth-cards-tangible-tools",
  },
  {
    title: "Five Mental Models You Need to Unlearn Today",
    excerpt: "From the sunk cost fallacy to perfectionism — these deeply held beliefs may be holding you back more than you realize.",
    author: "LEUNRE Editorial",
    date: "Jan 7, 2026",
    readTime: "6 min read",
    category: "Mindset",
    slug: "five-mental-models-unlearn",
  },
  {
    title: "Empathy as a Strategic Advantage in Modern Organizations",
    excerpt: "Empathy isn't soft — it's strategic. Explore how leading with understanding creates measurable impact on innovation, retention, and culture.",
    author: "LEUNRE Editorial",
    date: "Dec 30, 2025",
    readTime: "5 min read",
    category: "Leadership",
    slug: "empathy-strategic-advantage",
  },
];

const Blog = () => (
  <PageLayout>
    <PageHero
      title="The LEUNRE Insights"
      subtitle="Insights, frameworks, and stories on learning, unlearning, and the courage to grow."
    />

    {/* Featured Post */}
    <ContentSection>
      <SectionHeader title="Featured" className="mb-8 md:mb-12" />
      <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-10 card-elevated card-elevated-hover max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-3">
            {featuredPost.category}
          </span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-heading mb-4 md:mb-5" style={{ color: "#1d1d1f" }}>
            {featuredPost.title}
          </h2>
          <p className="text-sm md:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: "#86868b" }}>
            {featuredPost.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6" style={{ color: "#86868b" }}>
            <span className="flex items-center gap-1.5"><User size={14} /> {featuredPost.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {featuredPost.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {featuredPost.readTime}</span>
          </div>
          <Link
            to={`/insights/${featuredPost.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-70 transition-opacity"
          >
            Read Article <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </ContentSection>

    {/* Posts Grid */}
    <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F2ECE6" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Latest Articles" className="mb-8 md:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className="bg-card rounded-2xl p-5 md:p-6 flex flex-col card-elevated card-elevated-hover"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col flex-1"
              >
                <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-3">
                  {post.category}
                </span>
                <h3 className="text-base md:text-lg font-heading mb-2" style={{ color: "#1d1d1f" }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#86868b" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "#86868b" }}>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <Link
                  to={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-70 transition-opacity"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: "#F2ECE6" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <SectionHeader title="Case Studies" className="mb-8 md:mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {[
          {
            title: "Transforming Leadership Culture at a Fortune 500",
            description: "How a global enterprise redefined its leadership approach through structured unlearning, resulting in 40% improved team engagement scores.",
            industry: "Enterprise",
            result: "40% engagement increase",
          },
          {
            title: "From Burnout to Breakthrough: A Tech Startup's Journey",
            description: "A fast-growing startup used LEUNRE's framework to rebuild team dynamics and reduce turnover by 60% in under a year.",
            industry: "Technology",
            result: "60% reduced turnover",
          },
          {
            title: "Reinventing Professional Development in Education",
            description: "A university system partnered with LEUNRE to redesign faculty development, leading to measurably higher student satisfaction.",
            industry: "Education",
            result: "28% satisfaction boost",
          },
          {
            title: "Building Resilient Teams in Healthcare",
            description: "A healthcare network adopted the Relearn Framework to support frontline workers, dramatically improving retention and morale.",
            industry: "Healthcare",
            result: "35% improved retention",
          },
        ].map((cs, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-5 md:p-6 flex flex-col card-elevated card-elevated-hover"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col flex-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary">
                  {cs.industry}
                </span>
                <span className="text-xs" style={{ color: "#86868b" }}>•</span>
                <span className="inline-block text-xs font-medium" style={{ color: "#1d1d1f" }}>
                  {cs.result}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-heading mb-2" style={{ color: "#1d1d1f" }}>
                {cs.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 max-w-md" style={{ color: "#86868b" }}>
                {cs.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      </div>
    </section>
  </PageLayout>
);

export default Blog;
