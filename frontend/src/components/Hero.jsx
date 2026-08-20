import { useEffect, useRef, useState } from 'react'
import buhodleVideo from '../assets/videio/Buhodle.mp4'
import cVideo from '../assets/videio/c.mp4'

const heroVideos = [
  { src: buhodleVideo, position: 'object-[center_24%]' },
  { src: cVideo, position: 'object-[center_34%]' },
]
const videoDuration = 16000

function Hero() {
  const [activeVideo, setActiveVideo] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % heroVideos.length)
    }, videoDuration)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [activeVideo])

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#11204d] sm:min-h-[calc(100vh-6rem)]">
      <video
        key={`${activeVideo}-background`}
        className="hero-video-fade absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-70 blur-xl"
        src={heroVideos[activeVideo].src}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <video
        key={`${activeVideo}-main`}
        ref={videoRef}
        className={`hero-video-fade absolute inset-0 h-full w-full object-cover ${heroVideos[activeVideo].position}`}
        src={heroVideos[activeVideo].src}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Buhodle Health Professional Institute campus video"
      />
      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1740]/60 via-[#11289f]/8 to-[#0f1b3d]/20" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-16 sm:min-h-[calc(100vh-6rem)] sm:px-10 sm:py-20">
        <div className="max-w-5xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold text-white shadow-2xl shadow-black/10 backdrop-blur-md sm:text-base">
            <span className="h-2.5 w-2.5 rounded-full bg-[#20c979]" aria-hidden="true" />
            Since 2016
          </div>
          <p className="mb-4 text-xl font-light text-white/90 sm:text-3xl">
            Home of Quality Health Education
          </p>
          <h1 className="max-w-6xl text-4xl font-extrabold uppercase leading-[1.05] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
            Buhodle Health Professional Institute
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white/86 sm:text-xl sm:leading-9">
            Practical healthcare education for laboratory, midwifery, nursing,
            pharmacology, and nutrition students.
          </p>
          <a
            href="#about-buhodle"
            className="mt-8 inline-flex min-h-14 items-center rounded-xl border-l-4 border-[#20c979] bg-white px-7 text-base font-extrabold text-[#069447] shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:text-[#11289f] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#102247] sm:mt-10 sm:min-h-16 sm:px-10 sm:text-xl"
          >
            About Buhodle
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
