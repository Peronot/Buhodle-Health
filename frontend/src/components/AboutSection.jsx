import { useEffect, useMemo, useState } from 'react'

const imageModules = import.meta.glob('../assets/budloe/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const stats = [
  { value: '1,200+', label: 'Students' },
  { value: '5+', label: 'Faculties' },
  { value: '35+', label: 'Programs' },
]

function AboutSection() {
  const images = useMemo(() => Object.values(imageModules), [])
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (images.length < 2) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [images.length])

  function showPreviousImage() {
    setActiveImage((current) => (current - 1 + images.length) % images.length)
  }

  function showNextImage() {
    setActiveImage((current) => (current + 1) % images.length)
  }

  return (
    <section id="about-buhodle" className="bg-white px-4 py-16 sm:px-10 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-[#11289f] sm:text-5xl">
            We are different and we like it that way. BHPI is professionally
            oriented health institute.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:mt-7 sm:text-xl sm:leading-9">
            Our academic staff are committed to preparing skilled health
            professionals through practical learning, updated curriculums, and a
            strong focus on community health service.
          </p>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-6 min-[460px]:grid-cols-3 sm:mt-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold text-[#11289f] sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-base font-semibold text-slate-500 sm:mt-4 sm:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 shadow-2xl shadow-[#11289f]/15">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Buhodle Health Professional Institute students and campus activities"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-3xl font-light text-[#11289f] shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#159a35] sm:left-4 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-3xl font-light text-[#11289f] shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#159a35] sm:right-4 sm:h-12 sm:w-12"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6 sm:gap-3">
              {images.slice(0, 6).map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`h-1.5 w-8 rounded-full transition sm:w-12 ${
                    index === activeImage ? 'bg-white' : 'bg-white/45'
                  }`}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-12 right-8 -z-0 h-40 w-4/5 bg-[radial-gradient(#d7dce7_2px,transparent_2px)] [background-size:22px_22px]" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
