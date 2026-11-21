
import { useLanguage } from '../i18n/useLanguage.js'

export default function About() {
  const { t, language } = useLanguage()

  const direction = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e8eff8] dark:bg-[#10243d]"
      dir={direction}
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="page-wrap section-pad relative grid gap-10 md:grid-cols-[.65fr_1.35fr] md:gap-16">

        {/* Section heading */}
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/15 bg-white/60 text-forest shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-lime">
            <i className="fa-solid fa-user-astronaut text-xl" aria-hidden="true" />
          </div>

          <p className="eyebrow">
            {t('about.eyebrow')}
          </p>

          <h2 className="section-title mt-3">
            {t('about.titleLine1')}
            <br />
            <span className="text-blue-700 dark:text-lime">
              {t('about.titleLine2')}
            </span>
          </h2>

          <div className="mt-6 h-1 w-16 rounded-full bg-forest dark:bg-lime" />
        </div>

        {/* About content */}
        <div className="max-w-2xl md:pt-10">

          <div className="relative border-s-2 border-blue-500/30 ps-5 sm:ps-7">
            <p className="font-display text-2xl leading-snug font-medium text-ink dark:text-white sm:text-3xl">
              {t('about.lead')}
            </p>
          </div>

          <p className="body-copy mt-7">
            {t('about.body')}
          </p>

          {/* Contact action */}
          <a
            href="#contact"
            className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-forest px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest dark:bg-lime dark:text-ink dark:hover:bg-white dark:focus-visible:outline-lime"
          >
            {t('about.cta')}

            <i
              className="directional-arrow fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          {/* Decorative bottom detail */}
          <div className="mt-12 flex items-center gap-3 text-xs font-medium tracking-wider text-ink/50 dark:text-white/40">
            <span className="h-px w-10 bg-current" />
            <span>MOHDEV</span>
            <span className="h-px w-10 bg-current" />
          </div>
        </div>

      </div>
    </section>
  )
}
