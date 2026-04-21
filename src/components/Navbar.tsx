import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Services", href: "/services" },
  { label: "Tools", href: "/tools" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SCROLL_ENTER_THRESHOLD = 72;
const SCROLL_EXIT_THRESHOLD = 28;

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DUR = "700ms";

const morphTransition = [
  "max-width", "height", "padding", "border-radius",
  "background-color", "box-shadow", "border-color",
  "backdrop-filter", "-webkit-backdrop-filter",
].map(p => `${p} ${DUR} ${EASE}`).join(", ");

const wrapperTransition = `padding ${DUR} ${EASE}`;

const shadowPill =
  "0 0 0 0 rgba(236,234,230,0), 0 6px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.75)";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const rafRef = useRef(0);
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled((current) => {
        if (current) return y > SCROLL_EXIT_THRESHOLD;
        return y > SCROLL_ENTER_THRESHOLD;
      });
    };
    update();
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        update();
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const mainLinks = navLinks.filter((l) => l.label !== "Contact");
  const linkClass = "text-sm whitespace-nowrap";
  const linkStyle = { color: "#1d1d1f" } as const;

  const barVisuals = (pill: boolean): React.CSSProperties => ({
    borderRadius: pill ? 9999 : 0,
    backgroundColor: pill ? "rgba(255,255,255,0.62)" : "rgba(255,255,255,0)",
    backdropFilter: pill ? "blur(40px) saturate(1.5)" : "none",
    WebkitBackdropFilter: pill ? "blur(40px) saturate(1.5)" : "none",
    boxShadow: pill ? shadowPill : "none",
    borderWidth: 1,
    borderStyle: "solid" as const,
    borderColor: pill ? "rgba(232,230,227,0.7)" : "transparent",
    transition: morphTransition,
  });

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50">
        {/* ── Desktop ── */}
        <div
          className="hidden lg:block"
          style={{
            padding: scrolled ? "16px 20px 0" : "0",
            transition: wrapperTransition,
          }}
        >
          <div
            className="w-full mx-auto"
            style={{
              ...barVisuals(scrolled),
              maxWidth: scrolled ? "var(--site-rail-width)" : "100%",
              height: scrolled ? 52 : 64,
            }}
          >
            <div
              className="grid grid-cols-[1fr_auto_1fr] items-center h-full w-full mx-auto"
              style={{
                maxWidth: "var(--site-rail-width)",
                padding: scrolled ? "0 12px" : "0 32px",
                transition: `max-width ${DUR} ${EASE}, padding ${DUR} ${EASE}`,
              }}
            >
              <div className="flex justify-start items-center min-w-0">
                <Link
                  to="/"
                  className="font-heading text-lg md:text-xl tracking-tight font-semibold shrink-0"
                  style={{
                    ...linkStyle,
                    marginLeft: scrolled ? 8 : 0,
                    transition: `margin ${DUR} ${EASE}`,
                  }}
                >
                  LEUNRE
                </Link>
              </div>

              <div className="flex justify-center items-center min-w-0">
                <div
                  className="flex items-center"
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    gap: scrolled ? 2 : 32,
                    transition: `gap ${DUR} ${EASE}`,
                  }}
                >
                  {mainLinks.map((link, i) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={cn(
                        "relative",
                        linkClass,
                        scrolled && "px-3 py-1.5 rounded-full",
                      )}
                      style={linkStyle}
                      onMouseEnter={() => setHovered(i)}
                    >
                      {link.label}
                      {hovered === i && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute left-1/2 h-1 w-1 -ml-0.5 rounded-full pointer-events-none"
                          style={{ backgroundColor: "#1d1d1f", bottom: scrolled ? -1 : -8 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex justify-end items-center min-w-0 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center shrink-0 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all btn-bevel-solid"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div
          className="lg:hidden"
          style={{
            padding: scrolled ? "12px 16px 0" : "0",
            transition: wrapperTransition,
          }}
        >
          <div
            className="flex items-center justify-between w-full mx-auto"
            style={{
              ...barVisuals(scrolled),
              maxWidth: scrolled ? 512 : "100%",
              height: scrolled ? 48 : 56,
              padding: scrolled ? "0 12px" : "0 16px",
            }}
          >
            <Link
              to="/"
              className="font-heading text-lg tracking-tight font-semibold min-w-0 truncate"
              style={linkStyle}
            >
              LEUNRE
            </Link>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all btn-bevel-solid"
              >
                Contact
              </Link>
              <button
                type="button"
                className="p-2 rounded-full shrink-0 hover:bg-black/[0.04]"
                style={{ color: "#1d1d1f" }}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
            className={cn(
              "fixed z-40 lg:hidden overflow-hidden border border-[#ECEAE6]",
              scrolled
                ? "left-4 right-4 rounded-2xl shadow-lg"
                : "left-0 right-0 border-b rounded-none",
            )}
            style={{
              top: scrolled ? "4.5rem" : "3.5rem",
              backgroundColor: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-0.5 p-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm transition-colors hover:bg-black/[0.04]"
                  style={linkStyle}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium btn-bevel-solid"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
