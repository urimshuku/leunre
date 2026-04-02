import { type ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  variant?: "default" | "warm" | "compact" | "compact-warm";
  className?: string;
  id?: string;
}

const paddingMap = {
  default: "py-16 md:py-24 lg:py-28",
  warm: "py-16 md:py-24 lg:py-28",
  compact: "py-12 md:py-16 lg:py-20",
  "compact-warm": "py-12 md:py-16 lg:py-20",
};

const bgMap = {
  default: "",
  warm: "",
  compact: "",
  "compact-warm": "",
};

const bgStyle: Record<string, React.CSSProperties> = {
  default: { backgroundColor: "#F7F5F2" },
  warm: { backgroundColor: "#F2ECE6" },
  compact: { backgroundColor: "#F7F5F2" },
  "compact-warm": { backgroundColor: "#F2ECE6" },
};

const ContentSection = ({ children, variant = "default", className = "", id }: ContentSectionProps) => (
  <section
    id={id}
    className={`${paddingMap[variant]} ${bgMap[variant]} ${className}`}
    style={bgStyle[variant]}
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export default ContentSection;
