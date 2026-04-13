import { useState, useEffect } from "react";
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

const SCROLL_THRESHOLD = 56;

const pillSurface =
  "rounded-full border border-[rgba(232,230,227,0.7)] bg-[rgba(255,255,255,0.62)] shadow-[0_6px_30px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.75)_inset] backdrop-blur-2xl backdrop-saturate-150";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = navLinks.filter((l) => l.label !== "Contact");

  const linkClass =
    "text-sm transition-opacity hover:opacity-60 whitespace-nowrap";
  const linkStyle = { color: "#1d1d1f" } as const;

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-[padding,background-color,box-shadow,border-color] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "top-0 border-transparent bg-transparent py-3 md:py-4"
            : "top-0 border-b border-[#ECEAE6] py-0",
        )}
        style={
          !scrolled
            ? { backgroundColor: "rgba(249, 248, 246, 0.82)", backdropFilter: "blur(16px)" }
            : undefined
        }
      >
        {/* Desktop */}
        <div
          className={cn(
            "mx-auto hidden lg:grid w-full items-center transition-[max-width,padding] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "max-w-7xl px-4 md:px-6 lg:px-8 h-[52px] md:h-14" : "container px-4 md:px-6 lg:px-8 h-14 md:h-16",
          )}
        >
          <div
            className={cn(
              "grid w-full items-center transition-[padding,border-radius,box-shadow,max-width] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              scrolled
                ? cn("max-w-[1120px] mx-auto grid-cols-[1fr_auto_1fr] px-3 py-1.5", pillSurface)
                : "grid-cols-[1fr_auto_1fr]",
            )}
          >
            <div className="flex justify-start items-center min-w-0">
              <Link
                to="/"
                className="font-heading text-lg md:text-xl tracking-tight font-semibold shrink-0"
                style={linkStyle}
              >
                LEUNRE
              </Link>
            </div>

            <div className={cn("flex justify-center items-center min-w-0", scrolled ? "px-0" : "px-2")}>
              <div className={cn("flex items-center", scrolled ? "gap-0.5" : "gap-7 md:gap-8")}>
                {mainLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={cn(linkClass, scrolled && "px-3 py-1.5 rounded-full hover:bg-black/[0.04]")}
                    style={linkStyle}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-end items-center min-w-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all btn-bevel-solid"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          className={cn(
            "lg:hidden mx-auto flex items-center justify-between transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? cn("h-12 w-[calc(100%-2rem)] max-w-lg items-center px-3", pillSurface) : "container h-14 px-4 md:px-6",
          )}
        >
          <Link
            to="/"
            className="font-heading text-lg tracking-tight font-semibold"
            style={linkStyle}
          >
            LEUNRE
          </Link>
          <button
            type="button"
            className={cn("p-2 rounded-full", !scrolled && "hover:bg-black/[0.04]")}
            style={{ color: "#1d1d1f" }}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
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
              scrolled ? "left-4 right-4 rounded-2xl shadow-lg" : "left-0 right-0 border-b rounded-none",
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
                className="mt-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center btn-bevel-solid"
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
