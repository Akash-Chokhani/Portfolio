import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
