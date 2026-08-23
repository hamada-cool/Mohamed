export default function Footer() {
  return (
    <footer className="mt-auto bg-dark text-white text-center py-4">

      <div className="container">

        <ul className="list-unstyled d-flex justify-content-center gap-4 mb-3">

          <li>
            <a href="#" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              <i className="bi bi-facebook"></i>
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              <i className="bi bi-github"></i>
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </li>

          <li>
            <a href="#" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>

        </ul>

        <p className="mb-0">
          All rights reserved &copy; 2026
        </p>

      </div>

    </footer>
  );
}