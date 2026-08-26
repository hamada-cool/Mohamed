export default function Footer() {
  return (
    <footer className="mt-auto bg-dark text-white py-5">
      <div className="container text-center">

        {/* Brand */}
        <h5 className="fw-bold mb-2">Mohdev</h5>

        <p className="text-secondary mb-4">
          Building better experiences, one line of code at a time.
        </p>

        {/* Social Links */}
        <ul className="list-unstyled d-flex justify-content-center gap-4 mb-4">
          <li>
            <a
              href="#"
              className="text-white fs-5"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-white fs-5"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/hamada-cool"
              className="text-white fs-5"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>

          <li>
            <a
              href="mailto:example@gmail.com"
              className="text-white fs-5"
              aria-label="Email"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-ali-ismail-h195/"
              className="text-white fs-5"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>

        {/* Divider */}
        <hr className="border-secondary" />

        {/* Copyright */}
        <p className="text-secondary small mb-0 mt-3">
          &copy; 2026 Your Website. All rights reserved.
        </p>

      </div>
    </footer>
  );
}