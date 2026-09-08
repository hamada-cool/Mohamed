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
    <section id="top" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="order-2 lg:order-1" data-aos="fade-right">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hey There 👋
          </h1>

          <h2 className="mb-4 min-h-10 text-xl font-bold text-blue-600 dark:text-blue-400 sm:text-2xl">
            {words[wordIndex].slice(0, charIndex)}
          </h2>

          <p className="mb-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I create modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, React.js, and Python. I build dynamic and interactive web applications with React.js, focusing on clean design, reusable components, responsive layouts, and seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-400 px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:hover:bg-white dark:hover:text-slate-900"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2" data-aos="fade-left">
          <img
            src={hamada}
            className="h-48 w-48 rounded-full border-4 border-slate-900 object-cover shadow-2xl shadow-blue-500/20 transition duration-300 hover:scale-105 hover:shadow-blue-500/50 dark:border-slate-700 sm:h-64 sm:w-64"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
}
