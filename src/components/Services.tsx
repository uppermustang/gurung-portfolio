import { motion } from 'framer-motion'
import { servicesData } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafting digital solutions that connect brands with audiences through creativity, 
            strategy, and precision. I integrate AI into creative workflows for innovative, 
            efficient outcomes. Hire me as your personal Creative Director.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-gray-800/80 rounded-xl border border-gray-700 hover:border-primary-500/50 hover:shadow-lg transition-all cursor-default"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
