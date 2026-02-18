import { Mail } from "lucide-react";

const footerLinks = {
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Programs: ["Courses", "Workshops", "Retreats", "Coaching"],
  Resources: ["Blog", "Case Studies", "Research", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-10 md:pt-16 pb-6 md:pb-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-10 mb-8 md:mb-14">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4">LEUNRE</h3>
          <p className="text-primary-foreground/65 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-xs">
            Learn. Unlearn. Relearn. A movement dedicated to unlocking human potential through transformative learning experiences.
          </p>
          {/* Newsletter */}
          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-md px-3 flex-1">
              <Mail size={14} className="text-primary-foreground/50" />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none outline-none text-xs md:text-sm py-2.5 md:py-3 w-full text-primary-foreground placeholder:text-primary-foreground/40"
              />
            </div>
            <button className="px-3 py-2.5 md:px-4 md:py-3 bg-gold text-accent-foreground rounded-md text-xs md:text-sm font-semibold hover:brightness-110 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-bold text-[10px] md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-primary-foreground/80">
              {title}
            </h4>
            <ul className="space-y-1.5 md:space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs md:text-sm text-primary-foreground/55 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/15 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p className="text-[10px] md:text-xs text-primary-foreground/45">
          © 2026 LEUNRE. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-6">
          {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((social) => (
            <a key={social} href="#" className="text-[10px] md:text-xs text-primary-foreground/45 hover:text-gold transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
