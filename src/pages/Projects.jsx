export default function Projects() {
  return (
    <section id="projects" className="page-wrap section-pad">
      <div className="mb-14 grid gap-6 border-b border-line pb-10 dark:border-white/10 md:grid-cols-[1fr_.65fr] md:items-end md:gap-12">
        <div>
          <p className="eyebrow">Selected work / 01—02</p>
          <h2 className="section-title">Built to be useful.</h2>
        </div>
        <p className="body-copy max-w-lg md:justify-self-end">
          A small selection of web work and developer tooling. Each project starts with a clear problem and a practical result.
        </p>
      </div>

      <article className="grid gap-8 border-b border-line pb-12 dark:border-white/10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:pb-16">
        <div className="flex flex-col items-start">
          <p className="eyebrow">01 / Developer tool</p>
          <h3 className="mt-4 font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">ProjectStarter CLI</h3>
          <p className="body-copy mt-5">
            An open-source Python command-line tool that scaffolds Python, Django, Flask, and FastAPI projects, with setup steps handled for you.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-muted dark:text-slate-400" aria-label="Technologies">
            <li>Python</li><li>CLI</li><li>pytest</li>
          </ul>
          <div className="mt-auto flex flex-wrap gap-5 pt-8">
            <a className="inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-bold text-forest hover:text-coral dark:border-lime dark:text-lime dark:hover:text-white" href="https://github.com/hamada-cool/projectstarter" target="_blank" rel="noopener noreferrer">
              Repository <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="flex min-h-72 flex-col justify-between bg-forest p-6 text-white sm:min-h-80 sm:p-9" aria-label="ProjectStarter command-line preview">
          <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-4">
            <span className="font-display text-sm font-semibold">projectstarter-cli</span>
            <span className="text-xs text-lime">TERMINAL PREVIEW</span>
          </div>
          <pre className="overflow-x-auto py-6 font-mono text-sm leading-7"><code><span className="text-lime">$ projectstarter list</span>{'\n'}Available project types:{'\n'}  python   django   flask   fastapi{'\n\n'}<span className="text-lime">$ projectstarter create fastapi my_api</span>{'\n'}Creating FastAPI project: my_api{'\n'}Generating app, requirements &amp; README...</code></pre>
          <p className="border-t border-white/20 pt-4 text-xs text-white/70">Real commands · Python project scaffolding</p>
        </div>
      </article>

      <article className="grid gap-8 py-10 lg:grid-cols-[1.25fr_.75fr] lg:items-center lg:gap-14 lg:py-12">
        <a
          className="group block overflow-hidden border border-line bg-white focus-visible:outline-forest dark:border-white/10 dark:bg-dark-panel dark:focus-visible:outline-lime"
          href="https://hamada-cool.github.io/Portfolio2/index.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Portfolio2 live demo"
        >
          <img
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            src="/portfolio2-preview.png"
            alt="Desktop screenshot of the Portfolio2 starter template, with a hero section and single-page portfolio navigation"
            loading="lazy"
          />
        </a>

        <div className="flex h-full flex-col items-start">
          <p className="eyebrow">02 / Web project</p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">Portfolio2 Starter Template</h3>
          <p className="body-copy mt-4">
            A Bootstrap portfolio starter with responsive navigation, service and project sections, and a contact form. The live demo retains its original placeholder content.
          </p>
          <p className="mt-4 text-xs font-semibold text-muted dark:text-slate-400">HTML · CSS · JavaScript · Bootstrap</p>
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-7">
            <a className="inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-bold text-forest hover:text-coral focus-visible:outline-forest dark:border-lime dark:text-lime dark:hover:text-white dark:focus-visible:outline-lime" href="https://hamada-cool.github.io/Portfolio2/index.html" target="_blank" rel="noopener noreferrer">
              Live demo <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
            </a>
            <a className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-bold text-ink hover:text-coral focus-visible:outline-forest dark:border-white/25 dark:text-white dark:hover:text-lime dark:focus-visible:outline-lime" href="https://github.com/hamada-cool/Portfolio2" target="_blank" rel="noopener noreferrer">
              Source on GitHub <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
