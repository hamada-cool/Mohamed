export default function About() {
  return (
    <section id="about" className="bg-[#e9eee8] dark:bg-[#17241e]">
      <div className="page-wrap section-pad grid gap-8 md:grid-cols-[.65fr_1.35fr] md:gap-16">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">Curious by nature.<br />Practical by design.</h2>
        </div>
        <div className="max-w-2xl md:pt-10">
          <p className="font-display text-2xl leading-snug font-medium text-ink dark:text-white sm:text-3xl">
            I’m Mohamed Ali, a frontend developer who cares about how things work as much as how they look.
          </p>
          <p className="body-copy mt-6">
            I build responsive interfaces with React and JavaScript, and create Python tools that make development work more straightforward. I’m always learning by making things, testing ideas, and refining the details.
          </p>
          <a className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-forest hover:text-coral dark:text-lime dark:hover:text-white" href="#contact">
            Start a conversation <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
