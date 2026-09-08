export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl" data-aos="fade-up">
        Services
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div data-aos="fade-up">
          <div className="h-full rounded-2xl bg-white p-8 text-center text-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:bg-slate-800 dark:text-white">
            <div className="mb-5">
              <i className="fa-solid fa-code text-4xl text-blue-400" aria-hidden="true"></i>
            </div>
            <h3 className="font-bold text-xl">
              Web Development
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Building modern responsive websites
              using HTML, CSS, Bootstrap,
              and JavaScript.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <div className="h-full rounded-2xl bg-white p-8 text-center text-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:bg-slate-800 dark:text-white">
            <div className="mb-5">
              <i className="fa-solid fa-table-columns text-4xl text-blue-400" aria-hidden="true"></i>
            </div>
            <h3 className="font-bold text-xl">
              UI Design
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Creating modern clean interfaces
              with smooth user experience.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <div className="h-full rounded-2xl bg-white p-8 text-center text-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 dark:bg-slate-800 dark:text-white">
            <div className="mb-5">
              <i className="fa-solid fa-gauge-high text-4xl text-blue-400" aria-hidden="true"></i>
            </div>
            <h3 className="font-bold text-xl">
              Optimization
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Improving performance,
              responsiveness,
              and loading speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}