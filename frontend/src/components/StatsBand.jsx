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
    <div className="card-lift rounded-3xl border border-white/12 bg-white/8 px-5 py-8 text-center shadow-2xl shadow-black/5 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/20 sm:h-20 sm:w-20">
        <Icon aria-hidden="true" className="h-9 w-9 stroke-[1.9] text-white sm:h-11 sm:w-11" />
      </div>
      <p className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:mt-8 sm:text-6xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-4 text-lg font-bold text-white/88 sm:text-2xl">{label}</p>
    </div>
  )
}

function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-[#2f3a91] px-4 py-16 sm:px-10 sm:py-20 lg:py-28">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.24)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default StatsBand
