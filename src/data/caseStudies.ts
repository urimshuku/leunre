export interface CaseStudy {
  title: string;
  description: string;
  industry: string;
  result: string;
  slug: string;
  content: string[];
  challenge: string;
  approach: string;
  outcomes: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Transforming Leadership Culture at a Fortune 500",
    description: "How a global enterprise redefined its leadership approach through structured unlearning, resulting in 40% improved team engagement scores.",
    industry: "Enterprise",
    result: "40% engagement increase",
    slug: "transforming-leadership-fortune-500",
    challenge: "A Fortune 500 company was facing declining engagement scores across its leadership teams. Despite investing heavily in traditional leadership development, the same patterns of top-down decision-making and risk aversion persisted.",
    approach: "LEUNRE partnered with the organization to implement a structured unlearning program targeting senior and mid-level leaders. Over six months, participants worked through guided sessions focused on identifying and releasing outdated leadership beliefs, replacing them with adaptive, empathy-driven approaches.",
    outcomes: [
      "40% improvement in team engagement scores within 12 months",
      "32% increase in cross-functional collaboration initiatives",
      "Significant reduction in leadership turnover at the director level",
      "Measurable shift in decision-making speed and quality",
    ],
    content: [
      "The challenge wasn't a lack of leadership talent — it was an abundance of outdated leadership habits. Years of success had calcified certain approaches that, while effective in a previous era, were now actively hindering the organization's ability to adapt.",
      "Our approach began with deep diagnostic conversations across all leadership levels. What emerged was a pattern of beliefs — about control, about hierarchy, about what 'strong leadership' looks like — that were fundamentally misaligned with the organization's stated values.",
      "The unlearning process was intentionally gradual. We didn't ask leaders to abandon their experience. Instead, we created structured spaces for them to examine their assumptions, test new approaches in safe environments, and build confidence in more adaptive leadership styles.",
      "The results spoke for themselves. Within a year, engagement scores had risen dramatically, and the organization reported a qualitative shift in how teams collaborated, communicated, and approached challenges.",
    ],
  },
  {
    title: "From Burnout to Breakthrough: A Tech Startup's Journey",
    description: "A fast-growing startup used LEUNRE's framework to rebuild team dynamics and reduce turnover by 60% in under a year.",
    industry: "Technology",
    result: "60% reduced turnover",
    slug: "burnout-breakthrough-tech-startup",
    challenge: "A rapidly scaling tech startup was experiencing unsustainable turnover rates. The intensity of startup culture, combined with unclear growth paths and mounting pressure, had created an environment where burnout was the norm rather than the exception.",
    approach: "LEUNRE worked with the founding team and department leads to fundamentally rethink how the organization approached work, growth, and team wellbeing. The program combined individual coaching with team-level unlearning sessions focused on releasing toxic productivity beliefs.",
    outcomes: [
      "60% reduction in employee turnover within 10 months",
      "45% improvement in employee satisfaction scores",
      "Successful scaling from 80 to 150 employees with cultural integrity maintained",
      "Implementation of sustainable work practices adopted company-wide",
    ],
    content: [
      "The startup had built an incredible product, but at a human cost that was becoming impossible to sustain. The founding team recognized that their growth trajectory was at risk — not because of market conditions or competition, but because they were losing their best people.",
      "The root cause wasn't workload — it was mindset. The team had internalized beliefs about what startup success requires: constant hustle, personal sacrifice, and an 'always on' mentality that left no room for recovery or reflection.",
      "Our intervention focused on helping the team unlearn these deeply held beliefs about what productivity and commitment look like. We replaced them with sustainable practices grounded in intentionality, clear boundaries, and genuine care for each team member's wellbeing.",
      "The transformation was remarkable. Not only did turnover plummet, but the team reported higher creativity, better collaboration, and — counterintuitively — faster execution on key projects. It turned out that working sustainably didn't slow them down. It freed them up.",
    ],
  },
  {
    title: "Reinventing Professional Development in Education",
    description: "A university system partnered with LEUNRE to redesign faculty development, leading to measurably higher student satisfaction.",
    industry: "Education",
    result: "28% satisfaction boost",
    slug: "reinventing-development-education",
    challenge: "A large university system was struggling with declining student satisfaction despite significant investment in faculty development. Traditional training approaches weren't translating into meaningful changes in teaching quality or student experience.",
    approach: "LEUNRE redesigned the university's approach to faculty development using the Learn-Unlearn-Relearn framework. Instead of adding more training, we helped faculty members identify and release teaching assumptions that were no longer serving their students.",
    outcomes: [
      "28% increase in student satisfaction scores across participating departments",
      "Faculty reported 35% higher job satisfaction and sense of purpose",
      "Development of a peer-coaching model now used system-wide",
      "Recognition as a model for innovative faculty development in higher education",
    ],
    content: [
      "The university had been approaching faculty development the traditional way: more workshops, more certifications, more content. But the problem wasn't a lack of knowledge — it was a set of deeply ingrained assumptions about what effective teaching looks like.",
      "Many faculty members were teaching the way they had been taught, using methods optimized for a different generation of students with different needs, expectations, and learning styles. The gap between teaching approach and student reality was widening.",
      "Our program invited faculty to examine their teaching beliefs through structured reflection and peer dialogue. The goal wasn't to tell them what to do differently, but to create space for them to discover it themselves through the unlearning process.",
      "The impact was profound. Faculty who participated reported not just better teaching outcomes, but a renewed sense of purpose and connection to their work. Students noticed the difference immediately, leading to significant satisfaction improvements.",
    ],
  },
  {
    title: "Building Resilient Teams in Healthcare",
    description: "A healthcare network adopted the Relearn Framework to support frontline workers, dramatically improving retention and morale.",
    industry: "Healthcare",
    result: "35% improved retention",
    slug: "resilient-teams-healthcare",
    challenge: "A regional healthcare network was facing a retention crisis among frontline workers. The emotional toll of healthcare work, compounded by systemic pressures and limited support structures, was driving experienced professionals out of the field.",
    approach: "LEUNRE implemented a customized version of the Relearn Framework designed specifically for healthcare environments. The program focused on helping frontline workers and their managers unlearn harmful coping mechanisms and rebuild healthier approaches to demanding work.",
    outcomes: [
      "35% improvement in frontline worker retention over 18 months",
      "Significant reduction in reported burnout symptoms",
      "Implementation of peer support structures across all facilities",
      "Recognition as a model program by the regional healthcare association",
    ],
    content: [
      "Healthcare workers are trained to put patients first — often at the expense of their own wellbeing. While this dedication is admirable, it creates unsustainable patterns that ultimately harm both the workers and the patients they serve.",
      "The healthcare network came to LEUNRE after traditional wellness programs failed to move the needle on retention. They recognized that the problem wasn't a lack of support resources, but deeply held beliefs about what it means to be a 'good' healthcare professional.",
      "Our approach helped frontline workers examine and release beliefs like 'asking for help is weakness,' 'taking breaks means you don't care,' and 'emotional distance is professionalism.' These unlearning conversations were transformative.",
      "The program also equipped managers with new frameworks for supporting their teams — moving from a compliance-based approach to one grounded in genuine care and understanding. The result was a measurable shift in both retention and morale across the network.",
    ],
  },
];
