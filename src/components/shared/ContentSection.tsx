import { type ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  variant?: "default" | "muted";
  className?: string;
  id?: string;
}

const ContentSection = ({ children, variant = "default", className = "", id }: ContentSectionProps) => (
  <section
    id={id}
    className={`py-14 md:py-18 lg:py-24 border-b border-border section-shadow ${
      variant === "muted" ? "bg-muted" : "bg-background"
    } ${className}`}
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export default ContentSection;
