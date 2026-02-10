export interface EducationEntry {
  id: string
  degree: string
  institution: string
  period: string
  description?: string
}

export interface CertificationEntry {
  id: string
  title: string
  issuer: string
  link?: string
}

export const educationData: EducationEntry[] = [
  {
    id: '1',
    degree: "Associate's in Computer Science & Information System",
    institution: 'CUNY LaGuardia',
    period: '2016 – 2019',
  },
  {
    id: '2',
    degree: "Bachelor's in Mass Communications & Media Studies",
    institution: 'Tribhuvan University',
    period: '2008 – 2012',
  },
  ]

export const certificationsData: CertificationEntry[] = [
  {
    id: '1',
    title: 'UX/UI Design',
    issuer: 'Credential',
    link: 'https://www.credential.net/6941d63e-8fd3-4fb1-82de-ae71ab108c6e#gs.2g5fed',
  },
  {
    id: '2',
    title: 'JavaScript',
    issuer: 'SoloLearn',
    link: 'https://www.sololearn.com/',
  },
]
