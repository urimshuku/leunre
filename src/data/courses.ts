import { Heart, MessageCircle, Users2, Compass, type LucideIcon } from "lucide-react";

export interface Course {
  slug: string;
  icon: LucideIcon;
  title: string;
  tag: string;
  duration: string;
  description: string;
  outcomes: string[];
  overview: string;
  whoItsFor: string[];
  curriculum: { module: string; topics: string[] }[];
}

export const courses: Course[] = [
  {
    slug: "emotional-intelligence",
    icon: Heart,
    title: "Emotional Intelligence & Self Awareness",
    tag: "Most Popular",
    duration: "8 Weeks",
    description:
      "Master self-awareness, empathy, and emotional regulation to lead with authenticity and resilience.",
    outcomes: [
      "Develop deep self-awareness and emotional clarity",
      "Build empathy-driven relationships",
      "Manage stress and navigate conflict with composure",
      "Lead teams with emotional intelligence",
    ],
    overview:
      "This immersive program takes you on a journey of self-discovery, equipping you with the tools to understand and manage your emotions — and those of the people around you. Through reflective exercises, real-world scenarios, and expert coaching, you'll transform how you show up personally and professionally.",
    whoItsFor: [
      "Emerging and mid-level leaders",
      "HR and people operations professionals",
      "Coaches and consultants",
      "Anyone seeking deeper self-understanding",
    ],
    curriculum: [
      { module: "Module 1: Foundations of EQ", topics: ["The science of emotions", "Self-awareness assessment", "Emotional triggers"] },
      { module: "Module 2: Self-Regulation", topics: ["Managing reactions", "Stress resilience", "Mindfulness practices"] },
      { module: "Module 3: Empathy & Social Awareness", topics: ["Active listening", "Reading emotional cues", "Cultural sensitivity"] },
      { module: "Module 4: Relationship Management", topics: ["Conflict resolution", "Influence without authority", "Building trust"] },
    ],
  },
  {
    slug: "communication-mastery",
    icon: MessageCircle,
    title: "Communication & Collaboration",
    tag: "Essential",
    duration: "6 Weeks",
    description:
      "Transform how you connect, influence, and build trust through powerful communication frameworks.",
    outcomes: [
      "Communicate with clarity and confidence",
      "Master crucial conversations",
      "Build trust through transparent dialogue",
      "Influence and persuade authentically",
    ],
    overview:
      "Great leaders are great communicators. This course gives you proven frameworks for navigating high-stakes conversations, delivering compelling messages, and creating psychological safety through your words. Whether presenting to a boardroom or resolving a team conflict, you'll communicate with impact.",
    whoItsFor: [
      "Team leads and managers",
      "Sales and client-facing professionals",
      "Entrepreneurs and founders",
      "Anyone who wants to be heard and understood",
    ],
    curriculum: [
      { module: "Module 1: Communication Foundations", topics: ["Communication styles", "Active listening", "Non-verbal cues"] },
      { module: "Module 2: Crucial Conversations", topics: ["High-stakes dialogue", "Managing defensiveness", "Speaking candidly"] },
      { module: "Module 3: Storytelling & Influence", topics: ["Narrative frameworks", "Persuasion principles", "Presentation skills"] },
      { module: "Module 4: Feedback & Coaching", topics: ["Giving constructive feedback", "Receiving feedback gracefully", "Coaching conversations"] },
    ],
  },
  {
    slug: "people-management",
    icon: Users2,
    title: "Conscious Leadership & People Management",
    tag: "Leadership",
    duration: "10 Weeks",
    description:
      "Develop the skills to inspire, coach, and empower high-performing teams in any organization.",
    outcomes: [
      "Build and lead high-performing teams",
      "Coach and develop talent effectively",
      "Navigate team dynamics with confidence",
      "Create a culture of accountability and growth",
    ],
    overview:
      "Managing people is one of the most complex and rewarding responsibilities in any organization. This program equips you with practical frameworks for hiring, developing, and retaining talent — while building a team culture rooted in trust, accountability, and shared purpose.",
    whoItsFor: [
      "First-time managers",
      "Senior leaders scaling teams",
      "HR business partners",
      "Project and program managers",
    ],
    curriculum: [
      { module: "Module 1: The Manager's Mindset", topics: ["From IC to manager", "Leadership identity", "Setting expectations"] },
      { module: "Module 2: Hiring & Onboarding", topics: ["Talent assessment", "Structured interviews", "Effective onboarding"] },
      { module: "Module 3: Performance & Growth", topics: ["Goal setting frameworks", "Performance reviews", "Career development plans"] },
      { module: "Module 4: Team Dynamics", topics: ["Psychological safety", "Conflict navigation", "Building resilience"] },
      { module: "Module 5: Culture & Retention", topics: ["Values-driven culture", "Recognition systems", "Engagement strategies"] },
    ],
  },
  {
    slug: "conscious-leadership",
    icon: Compass,
    title: "Team Harmony & Organizational Well-being",
    tag: "Advanced",
    duration: "12 Weeks",
    description:
      "Lead with purpose, clarity, and integrity — creating impact that extends beyond the bottom line.",
    outcomes: [
      "Lead with purpose and authenticity",
      "Make values-aligned decisions under pressure",
      "Inspire systemic change in organizations",
      "Cultivate presence and mindful leadership",
    ],
    overview:
      "Conscious Leadership goes beyond strategy and execution. It's about leading from a place of self-awareness, purpose, and responsibility. This advanced program challenges you to examine your beliefs, expand your perspective, and create meaningful impact — for your teams, your organization, and the world.",
    whoItsFor: [
      "C-suite and senior executives",
      "Social entrepreneurs",
      "Organizational development leaders",
      "Experienced leaders seeking deeper impact",
    ],
    curriculum: [
      { module: "Module 1: The Conscious Leader", topics: ["Self-inquiry", "Values alignment", "Above/below the line"] },
      { module: "Module 2: Presence & Awareness", topics: ["Mindfulness in leadership", "Body intelligence", "Radical responsibility"] },
      { module: "Module 3: Purpose-Driven Strategy", topics: ["Stakeholder consciousness", "Ethical decision-making", "Systems thinking"] },
      { module: "Module 4: Transformative Impact", topics: ["Leading change", "Legacy and contribution", "Sustaining conscious leadership"] },
    ],
  },
];

export const getCourseBySlug = (slug: string) => courses.find((c) => c.slug === slug);
