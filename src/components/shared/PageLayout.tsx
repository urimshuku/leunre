import { type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageLayout;
