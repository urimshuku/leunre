import { type ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  variant?: "default" | "warm" | "compact" | "compact-warm";
  className?: string;
  id?: string;
}

const paddingMap = {
  default: "py-16 md:py-24 lg:py-28 border pt-[112px] pb-[112px]",
  warm: "py-16 md:py-24 lg:py-28 border pt-[112px] pb-[112px]",
  compact: "py-12 md:py-16 lg:py-20",
  "compact-warm": "py-12 md:py-16 lg:py-20",
};

const bgMap = {
  default: "bg-[#f3f2f1]",
  warm: "bg-[#f3f2f1]",
  compact: "bg-[#f3f2f1]",
  "compact-warm": "bg-[#f3f2f1]",
};

const bgStyle: Record<string, React.CSSProperties> = {
  default: {},
  warm: {},
  compact: {},
  "compact-warm": {},
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
