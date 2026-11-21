import { useLanguage } from '../i18n/useLanguage.js'

const certificateImage = '/Certificates/certificate.png'

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="bg-[#e8eff8] dark:bg-[#10243d]">
      <div className="page-wrap section-pad">
        <div className="mb-10 grid gap-6 border-b border-line pb-10 dark:border-white/10 md:grid-cols-[1fr_.7fr] md:items-end md:gap-12">
          <div>
            <p className="eyebrow">{t('certifications.eyebrow')}</p>
            <h2 className="section-title">{t('certifications.title')}</h2>
          </div>
          <p className="body-copy max-w-lg md:justify-self-end">
            {t('certifications.intro')}
          </p>
        </div>

        <article className="grid gap-8 border border-line bg-white p-6 shadow-sm dark:border-white/10 dark:bg-dark-panel sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:items-center">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
            <div className="grid size-14 place-items-center bg-blue-50 text-xl text-blue-700 dark:bg-blue-950/50 dark:text-blue-300" aria-hidden="true">
              <svg
                className="size-8"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                focusable="false"
              >
                <circle cx="24" cy="19" r="12" />
                <path d="m18 29-2 13 8-4 8 4-2-13M19.5 19l3 3 6-6" />
              </svg>
            </div>
            <div>
              <p className="eyebrow">{t('certifications.badge')}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink dark:text-white">Google AI Professional Certificate</h3>
              <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-ink dark:text-white">{t('certifications.organization')}</dt>
                  <dd className="mt-1 text-muted dark:text-slate-300">Coursera</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink dark:text-white">{t('certifications.date')}</dt>
                  <dd className="mt-1 text-muted dark:text-slate-300">{t('certifications.completionDate')}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-semibold text-ink dark:text-white">{t('certifications.verification')}</dt>
                  <dd className="mt-1 text-muted dark:text-slate-300">
                    <a href="https://coursera.org/share/76e4ca90a7f72cdcd9b5cf67a2bfcc05" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      {t('certifications.view')}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="aspect-[731/563] overflow-hidden border border-cyan-400/50 dark:border-cyan-300/35">
            <img
              src={certificateImage}
              alt="Google AI Professional Certificate"
              className="block size-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </div>
    </section>
  )
}
