export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  icon: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "1",
    title: "Creative Director, Web Designer & AI Prompt Architect",
    company: "Yartung LLC",
    location: "Denver, CO",
    period: "Oct 2023 – Present",
    type: "Full-time",
    icon: "💼",
    responsibilities: [
      "End-to-end custom web solutions: design systems and high-fidelity mockups, UX/UI and branding, custom front-end and backend development, DevOps and hosting configuration, and on-brand graphics—delivered as a cohesive, scalable product.",
      "Leading creative direction for digital projects and brand initiatives.",
      "Crafting strategic AI prompts to unlock generative AI potential for content, design, and creative workflows.",
      "WordPress development, CMS and content strategy, template customization, and site management.",
      "Mobile optimization, responsive design, cross-browser testing, and quality assurance.",
      "Collaborative ideation with stakeholders; quality control and design consistency; industry trend integration and best practices.",
    ],
  },
  {
    id: "2",
    title: "Product Designer",
    company: "SomeDesign Inc",
    location: "Remote, NY",
    period: "May 2021 – Sep 2023",
    type: "Full-time",
    icon: "🎨",
    responsibilities: [
      "Usability testing and user research",
      "UI components for AI reports and dashboards",
      "Storyboards and user flow documentation",
      "Interactive prototypes in Figma",
      "Iterative design based on feedback",
    ],
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "Modelwise.ai",
    location: "Colorado",
    period: "Feb 2022 – May 2022",
    type: "Contract",
    icon: "⚡",
    responsibilities: [
      "Usability testing and heuristic evaluation",
      "UI design and visual hierarchy",
      "Wireframes and low-fidelity prototypes",
      "User research and persona development",
    ],
  },
  {
    id: "4",
    title: "Web Designer and IT Support",
    company: "Faith B. Church",
    location: "Queens, NY",
    period: "Jun 2017 – Aug 2019",
    type: "Full-time",
    icon: "🌐",
    responsibilities: [
      "Web content creation and updates",
      "Technical troubleshooting",
      "Inventory and asset management",
    ],
  },
  {
    id: "5",
    title: "Restaurant Associate",
    company: "Compass Group",
    location: "Manhattan, NY",
    period: "Jul 2015 – Jun 2016",
    type: "Full-time",
    icon: "🍽️",
    responsibilities: [
      "Food preparation and service",
      "Customer service excellence",
    ],
  },
  {
    id: "6",
    title: "Workforce Associate",
    company: "CloudFactory",
    location: "NC and Kathmandu",
    period: "Oct 2012 – Jun 2013",
    type: "Full-time",
    icon: "☁️",
    responsibilities: [
      "Training and onboarding",
      "Data verification and quality control",
      "Team meetings and coordination",
    ],
  },
];
