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
    <nav className={`sticky top-0 z-50 border-b transition-colors ${
      isScrolled
        ? 'border-line bg-paper dark:border-white/10 dark:bg-night'
        : 'border-transparent bg-paper dark:bg-night'
    }`}>
      <div className="page-wrap flex min-h-18 items-center justify-between gap-4">
        <a className="flex shrink-0 items-center gap-3 font-display text-sm font-bold text-ink dark:text-white" href="#top">
          <span className="grid size-9 place-items-center bg-forest text-xs text-lime dark:bg-lime dark:text-ink" aria-hidden="true">MA</span>
          Mohamed Ali
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center text-ink hover:bg-line dark:text-white dark:hover:bg-dark-panel lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
        </button>

        <div
          id="navbar-menu"
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full border-b border-line bg-paper px-5 pb-5 dark:border-white/10 dark:bg-night sm:px-8 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 dark:lg:bg-transparent`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  className={`flex items-center gap-2 px-3 py-3 text-sm font-semibold transition-colors lg:py-2 ${
                    activeSection === id
                      ? 'text-forest dark:text-lime'
                      : 'text-muted hover:text-forest dark:text-slate-300 dark:hover:text-lime'
                  }`}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-2 px-3 py-3 text-left text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime lg:w-auto lg:py-2"
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
