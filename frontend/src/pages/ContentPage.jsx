import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ContactApply from '../components/ContactApply.jsx'
import { getPageContent } from '../data/pageContent.js'

function ContentPage({ page }) {
  const content = getPageContent(page.title)

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <section className="surface-grid bg-[#f4f8ff] px-4 py-14 sm:px-10 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <article className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14">
              <p className="inline-flex rounded-full border border-[#159a35]/15 bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-[#159a35]">
                {content.eyebrow}
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#11289f] sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-slate-700 sm:text-2xl sm:leading-10">
                {content.summary}
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                {content.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <a
                href={content.action.href}
                target={content.action.href.startsWith('http') ? '_blank' : undefined}
                rel={content.action.href.startsWith('http') ? 'noreferrer' : undefined}
                className="mt-9 inline-flex min-h-12 items-center rounded-xl border-l-4 border-[#20c979] bg-white px-7 text-base font-extrabold text-[#069447] shadow-xl shadow-[#11289f]/10 transition hover:-translate-y-0.5 hover:text-[#11289f] focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-4"
              >
                {content.action.label}
              </a>
            </article>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-[#11289f]/8 sm:p-8">
              <p className="text-sm font-extrabold uppercase tracking-wide text-[#159a35]">
                Key Points
              </p>
              <div className="mt-6 grid gap-4">
                {content.highlights.map((highlight) => (
                  <div
                    className="flex gap-3 rounded-2xl bg-[#f4f8ff] p-4 text-base font-bold text-[#151736]"
                    key={highlight}
                  >
                    <span
                      className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[#159a35]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#11289f] p-5 text-white">
                <p className="text-lg font-extrabold">Need help?</p>
                <p className="mt-2 text-sm font-medium leading-6 text-white/85">
                  Contact BHPI admissions for guidance about programs,
                  requirements, and intake information.
                </p>
                <a
                  href="tel:+2520633789677"
                  className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-white px-5 text-sm font-extrabold text-[#11289f] transition hover:bg-[#eef7ff] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#11289f]"
                >
                  Call Admissions
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <ContactApply />
      <Footer />
    </main>
  )
}

export default ContentPage
