export default function Footer() {
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#contact'
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || '#contact'
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/hamada-cool'
  const linkedinUrl =
    import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/mohamed-ali-ismail-h195/'

  return (
    <footer className="mt-auto bg-dark text-white py-5">
      <div className="container text-center">

        <h5 className="fw-bold mb-2">Mohdev</h5>

        <p className="text-secondary mb-4">
          Building better experiences, one line of code at a time.
        </p>

        <ul className="list-unstyled d-flex justify-content-center gap-4 mb-4">
          <li>
            <a href={instagramUrl} className="text-white fs-5" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </li>

          <li>
            <a href={facebookUrl} className="text-white fs-5" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
          </li>

          <li>
            <a href={githubUrl} className="text-white fs-5" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </li>

          <li>
            <a href="#contact" className="text-white fs-5" aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </li>

          <li>
            <a href={linkedinUrl} className="text-white fs-5" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
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
