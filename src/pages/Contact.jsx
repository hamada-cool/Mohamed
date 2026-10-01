import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lbWq7x4QHZTUe4LHv',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mohdev',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_59dd8si',
}

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

function validateForm({ name, email, message }) {
  const errors = {}

  if (!name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

export default function Contact() {
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

    setStatus('sending')

    try {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, formData, {
        publicKey: emailConfig.publicKey,
      })

      setFormData(initialFormData)
      setStatus('success')

      window.clearTimeout(statusTimeoutRef.current)
      statusTimeoutRef.current = window.setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="page-wrap section-pad">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2 className="section-title">Let’s make it useful.</h2>
          <p className="body-copy mt-5 max-w-md">
            Reach out about a collaboration, a project, or just to say hello.
          </p>
        </div>

        <div className="border-t border-line pt-6 dark:border-white/10 sm:pt-8">
          <h3 className="mb-6 font-display text-xl font-semibold text-ink dark:text-white">Send a message</h3>

            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`w-full border bg-white px-4 py-3 text-ink outline-none transition dark:bg-dark-panel dark:text-white ${
                    errors.name ? 'border-red-500' : 'border-line focus:border-forest dark:border-white/20 dark:focus:border-lime'
                  }`}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <div id="name-error" className="mt-2 text-sm text-red-700 dark:text-red-300" role="alert">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`w-full border bg-white px-4 py-3 text-ink outline-none transition dark:bg-dark-panel dark:text-white ${
                    errors.email ? 'border-red-500' : 'border-line focus:border-forest dark:border-white/20 dark:focus:border-lime'
                  }`}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <div id="email-error" className="mt-2 text-sm text-red-700 dark:text-red-300" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={`w-full resize-y border bg-white px-4 py-3 text-ink outline-none transition dark:bg-dark-panel dark:text-white ${
                    errors.message ? 'border-red-500' : 'border-line focus:border-forest dark:border-white/20 dark:focus:border-lime'
                  }`}
                  placeholder="Enter your message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <div id="message-error" className="mt-2 text-sm text-red-700 dark:text-red-300" role="alert">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="grid">
                <button
                  type="submit"
                  className="min-h-12 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60 dark:bg-lime dark:text-ink dark:hover:bg-white"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {status === 'success' && (
              <div className="mt-5 border border-green-700/30 bg-green-700/10 p-4 text-sm text-green-900 dark:text-green-200" role="status">
                Your message has been sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="mt-5 border border-red-700/30 bg-red-700/10 p-4 text-sm text-red-800 dark:text-red-200" role="alert">
                Failed to send message!
              </div>
            )}
        </div>
      </div>
    </section>
  )
}
