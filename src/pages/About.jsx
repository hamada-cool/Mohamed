export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
        <div data-aos="fade-right">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="max-w-xl leading-8 text-slate-600 dark:text-slate-300">
            I’m Mohamed Ali,
            a Front-End Developer focused on
            building modern responsive websites
            with clean UI and smooth experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">HTML</span>
            <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">CSS</span>
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-slate-900">JavaScript</span>
            <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">Bootstrap</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-white">Python</span>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Why Choose Me?
            </h3>
            <p className="leading-8 text-slate-600 dark:text-slate-300">
              I build responsive modern websites
              with animations, clean UI,
              and optimized performance.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <span
            key={index}
            className="absolute bottom-0 h-1.5 w-1.5 animate-[particleMove_linear_infinite] rounded-full bg-blue-500/70 shadow-[0_0_15px_#3b82f6]"
            style={{
              left: `${[10, 20, 35, 50, 65, 75, 85, 95][index]}%`,
              animationDuration: `${[8, 12, 7, 10, 6, 11, 9, 13][index]}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
