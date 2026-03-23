import { Mail } from "lucide-react";

const footerLinks = {
  Company: ["About", "Our Team", "Careers", "Press"],
  Resources: ["Insights", "Case Studies", "Research", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 lg:pb-12" style={{ boxShadow: '0 -8px 40px -4px hsl(0 0% 0% / 0.15)' }}>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-14 lg:mb-18">
        {/* Brand */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <h3 className="font-heading text-xl md:text-2xl mb-4 md:mb-5 text-primary-foreground/65">LEUNRE</h3>
          <p className="text-primary-foreground/65 text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
            Learn. Unlearn. Relearn.<br />
            A movement dedicated to unlocking human potential through transformative learning experiences.
          </p>
          {/* Newsletter */}
          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-3 flex-1">
              <Mail size={14} className="text-primary-foreground/50" />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none outline-none text-sm py-3 w-full text-primary-foreground placeholder:text-primary-foreground/40"
              />
            </div>
            <button className="px-4 py-3 bg-gold text-accent-foreground rounded-lg text-sm font-medium hover:brightness-105 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Link columns */}
        <div className="hidden lg:block" />
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="text-right">
            <h4 className="font-heading text-xs uppercase tracking-wider mb-4 md:mb-5 text-primary-foreground/80">
              {title}
            </h4>
            <ul className="space-y-2 md:space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/55 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/45">
          © 2026 LEUNRE. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["LinkedIn"].map((social) => (
            <a key={social} href="#" className="text-xs text-primary-foreground/45 hover:text-gold transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
