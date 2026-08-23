export default function About() {
  return (
    <section id="about" className="container py-5">

      <div className="row align-items-center g-5">

        <div
          className="col-lg-6"
          data-aos="fade-right"
        >
          <h2 className="fw-bold mb-4">
            About Me
          </h2>

          <p>
            I’m Mohamed Ali,
            a Front-End Developer focused on
            building modern responsive websites
            with clean UI and smooth experience.
          </p>

          <div className="mt-4">

            <span className="badge bg-primary me-2 mb-2">
              HTML
            </span>

            <span className="badge bg-success me-2 mb-2">
              CSS
            </span>

            <span className="badge bg-warning text-dark me-2 mb-2">
              JavaScript
            </span>

            <span className="badge bg-danger me-2 mb-2">
              Bootstrap
            </span>

            <span className="badge bg-dark me-2 mb-2">
              Python
            </span>

          </div>
        </div>

        <div
          className="col-lg-6"
          data-aos="fade-left"
        >
          <div className="glass-card p-4">

            <h4 className="fw-bold mb-3">
              Why Choose Me?
            </h4>

            <p>
              I build responsive modern websites
              with animations, clean UI,
              and optimized performance.
            </p>

          </div>
        </div>

      </div>

      <div className="particles">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

    </div>

    </section>
  );
}