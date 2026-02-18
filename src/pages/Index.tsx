import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import CoreOfferings from "@/components/CoreOfferings";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturedCourses from "@/components/FeaturedCourses";
import CorporateSolutions from "@/components/CorporateSolutions";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustSection />
      <CoreOfferings />
      <PhilosophySection />
      <FeaturedCourses />
      <CorporateSolutions />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
