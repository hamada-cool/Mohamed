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
    <section id="contact" className="container py-5">

      <h2
        className="text-center fw-bold mb-5"
        data-aos="fade-up"
      >
        Contact Me
      </h2>

      <h3
        className="text-center mb-4 fw-bold"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Feel free to reach out for collaborations or just a friendly hello!
      </h3>

      <div className="row justify-content-center">

        <div
          className="col-lg-7 col-md-9"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="card bg-dark text-white border-0 shadow-lg p-4 service-card">

            <h3 className="text-center mb-4 fw-bold">
              Send Message
            </h3>

            <form id="contactForm" onSubmit={handleSubmit} noValidate>

              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="message">
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  placeholder="Enter your message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                {errors.message && (
                  <div className="invalid-feedback">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>

            </form>

            {status === 'success' && (
              <div className="alert alert-success mt-4 text-center">
                Your message has been sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="alert alert-danger mt-4 text-center">
                Failed to send message!
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  )
}
