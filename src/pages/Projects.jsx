import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage.js'

const projectImage = '/projects/projectstarter-preview.jpeg'

export default function Projects() {
  const { t } = useLanguage()
  const features = t('projects.features')
  const [hasProjectImage, setHasProjectImage] = useState(false)

  useEffect(() => {
    let isCurrent = true

    fetch(projectImage, { method: 'HEAD' })
      .then((response) => {
        const contentType = response.headers.get('content-type') || ''
        if (isCurrent) setHasProjectImage(response.ok && contentType.startsWith('image/'))
      })
      .catch(() => {
        if (isCurrent) setHasProjectImage(false)
      })

    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <section id="projects" className="page-wrap section-pad">
      <div className="mb-10 grid gap-6 border-b border-line pb-10 dark:border-white/10 md:grid-cols-[1fr_.65fr] md:items-end md:gap-12">
        <div>
          <p className="eyebrow">{t('projects.eyebrow')}</p>
          <h2 className="section-title">{t('projects.title')}</h2>
        </div>
        <p className="body-copy max-w-lg md:justify-self-end">
          {t('projects.intro')}
        </p>
      </div>

      <article className="overflow-hidden border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-950/10 dark:border-white/10 dark:bg-dark-panel dark:hover:shadow-black/30 lg:grid lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)]">
        <div className="flex min-w-0 flex-col items-start p-6 sm:p-9 lg:p-10">
          <p className="eyebrow">{t('projects.category')}</p>
          <h3 className="mt-4 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">ProjectStarter CLI</h3>
          <p className="body-copy mt-5">
            {t('projects.description')}
          </p>
          <dl className="mt-7 grid w-full gap-4 border-y border-line py-5 text-sm dark:border-white/10 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-ink dark:text-white">{t('projects.role')}</dt>
              <dd className="mt-1 text-muted dark:text-slate-300">{t('projects.creator')}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink dark:text-white">{t('projects.built')}</dt>
              <dd className="mt-1 text-muted dark:text-slate-300">Python · CLI · pytest</dd>
            </div>
          </dl>

          <div className="mt-6 w-full">
            <h4 className="font-display text-base font-semibold text-ink dark:text-white">{t('projects.what')}</h4>
            <ul className="mt-3 grid gap-x-5 gap-y-2 text-sm leading-6 text-muted dark:text-slate-300 sm:grid-cols-2">
              {features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>

          <div className="mt-6 w-full border-t border-line pt-5 dark:border-white/10">
            <h4 className="font-display text-base font-semibold text-ink dark:text-white">{t('projects.install')}</h4>
            <pre dir="ltr" className="mt-3 overflow-x-auto bg-[#0b1f3a] p-4 text-left font-mono text-xs leading-6 text-white sm:text-sm"><code>pip install projectstarter-cli{'\n'}projectstarter create fastapi my_api</code></pre>
          </div>

          <div className="mt-auto flex w-full flex-wrap gap-3 pt-7">
            <a className="inline-flex min-h-11 items-center gap-2 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-coral focus-visible:outline-coral" href="https://github.com/hamada-cool/projectstarter" target="_blank" rel="noopener noreferrer">
              {t('projects.github')} <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a className="inline-flex min-h-11 items-center gap-2 border border-line px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-forest hover:text-forest focus-visible:outline-forest dark:border-white/20 dark:text-white dark:hover:border-lime dark:hover:text-lime dark:focus-visible:outline-lime" href="https://pypi.org/project/projectstarter-cli/" target="_blank" rel="noopener noreferrer">
              {t('projects.package')} <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-5 p-6 pt-0 sm:p-9 sm:pt-0 lg:p-8 lg:ps-0">
          <div className="relative aspect-video overflow-hidden border border-cyan-400/35 bg-[#0b1f3a]/60 dark:border-cyan-300/25">
            {hasProjectImage ? (
              <img
                src={projectImage}
                alt={t('projects.previewLabel')}
                className="size-full object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <p className="absolute inset-0 grid place-items-center px-5 text-center text-sm text-blue-200/75">
                {t('projects.imageMissing')}
              </p>
            )}
          </div>

          <div dir="ltr" className="min-w-0 bg-[#0b1f3a] p-5 text-left text-white sm:p-6" aria-label={t('projects.previewLabel')}>
            <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-4">
              <span className="font-display text-sm font-semibold">projectstarter-cli</span>
              <span className="text-xs text-cyan-300">{t('projects.commandExample')}</span>
            </div>
            <pre className="overflow-x-auto py-5 font-mono text-xs leading-7 sm:text-sm"><code><span className="text-cyan-300">$ projectstarter list</span>{'\n'}{t('projects.available')}{'\n'}  python   django   flask   fastapi{'\n\n'}<span className="text-cyan-300">$ projectstarter create fastapi my_api</span>{'\n'}{t('projects.creating')}{'\n'}{t('projects.generating')}</code></pre>
            <p className="border-t border-white/20 pt-4 text-xs text-white/70">{t('projects.workflow')}</p>
          </div>
        </div>
      </article>
    </section>
  )
}
