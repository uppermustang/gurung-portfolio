import { useEffect, useState } from 'react'

// Outline icons as inline SVGs (black/white stroke, transparent fill)
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const LaptopIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)

const UIIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
)

const StartupIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
  </svg>
)

const BrandingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

type IconType = 'phone' | 'laptop' | 'ui' | 'startup' | 'branding'

interface FloatingIcon {
  type: IconType
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

const iconMap = {
  phone: PhoneIcon,
  laptop: LaptopIcon,
  ui: UIIcon,
  startup: StartupIcon,
  branding: BrandingIcon,
}

function getRandomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export default function ThemeBackground() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const types: IconType[] = ['phone', 'laptop', 'ui', 'startup', 'branding']
    const list: FloatingIcon[] = []
    for (let i = 0; i < 24; i++) {
      list.push({
        type: types[i % types.length],
        x: getRandomBetween(0, 100),
        y: getRandomBetween(0, 100),
        size: getRandomBetween(40, 120),
        delay: getRandomBetween(0, 4),
        duration: getRandomBetween(8, 16),
      })
    }
    setIcons(list)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxOffset = scrollY * 0.15

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden
    >
      <div
        className="absolute left-0 right-0 w-full min-h-[180vh]"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        }}
      >
      {icons.map((item, i) => {
        const Icon = iconMap[item.type]
        return (
          <div
            key={i}
            className="absolute animate-float text-white"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              width: item.size,
              height: item.size,
              opacity: 0.06,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          >
            <Icon className="w-full h-full" />
          </div>
        )
      })}
      </div>
    </div>
  )
}
