import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ThemeBackground from './components/ThemeBackground'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://dawagurung.com/#person',
      name: 'Dawa Gurung',
      jobTitle: 'Creative Director',
      description: 'Expert in website design, branding, and product design. UX/UI designer based in Denver, CO.',
      email: 'gurungdava@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denver',
        addressRegion: 'CO',
        postalCode: '80110',
      },
      knowsAbout: [
        'Web Design',
        'UX Design',
        'UI Design',
        'Branding',
        'Product Design',
        'WordPress',
        'Photography',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dawagurung.com/#website',
      url: 'https://dawagurung.com',
      name: 'Dawa Gurung | Creative Director',
      description: 'Portfolio of Dawa Gurung, expert in UX/UI, Web Design, and Branding. Based in Denver, CO.',
      publisher: {
        '@id': 'https://dawagurung.com/#person',
      },
    },
  ],
}

export default function App() {
  return (
    <>
      <Helmet>
        <title>Dawa Gurung | Creative Director – Website Design, Branding, Product Design</title>
        <meta
          name="description"
          content="Portfolio of Dawa Gurung, expert in UX/UI, Web Design, and Branding. Based in Denver, CO. Hire for creative digital solutions."
        />
        <meta
          name="keywords"
          content="Dawa Gurung portfolio, hire Dawa Gurung, UX designer Denver, web designer Colorado, branding expert, product design, Creative Director hire"
        />
        <meta property="og:title" content="Dawa Gurung | Creative Director – Website Design, Branding, Product Design" />
        <meta property="og:description" content="Portfolio of Dawa Gurung, expert in UX/UI, Web Design, and Branding. Based in Denver, CO." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dawagurung.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative min-h-screen">
        <ThemeBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Experience />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
