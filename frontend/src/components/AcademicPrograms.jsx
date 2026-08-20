import { useEffect, useMemo, useState } from 'react'

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
          <h2 className="text-3xl font-extrabold leading-tight text-[#11289f] sm:text-5xl lg:text-6xl">
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
              className="flex h-full flex-col rounded-sm bg-white p-5 shadow-xl shadow-slate-100 ring-1 ring-slate-50 sm:p-7"
              key={title}
            >
              <img
                src={image}
                alt={`${title} at Buhodle Health Professional Institute`}
                className="aspect-[4/3] w-full rounded-lg bg-[#e4e7eb] object-cover"
                loading="lazy"
              />
              <h3 className="mt-7 text-xl font-extrabold leading-snug text-[#1c1b3f] sm:mt-10 sm:text-2xl">
                {title}
              </h3>
              <p className="mt-5 text-base font-medium leading-7 text-slate-600">
                {description}
              </p>
              <a
                href="#academics"
                className="mt-auto inline-flex min-h-11 items-center pt-7 text-xl font-extrabold text-[#2f3a91] transition hover:text-[#159a35] focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-4 sm:pt-10 sm:text-2xl"
              >
                Explore more
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center gap-5 sm:mt-20" aria-label="Academic program slides">
          {Array.from({ length: slideCount }, (_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => setActiveSlide(dot)}
              className={`h-4 w-4 rounded-full transition ${
                dot === activeSlide
                  ? 'ring-4 ring-[#2f3a91] ring-offset-4 bg-[#2f3a91]'
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
