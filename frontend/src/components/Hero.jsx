import { useEffect, useRef, useState } from 'react'
import buhodleVideo from '../assets/videio/Buhodle.mp4'
import cVideo from '../assets/videio/c.mp4'

const heroVideos = [buhodleVideo, cVideo]
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
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#11204d] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)]">
      <video
        key={`${activeVideo}-main`}
        ref={videoRef}
        className="hero-video-fade absolute inset-0 h-full w-full object-cover object-center"
        src={heroVideos[activeVideo]}
        autoPlay
        muted
        playsInline
        aria-label="Buhodle Health Professional Institute campus video"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#102247]/35 via-black/10 to-[#102247]/25" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-16 sm:min-h-[calc(100vh-6rem)] sm:px-10 sm:py-20 lg:min-h-[calc(100vh-7rem)]">
        <div className="max-w-7xl">
          <p className="mb-4 text-xl font-light text-white/85 sm:text-3xl">
            Home of Quality Health Education
          </p>
          <h1 className="max-w-7xl text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Buhodle Health Professional Institute
          </h1>
          <a
            href="#about-buhodle"
            className="mt-8 inline-flex min-h-14 items-center rounded-md border-l-4 border-[#20c979] bg-white px-7 text-base font-semibold text-[#069447] shadow-xl transition hover:-translate-y-0.5 hover:text-[#11289f] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#102247] sm:mt-10 sm:min-h-16 sm:px-10 sm:text-xl"
          >
            About Buhodle
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
