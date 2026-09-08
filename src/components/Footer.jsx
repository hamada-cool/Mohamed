export default function Footer() {
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#contact'
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || '#contact'
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/hamada-cool'
  const linkedinUrl =
    import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/mohamed-ali-ismail-h195/'

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-12 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-2 text-lg font-bold">Mohdev</h2>
        <p className="mb-6 text-slate-500 dark:text-slate-400">
          Building better experiences, one line of code at a time.
        </p>

        <ul className="mb-6 flex justify-center gap-6">
          <li>
            <a href={instagramUrl} className="text-xl text-slate-700 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href={facebookUrl} className="text-xl text-slate-700 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400" aria-label="Facebook">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href={githubUrl} className="text-xl text-slate-700 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xl text-slate-700 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400" aria-label="Email">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href={linkedinUrl} className="text-xl text-slate-700 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <hr className="border-slate-200" />
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          &copy; 2026 Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
