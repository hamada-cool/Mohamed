import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-dark text-white py-5">
      <div className="container text-center">

        <h5 className="fw-bold mb-2">Your Website</h5>

        <p className="text-secondary mb-4">
          Building better experiences, one line of code at a time.
        </p>

        <ul className="list-unstyled d-flex justify-content-center gap-4 mb-4">
          <li>
            <Link to="/instagram" className="text-white fs-5" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </Link>
          </li>

          <li>
            <Link to="/facebook" className="text-white fs-5" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </Link>
          </li>

          <li>
            <Link to="https://github.com/hamada-cool" className="text-white fs-5" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </Link>
          </li>

          <li>
            <Link to="/contact" className="text-white fs-5" aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </Link>
          </li>

          <li>
            <Link to="https://www.linkedin.com/in/mohamed-ali-ismail-h195/" className="text-white fs-5" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </Link>
          </li>
        </ul>

        <hr className="border-secondary" />

        <p className="text-secondary small mb-0 mt-3">
          &copy; 2026 Your Website. All rights reserved.
        </p>

      </div>
    </footer>
  );
}