
import { useLanguage } from '../i18n/useLanguage.js'

const groupIcons = [
  'fa-solid fa-code',
  'fa-solid fa-server',
  'fa-solid fa-screwdriver-wrench',
]

export default function Skills() {
  const { t, language } = useLanguage()

  const direction = language === 'ar' ? 'rtl' : 'ltr'

  const skillGroups = [
    { title: t('skills.groups.0'), skills: t('skills.entries.0') },
    { title: t('skills.groups.1'), skills: t('skills.entries.1') },
    { title: t('skills.groups.2'), skills: t('skills.entries.2') },
  ]

  return (
    <section
      id="skills"
      className="bg-forest text-white dark:bg-dark-panel"
      dir={direction}
    >
      <div className="page-wrap section-pad grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">

        {/* Section introduction */}
        <div>
          <p className="eyebrow !text-lime">
            {t('skills.eyebrow')}
          </p>

          <h2 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">
            {t('skills.title')}
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-white/75">
            {t('skills.intro')}
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
            <i className="fa-solid fa-circle-check text-lime" aria-hidden="true" />
            <span>Always learning and improving</span>
          </div>
        </div>

        {/* Skill groups */}
        <dl className="border-t border-white/20">
          {skillGroups.map(({ title, skills }, index) => (
            <div
              key={title}
              className="group grid gap-4 border-b border-white/20 py-7 transition-all duration-300 hover:px-3 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              {/* Group icon and title */}
              <dt>
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-lime transition-all duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-forest">
                    <i
                      className={`${groupIcons[index]} text-lg`}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm font-semibold text-lime">
                    {title}
                  </span>
                </div>
              </dt>

              {/* Skills */}
              <dd className="text-base leading-7 text-white">
                {skills}
              </dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}
