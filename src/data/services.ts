import { Building2, Mountain, type LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  overview: string;
  audience: string[];
  outcomes: string[];
  approach: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "organizational-development",
    icon: Building2,
    title: "Organizational Development Support",
    tag: "Strategic",
    description:
      "We support organizations in creating cultures where people feel connected, valued, and inspired.\n\nOur work combines strategic systems thinking with human-centered insight — ensuring that success is both sustainable and meaningful.",
    overview:
      "Our Organizational Development practice goes beyond surface-level fixes. We work with leadership teams to understand the root causes of organizational friction — whether it's misaligned structures, cultural drift, or leadership gaps. Through diagnostics, facilitated strategy sessions, and embedded support, we help you build an organization that's resilient, adaptive, and deeply human.",
    audience: [
      "HR and People Operations teams",
      "C-suite and executive leadership",
      "Organizations undergoing transformation or scaling",
      "Companies navigating mergers, restructures, or cultural shifts",
    ],
    outcomes: [
      "A clear organizational development roadmap",
      "Improved leadership alignment and decision-making",
      "Stronger culture and employee engagement",
      "Sustainable frameworks for change management",
      "Enhanced internal capacity for ongoing development",
      "Measurable improvements in team performance",
    ],
    approach: [
      { title: "Discovery & Diagnosis", description: "We begin with deep listening — stakeholder interviews, surveys, and organizational analysis to understand your current reality." },
      { title: "Strategy & Design", description: "Together, we co-create a tailored development strategy aligned with your vision, values, and business goals." },
      { title: "Implementation & Embedding", description: "We work alongside your team to implement changes, build internal champions, and embed new ways of working." },
      { title: "Review & Sustain", description: "Ongoing check-ins, measurement frameworks, and support to ensure lasting impact beyond our engagement." },
    ],
  },
  {
    slug: "retreats",
    icon: Mountain,
    title: "Retreats",
    tag: "Immersive",
    description:
      "Sometimes, clarity comes from stepping away.\n\nOur retreats offer immersive experiences for individuals and organizations — spaces to pause, reset, and realign with purpose.",
    overview:
      "Sometimes the most powerful thing a team or individual can do is step away from the day-to-day. Our retreats are carefully designed experiences that blend strategic thinking, experiential learning, and intentional reflection. Set in inspiring environments, they create the conditions for honest conversation, creative problem-solving, and genuine connection — the kind that transforms how people work and live long after they return.",
    audience: [
      "Individuals seeking personal renewal and growth",
      "Leadership teams seeking alignment",
      "High-potential talent cohorts",
      "Teams navigating significant transitions",
    ],
    outcomes: [
      "Strengthened team cohesion and trust",
      "Strategic clarity on key priorities",
      "Renewed energy and shared purpose",
      "Actionable commitments carried back to the workplace",
      "Deeper interpersonal connections across the team",
      "Fresh perspectives on persistent challenges",
    ],
    approach: [
      { title: "Pre-Retreat Design", description: "We work closely with you to understand objectives, team dynamics, and desired outcomes — ensuring every moment is intentional." },
      { title: "Curated Experience", description: "A blend of facilitated sessions, experiential activities, and reflective practices — all designed around your unique context." },
      { title: "Facilitated Dialogue", description: "Expert facilitators guide honest, productive conversations that surface insights and build alignment." },
      { title: "Post-Retreat Integration", description: "Follow-up sessions and resources to help carry the momentum and commitments back into daily work." },
    ],
  },
];

export const retreatTypes = [
  {
    title: "Transformative Individual Retreats",
    description: "For personal renewal and growth. Step away from the noise and reconnect with your purpose through guided reflection, mindfulness practices, and experiential learning in inspiring settings.",
  },
  {
    title: "Customized Corporate Retreats",
    description: "For teams to reconnect and envision together. Tailored immersive experiences that strengthen bonds, align on shared goals, and spark creative solutions to your organization's most pressing challenges.",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
