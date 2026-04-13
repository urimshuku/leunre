import { type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandMarkBackdrop from "@/components/BrandMarkBackdrop";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
    <BrandMarkBackdrop />
  </>
);

export default PageLayout;
