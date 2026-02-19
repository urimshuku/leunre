const colors = [
  { name: "Primary / Forest", token: "--primary", hsl: "153 45% 17%", hex: "#184131", usage: "Headings, buttons, hero background" },
  { name: "Forest Light", token: "--forest-light", hsl: "150 12% 52%", hex: "#73937E", usage: "Secondary text, hover states" },
  { name: "Orange / Accent", token: "--accent", hsl: "24 67% 45%", hex: "#d16014", usage: "Accent highlights, dividers, CTAs" },
  { name: "Orange Light", token: "--gold-light", hsl: "24 55% 55%", hex: "#D4864A", usage: "Subtle warm accents" },
  { name: "Background", token: "--background", hsl: "34.3 28% 95.1%", hex: "#F6F3EF", usage: "Main site background" },
  { name: "Warm / Cream", token: "--warm", hsl: "36 27% 95%", hex: "#F6F3EE", usage: "Section alt backgrounds" },
  { name: "Philosophy BG", token: "--philosophy-bg", hsl: "30 14% 92%", hex: "#EFEBE7", usage: "Philosophy, Corporate, CTA sections" },
  { name: "Card", token: "--card", hsl: "0 0% 100%", hex: "#FFFFFF", usage: "Cards, popovers" },
  { name: "Muted", token: "--muted", hsl: "36 20% 92%", hex: "#EDE9E2", usage: "Muted backgrounds" },
  { name: "Muted Foreground", token: "--muted-foreground", hsl: "153 12% 45%", hex: "#657B6F", usage: "Secondary/helper text" },
  { name: "Border", token: "--border", hsl: "36 15% 88%", hex: "#E4DFD8", usage: "Borders, dividers" },
  { name: "Destructive", token: "--destructive", hsl: "0 84.2% 60.2%", hex: "#EC4343", usage: "Error states" },
];

const typography = [
  { name: "Heading", family: "Inter", weights: "400–800", usage: "All headings (h1–h6)" },
  { name: "Body", family: "Plus Jakarta Sans", weights: "300–800", usage: "Body text, paragraphs, UI elements" },
];

const BrandStyleGuide = () => (
  <div className="min-h-screen bg-white p-8 md:p-12 lg:p-16 max-w-4xl mx-auto print:p-6">
    {/* Header */}
    <div className="mb-12 border-b-2 border-[#184131] pb-8">
      <h1 className="text-4xl md:text-5xl font-heading font-bold" style={{ color: "#184131" }}>
        LEUNRE
      </h1>
      <p className="text-lg mt-2" style={{ color: "#73937E" }}>Brand Style Guide</p>
      <div className="mt-4 w-16 h-1 rounded" style={{ background: "#CD8B3E" }} />
    </div>

    {/* Color Palette */}
    <section className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: "#184131" }}>Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((c) => (
          <div key={c.token} className="border rounded-lg overflow-hidden" style={{ borderColor: "#E4DFD8" }}>
            <div className="h-20 w-full" style={{ background: c.hex }} />
            <div className="p-3">
              <p className="font-heading font-bold text-sm" style={{ color: "#184131" }}>{c.name}</p>
              <p className="text-xs font-mono mt-1" style={{ color: "#657B6F" }}>{c.hex}</p>
              <p className="text-xs font-mono" style={{ color: "#657B6F" }}>HSL: {c.hsl}</p>
              <p className="text-xs mt-1.5" style={{ color: "#73937E" }}>{c.usage}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Typography */}
    <section className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: "#184131" }}>Typography</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {typography.map((t) => (
          <div key={t.name} className="border rounded-lg p-5" style={{ borderColor: "#E4DFD8" }}>
            <p className="text-3xl font-heading font-bold mb-2" style={{ color: "#184131", fontFamily: t.family }}>Aa</p>
            <p className="font-heading font-bold text-sm" style={{ color: "#184131" }}>{t.family}</p>
            <p className="text-xs mt-1" style={{ color: "#657B6F" }}>Weights: {t.weights}</p>
            <p className="text-xs" style={{ color: "#73937E" }}>{t.usage}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Primary Combinations */}
    <section className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: "#184131" }}>Key Combinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg p-6 flex items-center justify-center" style={{ background: "#184131" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#FFFFFF" }}>Primary on Forest</span>
        </div>
        <div className="rounded-lg p-6 flex items-center justify-center" style={{ background: "#184131" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#CD8B3E" }}>Gold on Forest</span>
        </div>
        <div className="rounded-lg p-6 flex items-center justify-center" style={{ background: "#F6F3EF" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#184131" }}>Forest on Background</span>
        </div>
        <div className="rounded-lg p-6 flex items-center justify-center border" style={{ background: "#EFEBE7", borderColor: "#E4DFD8" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#184131" }}>Forest on Philosophy BG</span>
        </div>
      </div>
    </section>

    <footer className="text-center pt-8 border-t" style={{ borderColor: "#E4DFD8" }}>
      <p className="text-xs" style={{ color: "#657B6F" }}>LEUNRE Brand Style Guide · Learn · Unlearn · Relearn</p>
    </footer>
  </div>
);

export default BrandStyleGuide;
