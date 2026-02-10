# Dawa Gurung – Portfolio

Personal portfolio website for Dawa Gurung, Creative Director specializing in Website Design, Branding, and Product Design.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Formik + Yup** for form validation
- **React Helmet Async** for SEO
- **React Router** for navigation

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build

```bash
npm run build
```

Output in `dist/` folder.

## Deploy

Deploy the `dist` folder to Vercel, Netlify, or any static host.

### Resume

Add your `resume.pdf` file to the `public/` folder. The "Download Resume PDF" button will link to it automatically.

### Contact Form

The contact form is a placeholder. To enable email sending:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Configure your email service
3. Add the EmailJS integration in `src/components/Contact.tsx`:

```ts
import emailjs from '@emailjs/browser'

// In onSubmit:
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_PUBLIC_KEY')
```

## Project Structure

```
src/
├── components/     # React components
├── data/           # Content data (portfolio, experience, etc.)
├── App.tsx
├── main.tsx
└── index.css
```

## SEO

- Meta tags via React Helmet
- JSON-LD structured data (Person, WebSite)
- Semantic HTML
- sitemap.xml and robots.txt in public/
