import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { z } from "zod";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import SectionHeader from "@/components/shared/SectionHeader";
import UnifiedPageAtmosphere from "@/components/shared/UnifiedPageAtmosphere";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const contactFaqs = [
  { q: "What types of organizations do you work with?", a: "We work with organizations of all sizes — from startups to global enterprises — across industries. Our programs are tailored to meet each team's unique challenges and goals." },
  { q: "How long are your programs typically?", a: "Program length varies based on your needs. Workshops can be as short as a half-day, while comprehensive development programs may span several weeks or months." },
  { q: "Do you offer virtual or remote programs?", a: "Yes! We offer both in-person and virtual programs. Our remote workshops are designed to be just as engaging and impactful as our on-site experiences." },
  { q: "How do I know which program is right for me?", a: "We recommend starting with a conversation. Reach out through the form above, and we'll help you identify the best fit based on your goals and context." },
  { q: "What makes LEUNRE different from other learning providers?", a: "Our approach centers on unlearning — helping you let go of outdated mental models before building new ones. This creates deeper, more lasting transformation." },
] as const;

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
      <UnifiedPageAtmosphere>
      <PageHero
        title="Contact"
        subtitle="We would love to hear from you — whether you're exploring collaboration, training, or simply resonating with our mission."
        noShadow
        transparentBackground
      />

      <ContentSection className="!bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-10 text-center card-elevated">
                <Mail className="w-7 h-7 text-primary mx-auto mb-5" strokeWidth={1.5} />
                <h2 className="text-xl md:text-2xl font-heading mb-3 md:mb-4" style={{ color: "#1d1d1f" }}>Thank You!</h2>
                <p className="mb-6 text-sm md:text-base max-w-sm mx-auto" style={{ color: "#86868b" }}>Your message has been received. We'll be in touch shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", inquiryType: "", message: "" }); }}
                  className="text-sm font-medium text-primary hover:opacity-70 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#1d1d1f" }}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-card text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20 ${errors.name ? "border border-destructive" : ""}`}
                    style={{ color: "#1d1d1f", border: errors.name ? undefined : "1px solid #ECEAE6" }}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#1d1d1f" }}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-card text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20 ${errors.email ? "border border-destructive" : ""}`}
                    style={{ color: "#1d1d1f", border: errors.email ? undefined : "1px solid #ECEAE6" }}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2" style={{ color: "#1d1d1f" }}>
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-card text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20 ${!form.inquiryType ? "text-muted-foreground" : ""} ${errors.inquiryType ? "border border-destructive" : ""}`}
                    style={{ color: form.inquiryType ? "#1d1d1f" : undefined, border: errors.inquiryType ? undefined : "1px solid #ECEAE6" }}
                  >
                    <option value="" disabled>Select an inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="text-xs text-destructive mt-1.5">{errors.inquiryType}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#1d1d1f" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`w-full px-4 py-3 rounded-xl bg-card text-sm outline-none transition-all focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? "border border-destructive" : ""}`}
                    style={{ color: "#1d1d1f", border: errors.message ? undefined : "1px solid #ECEAE6" }}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all btn-bevel-solid"
                >
                  Send Message <ArrowRight size={16} className="icon-arrow-nudge icon-arrow-nudge--right" />
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
            className="lg:col-span-2 flex flex-col"
          >
            <div className="bg-card rounded-2xl p-5 md:p-6 border border-[#ECEAE6] shadow-none flex-1 mt-[24px] pt-[24px] pb-0 mb-[15px]">
              <h3 className="text-base md:text-lg font-heading mb-4 md:mb-5" style={{ color: "#1d1d1f" }}>Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#1d1d1f" }}>Email</p>
                    <p className="text-sm" style={{ color: "#86868b" }}>hello@leunre.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#1d1d1f" }}>Phone</p>
                    <p className="text-sm" style={{ color: "#86868b" }}>+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#1d1d1f" }}>Location</p>
                    <p className="text-sm" style={{ color: "#86868b" }}>Available globally — remote & in-person</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-5 md:p-6 border border-[#ECEAE6] shadow-none mt-0 mb-[85px] pt-[20px] pb-[15px]">
              <h3 className="text-base md:text-lg font-heading mb-4 md:mb-5" style={{ color: "#1d1d1f" }}>Follow Us</h3>
              <div>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium"
                    style={{ color: "#1d1d1f", border: "1px solid #ECEAE6" }}
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
      <section className="py-16 md:py-24 lg:py-28 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" className="mb-8 md:mb-12" />
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {contactFaqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  className="border-0 bg-card rounded-2xl card-elevated overflow-hidden"
                >
                  <AccordionTrigger
                    className="px-5 py-4 md:px-6 md:py-5 hover:no-underline font-heading text-sm md:text-base text-left [&>svg]:text-[#86868b] [&>svg]:h-[18px] [&>svg]:w-[18px] [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-out"
                    style={{ color: "#1d1d1f" }}
                  >
                    <span className="pr-4 text-left">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 md:px-6 md:pb-5 -mt-1 text-sm">
                    <p className="leading-relaxed max-w-xl" style={{ color: "#86868b" }}>
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      </UnifiedPageAtmosphere>
    </PageLayout>
  );
};

export default ContactUs;
