import { useEffect, useState } from 'react'
import hamada from '../assets/images/hamada-optimized.jpg'
import { useLanguage } from '../i18n/useLanguage.js'

export default function Hero() {
  const { t } = useLanguage()
  const words = t('hero.words')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

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
    const pause =
      charIndex === currentWord.length && !isDeleting ? 1500 : delay

    const timeout = setTimeout(() => {
      // Typing
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((current) => current + 1)
        return
      }

      // Start deleting
      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true)
        return
      }

      // Deleting
      if (isDeleting && charIndex > 0) {
        setCharIndex((current) => current - 1)
        return
      }

      // Move to next word
      setIsDeleting(false)
      setWordIndex((current) => (current + 1) % words.length)
    }, pause)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, prefersReducedMotion, words])

  return (
    <section
      id="top"
      className="page-wrap grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:py-24"
    >
      {/* Left Content */}
      <div
        className="order-2 lg:order-1"
        data-aos="fade-right"
      >
        <p className="eyebrow mb-6">
          {t('hero.kicker')}
        </p>

        <h1 className="font-display text-6xl font-semibold leading-[0.94] text-ink dark:text-white sm:text-7xl lg:text-8xl">
          {t('hero.firstName')}
          <br />
          <span className="text-forest dark:text-lime">
            {t('hero.lastName')}
          </span>
        </h1>

        <h2 className="mt-6 font-display text-2xl font-semibold text-forest dark:text-lime sm:text-3xl">
          {t('hero.role')}
        </h2>

        <p className="body-copy mt-5 max-w-xl text-lg">
          {t('hero.intro')}
        </p>

        {/* Typing Animation */}
        <p className="mt-5 text-sm font-medium text-muted dark:text-slate-400">
          {t('hero.building')}{' '}
          <span className="sr-only">{t('hero.srWords')}</span>
          <span className="font-semibold text-forest dark:text-lime" aria-hidden="true">
            {prefersReducedMotion ? words[0] : words[wordIndex].slice(0, charIndex)}
          </span>

          {!prefersReducedMotion && <span
            className="ms-1 inline-block h-4 w-px translate-y-0.5 bg-coral"
            aria-hidden="true"
          />}
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center gap-3 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink dark:bg-lime dark:text-ink dark:hover:bg-white"
          >
            {t('hero.work')}
            <i
              className="directional-arrow fa-solid fa-arrow-right text-xs"
              aria-hidden="true"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center border border-line px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-forest hover:text-forest dark:border-white/25 dark:text-white dark:hover:border-lime dark:hover:text-lime"
          >
            {t('hero.touch')}
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="order-1 lg:order-2"
        data-aos="fade-left"
      >
        <figure className="mx-auto flex w-full max-w-[22rem] flex-col items-center gap-4">
          <img
            src={hamada}
            width="520"
            height="780"
            fetchPriority="high"
            decoding="async"
            className="mx-auto aspect-square w-full rounded-full border-4 border-white object-cover object-top shadow-[0_16px_50px_rgba(18,59,99,0.18)] ring-1 ring-blue-200 dark:border-[#10243d] dark:ring-blue-400/40"
            alt={t('hero.photoAlt')}
          />

          <figcaption className="inline-flex w-fit max-w-full items-center justify-center gap-3 border border-blue-300/40 bg-[#0b1f3a] px-4 py-3 text-center text-xs font-bold text-white shadow-sm sm:px-5">
            <span
              className="size-2 shrink-0 rounded-full bg-cyan-400"
              aria-hidden="true"
            />

            {t('hero.location')}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
