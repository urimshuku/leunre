import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Services", href: "/services" },
  { label: "Tools", href: "/tools" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ backgroundColor: "rgba(255,255,255,0.72)", borderBottom: "1px solid #ECEAE6" }}>
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-6 lg:px-8">
        <Link to="/" className="font-heading text-lg md:text-xl font-semibold tracking-tight" style={{ color: "#86868b" }}>
          LEUNRE
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.filter(l => l.label !== "Contact").map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: "#1d1d1f" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          style={{ color: "#1d1d1f" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.95)", borderBottom: "1px solid #ECEAE6" }}
          >
            <div className="flex flex-col gap-0.5 p-4">
              {navLinks.filter(l => l.label !== "Contact").map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm transition-colors"
                  style={{ color: "#1d1d1f" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;