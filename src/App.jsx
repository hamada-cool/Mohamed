import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { useLanguage } from './i18n/useLanguage.js'

function App() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-paper text-ink transition-colors dark:bg-night dark:text-white">
      <a
        href="#main-content"
        className="fixed start-4 top-4 z-[100] -translate-y-24 bg-coral px-4 py-3 text-sm font-bold text-white shadow-lg transition-transform focus:translate-y-0 focus-visible:outline-coral"
      >
        {t('skip')}
      </a>
      <Navbar />

      <main id="main-content" tabIndex="-1" className="relative overflow-x-clip focus-visible:outline-forest focus-visible:outline-offset-4">
        <Hero />
        <Services />
        <Projects />
        <Certifications />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
