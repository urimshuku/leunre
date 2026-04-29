import { Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { routeComponents } from "@/lib/route-preload";

const {
  Index,
  Courses,
  CourseDetail,
  Services,
  ServiceDetail,
  Products,
  Blog,
  ArticleDetail,
  CaseStudyDetail,
  AboutUs,
  ContactUs,
  NotFound,
  BrandStyleGuide,
} = routeComponents;

const RouteFallback = () => (
  <div className="min-h-screen bg-[#F9F8F6] pt-24" role="status" aria-live="polite">
    <span className="sr-only">Loading page</span>
    <div className="mx-auto h-1 w-32 overflow-hidden rounded-full bg-[#ECEAE6]">
      <div className="h-full w-1/2 animate-pulse rounded-full bg-primary/70" />
    </div>
  </div>
);

const App = () => (
  <MotionConfig reducedMotion="user">
    <Toaster />
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Courses />} />
          <Route path="/programs/:slug" element={<CourseDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/tools" element={<Products />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/insights/articles/:slug" element={<ArticleDetail />} />
          <Route path="/insights/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/brand-guide" element={<BrandStyleGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </MotionConfig>
);

export default App;
