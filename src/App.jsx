import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

import './App.css'

function App() {

  useEffect(() => {

    console.log(
      '%c Main.js loaded successfully',
      'color: lime; font-size:16px; font-weight:bold;'
    )

    // =========================================
    // TYPING EFFECT
    // =========================================

    const typingText = document.querySelector('.typing-text')

    let typingTimeout

    if (typingText) {

      const words = [
        'Front-End Developer',
        'Python Developer',
        'UI Designer',
        'JavaScript Developer'
      ]

      let wordIndex = 0
      let charIndex = 0

      function typeEffect() {

        if (charIndex < words[wordIndex].length) {

          typingText.textContent +=
            words[wordIndex].charAt(charIndex)

          charIndex++

          typingTimeout = setTimeout(typeEffect, 100)

        } else {

          typingTimeout = setTimeout(eraseEffect, 1500)

        }
      }

      function eraseEffect() {

        if (charIndex > 0) {

          typingText.textContent =
            words[wordIndex].substring(0, charIndex - 1)

          charIndex--

          typingTimeout = setTimeout(eraseEffect, 50)

        } else {

          wordIndex++

          if (wordIndex >= words.length) {
            wordIndex = 0
          }

          typingTimeout = setTimeout(typeEffect, 500)
        }
      }

      typeEffect()
    }


    // =========================================
    // SMOOTH SCROLL
    // =========================================

    const anchors = document.querySelectorAll('a[href^="#"]')

    const handleAnchorClick = (e) => {

      const href = e.currentTarget.getAttribute('href')

      if (!href || href === '#') return

      const target = document.querySelector(href)

      if (target) {

        e.preventDefault()

        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })


    // =========================================
    // ACTIVE NAVBAR
    // =========================================

    const sections =
      document.querySelectorAll('section[id]')

    const navLinks =
      document.querySelectorAll('.nav-link')

    const handleScroll = () => {

      let current = ''

      sections.forEach(section => {

        const sectionTop =
          section.offsetTop - 200

        const sectionHeight =
          section.clientHeight

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {

          current =
            section.getAttribute('id')
        }
      })

      navLinks.forEach(link => {

        link.classList.remove('active')

        const href =
          link.getAttribute('href')

        if (
          href &&
          current &&
          href.includes(current)
        ) {

          link.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)


    // =========================================
    // COUNTER ANIMATION
    // =========================================

    const counters =
      document.querySelectorAll('.counter')

    const counterTimeouts = []

    counters.forEach(counter => {

      counter.innerText = '0'

      let current = 0

      const updateCounter = () => {

        const target =
          +counter.getAttribute('data-target')

        const increment =
          Math.ceil(target / 100)

        if (current < target) {

          current += increment

          if (current > target) {
            current = target
          }

          counter.innerText = current

          const timeout =
            setTimeout(updateCounter, 20)

          counterTimeouts.push(timeout)
        }
      }

      updateCounter()
    })


    // =========================================
    // TOP BUTTON
    // =========================================

    const topBtn =
      document.getElementById('topBtn')

    const handleTopButton = () => {

      if (!topBtn) return

      if (window.scrollY > 300) {

        topBtn.style.opacity = '1'
        topBtn.style.visibility = 'visible'

      } else {

        topBtn.style.opacity = '0'
        topBtn.style.visibility = 'hidden'
      }
    }

    if (topBtn) {

      window.addEventListener(
        'scroll',
        handleTopButton
      )

      topBtn.addEventListener(
        'click',
        () => {

          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
      )
    }


    // =========================================
    // NAVBAR EFFECT
    // =========================================

    const navbar =
      document.querySelector('.navbar')

    const handleNavbar = () => {

      if (!navbar) return

      if (window.scrollY > 50) {

        navbar.style.background =
          'rgba(0,0,0,0.85)'

        navbar.style.backdropFilter =
          'blur(10px)'

        navbar.classList.add('shadow')

      } else {

        navbar.style.background =
          '#212529'

        navbar.style.backdropFilter =
          'none'

        navbar.classList.remove('shadow')
      }
    }

    if (navbar) {

      window.addEventListener(
        'scroll',
        handleNavbar
      )
    }


    // =========================================
    // PROJECT ICON ANIMATION
    // =========================================

    const projectIcons =
      document.querySelectorAll('#projects i')

    const iconHandlers = []

    projectIcons.forEach(icon => {

      const mouseEnter = () => {

        icon.style.transform =
          'scale(1.2) rotate(10deg)'

        icon.style.transition =
          '0.4s'
      }

      const mouseLeave = () => {

        icon.style.transform =
          'scale(1) rotate(0deg)'
      }

      icon.addEventListener(
        'mouseenter',
        mouseEnter
      )

      icon.addEventListener(
        'mouseleave',
        mouseLeave
      )

      iconHandlers.push({
        icon,
        mouseEnter,
        mouseLeave
      })
    })


    // =========================================
    // EMAILJS
    // =========================================

    emailjs.init({
      publicKey: 'lbWq7x4QHZTUe4LHv'
    })

    const form =
      document.getElementById('contactForm')

    const successMessage =
      document.getElementById('successMessage')

    const handleSubmit = (e) => {

      e.preventDefault()

      if (!form) return

      emailjs
        .sendForm(
          'service_mohdev',
          'template_59dd8si',
          form
        )
        .then(() => {

          if (successMessage) {

            successMessage.classList.remove(
              'd-none'
            )
          }

          form.reset()

          setTimeout(() => {

            if (successMessage) {

              successMessage.classList.add(
                'd-none'
              )
            }

          }, 3000)

        })
        .catch(error => {

          alert('Failed to send message!')

          console.error(error)
        })
    }

    if (form) {

      form.addEventListener(
        'submit',
        handleSubmit
      )
    }


    // =========================================
    // CLEANUP
    // =========================================

    return () => {

      clearTimeout(typingTimeout)

      counterTimeouts.forEach(timeout => {
        clearTimeout(timeout)
      })

      anchors.forEach(anchor => {

        anchor.removeEventListener(
          'click',
          handleAnchorClick
        )
      })

      window.removeEventListener(
        'scroll',
        handleScroll
      )

      if (topBtn) {

        window.removeEventListener(
          'scroll',
          handleTopButton
        )
      }

      if (navbar) {

        window.removeEventListener(
          'scroll',
          handleNavbar
        )
      }

      iconHandlers.forEach(
        ({ icon, mouseEnter, mouseLeave }) => {

          icon.removeEventListener(
            'mouseenter',
            mouseEnter
          )

          icon.removeEventListener(
            'mouseleave',
            mouseLeave
          )
        }
      )

      if (form) {

        form.removeEventListener(
          'submit',
          handleSubmit
        )
      }
    }

  }, [])


  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <Skills />

      <About />

      <Contact />

      <Footer />
    </>
  )
}

export default App