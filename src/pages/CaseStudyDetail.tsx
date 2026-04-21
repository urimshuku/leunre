import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/shared/PageLayout";
import UnifiedPageAtmosphere from "@/components/shared/UnifiedPageAtmosphere";
import { caseStudies } from "@/data/caseStudies";
import { heroReveal } from "@/lib/motion";
import NotFound from "./NotFound";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const study = currentIndex >= 0 ? caseStudies[currentIndex] : undefined;

  if (!study) return <NotFound />;

  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

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
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary">
                {study.industry}
              </span>
              <span className="text-xs" style={{ color: "#86868b" }}>•</span>
              <span className="inline-block text-xs font-medium" style={{ color: "#1d1d1f" }}>
                {study.result}
              </span>
            </div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroReveal}
              custom={0.08}
              className="text-2xl md:text-4xl lg:text-5xl font-heading mb-6"
              style={{ color: "#1d1d1f" }}
            >
              {study.title}
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={heroReveal}
              custom={0.08}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#86868b" }}
            >
              {study.description}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-heading mb-3" style={{ color: "#1d1d1f" }}>The Challenge</h2>
            <p className="text-base leading-relaxed" style={{ color: "#1d1d1f" }}>{study.challenge}</p>
          </div>

          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-heading mb-3" style={{ color: "#1d1d1f" }}>Our Approach</h2>
            <p className="text-base leading-relaxed" style={{ color: "#1d1d1f" }}>{study.approach}</p>
          </div>

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
                  style={{ color: "#1d1d1f" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {outcome}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {study.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#1d1d1f" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-12 pt-8 flex items-center justify-center gap-6" style={{ borderTop: "1px solid #ECEAE6" }}>
            {prevStudy ? (
              <Link
                to={`/insights/case-studies/${prevStudy.slug}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-primary/5 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_16px_0_rgba(0,0,0,0.14)]"
                style={{ border: "1px solid #ECEAE6" }}
                title={prevStudy.title}
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
            {nextStudy ? (
              <Link
                to={`/insights/case-studies/${nextStudy.slug}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-primary/5 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)] hover:shadow-[0_6px_16px_0_rgba(0,0,0,0.14)]"
                style={{ border: "1px solid #ECEAE6" }}
                title={nextStudy.title}
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

export default CaseStudyDetail;
