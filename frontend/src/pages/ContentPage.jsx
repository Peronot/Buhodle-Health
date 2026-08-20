import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function ContentPage({ page }) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <section className="px-4 py-16 sm:px-10 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#159a35]">
            {page.group}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#11289f] sm:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Buhodle Health Professional Institute
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ContentPage
