import { useEffect, useState } from 'react'
import hamada from '../assets/images/hamada.png'

const words = [
  'Front-End Developer',
  'Python Developer',
  'UI Designer',
  'JavaScript Developer',
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const delay = isDeleting ? 50 : 100
    const pause = charIndex === currentWord.length && !isDeleting ? 1500 : delay

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((current) => current + 1)
        return
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && charIndex > 0) {
        setCharIndex((current) => current - 1)
        return
      }

      setIsDeleting(false)
      setWordIndex((current) => (current + 1) % words.length)
    }, pause)

    return () => {
      clearTimeout(timeout)
    }
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section id="top" className="container py-5">
      <div className="row align-items-center g-5">

        <div
          className="col-lg-7 order-2 order-lg-1"
          data-aos="fade-right"
        >
          <h1 className="display-4 fw-bold mb-3">
            Hey There 👋
          </h1>

          <h2 className="typing-text mb-4">
            {words[wordIndex].slice(0, charIndex)}
          </h2>

          <p className="lead mb-4">
            I create modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, React.js, and Python. I build dynamic and interactive web applications with React.js, focusing on clean design, reusable components, responsive layouts, and seamless user experiences.

          </p>

          <div className="d-flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="btn btn-primary px-4 py-2 fw-bold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn btn-outline-light px-4 py-2 fw-bold"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          className="col-lg-5 text-center order-1 order-lg-2"
          data-aos="fade-left"
        >
          <img
            src={hamada}
            className="profile img-fluid"
            alt="Profile"
          />
        </div>

      </div>
    </section>
  );
}
