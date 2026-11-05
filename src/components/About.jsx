import NeuralBackground from './NeuralBackground'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Akash Chokhani</h1>
        <h2 className={styles.title}>
          <span className={styles.cursor}>&gt;</span> AI Software Developer & Deep Learning Engineer
        </h2>
        <p className={styles.tagline}>
          I build fast, efficient and reliable AI solutions.<br />
          Available for freelance projects.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/Akash-Chokhani" target="_blank" rel="noreferrer" className={styles.social}>GitHub</a>
          <span className={styles.divider}>/</span>
          <a href="https://linkedin.com/in/akash-chokhani/" target="_blank" rel="noreferrer" className={styles.social}>LinkedIn</a>
          <span className={styles.divider}>/</span>
          <a href="mailto:akashchokhani00@gmail.com" className={styles.social}>Email</a>
        </div>
      </div>
      <div className={styles.grid} aria-hidden="true" />
      <NeuralBackground />
    </section>
  )
}
