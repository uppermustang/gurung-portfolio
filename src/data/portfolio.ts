export type PortfolioCategory = 'branding' | 'website' | 'graphic' | 'photography' | 'consulting'

export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: PortfolioCategory
  image: string
  techStack?: string[]
  link?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Modelwise.ai Typography',
    description: 'Brand typography and visual identity for AI-powered modeling platform.',
    category: 'branding',
    image: 'https://placehold.co/800x600/98D8C8/2d5a27?text=Modelwise+Typography&font=poppins',
    techStack: ['Typography', 'Brand Identity'],
    link: 'https://modelwise.ai',
  },
  {
    id: '1b',
    title: 'Children\'s Book',
    description: 'UX design and branding for a published children\'s book.',
    category: 'branding',
    image: 'https://placehold.co/800x600/FFE5B4/5c4a32?text=Children%27s+Book&font=poppins',
    techStack: ['UX Design', 'Branding'],
    link: 'https://a.co/d/0bBaUXm6',
  },
  {
    id: '2',
    title: 'Lo Mustang Trust',
    description: 'Web design, branding, typography, HTML & CSS, email configuration, and JavaScript for nonprofit organization.',
    category: 'branding',
    image: 'https://placehold.co/800x600/B5EAD7/1a4d3d?text=Lo+Mustang+Trust&font=poppins',
    techStack: ['Web Design', 'Branding', 'Typography', 'HTML', 'CSS', 'Email Configuration', 'JavaScript'],
  },
  {
    id: '2a',
    title: 'Pathway OS',
    description: 'Full branding, typography, HTML & CSS, JavaScript, email configuration, and hosting configuration.',
    category: 'website',
    image: 'https://placehold.co/800x600/87CEEB/1e3a5f?text=Pathway+OS&font=poppins',
    techStack: ['Branding', 'Typography', 'HTML', 'CSS', 'JavaScript', 'Email Configuration', 'Hosting Configuration'],
    link: 'https://www.pathway-os.com',
  },
  {
    id: '2b',
    title: 'Samar Annapurna Hotel',
    description: 'Web design, typography, UX/UI design, booking configuration, email configuration, and backend API integration.',
    category: 'website',
    image: 'https://placehold.co/800x600/D4A5A5/4a2c2a?text=Samar+Annapurna+Hotel&font=poppins',
    techStack: ['Web Design', 'Typography', 'UX/UI Design', 'Booking Configuration', 'Email Configuration', 'Backend API Integration'],
    link: 'https://samarannapurna.com',
  },
  {
    id: '2c',
    title: 'Retail Tech Solution',
    description: 'Branding, logo design, web design, typography, product photography, and email configuration for Denver-based company.',
    category: 'website',
    image: 'https://placehold.co/800x600/98D8C8/2d5a27?text=Retail+Tech+Solution&font=poppins',
    techStack: ['Branding', 'Logo Design', 'Web Design', 'Typography', 'Product Photography', 'Email Configuration'],
    link: 'https://retailtechsolution.com',
  },
  {
    id: '2d',
    title: 'Willow Creek Yak Ranch',
    description: 'Website design, logo design, email and newsletter configuration, and branding for regenerative yak ranch.',
    category: 'website',
    image: 'https://placehold.co/800x600/B5EAD7/2d5a27?text=Willow+Creek+Yak+Ranch&font=poppins',
    techStack: ['Web Design', 'Logo Design', 'Branding', 'Email Configuration', 'Newsletter Configuration'],
    link: 'https://yakcastlerock.com',
  },
  {
    id: '3',
    title: 'Dhonjen Arts',
    description: 'Website design for arts and culture organization.',
    category: 'website',
    image: 'https://placehold.co/800x600/87CEEB/1e3a5f?text=Dhonjen+Arts&font=poppins',
    techStack: ['WordPress', 'UI/UX'],
    link: 'https://dhonjenarts.com',
  },
  {
    id: '4',
    title: 'Modelwise AI',
    description: 'Web platform design for AI modeling services.',
    category: 'website',
    image: 'https://placehold.co/800x600/D4A5A5/4a2c2a?text=Modelwise+AI&font=poppins',
    techStack: ['React', 'Figma', 'UX Design'],
    link: 'https://modelwise.ai',
  },
  {
    id: '5',
    title: 'Queens NYC Photography',
    description: 'Urban photography series capturing Queens, New York.',
    category: 'photography',
    image: 'https://placehold.co/800x600/F7E7CE/5c4a32?text=Queens+NYC&font=poppins',
    techStack: ['Photography', 'Lightroom'],
  },
  {
    id: '6',
    title: 'Forbidden Kingdom',
    description: 'Landscape and documentary photography project.',
    category: 'photography',
    image: 'https://placehold.co/800x600/E2D5F1/3d2d5c?text=Forbidden+Kingdom&font=poppins',
    techStack: ['Photography'],
  },
  {
    id: '7a',
    title: 'Brand Collateral Design',
    description: 'Print and digital collateral including brochures, flyers, and marketing materials.',
    category: 'graphic',
    image: 'https://placehold.co/800x600/FFB5A7/5c3a32?text=Brand+Collateral&font=poppins',
    techStack: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
  },
  {
    id: '7',
    title: 'Portrait Series',
    description: 'Professional portrait photography showcasing diverse subjects.',
    category: 'photography',
    image: 'https://placehold.co/800x600/C9E4DE/2d4a42?text=Portrait+Series&font=poppins',
    techStack: ['Portrait Photography', 'Adobe Photoshop', 'Lightroom Classic'],
  },
  {
    id: '8',
    title: 'Digital Design Consulting',
    description: 'UX/UI consulting and design system development for enterprise clients.',
    category: 'consulting',
    image: 'https://placehold.co/800x600/A8D8EA/1e4a6e?text=Design+Consulting&font=poppins',
    techStack: ['Figma', 'Design Systems', 'User Research'],
  },
]
