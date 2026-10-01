export default function Services() {
  return (
    <section id="services" className="page-wrap section-pad">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">What I do</p>
          <h2 className="section-title">Thoughtful work, from first sketch to launch.</h2>
          <p className="body-copy mt-5 max-w-md">
            Practical frontend and product support, shaped around the people who use what we build.
          </p>
        </div>

        <ol className="border-t border-line dark:border-white/10">
          <li className="grid gap-3 border-b border-line py-7 dark:border-white/10 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-8">
            <span className="font-display text-sm font-semibold text-coral">01</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Frontend development</h3>
              <p className="body-copy mt-2 max-w-xl">Responsive React interfaces with clear structure, accessible patterns, and maintainable components.</p>
            </div>
          </li>
          <li className="grid gap-3 border-b border-line py-7 dark:border-white/10 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-8">
            <span className="font-display text-sm font-semibold text-coral">02</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Interface design</h3>
              <p className="body-copy mt-2 max-w-xl">Clean visual systems that make content easier to scan and products simpler to use.</p>
            </div>
          </li>
          <li className="grid gap-3 border-b border-line py-7 dark:border-white/10 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-8">
            <span className="font-display text-sm font-semibold text-coral">03</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Performance &amp; polish</h3>
              <p className="body-copy mt-2 max-w-xl">Careful responsive testing, accessibility details, and performance improvements before release.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}