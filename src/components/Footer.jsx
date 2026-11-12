
export default function Footer() {
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#contact';
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/hamadacool28';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/hamada-cool';
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/mohamed-ali-ismail-h195/';
  const emailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=mohamedali32947@gmail.com';

  const socialLinks = [
    { url: instagramUrl, icon: 'fa-brands fa-instagram', label: 'Instagram' },
    { url: facebookUrl, icon: 'fa-brands fa-facebook', label: 'Facebook', external: true },
    { url: githubUrl, icon: 'fa-brands fa-github', label: 'GitHub', external: true },
    { url: emailUrl, icon: 'fa-brands fa-google', label: 'Gmail', external: true },
    { url: linkedinUrl, icon: 'fa-brands fa-linkedin', label: 'LinkedIn', external: true },
  ];

  return (
    <footer className="border-t border-line bg-paper py-10 text-ink dark:border-white/10 dark:bg-night dark:text-white">
      <div className="page-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold">Mohamed Ali</h2>
          <p className="mt-1 text-sm text-muted dark:text-slate-400">Frontend &amp; Python developer</p>
        </div>

        <ul className="flex flex-wrap gap-5">
          {socialLinks.map(({ url, icon, label, external }) => (
            <li key={label}>
              <a href={url} aria-label={label} title={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm font-semibold text-muted transition-colors hover:text-forest dark:text-slate-300 dark:hover:text-lime">
                <i className={icon} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted dark:text-slate-400">
          &copy; {new Date().getFullYear()} Mohamed Ali
        </p>
      </div>
    </footer>
  );
}
