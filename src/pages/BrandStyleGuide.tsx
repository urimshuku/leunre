const colors = [
  { name: "Primary / Burnt Orange", token: "--primary", hsl: "21 73% 38%", hex: "#A64B1A", usage: "Headings, buttons, hero background" },
  { name: "Burnt Orange Light", token: "--forest-light", hsl: "24 65% 48%", hex: "#C96A2B", usage: "Secondary text, hover states" },
  { name: "Gold / Accent", token: "--accent", hsl: "43 56% 51%", hex: "#C9A13A", usage: "Accent highlights, dividers, CTAs" },
  { name: "Gold Light", token: "--gold-light", hsl: "44 69% 69%", hex: "#E6C878", usage: "Subtle warm accents" },
  { name: "Background", token: "--background", hsl: "36 26% 96%", hex: "#F7F5F2", usage: "Main site background" },
  { name: "Warm / Cream", token: "--warm", hsl: "30 32% 93%", hex: "#F2ECE6", usage: "Section alt backgrounds" },
  { name: "Philosophy BG", token: "--philosophy-bg", hsl: "30 32% 93%", hex: "#F2ECE6", usage: "Philosophy, Corporate, CTA sections" },
  { name: "Card", token: "--card", hsl: "0 0% 100%", hex: "#FFFFFF", usage: "Cards, popovers" },
  { name: "Muted", token: "--muted", hsl: "30 19% 88%", hex: "#E7E1DB", usage: "Muted backgrounds" },
  { name: "Muted Foreground", token: "--muted-foreground", hsl: "24 40% 39%", hex: "#8A5A3B", usage: "Secondary/helper text" },
  { name: "Foreground", token: "--foreground", hsl: "16 33% 27%", hex: "#5C3A2E", usage: "Body text, headings" },
  { name: "Separator / Teal", token: "separator", hsl: "184 38% 48%", hex: "#4DA1A9", usage: "Dividers, separators" },
  { name: "Hero Background", token: "hero-bg", hsl: "42 22% 90%", hex: "#EDEAE3", usage: "All hero sections" },
  { name: "Border", token: "--border", hsl: "36 15% 92%", hex: "#ECEAE6", usage: "Borders, dividers" },
  { name: "Destructive", token: "--destructive", hsl: "3 67% 54%", hex: "#D6453D", usage: "Error states" },
];

const typography = [
  { name: "Heading", family: "Manrope", weights: "300, 400, 600", usage: "All headings (h1–h6), color #5C3A2E" },
  { name: "Body", family: "Inter", weights: "400, 500", usage: "Body text, paragraphs, UI elements, color #5C3A2E / #8A5A3B" },
];

const BrandStyleGuide = () => (
  <div className="min-h-screen bg-white p-8 md:p-12 lg:p-16 max-w-4xl mx-auto print:p-6">
    {/* Header */}
    <div className="mb-12 border-b-2 border-[#A64B1A] pb-8">
      <h1 className="text-4xl md:text-5xl font-heading font-bold" style={{ color: "#A64B1A" }}>
        LEUNRE
      </h1>
      <p className="text-lg mt-2" style={{ color: "#C96A2B" }}>Brand Style Guide</p>
      <div className="mt-4 w-16 h-1 rounded" style={{ background: "#C9A13A" }} />
    </div>

    {/* Color Palette */}
    <section className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: "#A64B1A" }}>Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((c) => (
          <div key={c.token} className="border rounded-lg overflow-hidden" style={{ borderColor: "#E7E1DB" }}>
            <div className="h-20 w-full" style={{ background: c.hex }} />
            <div className="p-3">
              <p className="font-heading font-bold text-sm" style={{ color: "#5C3A2E" }}>{c.name}</p>
              <p className="text-xs font-mono mt-1" style={{ color: "#8A5A3B" }}>{c.hex}</p>
              <p className="text-xs font-mono" style={{ color: "#8A5A3B" }}>HSL: {c.hsl}</p>
              <p className="text-xs mt-1.5" style={{ color: "#8A5A3B" }}>{c.usage}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Typography */}
    <section className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: "#A64B1A" }}>Typography</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {typography.map((t) => (
          <div key={t.name} className="border rounded-lg p-5" style={{ borderColor: "#E7E1DB" }}>
            <p className="text-3xl font-heading font-bold mb-2" style={{ color: "#5C3A2E", fontFamily: t.family }}>Aa</p>
            <p className="font-heading font-bold text-sm" style={{ color: "#5C3A2E" }}>{t.family}</p>
            <p className="text-xs mt-1" style={{ color: "#8A5A3B" }}>Weights: {t.weights}</p>
            <p className="text-xs" style={{ color: "#8A5A3B" }}>{t.usage}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Primary Combinations */}
    <section className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: "#A64B1A" }}>Key Combinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg p-6 flex items-center justify-center" style={{ background: "#A64B1A" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#FFFFFF" }}>White on Primary</span>
        </div>
        <div className="rounded-lg p-6 flex items-center justify-center" style={{ background: "#A64B1A" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#C9A13A" }}>Gold on Primary</span>
        </div>
        <div className="rounded-lg p-6 flex items-center justify-center" style={{ background: "#F7F5F2" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#A64B1A" }}>Primary on Background</span>
        </div>
        <div className="rounded-lg p-6 flex items-center justify-center border" style={{ background: "#E7E1DB", borderColor: "#E7E1DB" }}>
          <span className="font-heading font-bold text-lg" style={{ color: "#5C3A2E" }}>Heading on Muted</span>
        </div>
      </div>
    </section>

    <footer className="text-center pt-8 border-t" style={{ borderColor: "#E7E1DB" }}>
      <p className="text-xs" style={{ color: "#8A5A3B" }}>LEUNRE Brand Style Guide · Learn · Unlearn · Relearn</p>
    </footer>
  </div>
);

export default BrandStyleGuide;
