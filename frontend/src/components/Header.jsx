import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/buhoodle.png'
import { navigation, slugify } from '../data/navigation.js'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/')

  useEffect(() => {
    function handleHashChange() {
      setCurrentHash(window.location.hash || '#/')
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 border-t-[3px] border-[#11289f] bg-white/92 shadow-sm shadow-slate-950/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-8 lg:h-24">
        <a
          href="#/"
          className="group flex min-w-0 items-center gap-3 rounded-full pr-2 transition hover:bg-[#f4f8ff] sm:gap-4"
          aria-label="Buhodle Health Professional Institute home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Buhodle Health Professional Institute logo"
            className="h-14 w-14 flex-none rounded-full bg-white object-contain p-1 shadow-lg shadow-[#11289f]/10 ring-1 ring-[#11289f]/10 sm:h-16 sm:w-16"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-lg font-extrabold tracking-tight text-[#12289f] sm:text-2xl">
              Buhodle Health
            </p>
            <p className="truncate text-sm font-semibold text-[#159a35] sm:text-base">
              Professional Institute
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 text-[15px] font-bold text-slate-950 shadow-sm lg:flex xl:text-[16px]">
          {navigation.map((group) => (
            <div className="group relative" key={group.label}>
              <a
                href={`#/${slugify(group.label)}`}
                className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 transition-colors hover:bg-[#f4f8ff] hover:text-[#11289f] focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-2 xl:px-5 ${
                  currentHash === `#/${slugify(group.label)}` ||
                  group.items.some((item) => currentHash === `#/${slugify(item)}`)
                    ? 'bg-[#f4f8ff] text-[#11289f]'
                    : ''
                }`}
              >
                <span>{group.label}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-3.5 w-3.5 stroke-[3] transition-transform group-hover:rotate-180"
                />
              </a>

              <div className="invisible absolute left-1/2 top-[calc(100%+0.9rem)] min-w-72 -translate-x-1/2 rounded-2xl border border-slate-200/80 bg-white/95 p-2 text-[#1c1b3f] opacity-0 shadow-2xl shadow-[#11289f]/12 backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {group.items.map((item) => (
                  <a
                    href={`#/${slugify(item)}`}
                    className="block rounded-xl px-5 py-3 text-base font-bold transition hover:bg-[#f4f8ff] hover:text-[#11289f] focus:bg-[#f4f8ff] focus:outline-none"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#11289f] shadow-sm transition hover:bg-[#f4f8ff] focus:outline-none focus:ring-2 focus:ring-[#159a35] focus:ring-offset-2 lg:hidden"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-enter absolute left-0 right-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white/96 px-4 py-4 shadow-xl backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((group) => (
              <details className="rounded-2xl border border-slate-100 bg-white shadow-sm" key={group.label}>
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-base font-bold text-slate-950">
                  <span>{group.label}</span>
                  <ChevronDown className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                </summary>
                <div className="border-t border-slate-100 py-2">
                  {group.items.map((item) => (
                    <a
                      href={`#/${slugify(item)}`}
                      className={`block rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#f4f8ff] hover:text-[#11289f] focus:bg-[#f4f8ff] focus:outline-none ${
                        currentHash === `#/${slugify(item)}`
                          ? 'bg-[#f4f8ff] text-[#11289f]'
                          : 'text-[#1c1b3f]'
                      }`}
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
