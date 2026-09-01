# Mohdev Portfolio

A responsive React and Vite portfolio for Mohamed Ali. The site is organized as a single-page portfolio with sections for the hero introduction, services, projects, skills, about content, contact form, and footer links.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env.local` for local configuration. Vite exposes client-side variables that start with `VITE_`.

```bash
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_INSTAGRAM_URL=
VITE_FACEBOOK_URL=
VITE_GITHUB_URL=
VITE_LINKEDIN_URL=
```

The current EmailJS values are kept as runtime fallbacks so the existing contact form continues to work if no local environment file is present.
