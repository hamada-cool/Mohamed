import { useEffect, useState } from 'react'

const navItems = [
  {
    id: 'top',
    label: 'Home',
    icon: 'fa-solid fa-house',
  },
  {
    id: 'services',
    label: 'Services',
    icon: 'fa-solid fa-briefcase',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'fa-solid fa-diagram-project',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: 'fa-solid fa-bolt',
  },
  {
    id: 'about',
    label: 'About',
    icon: 'fa-solid fa-user',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'fa-solid fa-envelope',
  },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const currentSection = navItems
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .reduce((current, section) => (
          window.scrollY >= section.offsetTop - 200 ? section : current
        ), null)

      setActiveSection(currentSection?.id || 'top')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
      isScrolled
        ? 'border-slate-200/80 bg-white/90 shadow-lg dark:border-slate-800/80 dark:bg-slate-950/90'
        : 'border-transparent bg-white/75 dark:bg-slate-950/75'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a className="text-xl font-bold tracking-wide text-slate-900 dark:text-white" href="#top">
          MOHAMED
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
        </button>

        <div
          id="navbar-menu"
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-4 pb-4 shadow-lg dark:border-slate-800 dark:bg-slate-950 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
            {navItems.map(({ id, label, icon }) => (
              <li key={id}>
                <a
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    activeSection === id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-blue-400'
                  }`}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={icon} aria-hidden="true"></i>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 lg:w-auto"
                onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
