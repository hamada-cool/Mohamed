import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage.js'

const navItems = [
  {
    id: 'top',
    key: 'home',
  },
  {
    id: 'services',
    key: 'services',
  },
  {
    id: 'projects',
    key: 'projects',
  },
  {
    id: 'certifications',
    key: 'certifications',
  },
  {
    id: 'skills',
    key: 'skills',
  },
  {
    id: 'about',
    key: 'about',
  },
  {
    id: 'contact',
    key: 'contact',
  },
]

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState('top')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const [theme, setTheme] = useState(() => {
    let savedTheme = null
    try {
      savedTheme = window.localStorage.getItem('theme')
    } catch {
      // Continue with the system theme when browser storage is unavailable.
    }
    return savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  const handleNavigation = () => {
    setIsMenuOpen(false)
    if (window.matchMedia('(max-width: 1023px)').matches) {
      menuToggleRef.current?.focus()
    }
  }

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // Theme switching still works for this page view without persistent storage.
    }
  }, [theme])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

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
    <nav aria-label={t('nav.label')} className={`sticky top-0 z-50 border-b transition-colors ${
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
          ref={menuToggleRef}
          type="button"
          className="grid size-10 place-items-center text-ink hover:bg-line dark:text-white dark:hover:bg-dark-panel lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          aria-label={t('nav.menu')}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
        </button>

        <div
          id="navbar-menu"
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-b border-line bg-paper px-5 pb-5 dark:border-white/10 dark:bg-night sm:px-8 lg:static lg:block lg:max-h-none lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 dark:lg:bg-transparent`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
            {navItems.map(({ id, key }) => (
              <li key={id}>
                <a
                  className={`flex items-center gap-2 px-3 py-3 text-sm font-semibold transition-colors lg:py-2 ${
                    activeSection === id
                      ? 'text-forest dark:text-lime'
                      : 'text-muted hover:text-forest dark:text-slate-300 dark:hover:text-lime'
                  }`}
                  href={`#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={handleNavigation}
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-2 px-3 py-3 text-start text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime lg:w-auto lg:py-2"
                onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
                aria-label={`${t('nav.switchTo')} ${theme === 'dark' ? t('nav.light') : t('nav.dark')}`}
              >
                <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
                {theme === 'dark' ? t('nav.light') : t('nav.dark')}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-2 px-3 py-3 text-start text-sm font-bold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime lg:w-auto lg:py-2"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                aria-label={t('nav.language')}
                lang={language === 'en' ? 'ar' : 'en'}
              >
                {language === 'en' ? 'EN' : 'AR'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
