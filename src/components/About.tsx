import { motion } from 'framer-motion'

const skills = [
  'Web Design', 'Photography', 'Branding', 'User Research', 'UI Design', 'Prototyping',
  'WordPress', 'Visual Hierarchy', 'Information Architecture', 'Iterative Design',
  'UX Design', 'Usability Testing', 'Analytics', 'SEO', 'Prompt Engineering', 'AI Integration',
]

const tools = [
  'Adobe XD', 'Figma', 'Command Line', 'Adobe Illustrator',
  'Adobe Photoshop', 'CSS', 'HTML', 'JavaScript', 'WordPress', 'Shopify', 'Git',
  'UNIX', 'LINUX', 'MS Office', 'GSuite', 'Slack', 'MailChimp', 'Trello', 'Basecamp',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creative Director with expertise in website design, branding, and product design. 
              I craft digital solutions that connect brands with audiences through creativity, 
              strategy, and precision – as your personal Creative Director.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over a decade of experience spanning UX/UI design, graphic design, and web development, 
              I bring a unique blend of visual storytelling and technical execution. My work emphasizes 
              user-centered design, iterative refinement, and staying current with industry trends.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I integrate artificial intelligence into my creative and technical workflows to deliver 
              innovative, efficient, and user-centric solutions. My expertise includes prompt engineering 
              for high-quality design assets and content ideation, and I have implemented AI API integrations 
              (Anthropic Claude, OpenAI, Google Cloud AI, Adobe Sensei) across web design and product development—optimizing 
              automated layout generation, image enhancement, and dynamic branding. I apply ethical AI 
              practices with a focus on accessibility, inclusivity, privacy, and bias mitigation.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <strong className="text-white">Available for hire.</strong> Based in Denver, Colorado. Serving clients across the United States.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-500/20 text-primary-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/resume.pdf"
              download="Dawa_Gurung_Resume.pdf"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Download Resume PDF
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <img
                src="/DawaGurung.jpg"
                alt="Dawa Gurung - Professional headshot"
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-500/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
