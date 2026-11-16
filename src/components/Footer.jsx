
import { contactEmail, getEmailUrl, isMobileDevice } from '../utils/emailContact.js';
import { useLanguage } from '../i18n/useLanguage.js'

// These brand SVG paths are from Font Awesome Free 7.3.1 (CC BY 4.0).
const brandIcons = {
  instagram: {
    viewBox: '0 0 448 512',
    path: 'M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
  },
  facebook: {
    viewBox: '0 0 512 512',
    path: 'M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z',
  },
  github: {
    viewBox: '0 0 512 512',
    path: 'M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z',
  },
  google: {
    viewBox: '0 0 512 512',
    path: 'M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z',
  },
  linkedin: {
    viewBox: '0 0 448 512',
    path: 'M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z',
  },
}

function SocialIcon({ name }) {
  const { viewBox, path } = brandIcons[name]

  return (
    <svg className="size-5" viewBox={viewBox} aria-hidden="true" focusable="false">
      <path fill="currentColor" d={path} />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/hamadacool28';
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/hamadacool28';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/hamada-cool';
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/mohamed-ali-ismail-h195/';
  const mobileDevice = isMobileDevice();
  const emailUrl = getEmailUrl(contactEmail, mobileDevice);

  const socialLinks = [
    { url: instagramUrl, icon: 'instagram', label: t('footer.instagram'), external: true },
    { url: facebookUrl, icon: 'facebook', label: t('footer.facebook'), external: true },
    { url: githubUrl, icon: 'github', label: t('footer.github'), external: true },
    { url: emailUrl, icon: 'google', label: t('footer.email'), external: !mobileDevice },
    { url: linkedinUrl, icon: 'linkedin', label: t('footer.linkedin'), external: true },
  ];

  return (
    <footer className="border-t border-line bg-paper py-10 text-ink dark:border-white/10 dark:bg-night dark:text-white">
      <div className="page-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold">Mohamed Ali</h2>
          <p className="mt-1 text-sm text-muted dark:text-slate-400">{t('footer.role')}</p>
        </div>

        <ul className="flex flex-wrap gap-2 sm:gap-3">
          {socialLinks.map(({ url, icon, label, external }) => (
            <li key={label}>
              <a href={url} aria-label={label} title={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex size-11 items-center justify-center text-muted transition-colors hover:text-forest focus-visible:text-forest dark:text-slate-300 dark:hover:text-lime dark:focus-visible:text-lime">
                <SocialIcon name={icon} />
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
