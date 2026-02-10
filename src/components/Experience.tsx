import { motion } from 'framer-motion'
import { experienceData } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of professional roles and contributions across design and technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className="inline-block p-6 bg-gray-800/80 rounded-xl border border-gray-700 hover:border-primary-500/50 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{entry.icon}</span>
                      <div className="text-left">
                        <h3 className="font-bold text-white">{entry.title}</h3>
                        <p className="text-primary-400 font-medium">{entry.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 text-left">
                      {entry.location} · {entry.period} · {entry.type}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400 text-left">
                      {entry.responsibilities.map((res) => (
                        <li key={res} className="flex gap-2">
                          <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary-500 border-2 border-gray-900 shadow-sm z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
