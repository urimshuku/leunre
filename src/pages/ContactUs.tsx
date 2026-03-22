import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Linkedin, ChevronDown } from "lucide-react";
import { z } from "zod";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const inquiryTypes = [
  { value: "programs", label: "Programs" },
  { value: "corporate", label: "Corporate Solutions" },
  { value: "retreats", label: "Retreats" },
  { value: "tools", label: "Tools (Action Cards)" },
  { value: "other", label: "Other" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-xl card-elevated transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-left"
      >
        <span className="text-sm md:text-base font-heading font-medium text-foreground pr-4">{question}</span>
        <ChevronDown size={18} className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 md:px-6 md:pb-5 lg:px-8 lg:pb-6 -mt-1">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const ContactUs = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", inquiryType: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
  };

  return (
    <PageLayout>
      <PageHero
        title="Contact"
        subtitle="We would love to hear from you — whether you're exploring collaboration, training, or simply resonating with our mission."
      />

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card rounded-xl p-8 md:p-10 lg:p-12 text-center card-elevated">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h2 className="text-xl md:text-xl lg:text-2xl font-heading font-normal text-foreground mb-3 md:mb-3.5 lg:mb-4">Thank You!</h2>
                <p className="text-muted-foreground mb-6 md:mb-7 lg:mb-8 text-sm md:text-sm lg:text-base">Your message has been received. We'll be in touch shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", inquiryType: "", message: "" }); }}
                  className="text-xs md:text-[0.8rem] lg:text-sm font-medium text-primary hover:text-forest-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 lg:space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground mb-1.5 md:mb-1.5 lg:mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-3 py-2.5 md:px-3.5 md:py-2.5 lg:px-4 lg:py-3 rounded-md border bg-card text-foreground placeholder:text-muted-foreground text-xs md:text-[0.8rem] lg:text-sm outline-none transition-colors focus:ring-2 focus:ring-ring ${errors.name ? "border-destructive" : "border-border"}`}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground mb-1.5 md:mb-1.5 lg:mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-3 py-2.5 md:px-3.5 md:py-2.5 lg:px-4 lg:py-3 rounded-md border bg-card text-foreground placeholder:text-muted-foreground text-xs md:text-[0.8rem] lg:text-sm outline-none transition-colors focus:ring-2 focus:ring-ring ${errors.email ? "border-destructive" : "border-border"}`}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground mb-1.5 md:mb-1.5 lg:mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 md:px-3.5 md:py-2.5 lg:px-4 lg:py-3 rounded-md border bg-card text-foreground text-xs md:text-[0.8rem] lg:text-sm outline-none transition-colors focus:ring-2 focus:ring-ring ${!form.inquiryType ? "text-muted-foreground" : ""} ${errors.inquiryType ? "border-destructive" : "border-border"}`}
                  >
                    <option value="" disabled>Select an inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="text-xs text-destructive mt-1">{errors.inquiryType}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground mb-1.5 md:mb-1.5 lg:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`w-full px-3 py-2.5 md:px-3.5 md:py-2.5 lg:px-4 lg:py-3 rounded-md border bg-card text-foreground placeholder:text-muted-foreground text-xs md:text-[0.8rem] lg:text-sm outline-none transition-colors focus:ring-2 focus:ring-ring resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-md bg-gold text-accent-foreground font-medium text-sm md:text-sm lg:text-base hover:brightness-110 transition-all"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4 md:space-y-6 lg:space-y-8"
          >
            <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 card-elevated card-elevated-hover transition-all duration-300">
              <h3 className="text-base md:text-base lg:text-lg font-heading font-normal text-foreground mb-4 md:mb-5 lg:mb-6">Get in Touch</h3>
              <div className="space-y-3 md:space-y-4 lg:space-y-5">
                <div className="flex items-start gap-2 md:gap-2.5 lg:gap-3">
                  <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">hello@leunre.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-2.5 lg:gap-3">
                  <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground">Phone</p>
                    <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-2.5 lg:gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground">Location</p>
                    <p className="text-xs md:text-[0.8rem] lg:text-sm text-muted-foreground">Available globally — remote & in-person</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-5 md:p-6 lg:p-8 card-elevated card-elevated-hover transition-all duration-300">
              <h3 className="text-base md:text-base lg:text-lg font-heading font-normal text-foreground mb-4 md:mb-5 lg:mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-2.5 lg:gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 md:gap-2.5 lg:gap-3 px-3 py-2.5 md:px-3.5 md:py-2.5 lg:px-4 lg:py-3 rounded-lg border border-border hover:border-gold/30 hover:shadow-sm transition-all text-xs md:text-[0.8rem] lg:text-sm font-medium text-foreground"
                  >
                    <s.icon size={16} className="text-primary" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 lg:py-36 border-b border-border/50 section-shadow" style={{ backgroundColor: '#f2f0ed' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" className="mb-8 md:mb-10 lg:mb-12" />
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {[
              { q: "What types of organizations do you work with?", a: "We work with organizations of all sizes — from startups to global enterprises — across industries. Our programs are tailored to meet each team's unique challenges and goals." },
              { q: "How long are your programs typically?", a: "Program length varies based on your needs. Workshops can be as short as a half-day, while comprehensive development programs may span several weeks or months." },
              { q: "Do you offer virtual or remote programs?", a: "Yes! We offer both in-person and virtual programs. Our remote workshops are designed to be just as engaging and impactful as our on-site experiences." },
              { q: "How do I know which program is right for me?", a: "We recommend starting with a conversation. Reach out through the form above, and we'll help you identify the best fit based on your goals and context." },
              { q: "What makes LEUNRE different from other learning providers?", a: "Our approach centers on unlearning — helping you let go of outdated mental models before building new ones. This creates deeper, more lasting transformation." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <FAQItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
