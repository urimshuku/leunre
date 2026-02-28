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
    excerpt:
      "Moving beyond theory — a step-by-step approach to rebuilding your mental models for lasting personal and professional growth.",
    author: "LEUNRE Editorial",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    category: "Growth",
    slug: "relearn-framework-guide",
  },
  {
    title: "From Burnout to Breakthrough: Rethinking How We Work",
    excerpt:
      "Burnout isn't just about doing too much — it's about doing the wrong things. Explore how intentional unlearning can transform your relationship with work.",
    author: "LEUNRE Editorial",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    category: "Wellbeing",
    slug: "burnout-to-breakthrough",
  },
  {
    title: "Building a Culture of Continuous Evolution in Teams",
    excerpt:
      "High-performing teams aren't built on static skills. Learn how to foster a culture where learning, unlearning, and relearning become second nature.",
    author: "LEUNRE Editorial",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    category: "Teams",
    slug: "culture-continuous-evolution",
  },
  {
    title: "The Action Cards: How Tangible Tools Spark Intangible Change",
    excerpt:
      "Discover the philosophy behind our Action Cards and how a simple deck can become a powerful catalyst for reflection and transformation.",
    author: "LEUNRE Editorial",
    date: "Jan 14, 2026",
    readTime: "4 min read",
    category: "Tools",
    slug: "growth-cards-tangible-tools",
  },
  {
    title: "Five Mental Models You Need to Unlearn Today",
    excerpt:
      "From the sunk cost fallacy to perfectionism — these deeply held beliefs may be holding you back more than you realize.",
    author: "LEUNRE Editorial",
    date: "Jan 7, 2026",
    readTime: "6 min read",
    category: "Mindset",
    slug: "five-mental-models-unlearn",
  },
  {
    title: "Empathy as a Strategic Advantage in Modern Organizations",
    excerpt:
      "Empathy isn't soft — it's strategic. Explore how leading with understanding creates measurable impact on innovation, retention, and culture.",
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
      <SectionHeader title="Featured" className="mb-8 md:mb-10 lg:mb-12" />
      <div className="bg-card rounded-xl p-6 md:p-8 lg:p-10 card-elevated card-elevated-hover transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3 md:mb-4">
            {featuredPost.category}
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-3 md:mb-4 lg:mb-5">
            {featuredPost.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed mb-5 md:mb-6 lg:mb-8 max-w-3xl">
            {featuredPost.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-5 text-xs md:text-sm text-muted-foreground mb-5 md:mb-6">
            <span className="flex items-center gap-1.5"><User size={14} /> {featuredPost.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {featuredPost.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {featuredPost.readTime}</span>
          </div>
          <Link
            to={`/insights/${featuredPost.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Read Article <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </ContentSection>

    {/* Posts Grid */}
    <ContentSection>
      <SectionHeader title="Latest Articles" className="mb-8 md:mb-10 lg:mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {posts.map((post, i) => (
          <div
            key={post.slug}
            className="bg-card rounded-xl p-5 md:p-6 lg:p-8 flex flex-col card-elevated card-elevated-hover transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col flex-1"
            >
              <span className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                {post.category}
              </span>
              <h3 className="text-base md:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 md:mb-3">
                {post.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              <Link
                to={`/insights/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </ContentSection>
  </PageLayout>
);

export default Blog;
