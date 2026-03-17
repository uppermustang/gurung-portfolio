import { motion } from 'framer-motion'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Hire Me' },
]

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-2">Dawa Gurung</h3>
            <p className="text-sm">Creative Lead • Website Design • Branding • Product Design</p>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700 text-center text-sm"
        >
          <p>© {new Date().getFullYear()} Dawa Gurung. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
