
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

const fields = [
  { name: 'name', icon: 'fa-user', type: 'text' },
  { name: 'email', icon: 'fa-envelope', type: 'email' },
]

function validateForm({ name, email, message }) {
  const errors = {}

  if (!name.trim()) errors.name = 'contact.errors.name'

  if (!email.trim()) {
    errors.email = 'contact.errors.email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
    errors.email = 'contact.errors.invalidEmail'
  }

  if (!message.trim()) errors.message = 'contact.errors.message'

  return errors
}

export default function Contact() {
  const { language, t } = useLanguage()

  const direction = language === 'ar' ? 'rtl' : 'ltr'
  const alignment = language === 'ar' ? 'right' : 'left'

  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const statusTimeoutRef = useRef(null)
  const isSending = status === 'sending'

  useEffect(() => {
    return () => window.clearTimeout(statusTimeoutRef.current)
  }, [])

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }))

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSending) return

    const nextErrors = validateForm(formData)
    setErrors(nextErrors)
    setStatus('idle')

    if (Object.keys(nextErrors).length) return
    if (formData.website.trim()) return

    setStatus('sending')

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        {
          publicKey: emailConfig.publicKey,
          limitRate: { id: 'portfolio-contact', throttle: 10000 },
        }
      )

      setFormData(initialFormData)
      setStatus('success')

      window.clearTimeout(statusTimeoutRef.current)
      statusTimeoutRef.current = window.setTimeout(
        () => setStatus('idle'),
        4000
      )
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus(error?.status === 429 ? 'rate-limited' : 'error')
    }
  }

  const inputClass = (field) =>
    `w-full border bg-white px-4 py-3 text-ink outline-none transition-all duration-200 focus:border-forest focus:ring-2 focus:ring-forest/10 dark:bg-dark-panel dark:text-white dark:focus:border-lime ${
      errors[field]
        ? 'border-red-500'
        : 'border-line dark:border-white/20'
    }`

  const renderError = (field) =>
    errors[field] && (
      <p
        id={`${field}-error`}
        className="mt-2 text-sm text-red-600 dark:text-red-300"
        role="alert"
      >
        {t(errors[field])}
      </p>
    )

  return (
    <section
      id="contact"
      className="page-wrap section-pad"
      dir={direction}
    >
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">

        {/* Contact information */}
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest dark:bg-lime/10 dark:text-lime">
            <i className="fa-solid fa-paper-plane text-xl" aria-hidden="true" />
          </div>

          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>

          <p className="body-copy mt-5 max-w-md">
            {t('contact.intro')}
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-7 inline-flex items-center gap-3 rounded-lg border border-line bg-white/60 p-4 text-sm font-semibold text-forest transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-lime"
          >
            <i className="fa-solid fa-envelope text-lg" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-xs font-normal text-muted">
                {t('contact.email')}
              </span>
              <span dir="ltr" className="break-all">
                {contactEmail}
              </span>
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
          </a>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted">
            <i className="fa-solid fa-shield-halved text-forest dark:text-lime" aria-hidden="true" />
            <span>{t('contact.honeypot')}</span>
          </div>
        </div>

        {/* Contact form */}
        <div className="border-t border-line pt-6 dark:border-white/10 sm:pt-8">
          <h3 className="mb-7 flex items-center gap-3 font-display text-xl font-semibold text-ink dark:text-white">
            <i className="fa-regular fa-paper-plane text-forest dark:text-lime" aria-hidden="true" />
            {t('contact.formTitle')}
          </h3>

          <form
            id="contactForm"
            onSubmit={handleSubmit}
            noValidate
            aria-busy={isSending}
          >
            {/* Honeypot */}
            <div
              aria-hidden="true"
              className="absolute -left-[10000px] h-px w-px overflow-hidden"
            >
              <label htmlFor="website">{t('contact.honeypot')}</label>
              <input
                id="website"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            {/* Name and email */}
            {fields.map(({ name, icon, type }) => (
              <div key={name} className="mb-5">
                <label
                  htmlFor={name}
                  className="mb-2 block text-sm font-semibold text-ink dark:text-white"
                >
                  {t(`contact.${name === 'email' ? 'emailField' : 'name'}`)}
                </label>

                <div className="relative">
                  <i
                    className={`fa-solid ${icon} pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted ${
                      direction === 'rtl' ? 'right-4' : 'left-4'
                    }`}
                    aria-hidden="true"
                  />

                  <input
                    id={name}
                    name={name}
                    type={type}
                    required
                    autoComplete={name}
                    maxLength={name === 'name' ? 100 : 254}
                    placeholder={t(`contact.${name === 'email' ? 'emailPlaceholder' : 'namePlaceholder'}`)}
                    className={`${inputClass(name)} ${
                      direction === 'rtl' ? 'pr-11' : 'pl-11'
                    }`}
                    dir={name === 'email' ? 'ltr' : direction}
                    style={{ textAlign: name === 'email' ? alignment : alignment }}
                    value={formData[name]}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors[name])}
                    aria-describedby={errors[name] ? `${name}-error` : undefined}
                  />
                </div>

                {renderError(name)}
              </div>
            ))}

            {/* Message */}
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-ink dark:text-white"
              >
                {t('contact.message')}
              </label>

              <div className="relative">
                <i
                  className={`fa-solid fa-message pointer-events-none absolute top-4 text-muted ${
                    direction === 'rtl' ? 'right-4' : 'left-4'
                  }`}
                  aria-hidden="true"
                />

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={3000}
                  placeholder={t('contact.messagePlaceholder')}
                  className={`${inputClass('message')} resize-y ${
                    direction === 'rtl' ? 'pr-11' : 'pl-11'
                  }`}
                  dir={direction}
                  style={{ textAlign: alignment }}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
              </div>

              {renderError('message')}

              <p className="mt-2 text-end text-xs text-muted">
                {formData.message.length}/3000
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="group flex min-h-12 w-full items-center justify-center gap-3 bg-forest px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-lime dark:text-ink dark:hover:bg-white"
            >
              {isSending ? (
                <i className="fa-solid fa-spinner animate-spin" aria-hidden="true" />
              ) : (
                <i className="fa-solid fa-paper-plane transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              )}

              {isSending ? t('contact.sending') : t('contact.send')}
            </button>
          </form>

          {/* Status messages */}
          <div aria-live="polite" aria-atomic="true">
            {[
              ['success', 'contact.success', 'green', 'fa-circle-check'],
              ['error', 'contact.failure', 'red', 'fa-circle-exclamation'],
              ['rate-limited', 'contact.rateLimit', 'blue', 'fa-clock'],
            ].map(([key, translation, color, icon]) =>
              status === key && (
                <div
                  key={key}
                  role={key === 'error' ? 'alert' : 'status'}
                  className={`mt-5 flex items-center gap-3 border border-${color}-700/30 bg-${color}-700/10 p-4 text-sm text-${color}-900 dark:text-${color}-200`}
                >
                  <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  {t(translation)}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
