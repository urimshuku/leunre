import { type ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  variant?: "default" | "warm" | "compact" | "compact-warm";
  className?: string;
  id?: string;
}

const paddingMap = {
  default: "py-24 md:py-32 lg:py-40",
  warm: "py-24 md:py-32 lg:py-40",
  compact: "py-16 md:py-20 lg:py-24",
  "compact-warm": "py-16 md:py-20 lg:py-24",
};

const bgMap = {
  default: "bg-background",
  warm: "",
  compact: "bg-background",
  "compact-warm": "",
};

const ContentSection = ({ children, variant = "default", className = "", id }: ContentSectionProps) => (
  <section
    id={id}
    className={`${paddingMap[variant]} ${bgMap[variant]} ${className}`}
    style={variant === "warm" || variant === "compact-warm" ? { backgroundColor: "#F2ECE6" } : undefined}
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export default ContentSection;
