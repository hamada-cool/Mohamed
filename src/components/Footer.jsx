export default function Footer() {
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#contact'
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || '#contact'
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/hamada-cool'
  const linkedinUrl =
    import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/mohamed-ali-ismail-h195/'

  return (
    <footer className="border-t border-line bg-paper py-10 text-ink dark:border-white/10 dark:bg-night dark:text-white">
      <div className="page-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold">Mohamed Ali</h2>
          <p className="mt-1 text-sm text-muted dark:text-slate-400">Frontend &amp; Python developer</p>
        </div>

        <ul className="flex flex-wrap gap-5">
          <li>
            <a href={instagramUrl} className="text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href={facebookUrl} className="text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime" aria-label="Facebook">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href={githubUrl} className="text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime" aria-label="Email">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href={linkedinUrl} className="text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <p className="text-sm text-muted dark:text-slate-400">
          &copy; {new Date().getFullYear()} Mohamed Ali
        </p>
      </div>
    </footer>
  );
}
