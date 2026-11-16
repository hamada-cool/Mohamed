import { useLanguage } from '../i18n/useLanguage.js'

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="bg-[#e8eff8] dark:bg-[#10243d]">
      <div className="page-wrap section-pad grid gap-8 md:grid-cols-[.65fr_1.35fr] md:gap-16">
        <div>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="section-title">{t('about.titleLine1')}<br />{t('about.titleLine2')}</h2>
        </div>
        <div className="max-w-2xl md:pt-10">
          <p className="font-display text-2xl leading-snug font-medium text-ink dark:text-white sm:text-3xl">
            {t('about.lead')}
          </p>
          <p className="body-copy mt-6">
            {t('about.body')}
          </p>
          <a className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-forest hover:text-blue-700 dark:text-lime dark:hover:text-white" href="#contact">
            {t('about.cta')} <i className="directional-arrow fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
