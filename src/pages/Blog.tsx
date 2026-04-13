import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import UnifiedPageAtmosphere from "@/components/shared/UnifiedPageAtmosphere";
import { articles } from "@/data/articles";
import { caseStudies } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

type InsightsTab = "articles" | "case-studies";

const springToggle = { type: "spring" as const, stiffness: 400, damping: 32 };

const Blog = () => {
  const [tab, setTab] = useState<InsightsTab>("articles");

  return (
    <PageLayout>
      <UnifiedPageAtmosphere>
        <PageHero
          title="The LEUNRE Insights"
          subtitle="Insights, frameworks, and stories on learning, unlearning, and the courage to grow."
          noShadow
          transparentBackground
        />

        {/* Segmented toggle — Articles / Case Studies */}
        <section className="pt-8 md:pt-12 pb-2 md:pb-4 bg-transparent" aria-label="Choose content type">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div
              className="mx-auto flex max-w-sm rounded-full p-1.5"
              style={{ backgroundColor: "#E8E6E3" }}
              role="tablist"
            >
              <div
                className="relative grid flex-1 grid-cols-1 cursor-pointer"
                onClick={() => setTab("articles")}
              >
                {tab === "articles" && (
                  <motion.div
                    layoutId="insights-toggle-pill"
                    className="pointer-events-none absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                    transition={springToggle}
                    aria-hidden
                  />
                )}
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "articles"}
                  id="tab-articles"
                  aria-controls="panel-articles"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTab("articles");
                  }}
                  className={cn(
                    "relative z-10 w-full rounded-full px-5 py-2.5 text-sm transition-colors md:px-8 md:py-3 md:text-base",
                    tab === "articles" ? "font-medium text-[#1d1d1f]" : "font-normal text-[#86868b]",
                  )}
                >
                  Articles
                </button>
              </div>
              <div
                className="relative grid flex-1 grid-cols-1 cursor-pointer"
                onClick={() => setTab("case-studies")}
              >
                {tab === "case-studies" && (
                  <motion.div
                    layoutId="insights-toggle-pill"
                    className="pointer-events-none absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                    transition={springToggle}
                    aria-hidden
                  />
                )}
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "case-studies"}
                  id="tab-case-studies"
                  aria-controls="panel-case-studies"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTab("case-studies");
                  }}
                  className={cn(
                    "relative z-10 w-full rounded-full px-5 py-2.5 text-sm transition-colors md:px-8 md:py-3 md:text-base",
                    tab === "case-studies" ? "font-medium text-[#1d1d1f]" : "font-normal text-[#86868b]",
                  )}
                >
                  Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        <AnimatePresence mode="wait">
          {tab === "articles" ? (
            <motion.section
              key="articles"
              id="panel-articles"
              role="tabpanel"
              aria-labelledby="tab-articles"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0, 0, 0.2, 1] }}
              className="py-10 md:py-16 lg:py-20 pb-[112px] pt-6 md:pt-10 bg-transparent"
            >
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
            </motion.section>
          ) : (
            <motion.section
              key="case-studies"
              id="panel-case-studies"
              role="tabpanel"
              aria-labelledby="tab-case-studies"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0, 0, 0.2, 1] }}
              className="py-10 md:py-16 lg:py-20 pb-[112px] pt-6 md:pt-10 bg-transparent"
            >
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
            </motion.section>
          )}
        </AnimatePresence>
      </UnifiedPageAtmosphere>
    </PageLayout>
  );
};

export default Blog;
