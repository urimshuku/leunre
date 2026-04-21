import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/shared/PageLayout";
import UnifiedPageAtmosphere from "@/components/shared/UnifiedPageAtmosphere";
import { articles } from "@/data/articles";
import { heroReveal } from "@/lib/motion";
import NotFound from "./NotFound";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const article = currentIndex >= 0 ? articles[currentIndex] : undefined;

  if (!article) return <NotFound />;

  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <PageLayout>
      <UnifiedPageAtmosphere>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm mb-8 hover:opacity-70 transition-opacity"
            style={{ color: "#86868b" }}
          >
            <ArrowLeft size={14} className="icon-arrow-nudge icon-arrow-nudge--left" /> Back to Insights
          </Link>
          <div>
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-4">
              {article.category}
            </span>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroReveal}
              custom={0.08}
              className="text-2xl md:text-4xl lg:text-5xl font-heading mb-6"
              style={{ color: "#1d1d1f" }}
            >
              {article.title}
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroReveal}
              custom={0.08}
              className="flex flex-wrap items-center gap-4 text-sm"
              style={{ color: "#86868b" }}
            >
              <span className="flex items-center gap-1.5"><User size={14} /> {article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#1d1d1f" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-12 pt-8 flex items-center justify-center gap-6" style={{ borderTop: "1px solid #ECEAE6" }}>
            {prevArticle ? (
              <Link
                to={`/insights/articles/${prevArticle.slug}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-primary/5 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_16px_0_rgba(0,0,0,0.14)]"
                style={{ border: "1px solid #ECEAE6" }}
                title={prevArticle.title}
              >
                <ArrowLeft size={16} className="icon-arrow-nudge icon-arrow-nudge--left" style={{ color: "#86868b" }} />
              </Link>
            ) : (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center opacity-30 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]"
                style={{ border: "1px solid #ECEAE6" }}
              >
                <ArrowLeft size={16} className="icon-arrow-nudge icon-arrow-nudge--left" style={{ color: "#86868b" }} />
              </div>
            )}
            {nextArticle ? (
              <Link
                to={`/insights/articles/${nextArticle.slug}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-primary/5 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_16px_0_rgba(0,0,0,0.14)]"
                style={{ border: "1px solid #ECEAE6" }}
                title={nextArticle.title}
              >
                <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" style={{ color: "#86868b" }} />
              </Link>
            ) : (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center opacity-30 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]"
                style={{ border: "1px solid #ECEAE6" }}
              >
                <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" style={{ color: "#86868b" }} />
              </div>
            )}
          </div>
        </div>
      </section>
      </UnifiedPageAtmosphere>
    </PageLayout>
  );
};

export default ArticleDetail;
