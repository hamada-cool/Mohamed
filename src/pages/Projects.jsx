export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
  <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl" data-aos="fade-up">
    My Projects
  </h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {/* PROJECT 1 */}
    <div data-aos="zoom-in" data-aos-delay="200">
      <div className="flex h-full flex-col rounded-2xl bg-white p-8 text-center text-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:bg-slate-800 dark:text-white">
        <div className="mb-6">
          <i className="fa-solid fa-credit-card text-6xl text-blue-400" aria-hidden="true"></i>
        </div>
        <h3 className="mb-3 text-xl font-bold">
          Portfolio Website
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          A responsive portfolio website for web developers to showcase
          their projects and skills, built with HTML, CSS, and JavaScript.
        </p>

        <div className="mb-6 mt-5">
          <span className="inline-block rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            HTML, CSS, JavaScript, Bootstrap
          </span>
        </div>

        <div className="mt-auto flex flex-wrap justify-center gap-2">
          <a
            href="https://hamada-cool.github.io/Portfolio2/index.html"
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/hamada-cool/Portfolio2"
            className="rounded-lg border border-slate-400 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
  </div>

</section>
    );
}