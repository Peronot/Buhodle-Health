import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/buhoodle.png'

const quickLinks = ['About Buhodle', 'Admissions', 'Academics', 'Students', 'Media']

const phones = ['+252 063-3789677', '+252 063-4987852', '+252 063-4346670']
const address =
  'Buhodle District, behind Kalkal, Lasanod Road, Nxt Main Immigration Office'

const socialLinks = [
  {
    label: 'f',
    url: 'https://www.facebook.com/profile.php?id=100046358743943',
    name: 'Facebook',
  },
  { label: 'in', url: '#', name: 'LinkedIn' },
  { label: 'x', url: '#', name: 'X' },
  { label: 'ig', url: '#', name: 'Instagram' },
]

function Footer() {
  return (
    <footer className="bg-[#2f3a91] px-4 pt-16 text-white sm:px-10 sm:pt-20 lg:pt-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={logo}
              alt="Buhodle Health Professional Institute logo"
              className="h-16 w-16 flex-none rounded-full bg-white object-contain p-1 sm:h-24 sm:w-24"
            />
            <div className="min-w-0">
              <p className="text-2xl font-semibold leading-tight sm:text-4xl">
                Buhodle Health
              </p>
              <p className="text-base font-medium text-white/85 sm:text-xl">
                Professional Institute
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-base font-semibold leading-8 text-white sm:mt-12 sm:text-xl sm:leading-9">
            Buhodle Health Professional Institute provides practical healthcare
            education through diploma programs in laboratory, midwifery, nursing,
            pharmacology, and nutrition.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
            {socialLinks.map(({ label, url, name }) => (
              <a
                href={url}
                target={url.startsWith('http') ? '_blank' : undefined}
                rel={url.startsWith('http') ? 'noreferrer' : undefined}
                key={label}
                className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-lg font-extrabold transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:h-16 sm:w-16 sm:text-2xl"
                aria-label={name}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Quick Links</h2>
          <nav className="mt-8 flex flex-col gap-5 text-xl font-semibold text-white/85 sm:mt-12 sm:gap-8 sm:text-2xl">
            {quickLinks.map((link) => (
              <a
                href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                key={link}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Contact Details</h2>
          <div className="mt-8 space-y-7 text-base font-semibold leading-7 text-white/90 sm:mt-12 sm:space-y-8 sm:text-xl sm:leading-8">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-7 w-7 flex-none" aria-hidden="true" />
              <div>
                <p className="text-xl font-extrabold text-white sm:text-2xl">Address:</p>
                <p className="mt-2">{address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-7 w-7 flex-none" aria-hidden="true" />
              <div className="space-y-3">
                {phones.map((phone) => (
                  <a
                    href={`tel:${phone.replaceAll(' ', '')}`}
                    className="block transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    key={phone}
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="mailto:bhpi20016@gmail.com"
              className="flex gap-4 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Mail className="mt-1 h-7 w-7 flex-none" aria-hidden="true" />
              <span>bhpi20016@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/15 py-8 text-center text-base font-bold sm:mt-20 sm:text-xl">
        BHPI 2026 Developed by JTech Solutions. All Rights Reserved!
      </div>
    </footer>
  )
}

export default Footer
