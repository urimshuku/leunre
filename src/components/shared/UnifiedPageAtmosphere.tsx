import { type ReactNode } from "react";

const EXTREME_NOISE_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.85' numOctaves='6' seed='13' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

/**
 * Unified warm background, soft orange blobs, and grain (Insights / inner pages).
 * Children should use transparent section backgrounds so the atmosphere shows through.
 */
const UnifiedPageAtmosphere = ({ children }: { children: ReactNode }) => (
  <div className="relative overflow-hidden bg-[#F9F8F6]">
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-8%",
        right: "-16%",
        width: "62%",
        height: "40%",
        background:
          "radial-gradient(ellipse at 35% 40%, rgba(164, 76, 35, 0.22) 0%, rgba(164, 76, 35, 0.14) 32%, rgba(164, 76, 35, 0.08) 54%, rgba(164, 76, 35, 0) 78%)",
        filter: "blur(84px)",
        borderRadius: "56% 44% 63% 37% / 46% 58% 42% 54%",
        opacity: 0.92,
      }}
      aria-hidden
    />
    <div
      className="absolute pointer-events-none"
      style={{
        top: "28%",
        left: "-22%",
        width: "64%",
        height: "48%",
        background:
          "radial-gradient(ellipse at 64% 46%, rgba(164, 76, 35, 0.2) 0%, rgba(164, 76, 35, 0.12) 34%, rgba(164, 76, 35, 0.06) 56%, rgba(164, 76, 35, 0) 80%)",
        filter: "blur(92px)",
        borderRadius: "41% 59% 47% 53% / 60% 43% 57% 40%",
        opacity: 0.9,
      }}
      aria-hidden
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-10%",
        right: "-24%",
        width: "68%",
        height: "42%",
        background:
          "radial-gradient(ellipse at 42% 44%, rgba(164, 76, 35, 0.18) 0%, rgba(164, 76, 35, 0.1) 34%, rgba(164, 76, 35, 0.05) 56%, rgba(164, 76, 35, 0) 80%)",
        filter: "blur(96px)",
        borderRadius: "54% 46% 60% 40% / 48% 56% 44% 52%",
        opacity: 0.88,
      }}
      aria-hidden
    />
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        backgroundImage: EXTREME_NOISE_OVERLAY,
        backgroundRepeat: "repeat",
        backgroundSize: "72px 72px",
        mixBlendMode: "hard-light",
        opacity: 1,
      }}
      aria-hidden
    />
    <div className="relative z-10">{children}</div>
  </div>
);

export default UnifiedPageAtmosphere;
