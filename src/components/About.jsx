import NeuralBackground from './NeuralBackground'
import { profile } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <h2 className={styles.title}>
          <span className={styles.cursor}>&gt;</span> {profile.title}
        </h2>
        <p className={styles.tagline}>
          {profile.tagline.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
        </div>
        <div className={styles.socials}>
          <a href={profile.github} target="_blank" rel="noreferrer" className={styles.social}>GitHub</a>
          <span className={styles.divider}>/</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.social}>LinkedIn</a>
          <span className={styles.divider}>/</span>
          <a href={`mailto:${profile.email}`} className={styles.social}>Email</a>
        </div>
      </div>
      <div className={styles.grid} aria-hidden="true" />
      <NeuralBackground />
    </section>
  )
}
