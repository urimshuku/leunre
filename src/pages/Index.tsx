import { lazy, Suspense } from "react";
import PageLayout from "@/components/shared/PageLayout";
import HomePageBackground from "@/components/HomePageBackground";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import CoreOfferings from "@/components/CoreOfferings";

const PhilosophySection = lazy(() => import("@/components/PhilosophySection"));
const FeaturedCourses = lazy(() => import("@/components/FeaturedCourses"));
const CorporateSolutions = lazy(() => import("@/components/CorporateSolutions"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

const LowerHomeFallback = () => (
  <div className="min-h-[1200px] md:min-h-[1600px]" aria-hidden />
);

const Index = () => (
  <PageLayout>
    <HeroSection />
    <HomePageBackground>
      <TrustSection />
      <CoreOfferings />
      <Suspense fallback={<LowerHomeFallback />}>
        <PhilosophySection />
        <FeaturedCourses />
        <CorporateSolutions />
        <TestimonialsSection />
        <CTASection />
      </Suspense>
    </HomePageBackground>
  </PageLayout>
);

export default Index;
