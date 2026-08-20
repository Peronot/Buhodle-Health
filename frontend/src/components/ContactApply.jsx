import { Mail, MapPin, PhoneCall, Send } from 'lucide-react'

const phones = ['+252 063-3789677', '+252 063-4987852', '+252 063-4346670']

function ContactApply() {
  return (
    <section id="apply" className="bg-white px-4 py-16 sm:px-10 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-3xl bg-[#11289f] p-6 text-white shadow-2xl shadow-[#11289f]/20 sm:p-10">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-white">
            Apply Now
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Start your health career at BHPI
          </h2>
          <p className="mt-6 text-base font-medium leading-8 text-white/86 sm:text-xl sm:leading-9">
            Contact admissions to choose your diploma program, confirm
            requirements, and receive current fee or intake guidance.
          </p>

          <div className="mt-8 grid gap-3">
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replaceAll(' ', '')}`}
                className="flex min-h-12 items-center gap-3 rounded-2xl bg-white/10 px-4 font-bold text-white transition hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                {phone}
              </a>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <a
              href="mailto:bhpi20016@gmail.com"
              className="card-lift rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-[#11289f]/5 focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-4"
            >
              <Mail className="h-8 w-8 text-[#159a35]" aria-hidden="true" />
              <p className="mt-5 text-xl font-extrabold text-[#151736]">Email BHPI</p>
              <p className="mt-2 break-words text-base font-semibold text-slate-600">
                bhpi20016@gmail.com
              </p>
            </a>

            <div className="card-lift rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-[#11289f]/5">
              <MapPin className="h-8 w-8 text-[#159a35]" aria-hidden="true" />
              <p className="mt-5 text-xl font-extrabold text-[#151736]">Address</p>
              <p className="mt-2 text-base font-semibold leading-7 text-slate-600">
                Buhodle District, behind Kalkal, Lasanod Road, Nxt Main
                Immigration Office
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-[#11289f]/10 bg-[#f4f8ff] p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xl font-extrabold text-[#11289f]">
                  Ready to apply?
                </p>
                <p className="mt-2 text-base font-medium text-slate-600">
                  Admissions can guide you through the next step.
                </p>
              </div>
              <a
                href="mailto:bhpi20016@gmail.com"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#159a35] px-6 text-base font-extrabold text-white shadow-lg shadow-[#159a35]/20 transition hover:-translate-y-0.5 hover:bg-[#117d2c] focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-4"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactApply
