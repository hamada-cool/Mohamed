export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">My Skills</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Technologies I use to build modern and responsive web applications.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-900">
          <i className="fab fa-html5 text-5xl text-blue-500 transition duration-300 group-hover:scale-110" aria-hidden="true"></i>
          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">HTML5</h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Semantic, accessible and SEO-friendly web pages.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-900">
          <i className="fab fa-css3-alt text-5xl text-blue-500 transition duration-300 group-hover:scale-110" aria-hidden="true"></i>
          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">CSS3</h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Responsive layouts, Flexbox, Grid and animations.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-900">
          <i className="fab fa-js-square text-5xl text-blue-500 transition duration-300 group-hover:scale-110" aria-hidden="true"></i>
          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">JavaScript</h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Interactive websites with modern ES6+ features.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-900">
          <i className="fab fa-bootstrap text-5xl text-blue-500 transition duration-300 group-hover:scale-110" aria-hidden="true"></i>
          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">Bootstrap</h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Fast responsive UI using Bootstrap components.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:border-slate-700 dark:bg-slate-900">
          <i className="fab fa-python text-5xl text-blue-500 transition duration-300 group-hover:scale-110" aria-hidden="true"></i>
          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">Python</h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Backend development, automation and scripting.
          </p>
        </div>
      </div>
    </section>
  );
}
