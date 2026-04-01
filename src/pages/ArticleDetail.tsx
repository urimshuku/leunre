import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/shared/PageLayout";
import { articles } from "@/data/articles";
import NotFound from "./NotFound";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" style={{ backgroundColor: "#F9F8F6" }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm mb-8 hover:opacity-70 transition-opacity"
            style={{ color: "#86868b" }}
          >
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-4">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-6" style={{ color: "#1d1d1f" }}>
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "#86868b" }}>
              <span className="flex items-center gap-1.5"><User size={14} /> {article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#5C3A2E" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid #ECEAE6" }}>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={14} /> Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ArticleDetail;
