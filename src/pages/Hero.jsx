import { useEffect, useState } from 'react'
import hamada from '../assets/images/hamada.png'

const words = [
  'React interfaces',
  'Python tools',
  'accessible experiences',
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const delay = isDeleting ? 50 : 100
    const pause =
      charIndex === currentWord.length && !isDeleting ? 1500 : delay

    const timeout = setTimeout(() => {
      // Typing
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((current) => current + 1)
        return
      }

      // Start deleting
      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true)
        return
      }

      // Deleting
      if (isDeleting && charIndex > 0) {
        setCharIndex((current) => current - 1)
        return
      }

      // Move to next word
      setIsDeleting(false)
      setWordIndex((current) => (current + 1) % words.length)
    }, pause)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section
      id="top"
      className="page-wrap grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:py-24"
    >
      {/* Left Content */}
      <div
        className="order-2 lg:order-1"
        data-aos="fade-right"
      >
        <p className="eyebrow mb-6">
          Frontend + Python / Portfolio 2026
        </p>

        <h1 className="font-display text-6xl font-semibold leading-[0.94] text-ink dark:text-white sm:text-7xl lg:text-8xl">
          Mohamed
          <br />
          <span className="text-forest dark:text-lime">
            Ali.
          </span>
        </h1>

        <h2 className="mt-6 font-display text-2xl font-semibold text-forest dark:text-lime sm:text-3xl">
          Frontend developer
        </h2>

        <p className="body-copy mt-5 max-w-xl text-lg">
          I build clear, responsive web experiences and practical
          Python tools.
        </p>

        {/* Typing Animation */}
        <p className="mt-5 text-sm font-medium text-muted dark:text-slate-400">
          Currently building{' '}
          <span className="sr-only">React interfaces, Python tools, and accessible experiences.</span>
          <span className="font-semibold text-forest dark:text-lime" aria-hidden="true">
            {words[wordIndex].slice(0, charIndex)}
          </span>

          <span
            className="ml-1 inline-block h-4 w-px translate-y-0.5 bg-coral"
            aria-hidden="true"
          />
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center gap-3 bg-forest px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink dark:bg-lime dark:text-ink dark:hover:bg-white"
          >
            View selected work
            <i
              className="fa-solid fa-arrow-right text-xs"
              aria-hidden="true"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center border border-line px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-forest hover:text-forest dark:border-white/25 dark:text-white dark:hover:border-lime dark:hover:text-lime"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="order-1 lg:order-2"
        data-aos="fade-left"
      >
        <figure className="relative mx-auto max-w-md">
          <img
            src={hamada}
            className="aspect-[4/5] w-full border border-line object-cover object-center dark:border-white/10"
            alt="Mohamed Ali"
          />

          <figcaption className="absolute bottom-0 left-0 flex items-center gap-3 bg-lime px-4 py-3 text-xs font-bold text-ink sm:px-5">
            <span
              className="size-2 rounded-full bg-forest"
              aria-hidden="true"
            />

            Based in Sudan · Working worldwide
          </figcaption>
        </figure>
      </div>
    </section>
  )
}