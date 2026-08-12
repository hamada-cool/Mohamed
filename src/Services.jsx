export default function Services() {
  return (
    <section id="services" className="container py-5">

      <h2
        className="text-center fw-bold mb-5"
        data-aos="fade-up"
      >
        Services
      </h2>

      <div className="row g-4">

        <div className="col-md-4" data-aos="fade-up">
          <div className="card service-card bg-dark text-white border-0 shadow-lg h-100 p-4 text-center">

            <div className="mb-3">
              <i className="bi bi-code-slash fs-1 text-primary"></i>
            </div>

            <h4 className="fw-bold">
              Web Development
            </h4>

            <p>
              Building modern responsive websites
              using HTML, CSS, Bootstrap,
              and JavaScript.
            </p>

          </div>
        </div>

        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card service-card bg-dark text-white border-0 shadow-lg h-100 p-4 text-center">

            <div className="mb-3">
              <i className="bi bi-layout-text-window fs-1 text-primary"></i>
            </div>

            <h4 className="fw-bold">
              UI Design
            </h4>

            <p>
              Creating modern clean interfaces
              with smooth user experience.
            </p>

          </div>
        </div>

        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="card service-card bg-dark text-white border-0 shadow-lg h-100 p-4 text-center">

            <div className="mb-3">
              <i className="bi bi-speedometer2 fs-1 text-primary"></i>
            </div>

            <h4 className="fw-bold">
              Optimization
            </h4>

            <p>
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