import { useEffect, useState } from 'react'

const navItems = [
  {
    id: 'top',
    label: 'Home',
    icon: 'bi bi-house-door-fill me-1',
  },
  {
    id: 'services',
    label: 'Services',
    icon: 'bi bi-briefcase-fill me-1',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'bi bi-kanban-fill me-1',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: 'bi bi-lightning-charge-fill me-1',
  },
  {
    id: 'about',
    label: 'About',
    icon: 'bi bi-person-fill me-1',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'bi bi-envelope-fill me-1',
  },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const currentSection =
        navItems
          .map(({ id }) => document.getElementById(id))
          .filter(Boolean)
          .findLast((section) => window.scrollY >= section.offsetTop - 200)

      setActiveSection(currentSection?.id || 'top')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark sticky-top ${isScrolled ? 'navbar-scrolled shadow' : ''}`}>
      <div className="container">

        <a className="navbar-brand fw-bold" href="#top">
          MOHAMED
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {navItems.map(({ id, label, icon }) => (
              <li className="nav-item" key={id}>
                <a
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  href={`#${id}`}
                >
                  <i className={icon}></i>
                  {label}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
}
