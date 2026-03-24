import { type ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  variant?: "default" | "warm" | "compact" | "compact-warm";
  className?: string;
  id?: string;
}

const paddingMap = {
  default: "py-24 md:py-28 lg:py-32",
  warm: "py-24 md:py-28 lg:py-32",
  compact: "py-16 md:py-20 lg:py-24",
  "compact-warm": "py-16 md:py-20 lg:py-24",
};

const bgMap = {
  default: "bg-background",
  warm: "bg-background",
  compact: "bg-background",
  "compact-warm": "bg-background",
};

const ContentSection = ({ children, variant = "default", className = "", id }: ContentSectionProps) => (
  <section
    id={id}
    className={`${paddingMap[variant]} ${bgMap[variant]} ${className}`}
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export default ContentSection;
