import { useEffect, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { slugify } from '../data/navigation.js'

const imageModules = import.meta.glob('../assets/budloe/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const programs = [
  {
    title: 'Diploma In Laboratory',
    description:
      'Learn laboratory testing, diagnostics, and disease detection techniques.',
  },
  {
    title: 'Diploma In Midwifery',
    description:
      'Develop skills in maternal, newborn, and reproductive healthcare.',
  },
  {
    title: 'Diploma In Nursing',
    description:
      'Gain the knowledge and practical skills required for professional nursing care.',
  },
  {
    title: 'Diploma In Pharmacology',
    description:
      'Study medications, drug safety, and pharmaceutical practices to support effective healthcare treatment and patient wellbeing.',
  },
  {
    title: 'Diploma In Nutrition',
    description:
      'Develop expertise in nutrition, healthy diets, and disease prevention to improve individual and community health outcomes.',
  },
]

const imageGroups = [
  [0, 7, 14, 18, 21],
  [1, 8, 15, 19, 4],
  [2, 9, 16, 20, 5],
  [3, 10, 17, 6, 11],
  [12, 13, 14, 15, 16],
]

const slideCount = imageGroups.length

function AcademicPrograms() {
  const images = useMemo(() => Object.values(imageModules), [])
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const currentPrograms = programs.map((program, index) => {
    const imageIndex = imageGroups[activeSlide][index] % images.length

    return {
      ...program,
      image: images[imageIndex],
    }
  })

  return (
    <section id="academics" className="bg-white px-4 py-16 sm:px-10 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#159a35]/15 bg-[#f4f8ff] px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-[#159a35]">
            Academic Programs
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#11289f] sm:text-5xl lg:text-6xl">
            Our Academic Programs
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-slate-600 sm:text-xl sm:leading-8">
            Buhodle Health Professional Institute provides quality oriented
            healthcare diploma programs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:mt-16 xl:grid-cols-3 xl:gap-7">
          {currentPrograms.map(({ title, description, image }) => (
            <article
              className="card-lift flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-4 shadow-xl shadow-[#11289f]/5 sm:p-5"
              key={title}
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#e4e7eb]">
                <img
                  src={image}
                  alt={`${title} at Buhodle Health Professional Institute`}
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#11204d]/55 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#159a35] shadow-lg backdrop-blur">
                  Diploma
                </span>
              </div>
              <h3 className="mt-7 text-xl font-extrabold leading-snug tracking-tight text-[#151736] sm:text-2xl">
                {title}
              </h3>
              <p className="mt-4 text-base font-medium leading-7 text-slate-600">
                {description}
              </p>
              <a
                href={`#/${slugify(title)}`}
                className="mt-auto inline-flex min-h-12 items-center gap-2 pt-7 text-lg font-extrabold text-[#2f3a91] transition hover:gap-3 hover:text-[#159a35] focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-4 sm:pt-9 sm:text-xl"
              >
                Explore more
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center gap-4 sm:mt-20" aria-label="Academic program slides">
          {Array.from({ length: slideCount }, (_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => setActiveSlide(dot)}
              className={`h-4 w-4 rounded-full transition focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-4 ${
                dot === activeSlide
                  ? 'scale-110 bg-[#2f3a91] ring-4 ring-[#2f3a91]/25 ring-offset-4'
                  : 'bg-[#aeb8f5]'
              }`}
              aria-label={`Show academic slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicPrograms
