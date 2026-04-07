import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { articles } from "@/data/articles";
import { caseStudies } from "@/data/caseStudies";

const Blog = () => (
  <PageLayout>
    <PageHero
      title="The LEUNRE Insights"
      subtitle="Insights, frameworks, and stories on learning, unlearning, and the courage to grow."
    />

    {/* Latest Articles */}
    <section className="py-12 md:py-20 lg:py-24 pt-[112px] pb-[112px] bg-[#f3f2f1] border-inherit">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Latest Articles" className="mb-8 md:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {articles.map((post, i) => (
            <Link
              key={post.slug}
              to={`/insights/articles/${post.slug}`}
              className="bg-card rounded-2xl p-5 md:p-6 flex flex-col card-elevated card-elevated-hover cursor-pointer group"
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
                <h3 className="text-base md:text-lg font-heading mb-2 group-hover:text-primary transition-colors" style={{ color: "#1d1d1f" }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#86868b" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "#86868b" }}>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read More <ArrowRight size={14} />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-12 md:py-20 lg:py-24 pt-[112px] pb-[112px] border bg-[#f3f2f1] border-inherit">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Case Studies" className="mb-8 md:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              to={`/insights/case-studies/${cs.slug}`}
              className="bg-card rounded-2xl p-5 md:p-6 flex flex-col card-elevated card-elevated-hover cursor-pointer group"
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
                <h3 className="text-base md:text-lg font-heading mb-2 group-hover:text-primary transition-colors" style={{ color: "#1d1d1f" }}>
                  {cs.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1 max-w-md" style={{ color: "#86868b" }}>
                  {cs.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read More <ArrowRight size={14} />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Blog;
