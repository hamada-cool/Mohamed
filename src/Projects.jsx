export default function Projects() {
    return (
        <section id="projects" className="container py-5">

  <h2
    className="text-center fw-bold mb-5"
    data-aos="fade-up"
  >
    My Projects
  </h2>

  <div className="row g-4">

    {/* PROJECT 1 */}
    <div
      className="col-md-6 col-lg-4"
      data-aos="zoom-in"
      data-aos-delay="200"
    >

      <div className="card bg-dark text-white border-0 shadow-lg service-card h-100 p-4 text-center">

        <div className="mb-4">
          <i className="bi bi-credit-card-2-front-fill display-1 text-primary"></i>
        </div>

        <h4 className="fw-bold mb-3">
          Portfolio Website
        </h4>

        <p>
          A responsive portfolio website for web developers to showcase
          their projects and skills, built with HTML, CSS, and JavaScript.
        </p>

        <div className="mb-4">
          <span className="badge bg-dark">
            HTML, CSS, JavaScript, Bootstrap
          </span>
        </div>

        <div className="d-flex justify-content-center gap-2">

          <a
            href="https://hamada-cool.github.io/Portfolio2/index.html"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/hamada-cool/Portfolio2"
            className="btn btn-outline-light"
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