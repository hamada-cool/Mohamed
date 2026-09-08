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
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl" data-aos="fade-up">
        Contact Me
      </h2>

      <h3 className="mb-8 text-center text-xl font-bold text-slate-800 dark:text-slate-100 sm:text-2xl" data-aos="fade-up" data-aos-delay="100">
        Feel free to reach out for collaborations or just a friendly hello!
      </h3>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl" data-aos="fade-up" data-aos-delay="200">
          <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl dark:bg-slate-800 dark:text-white sm:p-8">
            <h3 className="mb-6 text-center text-2xl font-bold">
              Send Message
            </h3>

            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="mb-2 block font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-2 dark:bg-slate-950 dark:text-white ${
                    errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-blue-500'
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
                  <div id="name-error" className="mt-2 text-sm text-red-300" role="alert">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label className="mb-2 block font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-2 dark:bg-slate-950 dark:text-white ${
                    errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-blue-500'
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
                  <div id="email-error" className="mt-2 text-sm text-red-300" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label className="mb-2 block font-bold" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={`w-full resize-y rounded-lg border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-2 dark:bg-slate-950 dark:text-white ${
                    errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-blue-500'
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
                  <div id="message-error" className="mt-2 text-sm text-red-300" role="alert">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="grid">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {status === 'success' && (
              <div className="mt-5 rounded-lg bg-green-600/20 p-4 text-center text-green-200" role="status">
                Your message has been sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="mt-5 rounded-lg bg-red-600/20 p-4 text-center text-red-200" role="alert">
                Failed to send message!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
