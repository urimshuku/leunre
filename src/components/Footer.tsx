import { Mail } from "lucide-react";

const footerLinks = {
  Company: ["About", "Our Team", "Careers", "Press"],
  Resources: ["Insights", "Case Studies", "Research", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => (
  <footer className="pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10" style={{ backgroundColor: "#1d1d1f" }}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none outline-none text-sm py-3 w-full placeholder:text-[#666]"
                style={{ color: "#ffffff" }}
              />
            </div>
            <button className="px-5 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-all whitespace-nowrap btn-bevel-solid">
              Subscribe
            </button>
          </div>
        </div>

        {/* Link columns */}
        <div className="hidden lg:block" />
        <div className="col-span-1 md:col-span-3 lg:col-span-3 grid grid-cols-3 gap-4 md:gap-8">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="text-center md:text-right">
            <h4 className="font-heading text-xs uppercase tracking-wider mb-3 md:mb-4" style={{ color: "#ffffff" }}>
              {title}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:opacity-60 transition-opacity" style={{ color: "#9a9a9a" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
