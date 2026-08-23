export default function Contact() {
  return (
    <section id="contact" className="container py-5">

      <h2
        className="text-center fw-bold mb-5"
        data-aos="fade-up"
      >
        Contact Me
      </h2>

      <h3
        className="text-center mb-4 fw-bold"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Feel free to reach out for collaborations or just a friendly hello!
      </h3>

      <div className="row justify-content-center">

        <div
          className="col-lg-7 col-md-9"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="card bg-dark text-white border-0 shadow-lg p-4 service-card">

            <h3 className="text-center mb-4 fw-bold">
              Send Message
            </h3>

            <form id="contactForm">

              {/* NAME */}
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label fw-bol " htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="message">
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* SUBMIT */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>
              </div>

            </form>

            {/* SUCCESS MESSAGE */}
            <div
              id="successMessage"
              className="alert alert-success mt-4 text-center d-none"
            >
              Your message has been sent successfully!
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}