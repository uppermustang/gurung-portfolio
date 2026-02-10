import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Projects Contributed To' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
]

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-start sm:justify-center overflow-hidden pt-16 sm:pt-0"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/75 to-gray-950/95" />
        {/* Gradient orbs for depth */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 -mt-14 sm:mt-0 sm:pt-0 pb-20 sm:pb-0 sm:py-32 text-center flex-1 flex flex-col justify-center min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 sm:space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-primary-300 font-medium tracking-wide text-sm uppercase">
              Creative Director
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
              Dawa Gurung
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            <span className="text-gray-300">Website Design</span>
            <span className="text-gray-600 mx-2">•</span>
            <span className="text-gray-300">Branding</span>
            <span className="text-gray-600 mx-2">•</span>
            <span className="text-gray-300">Product Design</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto italic"
          >
            Embracing optimism and building on what&apos;s possible through innovative design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          >
            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -12px rgba(13, 148, 136, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-xl transition-colors overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Portfolio
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:border-white/40 transition-colors"
            >
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Interactive stats - always 3 columns so Explore icon fits on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-16 max-w-4xl mx-auto flex-shrink-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-default transition-colors hover:border-primary-500/30 hover:bg-white/[0.08]"
            >
              <div className="text-xl sm:text-4xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-sm text-gray-500 mt-0.5 sm:mt-1 group-hover:text-gray-400 transition-colors leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - always visible in viewport on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex-shrink-0"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
          aria-label="Scroll to about"
          whileHover={{ y: 4 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-2 rounded-full bg-gray-500" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}
