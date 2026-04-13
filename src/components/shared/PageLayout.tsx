import { type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandMarkBackdrop from "@/components/BrandMarkBackdrop";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="bg-[#1d1d1f]">
    <Navbar />
    <main className="relative rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden bg-[#F9F8F6]">
      {children}
    </main>
    <Footer />
    <BrandMarkBackdrop />
  </div>
);

export default PageLayout;
