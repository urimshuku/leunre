const metrics = [
  { value: "35+", label: "Countries" },
  { value: "5,000+", label: "Professionals Impacted" },
  { value: "50+", label: "Workshops & Trainings" },
  { value: "20+", label: "Company Partners" },
  { value: "4", label: "Leadership Programs" },
];

const TrustSection = () => (
  <section className="py-8 md:py-10 lg:py-12 overflow-hidden relative w-full"
    style={{
      backgroundColor: "#FFFFFF",
      borderTop: "1px solid #ECEAE6",
      borderBottom: "1px solid #ECEAE6",
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
            <span className="text-xl md:text-2xl lg:text-3xl font-heading" style={{ color: "#1d1d1f" }}>
              {item.value}
            </span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-wider whitespace-nowrap" style={{ color: "#86868b" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;