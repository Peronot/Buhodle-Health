import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import AboutSection from '../components/AboutSection.jsx'
import StatsBand from '../components/StatsBand.jsx'
import AcademicPrograms from '../components/AcademicPrograms.jsx'
import ContactApply from '../components/ContactApply.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <AboutSection />
      <StatsBand />
      <AcademicPrograms />
      <ContactApply />
      <Footer />
    </main>
  )
}

export default Home
