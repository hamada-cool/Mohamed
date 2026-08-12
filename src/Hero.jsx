import hamada from './assets/images/hamada.png'
export default function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">

        <div
          className="col-lg-7 order-2 order-lg-1"
          data-aos="fade-right"
        >
          <h1 className="display-4 fw-bold mb-3">
            Hey There 👋
          </h1>

          <h2 className="typing-text mb-4"></h2>

          <p className="lead mb-4">
            I create modern responsive websites
            using HTML, CSS, JavaScript,
            Bootstrap, and Python.
          </p>

          <div className="d-flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="btn btn-primary px-4 py-2 fw-bold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn btn-outline-light px-4 py-2 fw-bold"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          className="col-lg-5 text-center order-1 order-lg-2"
          data-aos="fade-left"
        >
          <img
            src={hamada}
            className="profile img-fluid"
            alt="Profile"
          />
        </div>

      </div>
    </section>
  );
}