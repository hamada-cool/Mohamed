export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#top">
          MOHAMED
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#top">
                <i className="bi bi-house-door-fill me-1"></i>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                <i className="bi bi-briefcase-fill me-1"></i>
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <i className="bi bi-kanban-fill me-1"></i>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="bi bi-person-fill me-1"></i>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="bi bi-envelope-fill me-1"></i>
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}