import PageLayout from "@/components/shared/PageLayout";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import CoreOfferings from "@/components/CoreOfferings";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturedCourses from "@/components/FeaturedCourses";
import CorporateSolutions from "@/components/CorporateSolutions";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <TrustSection />
    <CoreOfferings />
    <PhilosophySection />
    <FeaturedCourses />
    <CorporateSolutions />
    <TestimonialsSection />
    <CTASection />
  </PageLayout>
);

export default Index;
