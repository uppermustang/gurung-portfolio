export interface SkillCategory {
  name: string
  items: { name: string; level?: string }[]
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Core',
    items: [
      { name: 'UI Design', level: 'Expert' },
      { name: 'UX Design', level: 'Expert' },
      { name: 'Graphic Design', level: 'Expert' },
      { name: 'Web Design', level: 'Expert' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Adobe XD', level: 'Expert' },
      { name: 'Figma', level: 'Expert' },
      { name: 'Adobe Illustrator', level: 'Expert' },
      { name: 'Adobe Photoshop', level: 'Expert' },
      { name: 'WordPress', level: 'Expert' },
      { name: 'Shopify', level: 'Advanced' },
      { name: 'Git Version Control', level: 'Advanced' },
      { name: 'CSS / HTML / JavaScript', level: 'Advanced' },
    ],
  },
  {
    name: 'Business',
    items: [
      { name: 'MS Office', level: 'Expert' },
      { name: 'Google Workspace', level: 'Expert' },
      { name: 'SEO', level: 'Advanced' },
      { name: 'Analytics', level: 'Advanced' },
    ],
  },
  {
    name: 'AI & Integration',
    items: [
      { name: 'Prompt Engineering', level: 'Expert' },
      { name: 'AI API Integration', level: 'Advanced' },
      { name: 'Anthropic Claude / OpenAI / Google Cloud AI / Adobe Sensei', level: 'Advanced' },
    ],
  },
  {
    name: 'Others',
    items: [
      { name: 'Photography', level: 'Expert' },
      { name: 'Project Management', level: 'Advanced' },
      { name: 'Slack', level: 'Expert' },
      { name: 'Trello', level: 'Expert' },
      { name: 'Basecamp', level: 'Advanced' },
      { name: 'MailChimp', level: 'Advanced' },
    ],
  },
]

export const languagesData = [
  { name: 'English', level: 'Fluent' },
  { name: 'Nepali', level: 'Expert' },
  { name: 'Hindi', level: 'Fluent' },
]
