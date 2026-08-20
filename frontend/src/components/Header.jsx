import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/buhoodle.png'
import { navigation, slugify } from '../data/navigation.js'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-30 border-t-[3px] border-[#11289f] bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-8 lg:h-28">
        <a
          href="#/"
          className="flex min-w-0 items-center gap-3 sm:gap-4"
          aria-label="Buhodle Health Professional Institute home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Buhodle Health Professional Institute logo"
            className="h-14 w-14 flex-none rounded-full object-contain sm:h-20 sm:w-20"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-lg font-semibold text-[#12289f] sm:text-2xl">
              Buhodle Health
            </p>
            <p className="truncate text-sm font-medium text-[#159a35] sm:text-base">
              Professional Institute
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-[17px] font-semibold text-slate-950 lg:flex">
          {navigation.map((group) => (
            <div className="group relative py-10" key={group.label}>
              <a
                href={`#/${slugify(group.label)}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-[#11289f] focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-4"
              >
                <span>{group.label}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-4 w-4 stroke-[3] transition-transform group-hover:translate-y-0.5"
                />
              </a>

              <div className="invisible absolute left-1/2 top-full min-w-64 -translate-x-1/2 rounded-md border-b-4 border-[#2f3a91] bg-white py-5 text-[#1c1b3f] opacity-0 shadow-xl shadow-slate-900/10 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {group.items.map((item) => (
                  <a
                    href={`#/${slugify(item)}`}
                    className="block px-8 py-3 text-lg font-semibold transition hover:bg-slate-50 hover:text-[#2f3a91] focus:bg-slate-50 focus:outline-none"
                    key={item}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#11289f] shadow-sm lg:hidden"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((group) => (
              <details className="rounded-md border border-slate-100" key={group.label}>
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-base font-bold text-slate-950">
                  <span>{group.label}</span>
                  <ChevronDown className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                </summary>
                <div className="border-t border-slate-100 py-2">
                  {group.items.map((item) => (
                    <a
                      href={`#/${slugify(item)}`}
                      className="block px-6 py-3 text-sm font-semibold text-[#1c1b3f] hover:bg-slate-50 hover:text-[#11289f] focus:bg-slate-50 focus:outline-none"
                      key={item}
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
