import { useLanguage } from '../i18n/useLanguage.js'

export default function Services() {
  const { t } = useLanguage()
  const items = t('services.items')
  return (
    <section id="services" className="page-wrap section-pad">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="body-copy mt-5 max-w-md">
            {t('services.intro')}
          </p>
        </div>

        <ol className="border-t border-line dark:border-white/10">
          <li className="grid gap-3 border-b border-line py-7 dark:border-white/10 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-8">
            <span className="font-display text-sm font-semibold text-blue-700 dark:text-blue-300">01</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">{items[0].title}</h3>
              <p className="body-copy mt-2 max-w-xl">{items[0].text}</p>
            </div>
          </li>
          <li className="grid gap-3 border-b border-line py-7 dark:border-white/10 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-8">
            <span className="font-display text-sm font-semibold text-blue-700 dark:text-blue-300">02</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">{items[1].title}</h3>
              <p className="body-copy mt-2 max-w-xl">{items[1].text}</p>
            </div>
          </li>
          <li className="grid gap-3 border-b border-line py-7 dark:border-white/10 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-8">
            <span className="font-display text-sm font-semibold text-blue-700 dark:text-blue-300">03</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">{items[2].title}</h3>
              <p className="body-copy mt-2 max-w-xl">{items[2].text}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
