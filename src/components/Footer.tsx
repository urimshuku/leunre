import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Our Team" },
    { label: "Careers" },
    { label: "Press" },
  ],
  Resources: [
    { label: "Insights", href: "/insights" },
    { label: "Case Studies", href: "/insights" },
    { label: "Research" },
    { label: "FAQ", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
    { label: "Cookie Policy" },
  ],
};

type FooterLinkColumnProps = {
  title: string;
  links: { label: string; href?: string }[];
};

const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => {
  return (
    <div className="text-center md:text-right">
      <h4 className="font-heading text-xs uppercase tracking-wider mb-3 md:mb-4 md:pr-3" style={{ color: "#ffffff" }}>
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label} className="flex justify-center md:justify-end">
            {link.href ? (
              <Link
                to={link.href}
                className="group relative inline-flex items-center pr-3 text-sm"
                style={{ color: "#9a9a9a" }}
              >
                {link.label}
                <span
                  className="absolute right-0 h-1 w-1 rounded-full opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-events-none"
                  style={{ top: "calc(50% - 2px)", backgroundColor: "#f5f5f7" }}
                />
              </Link>
            ) : (
              <span className="inline-flex items-center pr-3 text-sm opacity-60" style={{ color: "#9a9a9a" }} aria-disabled="true">
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <footer className="pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10" style={{ backgroundColor: "#1d1d1f" }}>
    <div className="mx-auto w-full max-w-site-rail px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-14">
        {/* Brand */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <h3 className="font-heading text-lg md:text-xl mb-3 md:mb-4 font-semibold" style={{ color: "#ffffff" }}>LEUNRE</h3>
          <p className="text-sm leading-relaxed mb-5 md:mb-6 max-w-xs" style={{ color: "#9a9a9a" }}>
            Learn. Unlearn. Relearn.<br />
            A movement dedicated to unlocking human potential through transformative learning experiences.
          </p>
          {/* Newsletter */}
          <h4 className="font-heading text-xs uppercase tracking-wider mb-3" style={{ color: "#ffffff" }}>Join Our Newsletter</h4>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 rounded-xl px-4 flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <Mail size={14} style={{ color: "#9a9a9a" }} />
              <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none outline-none text-sm py-3 w-full placeholder:text-[#666]"
                style={{ color: "#ffffff" }}
              />
            </div>
            <button type="button" className="px-5 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-[opacity,background-color,box-shadow] duration-150 whitespace-nowrap btn-bevel-solid">
              Subscribe
            </button>
          </div>
        </div>

        {/* Link columns */}
        <div className="hidden lg:block" />
        <div className="col-span-1 md:col-span-3 lg:col-span-3 grid grid-cols-3 gap-4 md:gap-8">
        {Object.entries(footerLinks).map(([title, links]) => (
          <FooterLinkColumn key={title} title={title} links={links} />
        ))}
        </div>
      </div>

      <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-xs" style={{ color: "#666" }}>
          © 2026 LEUNRE. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["LinkedIn"].map((social) => (
            <a key={social} href="#" className="text-xs hover:opacity-60 transition-opacity" style={{ color: "#9a9a9a" }}>
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
