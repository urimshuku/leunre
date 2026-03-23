const metrics = [
  { value: "35+", label: "Countries" },
  { value: "5,000+", label: "Professionals Impacted" },
  { value: "50+", label: "Workshops & Trainings" },
  { value: "20+", label: "Company Partners" },
  { value: "4", label: "Leadership Programs" },
];

const TrustSection = () => (
  <section className="py-10 md:py-12 lg:py-14 bg-background overflow-hidden relative w-full"
    style={{
      borderTop: "1px solid #D8CEC5",
      borderBottom: "1px solid #D8CEC5",
      maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    }}
  >
    <div className="marquee-track-wrapper">
      <div className="marquee-track">
        {[...metrics, ...metrics].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 mx-10 md:mx-14 lg:mx-20 shrink-0"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-heading text-foreground">
              {item.value}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
