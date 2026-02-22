const metrics = [
  { value: "35+", label: "Countries" },
  { value: "5,000+", label: "Professionals Impacted" },
  { value: "50+", label: "Workshops & Trainings" },
  { value: "20+", label: "Company Partners" },
  { value: "4", label: "Leadership Programs" },
];

const TrustSection = () => (
  <section className="py-10 md:py-12 lg:py-14 bg-background border-b-2 border-border overflow-hidden relative w-full"
    style={{
      maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    }}
  >
    <div className="marquee-track-wrapper">
      <div className="marquee-track">
        {[...metrics, ...metrics].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 mx-8 md:mx-12 lg:mx-16 shrink-0"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground">
              {item.value}
            </span>
            <span className="text-xs md:text-sm lg:text-base text-muted-foreground font-medium uppercase tracking-wider whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
