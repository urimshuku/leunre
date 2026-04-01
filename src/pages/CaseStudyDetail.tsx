import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/shared/PageLayout";
import { caseStudies } from "@/data/caseStudies";
import NotFound from "./NotFound";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) return <NotFound />;

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
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary">
                {study.industry}
              </span>
              <span className="text-xs" style={{ color: "#86868b" }}>•</span>
              <span className="inline-block text-xs font-medium" style={{ color: "#1d1d1f" }}>
                {study.result}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-6" style={{ color: "#1d1d1f" }}>
              {study.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#86868b" }}>
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          {/* Challenge */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-heading mb-3" style={{ color: "#1d1d1f" }}>The Challenge</h2>
            <p className="text-base leading-relaxed" style={{ color: "#5C3A2E" }}>{study.challenge}</p>
          </div>

          {/* Approach */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-heading mb-3" style={{ color: "#1d1d1f" }}>Our Approach</h2>
            <p className="text-base leading-relaxed" style={{ color: "#5C3A2E" }}>{study.approach}</p>
          </div>

          {/* Outcomes */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-heading mb-3" style={{ color: "#1d1d1f" }}>Key Outcomes</h2>
            <ul className="space-y-3">
              {study.outcomes.map((outcome, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-base leading-relaxed"
                  style={{ color: "#5C3A2E" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {outcome}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Full Story */}
          <div className="space-y-6">
            {study.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
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
              <ArrowLeft size={14} /> Back to all insights
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudyDetail;
