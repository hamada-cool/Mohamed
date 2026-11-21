
import { useLanguage } from '../i18n/useLanguage.js'

export default function Services() {
  const { t, language } = useLanguage()

  const items = t('services.items')
  const services = Array.isArray(items) ? items : []
  const direction = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <section
      id="services"
      className="page-wrap section-pad"
      dir={direction}
    >
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">

        {/* Section introduction */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">
            {t('services.eyebrow')}
          </p>

          <h2 className="section-title">
            {t('services.title')}
          </h2>

          <p className="body-copy mt-5 max-w-md">
            {t('services.intro')}
          </p>
        </div>

        {/* Services list */}
        <ol className="border-t border-line dark:border-white/10">
          {services.map((item, index) => (
            <li
              key={item.title || index}
              className="group grid gap-3 border-b border-line py-7 transition-all duration-300 hover:px-3 dark:border-white/10 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-8"
            >
              {/* Number */}
              <span className="font-display text-sm font-semibold text-blue-700 transition-colors duration-300 group-hover:text-forest dark:text-blue-300 dark:group-hover:text-lime">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-forest dark:text-white dark:group-hover:text-lime">
                  {item.title}
                </h3>

                <p className="body-copy mt-2 max-w-xl">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
