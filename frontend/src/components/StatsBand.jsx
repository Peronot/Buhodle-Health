import { BookOpen, FlaskConical, GraduationCap, Handshake } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  { value: 4800, suffix: '+', label: 'Students', Icon: GraduationCap },
  { value: 10, suffix: '+', label: 'Labs', Icon: FlaskConical },
  { value: 450, suffix: '+', label: 'International Exams', Icon: BookOpen },
  { value: 20, suffix: '+', label: 'External Relations', Icon: Handshake },
]

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = performance.now()

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(target * eased))

      if (progress < 1) {
        window.requestAnimationFrame(update)
      }
    }

    const frame = window.requestAnimationFrame(update)

    return () => window.cancelAnimationFrame(frame)
  }, [duration, target])

  return count
}

function StatItem({ value, suffix, label, Icon }) {
  const count = useCountUp(value)

  return (
    <div className="flex flex-col items-center text-center">
      <Icon aria-hidden="true" className="h-16 w-16 stroke-[1.7] text-white sm:h-20 sm:w-20" />
      <p className="mt-7 text-4xl font-extrabold text-white sm:mt-10 sm:text-6xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-4 text-xl font-bold text-white sm:mt-7 sm:text-2xl">{label}</p>
    </div>
  )
}

function StatsBand() {
  return (
    <section className="bg-[#2f3a91] px-4 py-16 sm:px-10 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default StatsBand
