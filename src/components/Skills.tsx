import { motion } from 'framer-motion'
import { skillsData, languagesData } from '../data/skills'

export default function Skills() {

  return (
    <section id="skills" className="py-24 bg-gray-900" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, and business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-gray-800/80 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="font-bold text-white mb-4 text-lg">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-primary-500/20 text-primary-200 rounded-lg text-sm font-medium cursor-default"
                    title={skill.level ?? undefined}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="font-bold text-white mb-4">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languagesData.map((lang) => (
              <div
                key={lang.name}
                className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg font-medium"
              >
                {lang.name} — {lang.level}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
