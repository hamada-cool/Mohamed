import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { contactEmail } from '../utils/emailContact.js'
import { useLanguage } from '../i18n/useLanguage.js'

const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lbWq7x4QHZTUe4LHv',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mohdev',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_59dd8si',
}

const initialFormData = {
  name: '',
  email: '',
  message: '',
  website: '',
}

function validateForm({ name, email, message }) {
  const errors = {}

  if (!name.trim()) {
    errors.name = 'contact.errors.name'
  }

  if (!email.trim()) {
    errors.email = 'contact.errors.email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'contact.errors.invalidEmail'
  }

  if (!message.trim()) {
    errors.message = 'contact.errors.message'
  }

  return errors
}

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const statusTimeoutRef = useRef(null)

  const isSending = status === 'sending'

  useEffect(() => {
    return () => {
      window.clearTimeout(statusTimeoutRef.current)
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validateForm(formData)
    setErrors(nextErrors)
    setStatus('idle')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    if (formData.website.trim()) {
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, {
        publicKey: emailConfig.publicKey,
        limitRate: { id: 'portfolio-contact', throttle: 10000 },
      })

      setFormData(initialFormData)
      setStatus('success')

      window.clearTimeout(statusTimeoutRef.current)
      statusTimeoutRef.current = window.setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } catch (error) {
      console.error(error)
      setStatus(error?.status === 429 ? 'rate-limited' : 'error')
    }
  }

  return (
    <section id="contact" className="page-wrap section-pad">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="body-copy mt-5 max-w-md">
            {t('contact.intro')}
          </p>
          <a className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-forest underline decoration-blue-300 underline-offset-4 hover:text-blue-700 focus-visible:outline-forest dark:text-lime dark:hover:text-white dark:focus-visible:outline-lime" href={`mailto:${contactEmail}`}>
            {t('contact.email')} <span className="font-normal" dir="ltr">{contactEmail}</span>
          </a>
        </div>

        <div className="border-t border-line pt-6 dark:border-white/10 sm:pt-8">
          <h3 className="mb-6 font-display text-xl font-semibold text-ink dark:text-white">{t('contact.formTitle')}</h3>

            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                <label htmlFor="website">{t('contact.honeypot')}</label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold" htmlFor="name">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`w-full border bg-white px-4 py-3 text-ink outline-none transition dark:bg-dark-panel dark:text-white ${
                    errors.name ? 'border-red-500' : 'border-line focus:border-forest dark:border-white/20 dark:focus:border-lime'
                  }`}
                  placeholder={t('contact.namePlaceholder')}
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <div id="name-error" className="mt-2 text-sm text-red-700 dark:text-red-300" role="alert">
                    {t(errors.name)}
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold" htmlFor="email">
                  {t('contact.emailField')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`w-full border bg-white px-4 py-3 text-ink outline-none transition dark:bg-dark-panel dark:text-white ${
                    errors.email ? 'border-red-500' : 'border-line focus:border-forest dark:border-white/20 dark:focus:border-lime'
                  }`}
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  autoComplete="email"
                  dir="ltr"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <div id="email-error" className="mt-2 text-sm text-red-700 dark:text-red-300" role="alert">
                    {t(errors.email)}
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold" htmlFor="message">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={`w-full resize-y border bg-white px-4 py-3 text-ink outline-none transition dark:bg-dark-panel dark:text-white ${
                    errors.message ? 'border-red-500' : 'border-line focus:border-forest dark:border-white/20 dark:focus:border-lime'
                  }`}
                  placeholder={t('contact.messagePlaceholder')}
                  rows="5"
                  dir="auto"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <div id="message-error" className="mt-2 text-sm text-red-700 dark:text-red-300" role="alert">
                    {t(errors.message)}
                  </div>
                )}
              </div>

              <div className="grid">
                <button
                  type="submit"
                  className="min-h-12 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60 dark:bg-lime dark:text-ink dark:hover:bg-white"
                  disabled={isSending}
                >
                  {isSending ? t('contact.sending') : t('contact.send')}
                </button>
              </div>
            </form>

            {status === 'success' && (
              <div className="mt-5 border border-green-700/30 bg-green-700/10 p-4 text-sm text-green-900 dark:text-green-200" role="status">
                {t('contact.success')}
              </div>
            )}

            {status === 'error' && (
              <div className="mt-5 border border-red-700/30 bg-red-700/10 p-4 text-sm text-red-800 dark:text-red-200" role="alert">
                {t('contact.failure')}
              </div>
            )}

            {status === 'rate-limited' && (
              <div className="mt-5 border border-blue-700/30 bg-blue-700/10 p-4 text-sm text-blue-900 dark:text-blue-200" role="status">
                {t('contact.rateLimit')}
              </div>
            )}
        </div>
      </div>
    </section>
  )
}
