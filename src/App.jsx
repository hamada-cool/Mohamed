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
    <div className="min-h-screen bg-paper text-ink transition-colors dark:bg-night dark:text-white">
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
