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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-lg border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-14 md:h-15 lg:h-16 px-4 md:px-6 lg:px-8">
        <Link to="/" className="font-heading text-xl md:text-[1.35rem] lg:text-2xl font-normal tracking-tight text-primary-foreground">
          LEUNRE
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.filter(l => l.label !== "Contact").map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground px-3 py-1.5 rounded-md border border-transparent hover:border-primary-foreground/30 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-2 px-5 py-2 rounded-md bg-gold text-accent-foreground text-sm font-medium hover:brightness-110 transition-all"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
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
            className="lg:hidden bg-primary border-b border-primary-foreground/10 overflow-hidden"
          >
            <div className="flex flex-col gap-0.5 p-3 md:p-4">
              {navLinks.filter(l => l.label !== "Contact").map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 md:px-4 md:py-3 rounded-md text-sm md:text-[0.9rem] font-medium text-primary-foreground/70 hover:bg-primary-foreground/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-1.5 md:mt-2 px-4 py-2.5 md:py-3 rounded-md bg-gold text-accent-foreground text-sm md:text-[0.9rem] font-medium text-center"
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
