import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioItems, type PortfolioCategory, type PortfolioItem } from '../data/portfolio'

const categories: { value: PortfolioCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'branding', label: 'Branding' },
  { value: 'website', label: 'Website Design' },
  { value: 'graphic', label: 'Graphic Design' },
  { value: 'photography', label: 'Photography' },
  { value: 'consulting', label: 'Consulting' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | 'all'>('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-gray-900" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of work spanning branding, web design, photography, and digital consulting. 
            Ready to hire me for your next project?
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeFilter === cat.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-md hover:shadow-xl hover:border-primary-500/40 transition-all">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-4">
                    <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">{item.description}</p>
                    {item.techStack?.length && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 sm:h-80 object-cover"
                loading="eager"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-gray-400 mt-2">{selectedItem.description}</p>
                {selectedItem.techStack?.length && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedItem.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary-500/20 text-primary-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary-400 hover:text-primary-300 font-medium"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
