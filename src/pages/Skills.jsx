export default function Skills() {
  const skillGroups = [
    { title: 'Frontend', skills: 'HTML · CSS · JavaScript · React' },
    { title: 'UI toolkit', skills: 'Tailwind CSS · Bootstrap · Responsive design' },
    { title: 'Python', skills: 'CLI tools · Django · Flask · FastAPI' },
  ]

  return (
    <section id="skills" className="bg-forest text-white dark:bg-dark-panel">
      <div className="page-wrap section-pad grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow !text-lime">Tools &amp; technologies</p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">What I work with.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/75">
            A practical toolkit for building interfaces and shipping useful software.
          </p>
        </div>

        <dl className="border-t border-white/20">
          {skillGroups.map(({ title, skills }) => (
            <div key={title} className="grid gap-2 border-b border-white/20 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-lime">{title}</dt>
              <dd className="text-base leading-7 text-white">{skills}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
