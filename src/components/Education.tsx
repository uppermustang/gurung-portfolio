import { motion } from 'framer-motion'
import { educationData, certificationsData } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-950" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {educationData.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gray-800/80 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-colors"
                >
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <p className="text-primary-400 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gray-800/80 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-colors"
                >
                  <h4 className="font-semibold text-white">{cert.title}</h4>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary-400 hover:text-primary-300 text-sm font-medium"
                    >
                      View credential →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
