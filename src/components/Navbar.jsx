import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../i18n/useLanguage.js'

const navItems = [
  { id: 'top', key: 'home', icon: 'fa-house' },
  { id: 'services', key: 'services', icon: 'fa-layer-group' },
  { id: 'projects', key: 'projects', icon: 'fa-code' },
  { id: 'certifications', key: 'certifications', icon: 'fa-award' },
  { id: 'skills', key: 'skills', icon: 'fa-wand-magic-sparkles' },
  { id: 'about', key: 'about', icon: 'fa-user' },
  { id: 'contact', key: 'contact', icon: 'fa-envelope' },
]

const controlClass = 'grid size-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-emerald-300 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200 focus-visible:outline-emerald-300'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState('top')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const languageMenuRef = useRef(null)
  const languageButtonRef = useRef(null)
  const languageDropdownRef = useRef(null)
  const [languageDropdownPosition, setLanguageDropdownPosition] = useState(null)
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
    if (window.matchMedia('(max-width: 1279px)').matches) {
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
    if (!isMenuOpen && !isLanguageOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setIsLanguageOpen(false)
        ;(isLanguageOpen ? languageButtonRef : menuToggleRef).current?.focus()
      }
    }
    const handlePointerDown = (event) => {
      const clickedLanguageButton = languageMenuRef.current?.contains(event.target)
      const clickedDropdown = languageDropdownRef.current?.contains(event.target)
      if (isLanguageOpen && !clickedLanguageButton && !clickedDropdown) {
        setIsLanguageOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('pointerdown', handlePointerDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen, isLanguageOpen])

  useLayoutEffect(() => {
    if (!isLanguageOpen) return undefined

    const positionDropdown = () => {
      const button = languageButtonRef.current
      const dropdown = languageDropdownRef.current
      if (!button || !dropdown) return

      const trigger = button.getBoundingClientRect()
      const menu = dropdown.getBoundingClientRect()
      const gap = 8
      const edge = 12
      const roomBelow = window.innerHeight - trigger.bottom - gap
      const roomAbove = trigger.top - gap
      const opensUp = roomBelow < menu.height + edge && roomAbove >= menu.height + edge
      const top = opensUp
        ? trigger.top - menu.height - gap
        : Math.min(trigger.bottom + gap, window.innerHeight - menu.height - edge)
      const isRtl = document.documentElement.dir === 'rtl'
      const preferredLeft = isRtl ? trigger.left : trigger.right - menu.width
      const left = Math.max(edge, Math.min(preferredLeft, window.innerWidth - menu.width - edge))

      setLanguageDropdownPosition({ top: Math.max(edge, top), left })
    }

    positionDropdown()
    window.addEventListener('resize', positionDropdown)
    window.addEventListener('scroll', positionDropdown, true)
    return () => {
      window.removeEventListener('resize', positionDropdown)
      window.removeEventListener('scroll', positionDropdown, true)
    }
  }, [isLanguageOpen, language])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')

  return (
    <nav
      aria-label={t('nav.label')}
      className={`sticky top-0 z-50 w-full border-b shadow-lg shadow-slate-950/10 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? 'border-slate-300/30 bg-[#081426]/95 shadow-slate-950/20 dark:border-white/15 dark:bg-[#081426]/90'
          : 'border-slate-300/25 bg-[#081426]/90 dark:border-white/10 dark:bg-[#081426]/80'
      }`}
    >
      <div className="flex min-h-16 w-full flex-wrap items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
        <a className="group flex min-h-12 shrink-0 items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-white" href="#top" onClick={handleNavigation}>
          <span className="grid size-9 place-items-center rounded-xl border border-emerald-300/15 bg-emerald-300/10 text-sm text-emerald-300 transition-colors group-hover:bg-emerald-300/15" aria-hidden="true">&lt;/&gt;</span>
          <span>Mohdov<span className="ml-0.5 text-emerald-400">.</span></span>
        </a>

        <div
          id="navbar-menu"
          className={`${isMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'} absolute left-3 right-3 top-[calc(100%+0.5rem)] max-h-[calc(100svh-6rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#081426]/[.97] p-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition-all duration-200 xl:visible xl:static xl:max-h-none xl:translate-y-0 xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0 xl:opacity-100 xl:shadow-none xl:backdrop-blur-none sm:left-5 sm:right-5 xl:flex xl:flex-1 xl:items-center xl:justify-between xl:gap-3`}
        >
          <ul className="flex flex-col gap-1 xl:flex-1 xl:flex-row xl:items-center xl:justify-center xl:gap-0.5">
            {navItems.map(({ id, key, icon }) => (
              <li key={id}>
                <a
                  className={`group relative flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition duration-200 lg:px-2.5 xl:px-3 ${
                    activeSection === id
                      ? 'bg-emerald-400/10 text-emerald-300 xl:bg-transparent xl:text-emerald-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                  href={`#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={handleNavigation}
                >
                  <i className={`fa-solid ${icon} w-4 text-center text-xs opacity-75`} aria-hidden="true"></i>
                  {t(`nav.${key}`)}
                  <span className={`absolute inset-x-3 bottom-0 hidden h-0.5 origin-left rounded-full bg-gradient-to-r from-emerald-400 to-green-300 transition-transform duration-300 xl:block ${activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} aria-hidden="true"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="my-2 h-px bg-white/10 xl:my-0 xl:h-7 xl:w-px" aria-hidden="true"></div>

          <div className="flex shrink-0 items-center gap-2 pb-1 xl:pb-0">
          <button
            type="button"
            className={controlClass}
            onClick={toggleTheme}
            aria-label={`${t('nav.switchTo')} ${theme === 'dark' ? t('nav.light') : t('nav.dark')}`}
            title={`${t('nav.switchTo')} ${theme === 'dark' ? t('nav.light') : t('nav.dark')}`}
          >
            <svg
              className="size-[22px] shrink-0 transition-transform duration-300 hover:rotate-12"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              data-theme-icon={theme}
            >
              {theme === 'dark' ? (
                <path d="M20.4 15.2A8.6 8.6 0 0 1 8.8 3.6 8.7 8.7 0 1 0 20.4 15.2Z" />
              ) : (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </>
              )}
            </svg>
          </button>

          <div className="relative" ref={languageMenuRef}>
            <button
              ref={languageButtonRef}
              type="button"
              className="flex h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 text-xs font-bold tracking-wide text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200 focus-visible:outline-emerald-300"
              onClick={() => {
                setLanguageDropdownPosition(null)
                setIsLanguageOpen((open) => !open)
              }}
              aria-label={t('nav.language')}
              aria-haspopup="menu"
              aria-expanded={isLanguageOpen}
            >
              {language.toUpperCase()}
              <i className={`fa-solid fa-chevron-down text-[9px] transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} aria-hidden="true"></i>
            </button>
            {isLanguageOpen && createPortal(
              <div
                ref={languageDropdownRef}
                className="fixed z-[100] max-h-[calc(100vh-24px)] min-w-36 max-w-[calc(100vw-24px)] overflow-y-auto rounded-xl border border-white/10 bg-[#10243d] p-1.5 shadow-xl shadow-slate-950/30"
                style={{
                  top: languageDropdownPosition?.top ?? 0,
                  left: languageDropdownPosition?.left ?? 0,
                  visibility: languageDropdownPosition ? 'visible' : 'hidden',
                }}
                role="menu"
                aria-label={t('nav.language')}
              >
                {['en', 'ar'].map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={`flex min-h-11 w-full items-center justify-between rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-white/5 ${language === code ? 'text-emerald-300' : 'text-slate-200'}`}
                    onClick={() => {
                      setLanguage(code)
                      setIsLanguageOpen(false)
                    }}
                    role="menuitemradio"
                    aria-checked={language === code}
                    lang={code}
                  >
                    {code === 'en' ? 'English' : 'العربية'}
                    {language === code && <i className="fa-solid fa-check text-xs" aria-hidden="true"></i>}
                  </button>
                ))}
              </div>,
              document.body,
            )}
          </div>
          </div>
        </div>

        <button
          ref={menuToggleRef}
          type="button"
          className={`${controlClass} order-3 xl:hidden`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          aria-label={t('nav.menu')}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base transition-transform duration-200`} aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  )
}
