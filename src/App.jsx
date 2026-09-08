import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-slate-200 text-slate-900 transition-colors dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 dark:text-white">
      <Navbar />

      <main className="relative overflow-hidden">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
