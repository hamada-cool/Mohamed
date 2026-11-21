import { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import hamada from '../assets/images/hamada-optimized.jpg'
import { contactEmail, getEmailUrl, isMobileDevice } from '../utils/emailContact.js'
import { useLanguage } from '../i18n/useLanguage.js'

export default function Hero() {
  const { t } = useLanguage()
  const words = t('hero.words')
  const lastName = t('hero.lastName')
  const hasTrailingPeriod = lastName.endsWith('.')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const mobileDevice = isMobileDevice()
  const socialLinks = [
    { key: 'github', icon: 'fa-brands fa-github', url: import.meta.env.VITE_GITHUB_URL || 'https://github.com/hamada-cool', external: true },
    { key: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/mohamed-ali-ismail-h195/', external: true },
    { key: 'instagram', icon: 'fa-brands fa-instagram', url: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/hamadacool28', external: true },
    { key: 'facebook', icon: 'fa-brands fa-facebook-f', url: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/hamadacool28', external: true },
    { key: 'email', icon: 'fa-solid fa-envelope', url: getEmailUrl(contactEmail, mobileDevice), external: !mobileDevice },
  ]

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionPreference = (event) => setPrefersReducedMotion(event.matches)

    motionPreference.addEventListener('change', handleMotionPreference)
    return () => motionPreference.removeEventListener('change', handleMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const currentWord = words[wordIndex]
    const delay = isDeleting ? 50 : 100
    const pause = charIndex === currentWord.length && !isDeleting ? 1500 : delay

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((current) => current + 1)
        return
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && charIndex > 0) {
        setCharIndex((current) => current - 1)
        return
      }

      setIsDeleting(false)
      setWordIndex((current) => (current + 1) % words.length)
    }, pause)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, prefersReducedMotion, words])

  return (
    <section
      id="top"
      className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-gradient-to-br from-[#f4f8fc] via-[#edf4fb] to-[#e4eff9] text-ink transition-colors dark:from-[#031322] dark:via-[#061a2e] dark:to-[#081426] dark:text-white"
    >
      <div className="pointer-events-none absolute -end-28 top-8 size-[28rem] rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-400/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -start-36 bottom-20 size-[26rem] rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" aria-hidden="true" />

      <div className="page-wrap relative z-10 grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-14 sm:py-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:py-16 xl:gap-20">
        <div className="order-1 min-w-0" data-aos="fade-right">
          <p className="mb-5 flex flex-wrap items-center gap-x-2 text-xs font-bold uppercase tracking-[0.16em] text-forest dark:text-slate-200 sm:text-sm">
            {t('hero.kicker')}
            <span className="h-0.5 w-10 bg-cyan-500 dark:bg-cyan-400" aria-hidden="true" />
          </p>

          <h1 className="font-display text-6xl font-semibold leading-[0.92] tracking-tight text-ink dark:text-white sm:text-7xl lg:text-8xl xl:text-[6.5rem]">
            {t('hero.firstName')}
            <br />
            <span>
              {hasTrailingPeriod ? lastName.slice(0, -1) : lastName}
              {hasTrailingPeriod && <span className="text-cyan-500 dark:text-cyan-400">.</span>}
            </span>
          </h1>

          <h2 className="mt-5 font-display text-2xl font-semibold text-cyan-600 dark:text-cyan-300 sm:text-3xl lg:text-4xl">
            {t('hero.role')}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-8">
            {t('hero.intro')}
          </p>

          <p className="mt-6 flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">
            <i className="fa-solid fa-layer-group text-lg text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
            <span>
              {t('hero.building')}{' '}
              <span className="sr-only">{t('hero.srWords')}</span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-300" aria-hidden="true">
                {prefersReducedMotion ? words[0] : words[wordIndex].slice(0, charIndex)}
              </span>
              {!prefersReducedMotion && <span className="ms-1 inline-block h-4 w-px translate-y-0.5 bg-cyan-500 dark:bg-cyan-300" aria-hidden="true" />}
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-[#041525] shadow-[0_8px_28px_rgba(34,211,238,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_10px_32px_rgba(34,211,238,0.3)] focus-visible:outline-cyan-500"
            >
              {t('hero.work')}
              <i className="directional-arrow fa-solid fa-arrow-right text-xs" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-cyan-500/60 px-5 py-3 text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/10 dark:border-cyan-300/70 dark:text-white dark:hover:bg-cyan-300/10"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              {t('hero.touch')}
            </a>
          </div>
        </div>

        <div className="order-2 min-w-0" data-aos="fade-left">
          <figure className="relative mx-auto flex w-full max-w-[31rem] flex-col items-center gap-5">
            <div className="relative grid w-[min(76vw,25rem)] aspect-square place-items-center sm:w-[min(68vw,27rem)]">
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 dark:border-cyan-300/20" aria-hidden="true" />
              <div className="absolute inset-[0.55rem] rounded-full border border-cyan-500/30 dark:border-cyan-300/35" aria-hidden="true" />
              <div className="absolute inset-[0.85rem] rounded-full bg-cyan-400/10 blur-xl dark:bg-cyan-400/15" aria-hidden="true" />
              <img
                src={hamada}
                width="520"
                height="780"
                fetchPriority="high"
                decoding="async"
                className="relative z-[1] aspect-square w-[calc(100%-2.25rem)] rounded-full border-[5px] border-white object-cover object-top shadow-[0_0_36px_rgba(34,211,238,0.22)] ring-1 ring-cyan-300/70 dark:border-[#0b1f3a] dark:ring-cyan-300/50"
                alt={t('hero.photoAlt')}
              />
              <span className="absolute -start-1 top-[25%] z-10 grid size-14 place-items-center rounded-xl border border-cyan-400/70 bg-[#071a2d]/95 font-mono text-sm font-bold text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.2)] sm:-start-2 sm:size-16 sm:text-base" aria-hidden="true">
                &lt;/&gt;
              </span>
              <span className="absolute right-[8%] top-[10%] size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" aria-hidden="true" />
              <span className="absolute bottom-[10%] left-[12%] size-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            </div>

            <figcaption className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-cyan-500/35 bg-white/75 px-4 py-3 text-center text-xs font-semibold text-slate-800 shadow-sm dark:border-cyan-300/30 dark:bg-[#061525]/85 dark:text-slate-100 sm:px-5 sm:text-sm">
              <i className="fa-solid fa-location-dot shrink-0 text-base text-cyan-600 dark:text-cyan-300" aria-hidden="true" />
              <span>{t('hero.location')}</span>
              <span className="size-2 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
            </figcaption>

            <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3" aria-label={t('footer.role')}>
              {socialLinks.map(({ key, icon, url, external }) => (
                <li key={key}>
                  <a
                    href={url}
                    aria-label={t(`footer.${key}`)}
                    title={t(`footer.${key}`)}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex size-12 items-center justify-center rounded-xl border border-slate-300/80 bg-white/50 text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-700 focus-visible:outline-cyan-500 dark:border-white/15 dark:bg-white/[.03] dark:text-slate-200 dark:hover:border-cyan-300/60 dark:hover:text-cyan-200"
                  >
                    <i className={`${icon} text-lg`} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </figure>
        </div>
      </div>

      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-cyan-500/25 dark:text-cyan-400/35 sm:h-36" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 62C130 145 205 80 344 104s206 72 355 36 219-104 370-78 241 77 371 8v90H0Z" fill="currentColor" fillOpacity=".07" />
        <path d="M0 64c135 80 210 16 350 40s210 71 350 37 220-105 370-78 245 77 370 9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M0 112c116-54 204 46 330 32s190-78 324-43 180 55 297 25 180-73 288-55 147 42 201 15" fill="none" stroke="currentColor" strokeOpacity=".38" strokeWidth="1.5" />
      </svg>
    </section>
  )
}
