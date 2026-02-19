import { Building2, Mountain, Sparkles, Users, type LucideIcon } from "lucide-react";

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
      "We partner with organizations to diagnose systemic challenges, align leadership, and design people strategies that drive sustainable growth. Our consultants work alongside your team to build internal capacity — from culture transformation to change management.",
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
      "Our curated retreats combine immersive learning with purposeful reflection. Designed for leadership teams and high-potential cohorts, each retreat is tailored to foster deeper connection, strategic clarity, and renewed energy.",
    overview:
      "Sometimes the most powerful thing a team can do is step away from the day-to-day. Our retreats are carefully designed experiences that blend strategic thinking, experiential learning, and intentional reflection. Set in inspiring environments, they create the conditions for honest conversation, creative problem-solving, and genuine connection — the kind that transforms how teams work together long after they return.",
    audience: [
      "Leadership teams seeking alignment",
      "High-potential talent cohorts",
      "Boards and executive committees",
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
      { title: "Curated Experience", description: "A blend of facilitated sessions, experiential activities, and reflective practices — all designed around your team's unique context." },
      { title: "Facilitated Dialogue", description: "Expert facilitators guide honest, productive conversations that surface insights and build alignment." },
      { title: "Post-Retreat Integration", description: "Follow-up sessions and resources to help your team carry the momentum and commitments back into daily work." },
    ],
  },
  {
    slug: "experiential-training",
    icon: Sparkles,
    title: "Experiential Training",
    tag: "Hands-On",
    description:
      "Learning by doing. Our experiential training programs go beyond lectures and slides — using simulations, role-play, real-world scenarios, and reflective practice to embed lasting behavioral change.",
    overview:
      "Traditional training often fails because it stays theoretical. Our experiential approach puts participants directly into the learning — through simulations, live scenarios, group challenges, and reflective debrief. This isn't about memorizing frameworks; it's about building muscle memory for new behaviors. Participants leave not just knowing what to do differently, but having practiced it in a safe, supportive environment.",
    audience: [
      "Teams needing practical skill-building",
      "Organizations prioritizing behavioral change",
      "L&D departments seeking high-impact programs",
      "Leaders looking to model new behaviors",
    ],
    outcomes: [
      "Immediate application of new skills on the job",
      "Higher retention through hands-on learning",
      "Measurable behavior shifts in participants",
      "Engaging, memorable learning experiences",
      "Stronger team dynamics through shared challenges",
      "Confidence to apply learning in real-world contexts",
    ],
    approach: [
      { title: "Needs Analysis", description: "We identify the specific skills and behaviors your team needs to develop, grounded in your organizational context." },
      { title: "Experience Design", description: "Custom scenarios and activities are designed to mirror real workplace challenges your team faces." },
      { title: "Immersive Delivery", description: "Facilitators guide participants through experiential exercises with real-time coaching and feedback." },
      { title: "Reflection & Transfer", description: "Structured debriefs and action planning ensure learning transfers back to the workplace." },
    ],
  },
  {
    slug: "workshops",
    icon: Users,
    title: "Workshops",
    tag: "Focused",
    description:
      "Focused, facilitated sessions designed to tackle specific challenges — from communication breakdowns to team dynamics. Our workshops are interactive, insight-driven, and tailored to your organization's context.",
    overview:
      "Our workshops are designed to deliver maximum impact in a focused timeframe. Each session is built around your team's specific challenges and goals — whether that's improving communication, navigating conflict, building trust, or aligning on strategy. Through a blend of expert facilitation, interactive exercises, and practical tools, participants leave with clarity, shared understanding, and actionable next steps.",
    audience: [
      "Intact teams addressing specific challenges",
      "Cross-functional groups building collaboration",
      "Managers and individual contributors alike",
      "Organizations seeking targeted skill development",
    ],
    outcomes: [
      "Practical tools and frameworks to apply immediately",
      "Shared language and understanding across the team",
      "Clarity on next steps and accountability",
      "Energized, motivated participants",
      "Improved team communication and collaboration",
      "Tangible progress on specific organizational challenges",
    ],
    approach: [
      { title: "Scoping & Customization", description: "We work with you to define the challenge, desired outcomes, and participant context — no off-the-shelf content." },
      { title: "Interactive Facilitation", description: "Expert facilitators create a safe, engaging space for honest dialogue and collaborative problem-solving." },
      { title: "Practical Application", description: "Participants work with real scenarios and leave with tools, frameworks, and commitments they can use immediately." },
      { title: "Follow-Through Support", description: "Post-workshop resources and optional follow-up sessions to sustain momentum and accountability." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
